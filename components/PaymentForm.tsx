"use client";

import { FormEvent, useMemo, useState } from "react";

type PaymentFormState = {
  name: string;
  mobile: string;
  email: string;
  matterReference: string;
  amount: string;
  accepted: boolean;
};

type CreateOrderResponse = {
  keyId: string;
  orderId: string;
  amount: number;
  currency: string;
  receipt: string;
};

type RazorpaySuccessResponse = {
  razorpay_payment_id: string;
  razorpay_order_id: string;
  razorpay_signature: string;
};

type RazorpayFailureResponse = {
  error?: {
    description?: string;
    reason?: string;
  };
};

type RazorpayOptions = {
  key: string;
  amount: number;
  currency: string;
  name: string;
  description: string;
  order_id: string;
  prefill: {
    name: string;
    email?: string;
    contact: string;
  };
  notes: {
    matterReference: string;
    receipt: string;
  };
  theme: {
    color: string;
  };
  handler: (response: RazorpaySuccessResponse) => void;
  modal: {
    confirm_close: boolean;
    ondismiss: () => void;
  };
};

type RazorpayInstance = {
  open: () => void;
  on: (
    event: "payment.failed",
    callback: (response: RazorpayFailureResponse) => void
  ) => void;
};

declare global {
  interface Window {
    Razorpay?: new (options: RazorpayOptions) => RazorpayInstance;
  }
}

const initialState: PaymentFormState = {
  name: "",
  mobile: "",
  email: "",
  matterReference: "",
  amount: "",
  accepted: false,
};

function loadRazorpayScript() {
  return new Promise<boolean>((resolve) => {
    const existingScript = document.querySelector(
      'script[src="https://checkout.razorpay.com/v1/checkout.js"]'
    );

    if (existingScript) {
      resolve(true);
      return;
    }

    const script = document.createElement("script");
    script.src = "https://checkout.razorpay.com/v1/checkout.js";
    script.onload = () => resolve(true);
    script.onerror = () => resolve(false);
    document.body.appendChild(script);
  });
}

