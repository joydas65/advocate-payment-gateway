import { NextRequest, NextResponse } from "next/server";

type CreateOrderRequest = {
  clientName?: string;
  mobile?: string;
  email?: string;
  matterReference?: string;
  amount?: number;
  acknowledgementAccepted?: boolean;
};

function sanitizeText(value: string | undefined, maxLength: number) {
  return value?.trim().slice(0, maxLength) || "";
}

function isValidMobile(value: string) {
  return /^[6-9]\d{9}$/.test(value);
}

function isValidEmail(value: string) {
  if (!value) return true;
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

export async function POST(request: NextRequest) {
  try {
    const keyId = process.env.RAZORPAY_KEY_ID;
    const keySecret = process.env.RAZORPAY_KEY_SECRET;

    console.log("Razorpay key loaded:", {
        keyIdPrefix: keyId?.slice(0, 8),
        hasSecret: Boolean(keySecret),
    });

    if (!keyId || !keySecret) {
      return NextResponse.json(
        { error: "Payment gateway is not configured." },
        { status: 500 }
      );
    }

    const body = (await request.json()) as CreateOrderRequest;

    const clientName = sanitizeText(body.clientName, 80);
    const mobile = sanitizeText(body.mobile, 10);
    const email = sanitizeText(body.email, 120);
    const matterReference = sanitizeText(body.matterReference, 120);
    const amount = Number(body.amount);

    if (!clientName || clientName.length < 2) {
      return NextResponse.json(
        { error: "Client name is required." },
        { status: 400 }
      );
    }

    if (!isValidMobile(mobile)) {
      return NextResponse.json(
        { error: "Valid 10 digit mobile number is required." },
        { status: 400 }
      );
    }

    if (!isValidEmail(email)) {
      return NextResponse.json(
        { error: "Valid email address is required." },
        { status: 400 }
      );
    }

    if (!Number.isFinite(amount) || amount <= 0) {
      return NextResponse.json(
        { error: "Valid payment amount is required." },
        { status: 400 }
      );
    }

    if (!body.acknowledgementAccepted) {
      return NextResponse.json(
        { error: "Payment acknowledgement is required." },
        { status: 400 }
      );
    }

    const amountInPaise = Math.round(amount * 100);
    const receipt = `ASP-${Date.now()}`;

    const auth = Buffer.from(`${keyId}:${keySecret}`).toString("base64");

    const razorpayResponse = await fetch("https://api.razorpay.com/v1/orders", {
      method: "POST",
      headers: {
        Authorization: `Basic ${auth}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        amount: amountInPaise,
        currency: "INR",
        receipt,
        notes: {
          clientName,
          mobile,
          email,
          matterReference,
          purpose: "Professional fees",
        },
      }),
      cache: "no-store",
    });

    const razorpayOrder = await razorpayResponse.json();

    if (!razorpayResponse.ok) {
      return NextResponse.json(
        {
          error: "Unable to create payment order.",
          details: razorpayOrder?.error?.description || "Razorpay order creation failed.",
        },
        { status: 502 }
      );
    }

    return NextResponse.json({
      keyId,
      orderId: razorpayOrder.id,
      amount: razorpayOrder.amount,
      currency: razorpayOrder.currency,
      receipt: razorpayOrder.receipt,
    });
  } catch {
    return NextResponse.json(
      { error: "Unexpected error while creating payment order." },
      { status: 500 }
    );
  }
}