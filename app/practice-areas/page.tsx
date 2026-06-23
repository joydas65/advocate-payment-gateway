import type { Metadata } from "next";
import Link from "next/link";
import { advocate, practiceAreas } from "@/lib/siteData";

export const metadata: Metadata = {
  title: "Practice Areas",
  description: `Practice areas of ${advocate.name}, ${advocate.designation}, ${advocate.court}.`,
};

export default function PracticeAreasPage() {
  return (
    <main className="bg-stone-50 text-slate-950">
      <section className="border-b border-stone-200 bg-gradient-to-br from-stone-100 via-stone-50 to-red-50">
        <div className="mx-auto max-w-6xl px-4 py-12 md:py-16">
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-red-900">
            Practice Areas
          </p>

          <h1 className="mt-4 max-w-4xl text-4xl font-bold tracking-tight text-slate-950 md:text-6xl">
            Legal matters handled before courts, tribunals and related forums
          </h1>

          <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-600">
            The areas below are listed for informational purposes only. For any
            specific matter, clients may contact the chamber with relevant facts
            and documents.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href="/contact"
              className="rounded-full bg-red-900 px-6 py-3 text-sm font-semibold text-white transition hover:bg-red-950"
            >
              Contact Chamber
            </Link>

            <Link
              href="/pay-fees"
              className="rounded-full border border-red-900 px-6 py-3 text-sm font-semibold text-red-900 transition hover:bg-red-50"
            >
              Pay Professional Fees
            </Link>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-14 md:py-16">
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {practiceAreas.map((area, index) => (
            <article
              key={area}
              className="rounded-2xl border border-stone-200 bg-white p-6 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-red-50 text-sm font-bold text-red-900">
                {index + 1}
              </div>

              <h2 className="mt-5 text-xl font-bold leading-7 text-slate-950">
                {area}
              </h2>

              <p className="mt-3 text-sm leading-6 text-slate-600">
                Matters in this area may be discussed with the chamber based on
                the facts, documents and applicable legal position.
              </p>
            </article>
          ))}
        </div>
      </section>

      <section className="border-y border-stone-200 bg-stone-100">
        <div className="mx-auto grid max-w-6xl gap-8 px-4 py-14 md:grid-cols-2 md:items-start">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-red-900">
              Before contacting
            </p>

            <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-950 md:text-4xl">
              Keep matter details and documents ready
            </h2>

            <p className="mt-4 text-lg leading-8 text-slate-600">
              This helps the chamber understand the nature of the matter and
              respond appropriately.
            </p>
          </div>

          <div className="rounded-3xl border border-stone-200 bg-white p-6 shadow-sm">
            <h3 className="text-xl font-bold text-slate-950">
              Useful information to share
            </h3>

            <ul className="mt-5 space-y-3 text-sm leading-6 text-slate-600">
              <li>• Nature of the matter</li>
              <li>• Court, tribunal or forum, if already pending</li>
              <li>• Case number or matter reference, if available</li>
              <li>• Important dates, notices or orders</li>
              <li>• Relevant documents for review</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-14">
        <div className="rounded-3xl border border-stone-200 bg-white p-6 shadow-sm md:p-8">
          <div className="grid gap-6 md:grid-cols-[1.2fr_0.8fr] md:items-center">
            <div>
              <h2 className="text-2xl font-bold tracking-tight text-slate-950">
                Contact the chamber
              </h2>

              <p className="mt-3 leading-7 text-slate-600">
                For matter-specific discussion, contact the chamber using phone,
                WhatsApp or email.
              </p>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row md:justify-end">
              <a
                href={`tel:${advocate.phone}`}
                className="rounded-full border border-red-900 px-5 py-3 text-center text-sm font-semibold text-red-900 transition hover:bg-red-50"
              >
                Call Chamber
              </a>

              <a
                href={`https://wa.me/91${advocate.whatsapp}`}
                className="rounded-full bg-red-900 px-5 py-3 text-center text-sm font-semibold text-white transition hover:bg-red-950"
              >
                WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}