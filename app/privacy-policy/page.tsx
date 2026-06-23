import type { Metadata } from "next";
import Link from "next/link";
import { advocate } from "@/lib/siteData";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: `Privacy Policy for the website of ${advocate.name}, ${advocate.designation}, ${advocate.court}.`,
};

export default function PrivacyPolicyPage() {
  return (
    <main className="bg-stone-50 text-slate-950">
      <section className="border-b border-stone-200 bg-gradient-to-br from-stone-100 via-stone-50 to-red-50">
        <div className="mx-auto max-w-6xl px-4 py-12 md:py-16">
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-red-900">
            Privacy Policy
          </p>

          <h1 className="mt-4 max-w-4xl text-4xl font-bold tracking-tight text-slate-950 md:text-6xl">
            Privacy Policy
          </h1>

          <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-600">
            This policy explains how basic information may be collected and used
            when visitors contact the chamber or use the payment page.
          </p>
        </div>
      </section>

      <section className="mx-auto grid max-w-6xl gap-6 px-4 py-14 md:grid-cols-[1fr_0.45fr]">
        <article className="rounded-3xl border border-stone-200 bg-white p-6 shadow-sm md:p-8">
          <div className="space-y-8 text-base leading-8 text-slate-600">
            <section>
              <h2 className="text-2xl font-bold tracking-tight text-slate-950">
                Information collected
              </h2>
              <p className="mt-3">
                This website may collect basic information such as name, phone
                number, email address, matter reference, payment amount and
                communication details when a visitor contacts the chamber or uses
                the payment page.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold tracking-tight text-slate-950">
                Purpose of collection
              </h2>
              <p className="mt-3">
                The information may be used for chamber communication, payment
                reference, administrative follow-up, and responding to enquiries
                submitted by visitors.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold tracking-tight text-slate-950">
                Payment information
              </h2>
              <p className="mt-3">
                Payment credentials such as card details, UPI credentials, net
                banking credentials or wallet details are processed by the
                selected payment gateway. This website should not store sensitive
                payment credentials.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold tracking-tight text-slate-950">
                Confidential information
              </h2>
              <p className="mt-3">
                Visitors should avoid submitting confidential or sensitive case
                details through website forms unless a professional engagement
                has been separately confirmed by the advocate or chamber.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold tracking-tight text-slate-950">
                Sharing of information
              </h2>
              <p className="mt-3">
                Basic information may be shared only where necessary for chamber
                administration, payment processing, legal compliance, or as
                required by applicable law.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold tracking-tight text-slate-950">
                Data accuracy
              </h2>
              <p className="mt-3">
                Visitors are requested to provide accurate contact and payment
                reference details so that the chamber can identify the payment or
                communication correctly.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold tracking-tight text-slate-950">
                Contact for privacy queries
              </h2>
              <p className="mt-3">
                For privacy-related questions, contact the chamber at{" "}
                <a
                  href={`mailto:${advocate.email}`}
                  className="font-semibold text-red-900"
                >
                  {advocate.email}
                </a>
                .
              </p>
            </section>
          </div>
        </article>

        <aside className="h-fit rounded-3xl border border-stone-200 bg-stone-100 p-6 shadow-sm">
          <h2 className="text-xl font-bold text-slate-950">
            Related pages
          </h2>

          <p className="mt-3 text-sm leading-6 text-slate-600">
            These pages explain website usage, payment and legal disclaimers.
          </p>

          <div className="mt-6 grid gap-3">
            <Link
              href="/disclaimer"
              className="rounded-full border border-red-900 px-5 py-3 text-center text-sm font-semibold text-red-900 transition hover:bg-red-50"
            >
              Disclaimer
            </Link>

            <Link
              href="/refund-policy"
              className="rounded-full border border-red-900 px-5 py-3 text-center text-sm font-semibold text-red-900 transition hover:bg-red-50"
            >
              Refund Policy
            </Link>

            <Link
              href="/terms"
              className="rounded-full bg-red-900 px-5 py-3 text-center text-sm font-semibold text-white transition hover:bg-red-950"
            >
              Terms of Use
            </Link>
          </div>
        </aside>
      </section>
    </main>
  );
}