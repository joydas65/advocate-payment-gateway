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

const initialState: PaymentFormState = {
  name: "",
  mobile: "",
  email: "",
  matterReference: "",
  amount: "",
  accepted: false,
};

export default function PaymentForm() {
  const [form, setForm] = useState(initialState);
  const [message, setMessage] = useState("");

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

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (!isValid) {
      setMessage("Please check the required fields and acknowledgement before proceeding.");
      return;
    }

    setMessage(
      "Payment gateway integration is pending. After Razorpay/Cashfree activation, this button will redirect to a secure payment page."
    );
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
        disabled={!isValid}
        className="rounded-full bg-red-900 px-6 py-3 text-sm font-semibold text-white transition hover:bg-red-950 disabled:cursor-not-allowed disabled:bg-slate-300 disabled:text-slate-600"
      >
        Proceed to Secure Payment
      </button>

      {message ? (
        <div className="rounded-2xl border border-stone-200 bg-stone-100 p-4 text-sm leading-6 text-slate-700">
          {message}
        </div>
      ) : null}
    </form>
  );
}