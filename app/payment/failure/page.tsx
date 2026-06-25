import type { Metadata } from "next";
import Link from "next/link";
import { advocate } from "@/lib/siteData";

export const metadata: Metadata = {
  title: "Payment Could Not Be Completed",
  description: `Payment failure page for ${advocate.name}, ${advocate.designation}.`,
};

type PaymentFailurePageProps = {
  searchParams?: {
    reason?: string;
    order_id?: string;
    reference?: string;
  };
};

export default function PaymentFailurePage({
  searchParams,
}: PaymentFailurePageProps) {
  const reason = searchParams?.reason;
  const orderId = searchParams?.order_id;
  const reference = searchParams?.reference;

  return (
    <main className="bg-stone-50 text-slate-950">
      <section className="mx-auto max-w-3xl px-4 py-16 md:py-24">
        <div className="rounded-3xl border border-stone-200 bg-white p-6 text-center shadow-sm md:p-10">
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-red-50 text-3xl">
            !
          </div>

          <h1 className="mt-6 text-3xl font-bold tracking-tight md:text-5xl">
            Payment was not completed
          </h1>

          <p className="mt-5 text-lg leading-8 text-slate-600">
            Your payment was cancelled, failed, or could not be confirmed. If any
            amount was debited, please keep the transaction confirmation and contact
            the chamber.
          </p>

          {(reason || orderId || reference) && (
            <div className="mt-8 rounded-2xl border border-stone-200 bg-stone-50 p-5 text-left">
              <h2 className="text-lg font-bold text-slate-950">
                Available details
              </h2>

              <div className="mt-4 space-y-2 text-sm leading-6 text-slate-600">
                {reason && <p>Reason: {reason}</p>}
                {orderId && <p>Order ID: {orderId}</p>}
                {reference && <p>Matter reference: {reference}</p>}
              </div>
            </div>
          )}

          <div className="mt-8 grid gap-3 sm:grid-cols-2">
            <Link
              href="/pay-fees"
              className="rounded-full bg-red-900 px-5 py-3 text-center text-sm font-semibold text-white transition hover:bg-red-950"
            >
              Try Again
            </Link>

            <Link
              href="/contact"
              className="rounded-full border border-red-900 px-5 py-3 text-center text-sm font-semibold text-red-900 transition hover:bg-red-50"
            >
              Contact Chamber
            </Link>
          </div>
        </div>

        <div className="mt-6 rounded-2xl border border-stone-200 bg-stone-100 p-5 text-sm leading-6 text-slate-600">
          If money has been debited but the payment is not reflected, please keep
          the bank/payment confirmation and contact the chamber with the
          transaction details.
        </div>
      </section>
    </main>
  );
}