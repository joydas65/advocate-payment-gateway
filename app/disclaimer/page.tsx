import type { Metadata } from "next";
import Link from "next/link";
import { advocate } from "@/lib/siteData";

export const metadata: Metadata = {
  title: "Disclaimer",
  description: `Disclaimer for the website of ${advocate.name}, ${advocate.designation}, ${advocate.court}.`,
};

export default function DisclaimerPage() {
  return (
    <main className="bg-stone-50 text-slate-950">
      <section className="border-b border-stone-200 bg-gradient-to-br from-stone-100 via-stone-50 to-red-50">
        <div className="mx-auto max-w-6xl px-4 py-12 md:py-16">
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-red-900">
            Disclaimer
          </p>

          <h1 className="mt-4 max-w-4xl text-4xl font-bold tracking-tight text-slate-950 md:text-6xl">
            Website Disclaimer
          </h1>

          <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-600">
            Please read this disclaimer before using this website, contacting the
            chamber, or making any payment through the website.
          </p>
        </div>
      </section>

      <section className="mx-auto grid max-w-6xl gap-6 px-4 py-14 md:grid-cols-[1fr_0.45fr]">
        <article className="rounded-3xl border border-stone-200 bg-white p-6 shadow-sm md:p-8">
          <div className="space-y-8 text-base leading-8 text-slate-600">
            <section>
              <h2 className="text-2xl font-bold tracking-tight text-slate-950">
                Informational purpose only
              </h2>
              <p className="mt-3">
                This website is intended only to provide general information
                about {advocate.name}, {advocate.designation}, and chamber
                contact details.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold tracking-tight text-slate-950">
                No advertising or solicitation
              </h2>
              <p className="mt-3">
                Nothing contained on this website should be understood as
                advertising, solicitation, invitation, inducement, or legal
                marketing of any nature.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold tracking-tight text-slate-950">
                No legal advice
              </h2>
              <p className="mt-3">
                The information available on this website is general in nature
                and should not be treated as legal advice for any specific facts,
                dispute, proceeding, or transaction.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold tracking-tight text-slate-950">
                No advocate-client relationship
              </h2>
              <p className="mt-3">
                Accessing this website, contacting the chamber, sending a
                message, or making a payment through this website does not by
                itself create an advocate-client relationship. Any professional
                engagement shall be subject to separate confirmation by the
                advocate or chamber.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold tracking-tight text-slate-950">
                Confidential information
              </h2>
              <p className="mt-3">
                Visitors should not submit confidential or sensitive information
                through this website unless a professional engagement has been
                separately confirmed by the advocate or chamber.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold tracking-tight text-slate-950">
                Payments
              </h2>
              <p className="mt-3">
                Any payment made through this website should be made only after
                the amount has been advised by the advocate or chamber. Payment
                through this website does not guarantee acceptance of any matter
                or engagement.
              </p>
            </section>
          </div>
        </article>

        <aside className="h-fit rounded-3xl border border-stone-200 bg-stone-100 p-6 shadow-sm">
          <h2 className="text-xl font-bold text-slate-950">
            Quick actions
          </h2>

          <p className="mt-3 text-sm leading-6 text-slate-600">
            For matter-related communication, contact the chamber directly.
          </p>

          <div className="mt-6 grid gap-3">
            <Link
              href="/contact"
              className="rounded-full bg-red-900 px-5 py-3 text-center text-sm font-semibold text-white transition hover:bg-red-950"
            >
              Contact Chamber
            </Link>

            <Link
              href="/pay-fees"
              className="rounded-full border border-red-900 px-5 py-3 text-center text-sm font-semibold text-red-900 transition hover:bg-red-50"
            >
              Pay Professional Fees
            </Link>
          </div>
        </aside>
      </section>
    </main>
  );
}