export default function PaymentForm() {
  const [form, setForm] = useState(initialState);
  const [message, setMessage] = useState("");
  const [isProcessing, setIsProcessing] = useState(false);

  const amountValue = Number(form.amount);

  const isValid = useMemo(() => {
    const hasRequiredFields =
      form.name.trim().length > 1 &&
      /^[6-9]\d{9}$/.test(form.mobile.trim()) &&
      Number.isFinite(amountValue) &&
      amountValue > 0 &&
      form.accepted;

    const hasValidEmail =
      !form.email.trim() || /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim());

    return hasRequiredFields && hasValidEmail;
  }, [form, amountValue]);

  function updateField(field: keyof PaymentFormState, value: string | boolean) {
    setForm((current) => ({ ...current, [field]: value }));
    setMessage("");
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (!isValid) {
      setMessage("Please check the required fields and acknowledgement before proceeding.");
      return;
    }

    try {
      setIsProcessing(true);
      setMessage("Creating secure payment request...");

      const scriptLoaded = await loadRazorpayScript();

      if (!scriptLoaded || !window.Razorpay) {
        setMessage("Unable to load secure payment window. Please check your internet connection and try again.");
        setIsProcessing(false);
        return;
      }

      const response = await fetch("/api/payments/create-order", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          clientName: form.name.trim(),
          mobile: form.mobile.trim(),
          email: form.email.trim(),
          matterReference: form.matterReference.trim(),
          amount: amountValue,
          acknowledgementAccepted: form.accepted,
        }),
      });

      const order = (await response.json()) as CreateOrderResponse & {
        error?: string;
        details?: string;
      };

      if (!response.ok) {
        setMessage(order.details || order.error || "Unable to create payment order. Please try again.");
        setIsProcessing(false);
        return;
      }

      setMessage("Opening secure payment window...");

      const razorpay = new window.Razorpay({
        key: order.keyId,
        amount: order.amount,
        currency: order.currency,
        name: "Sudipto Panda, Advocate",
        description: "Professional fees",
        order_id: order.orderId,
        prefill: {
          name: form.name.trim(),
          email: form.email.trim() || undefined,
          contact: `+91${form.mobile.trim()}`,
        },
        notes: {
          matterReference: form.matterReference.trim(),
          receipt: order.receipt,
        },
        theme: {
          color: "#7f1d1d",
        },
        handler: async (paymentResponse) => {
            setMessage("Verifying payment...");

            const verifyResponse = await fetch("/api/payments/verify", {
                method: "POST",
                headers: {
                "Content-Type": "application/json",
                },
                body: JSON.stringify(paymentResponse),
            });

            const verification = await verifyResponse.json();

            if (!verifyResponse.ok || !verification.verified) {
                const params = new URLSearchParams({
                reason: verification.error || "Payment verification failed",
                order_id: paymentResponse.razorpay_order_id,
                reference: form.matterReference.trim() || order.receipt,
                });

                window.location.href = `/payment/failure?${params.toString()}`;
                return;
            }

            const params = new URLSearchParams({
                payment_id: paymentResponse.razorpay_payment_id,
                order_id: paymentResponse.razorpay_order_id,
                reference: form.matterReference.trim() || order.receipt,
            });

            window.location.href = `/payment/success?${params.toString()}`;
        },
        modal: {
          confirm_close: true,
          ondismiss: () => {
            const params = new URLSearchParams({
              reason: "Payment window closed",
              order_id: order.orderId,
              reference: form.matterReference.trim() || order.receipt,
            });

            window.location.href = `/payment/failure?${params.toString()}`;
          },
        },
      });

      razorpay.on("payment.failed", (failureResponse) => {
        const params = new URLSearchParams({
          reason:
            failureResponse.error?.description ||
            failureResponse.error?.reason ||
            "Payment failed",
          order_id: order.orderId,
          reference: form.matterReference.trim() || order.receipt,
        });

        window.location.href = `/payment/failure?${params.toString()}`;
      });

      razorpay.open();
    } catch {
      setMessage("Unexpected error while starting payment. Please try again or contact the chamber.");
      setIsProcessing(false);
    }
  }

  return (
    <form className="mt-8 grid gap-5" onSubmit={handleSubmit}>
      <div className="grid gap-5 md:grid-cols-2">
        <label className="grid gap-2 text-sm font-semibold text-slate-800">
          Client name *
          <input
            value={form.name}
            onChange={(event) => updateField("name", event.target.value)}
            placeholder="Enter full name"
            className="rounded-xl border border-stone-300 bg-white px-4 py-3 text-base font-normal outline-none transition focus:border-red-900 focus:ring-2 focus:ring-red-900/10"
          />
        </label>

        <label className="grid gap-2 text-sm font-semibold text-slate-800">
          Mobile number *
          <input
            value={form.mobile}
            onChange={(event) => updateField("mobile", event.target.value)}
            placeholder="10 digit mobile number"
            inputMode="numeric"
            maxLength={10}
            className="rounded-xl border border-stone-300 bg-white px-4 py-3 text-base font-normal outline-none transition focus:border-red-900 focus:ring-2 focus:ring-red-900/10"
          />
        </label>

        <label className="grid gap-2 text-sm font-semibold text-slate-800">
          Email address
          <input
            type="email"
            value={form.email}
            onChange={(event) => updateField("email", event.target.value)}
            placeholder="Email for payment reference"
            className="rounded-xl border border-stone-300 bg-white px-4 py-3 text-base font-normal outline-none transition focus:border-red-900 focus:ring-2 focus:ring-red-900/10"
          />
        </label>

        <label className="grid gap-2 text-sm font-semibold text-slate-800">
          Amount payable *
          <input
            type="number"
            min="1"
            value={form.amount}
            onChange={(event) => updateField("amount", event.target.value)}
            placeholder="Amount in INR"
            className="rounded-xl border border-stone-300 bg-white px-4 py-3 text-base font-normal outline-none transition focus:border-red-900 focus:ring-2 focus:ring-red-900/10"
          />
        </label>
      </div>

      <label className="grid gap-2 text-sm font-semibold text-slate-800">
        Matter reference / brief description
        <textarea
          value={form.matterReference}
          onChange={(event) => updateField("matterReference", event.target.value)}
          placeholder="Enter matter reference only. Avoid confidential details."
          rows={4}
          className="rounded-xl border border-stone-300 bg-white px-4 py-3 text-base font-normal outline-none transition focus:border-red-900 focus:ring-2 focus:ring-red-900/10"
        />
      </label>

      <label className="flex gap-3 rounded-2xl border border-stone-200 bg-stone-50 p-4 text-sm leading-6 text-slate-600">
        <input
          type="checkbox"
          checked={form.accepted}
          onChange={(event) => updateField("accepted", event.target.checked)}
          className="mt-1 h-4 w-4"
        />
        <span>
          I confirm that this payment is being made towards professional fees or
          chamber-related charges as advised. I understand that payment through
          this website does not by itself create an advocate-client relationship
          unless separately confirmed by the advocate or chamber.
        </span>
      </label>

      <button
        type="submit"
        disabled={!isValid || isProcessing}
        className="rounded-full bg-red-900 px-6 py-3 text-sm font-semibold text-white transition hover:bg-red-950 disabled:cursor-not-allowed disabled:bg-slate-300 disabled:text-slate-600"
      >
        {isProcessing ? "Please wait..." : "Proceed to Secure Payment"}
      </button>

      {message ? (
        <div className="rounded-2xl border border-stone-200 bg-stone-100 p-4 text-sm leading-6 text-slate-700">
          {message}
        </div>
      ) : null}
    </form>
  );
}