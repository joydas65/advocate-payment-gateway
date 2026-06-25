import type { Metadata } from "next";
import Link from "next/link";
import PaymentForm from "@/components/PaymentForm";
import { advocate } from "@/lib/siteData";

export const metadata: Metadata = {
  title: "Pay Professional Fees",
  description: `Pay professional fees to ${advocate.name}, ${advocate.designation}, ${advocate.court}.`,
};

export default function PayFeesPage() {
  return (
    <main className="bg-stone-50 text-slate-950">
      <section className="border-b border-stone-200 bg-gradient-to-br from-stone-100 via-stone-50 to-red-50">
        <div className="mx-auto max-w-6xl px-4 py-12 md:py-16">
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-red-900">
            Online Payment
          </p>

          <h1 className="mt-4 max-w-4xl text-4xl font-bold tracking-tight text-slate-950 md:text-6xl">
            Pay Professional Fees
          </h1>

          <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-600">
            Use this page only after the payment amount has been advised by the
            advocate or chamber. Payments can be made securely through UPI, card,
            net banking, wallet or other available gateway options.
          </p>
        </div>
      </section>

      <section className="mx-auto grid max-w-6xl gap-6 px-4 py-14 md:grid-cols-[1.1fr_0.9fr]">
        <div className="rounded-3xl border border-stone-200 bg-white p-6 shadow-sm md:p-8">
          <h2 className="text-2xl font-bold tracking-tight text-slate-950">
            Payment Details
          </h2>

          <p className="mt-3 text-sm leading-6 text-slate-600">
            Enter basic payment details below. Do not enter confidential facts or
            sensitive case information in this form.
          </p>

          <PaymentForm />
        </div>

        <aside className="grid gap-6">
          <div className="rounded-3xl border border-stone-200 bg-stone-100 p-6 shadow-sm">
            <h2 className="text-xl font-bold text-slate-950">
              Before proceeding
            </h2>

            <ul className="mt-5 space-y-3 text-sm leading-6 text-slate-600">
              <li>• Make payment only after the amount has been advised.</li>
              <li>• Available payment modes will be shown securely by the payment gateway.</li>
              <li>• Keep the transaction confirmation for reference.</li>
              <li>• Payment does not by itself confirm professional engagement.</li>
              <li>• For duplicate or incorrect payments, contact the chamber.</li>
            </ul>
          </div>

          <div className="rounded-3xl border border-stone-200 bg-white p-6 shadow-sm">
            <h2 className="text-xl font-bold text-slate-950">
              Chamber Contact
            </h2>

            <div className="mt-5 space-y-3 text-sm leading-6 text-slate-600">
              <p>{advocate.address}</p>

              <p>
                Phone:{" "}
                <a className="font-semibold text-red-900" href={`tel:${advocate.phone}`}>
                  {advocate.phone}
                </a>
              </p>

              <p>
                WhatsApp:{" "}
                <a
                  className="font-semibold text-red-900"
                  href={`https://wa.me/91${advocate.whatsapp}`}
                >
                  {advocate.whatsapp}
                </a>
              </p>

              <p>
                Email:{" "}
                <a className="break-all font-semibold text-red-900" href={`mailto:${advocate.email}`}>
                  {advocate.email}
                </a>
              </p>
            </div>

            <Link
              href="/contact"
              className="mt-6 inline-flex rounded-full border border-red-900 px-5 py-3 text-sm font-semibold text-red-900 transition hover:bg-red-50"
            >
              Contact Chamber
            </Link>
          </div>
        </aside>
      </section>
    </main>
  );
}