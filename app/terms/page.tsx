import type { Metadata } from "next";
import Link from "next/link";
import { advocate } from "@/lib/siteData";

export const metadata: Metadata = {
  title: "Terms of Use",
  description: `Terms of Use for the website of ${advocate.name}, ${advocate.designation}, ${advocate.court}.`,
};

export default function TermsPage() {
  return (
    <main className="bg-stone-50 text-slate-950">
      <section className="border-b border-stone-200 bg-gradient-to-br from-stone-100 via-stone-50 to-red-50">
        <div className="mx-auto max-w-6xl px-4 py-12 md:py-16">
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-red-900">
            Terms of Use
          </p>

          <h1 className="mt-4 max-w-4xl text-4xl font-bold tracking-tight text-slate-950 md:text-6xl">
            Terms of Use
          </h1>

          <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-600">
            These terms apply to visitors using this website, contacting the
            chamber, or accessing the online payment page.
          </p>
        </div>
      </section>

      <section className="mx-auto grid max-w-6xl gap-6 px-4 py-14 md:grid-cols-[1fr_0.45fr]">
        <article className="rounded-3xl border border-stone-200 bg-white p-6 shadow-sm md:p-8">
          <div className="space-y-8 text-base leading-8 text-slate-600">
            <section>
              <h2 className="text-2xl font-bold tracking-tight text-slate-950">
                Use of this website
              </h2>
              <p className="mt-3">
                This website is provided for general informational purposes
                relating to {advocate.name}, {advocate.designation}, and chamber
                contact details.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold tracking-tight text-slate-950">
                No legal advice
              </h2>
              <p className="mt-3">
                Information available on this website should not be treated as
                legal advice for any specific matter, dispute, transaction or
                proceeding.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold tracking-tight text-slate-950">
                No advocate-client relationship
              </h2>
              <p className="mt-3">
                Use of this website, contact through phone, WhatsApp or email,
                or payment through the website does not by itself create an
                advocate-client relationship. Any professional engagement shall
                be subject to separate confirmation by the advocate or chamber.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold tracking-tight text-slate-950">
                Confidential information
              </h2>
              <p className="mt-3">
                Visitors should not send confidential or sensitive case
                information through this website unless professional engagement
                has been separately confirmed by the advocate or chamber.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold tracking-tight text-slate-950">
                Online payments
              </h2>
              <p className="mt-3">
                Payments through this website should be made only after the
                amount has been advised by the advocate or chamber. Payment does
                not guarantee acceptance of any matter or engagement.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold tracking-tight text-slate-950">
                Accuracy of information
              </h2>
              <p className="mt-3">
                Visitors are requested to provide accurate contact, payment and
                matter reference details where applicable. Incorrect information
                may delay communication or payment reconciliation.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold tracking-tight text-slate-950">
                Website content
              </h2>
              <p className="mt-3">
                Content available on this website should not be copied,
                reproduced, modified or used for any unauthorised purpose without
                permission.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold tracking-tight text-slate-950">
                External services
              </h2>
              <p className="mt-3">
                This website may link to external services such as payment
                gateways, maps, email, phone or WhatsApp. Use of those services
                may be governed by their own terms and policies.
              </p>
            </section>
          </div>
        </article>

        <aside className="h-fit rounded-3xl border border-stone-200 bg-stone-100 p-6 shadow-sm">
          <h2 className="text-xl font-bold text-slate-950">
            Related pages
          </h2>

          <p className="mt-3 text-sm leading-6 text-slate-600">
            Please also review the disclaimer, privacy policy and refund policy.
          </p>

          <div className="mt-6 grid gap-3">
            <Link
              href="/disclaimer"
              className="rounded-full border border-red-900 px-5 py-3 text-center text-sm font-semibold text-red-900 transition hover:bg-red-50"
            >
              Disclaimer
            </Link>

            <Link
              href="/privacy-policy"
              className="rounded-full border border-red-900 px-5 py-3 text-center text-sm font-semibold text-red-900 transition hover:bg-red-50"
            >
              Privacy Policy
            </Link>

            <Link
              href="/refund-policy"
              className="rounded-full border border-red-900 px-5 py-3 text-center text-sm font-semibold text-red-900 transition hover:bg-red-50"
            >
              Refund Policy
            </Link>

            <Link
              href="/contact"
              className="rounded-full bg-red-900 px-5 py-3 text-center text-sm font-semibold text-white transition hover:bg-red-950"
            >
              Contact Chamber
            </Link>
          </div>
        </aside>
      </section>
    </main>
  );
}