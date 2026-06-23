import type { Metadata } from "next";
import Link from "next/link";
import { advocate } from "@/lib/siteData";

export const metadata: Metadata = {
  title: "Contact",
  description: `Contact chamber of ${advocate.name}, ${advocate.designation}, ${advocate.court}.`,
};

export default function ContactPage() {
  const mapUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
    advocate.address
  )}`;

  return (
    <main className="bg-stone-50 text-slate-950">
      <section className="border-b border-stone-200 bg-gradient-to-br from-stone-100 via-stone-50 to-red-50">
        <div className="mx-auto max-w-6xl px-4 py-12 md:py-16">
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-red-900">
            Contact
          </p>

          <h1 className="mt-4 max-w-4xl text-4xl font-bold tracking-tight text-slate-950 md:text-6xl">
            Contact Chamber
          </h1>

          <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-600">
            For matter-related communication, clients may contact the chamber by
            phone, WhatsApp or email.
          </p>
        </div>
      </section>

      <section className="mx-auto grid max-w-6xl gap-6 px-4 py-14 md:grid-cols-[1fr_1fr]">
        <div className="rounded-3xl border border-stone-200 bg-white p-6 shadow-sm md:p-8">
          <h2 className="text-2xl font-bold tracking-tight text-slate-950">
            Chamber Details
          </h2>

          <div className="mt-6 space-y-5 text-base leading-7 text-slate-600">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.16em] text-red-900">
                Address
              </p>
              <p className="mt-2">{advocate.address}</p>
            </div>

            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.16em] text-red-900">
                Phone
              </p>
              <a
                href={`tel:${advocate.phone}`}
                className="mt-2 inline-block font-semibold text-red-900"
              >
                {advocate.phone}
              </a>
            </div>

            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.16em] text-red-900">
                WhatsApp
              </p>
              <a
                href={`https://wa.me/91${advocate.whatsapp}`}
                className="mt-2 inline-block font-semibold text-red-900"
              >
                {advocate.whatsapp}
              </a>
            </div>

            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.16em] text-red-900">
                Email
              </p>
              <a
                href={`mailto:${advocate.email}`}
                className="mt-2 inline-block break-all font-semibold text-red-900"
              >
                {advocate.email}
              </a>
            </div>
          </div>

          <div className="mt-8 grid gap-3 sm:grid-cols-2">
            <a
              href={`tel:${advocate.phone}`}
              className="rounded-full bg-red-900 px-5 py-3 text-center text-sm font-semibold text-white transition hover:bg-red-950"
            >
              Call Chamber
            </a>

            <a
              href={`https://wa.me/91${advocate.whatsapp}`}
              className="rounded-full border border-red-900 px-5 py-3 text-center text-sm font-semibold text-red-900 transition hover:bg-red-50"
            >
              WhatsApp Chamber
            </a>

            <a
              href={`mailto:${advocate.email}`}
              className="rounded-full border border-red-900 px-5 py-3 text-center text-sm font-semibold text-red-900 transition hover:bg-red-50"
            >
              Send Email
            </a>

            <a
              href={mapUrl}
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-red-900 px-5 py-3 text-center text-sm font-semibold text-red-900 transition hover:bg-red-50"
            >
              Open Map
            </a>
          </div>
        </div>

        <div className="grid gap-6">
          <div className="rounded-3xl border border-stone-200 bg-white p-6 shadow-sm md:p-8">
            <h2 className="text-2xl font-bold tracking-tight text-slate-950">
              Before contacting
            </h2>

            <p className="mt-4 leading-7 text-slate-600">
              To help the chamber understand the matter, keep the following
              information ready where applicable.
            </p>

            <ul className="mt-5 space-y-3 text-sm leading-6 text-slate-600">
              <li>• Nature of the matter</li>
              <li>• Court, tribunal or forum, if already pending</li>
              <li>• Case number or matter reference, if available</li>
              <li>• Important dates, notices or orders</li>
              <li>• Relevant documents for review</li>
            </ul>
          </div>

          <div className="rounded-3xl border border-stone-200 bg-stone-100 p-6 shadow-sm md:p-8">
            <h2 className="text-2xl font-bold tracking-tight text-slate-950">
              Pay Professional Fees
            </h2>

            <p className="mt-4 leading-7 text-slate-600">
              Use the payment page only after the amount has been advised by the
              advocate or chamber.
            </p>

            <Link
              href="/pay-fees"
              className="mt-6 inline-flex rounded-full bg-red-900 px-6 py-3 text-sm font-semibold text-white transition hover:bg-red-950"
            >
              Go to Pay Fees
            </Link>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 pb-14">
        <div className="rounded-2xl border border-stone-200 bg-white p-5 text-sm leading-6 text-slate-600 shadow-sm">
          Contacting the chamber through this website does not by itself create
          an advocate-client relationship. Professional engagement shall be
          subject to separate confirmation by the advocate or chamber.
        </div>
      </section>
    </main>
  );
}