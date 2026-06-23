import Link from "next/link";
import { advocate, practiceAreas } from "@/lib/siteData";

export default function HomePage() {
  return (
    <main className="bg-stone-50 text-slate-950">
      <section className="border-b border-stone-200 bg-gradient-to-br from-stone-100 via-stone-50 to-red-50">
        <div className="mx-auto grid max-w-6xl gap-8 px-4 py-12 md:grid-cols-[1.15fr_0.85fr] md:py-16">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-red-900">
              {advocate.court}
            </p>

            <h1 className="mt-4 text-5xl font-bold tracking-tight text-slate-950 md:text-7xl">
              {advocate.name}
            </h1>

            <p className="mt-5 max-w-2xl text-2xl leading-9 text-slate-800">
              {advocate.designation} with {advocate.experience} of professional legal practice.
            </p>

            <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-600">
              Practicing in civil, property, banking, matrimonial, criminal, writ,
              arbitration, tribunal and related legal matters before courts and tribunals.
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
          <aside className="rounded-3xl border border-stone-200 bg-white p-6 shadow-sm">
            <div className="mb-6 flex items-center gap-4">
              <img
                src="/images/sudipto-panda.png"
                alt="Sudipto Panda, Advocate"
                className="h-24 w-24 rounded-2xl object-cover ring-1 ring-stone-200"
              />
              <div>
                <h2 className="text-xl font-bold text-slate-950">Sudipto Panda</h2>
                <p className="mt-1 text-sm text-slate-600">
                  Advocate, Calcutta High Court
                </p>
              </div>
            </div>
            <h3 className="text-lg font-bold text-slate-950">Chamber Details</h3>
            <div className="mt-5 space-y-4 text-sm leading-6 text-slate-600">
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
                <a className="font-semibold text-red-900" href={`mailto:${advocate.email}`}>
                  {advocate.email}
                </a>
              </p>
            </div>

            <div className="mt-6 grid gap-3 sm:grid-cols-2 md:grid-cols-1 lg:grid-cols-2">
              <a
                href={`tel:${advocate.phone}`}
                className="rounded-full border border-red-900 px-4 py-3 text-center text-sm font-semibold text-red-900 transition hover:bg-red-50"
              >
                Call
              </a>

              <a
                href={`https://wa.me/91${advocate.whatsapp}`}
                className="rounded-full bg-red-900 px-4 py-3 text-center text-sm font-semibold text-white transition hover:bg-red-950"
              >
                WhatsApp
              </a>
            </div>
          </aside>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16 md:py-20">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-red-900">
            Practice Areas
          </p>

          <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-950 md:text-4xl">
            Legal practice across courts, tribunals and related proceedings
          </h2>

          <p className="mt-4 text-lg leading-8 text-slate-600">
            The following areas are provided for informational purposes.
          </p>
        </div>

        <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {practiceAreas.map((area) => (
            <div
              key={area}
              className="rounded-2xl border border-stone-200 bg-white p-6 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
            >
              <p className="text-base font-semibold leading-7 text-slate-800">
                {area}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="border-y border-stone-200 bg-stone-100">
        <div className="mx-auto grid max-w-6xl gap-8 px-4 py-16 md:grid-cols-2 md:items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-red-900">
              Online Payment
            </p>

            <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-950 md:text-4xl">
              Pay professional fees securely through the website
            </h2>

            <p className="mt-4 text-lg leading-8 text-slate-600">
              Clients may use the payment page to enter the advised amount and proceed
              through the payment gateway once gateway activation is complete.
            </p>
          </div>

          <div className="rounded-3xl border border-stone-200 bg-white p-6 shadow-sm">
            <h3 className="text-xl font-bold text-slate-950">Before making payment</h3>

            <p className="mt-4 leading-7 text-slate-600">
              Please make payment only after the amount has been advised by the
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

      <section className="mx-auto max-w-6xl px-4 py-10">
        <div className="rounded-2xl border border-stone-200 bg-white p-5 text-sm leading-6 text-slate-600 shadow-sm">
          This website is for informational purposes only and does not constitute
          advertising, solicitation, or legal advice. Accessing this website or
          making payment through it does not by itself create an advocate-client
          relationship.
        </div>
      </section>
    </main>
  );
}