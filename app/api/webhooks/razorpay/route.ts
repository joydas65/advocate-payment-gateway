import { createHmac, timingSafeEqual } from "crypto";
import { NextRequest, NextResponse } from "next/server";

type RazorpayWebhookPayload = {
  event?: string;
  contains?: string[];
  payload?: {
    payment?: {
      entity?: {
        id?: string;
        order_id?: string;
        amount?: number;
        currency?: string;
        status?: string;
        method?: string;
        email?: string;
        contact?: string;
        notes?: Record<string, string>;
        error_description?: string | null;
      };
    };
    order?: {
      entity?: {
        id?: string;
        receipt?: string;
        status?: string;
        amount?: number;
        amount_paid?: number;
        currency?: string;
        notes?: Record<string, string>;
      };
    };
  };
  created_at?: number;
};

function safeCompare(a: string, b: string) {
  const bufferA = Buffer.from(a);
  const bufferB = Buffer.from(b);

  if (bufferA.length !== bufferB.length) {
    return false;
  }

  return timingSafeEqual(bufferA, bufferB);
}

function verifyWebhookSignature({
  rawBody,
  receivedSignature,
  webhookSecret,
}: {
  rawBody: string;
  receivedSignature: string;
  webhookSecret: string;
}) {
  const expectedSignature = createHmac("sha256", webhookSecret)
    .update(rawBody)
    .digest("hex");

  return safeCompare(expectedSignature, receivedSignature);
}

export async function POST(request: NextRequest) {
  try {
    const webhookSecret = process.env.RAZORPAY_WEBHOOK_SECRET?.trim();

    if (!webhookSecret) {
      return NextResponse.json(
        { error: "Webhook verification is not configured." },
        { status: 500 }
      );
    }

    const receivedSignature = request.headers
      .get("x-razorpay-signature")
      ?.trim();

    const eventId = request.headers.get("x-razorpay-event-id")?.trim();

    if (!receivedSignature) {
      return NextResponse.json(
        { error: "Missing webhook signature." },
        { status: 400 }
      );
    }

    const rawBody = await request.text();

    const isValidSignature = verifyWebhookSignature({
      rawBody,
      receivedSignature,
      webhookSecret,
    });

    if (!isValidSignature) {
      return NextResponse.json(
        { error: "Invalid webhook signature." },
        { status: 400 }
      );
    }

    const payload = JSON.parse(rawBody) as RazorpayWebhookPayload;

    const payment = payload.payload?.payment?.entity;
    const order = payload.payload?.order?.entity;

    const reconciliationRecord = {
      eventId: eventId || "not_provided",
      event: payload.event || "unknown",
      orderId: order?.id || payment?.order_id || "not_provided",
      paymentId: payment?.id || "not_provided",
      receipt: order?.receipt || "not_provided",
      amount: payment?.amount || order?.amount_paid || order?.amount || 0,
      currency: payment?.currency || order?.currency || "INR",
      paymentStatus: payment?.status || "not_provided",
      orderStatus: order?.status || "not_provided",
      paymentMethod: payment?.method || "not_provided",
      clientName:
        payment?.notes?.client_name ||
        order?.notes?.client_name ||
        "not_provided",
      clientMobile:
        payment?.notes?.client_mobile ||
        order?.notes?.client_mobile ||
        payment?.contact ||
        "not_provided",
      clientEmail:
        payment?.notes?.client_email ||
        order?.notes?.client_email ||
        payment?.email ||
        "not_provided",
      matterReference:
        payment?.notes?.matter_reference ||
        order?.notes?.matter_reference ||
        "not_provided",
      errorDescription: payment?.error_description || null,
      createdAt: payload.created_at || null,
    };

    console.info("Razorpay webhook received", reconciliationRecord);

    return NextResponse.json({ received: true });
  } catch {
    return NextResponse.json(
      { error: "Unable to process webhook." },
      { status: 500 }
    );
  }
}