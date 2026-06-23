import type { Metadata } from "next";
import Link from "next/link";
import { advocate } from "@/lib/siteData";

export const metadata: Metadata = {
  title: "Refund Policy",
  description: `Refund and cancellation policy for payments made to ${advocate.name}, ${advocate.designation}, ${advocate.court}.`,
};

export default function RefundPolicyPage() {
  return (
    <main className="bg-stone-50 text-slate-950">
      <section className="border-b border-stone-200 bg-gradient-to-br from-stone-100 via-stone-50 to-red-50">
        <div className="mx-auto max-w-6xl px-4 py-12 md:py-16">
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-red-900">
            Refund Policy
          </p>

          <h1 className="mt-4 max-w-4xl text-4xl font-bold tracking-tight text-slate-950 md:text-6xl">
            Refund / Cancellation Policy
          </h1>

          <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-600">
            This page explains how incorrect, duplicate, or disputed payments may
            be reviewed by the chamber.
          </p>
        </div>
      </section>

      <section className="mx-auto grid max-w-6xl gap-6 px-4 py-14 md:grid-cols-[1fr_0.45fr]">
        <article className="rounded-3xl border border-stone-200 bg-white p-6 shadow-sm md:p-8">
          <div className="space-y-8 text-base leading-8 text-slate-600">
            <section>
              <h2 className="text-2xl font-bold tracking-tight text-slate-950">
                Payments covered by this policy
              </h2>
              <p className="mt-3">
                This policy applies to payments made through this website towards
                professional fees or chamber-related charges as advised by the
                advocate or chamber.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold tracking-tight text-slate-950">
                Incorrect or duplicate payments
              </h2>
              <p className="mt-3">
                If a payment has been made by mistake, or if the same payment has
                been made more than once, the payer may contact the chamber with
                transaction details for review.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold tracking-tight text-slate-950">
                Refund review
              </h2>
              <p className="mt-3">
                Refund requests, if any, shall be reviewed after verification of
                the payment details, purpose of payment, and related chamber
                records. Refunds are not automatic and shall be subject to the
                terms agreed with the advocate or chamber.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold tracking-tight text-slate-950">
                Professional engagement
              </h2>
              <p className="mt-3">
                Payment through this website does not by itself create or confirm
                an advocate-client relationship. Professional engagement shall be
                subject to separate confirmation by the advocate or chamber.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold tracking-tight text-slate-950">
                Refund timeline
              </h2>
              <p className="mt-3">
                Where a refund is approved, the processing timeline may depend on
                the payment gateway, bank, and mode of payment used by the payer.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold tracking-tight text-slate-950">
                How to request review
              </h2>
              <p className="mt-3">
                For incorrect or duplicate payment review, contact the chamber
                with payer name, mobile number, payment date, amount, transaction
                reference and reason for the request.
              </p>
            </section>
          </div>
        </article>

        <aside className="h-fit rounded-3xl border border-stone-200 bg-stone-100 p-6 shadow-sm">
          <h2 className="text-xl font-bold text-slate-950">
            Payment support
          </h2>

          <div className="mt-5 space-y-3 text-sm leading-6 text-slate-600">
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
              <a
                className="break-all font-semibold text-red-900"
                href={`mailto:${advocate.email}`}
              >
                {advocate.email}
              </a>
            </p>
          </div>

          <div className="mt-6 grid gap-3">
            <Link
              href="/pay-fees"
              className="rounded-full bg-red-900 px-5 py-3 text-center text-sm font-semibold text-white transition hover:bg-red-950"
            >
              Pay Professional Fees
            </Link>

            <Link
              href="/contact"
              className="rounded-full border border-red-900 px-5 py-3 text-center text-sm font-semibold text-red-900 transition hover:bg-red-50"
            >
              Contact Chamber
            </Link>

            <Link
              href="/privacy-policy"
              className="rounded-full border border-red-900 px-5 py-3 text-center text-sm font-semibold text-red-900 transition hover:bg-red-50"
            >
              Privacy Policy
            </Link>
          </div>
        </aside>
      </section>
    </main>
  );
}