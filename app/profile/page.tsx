import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { advocate, practiceAreas } from "@/lib/siteData";

export const metadata: Metadata = {
  title: "Profile",
  description: `Profile of ${advocate.name}, ${advocate.designation}, ${advocate.court}.`,
};

export default function ProfilePage() {
  return (
    <main className="bg-stone-50 text-slate-950">
      <section className="border-b border-stone-200 bg-gradient-to-br from-stone-100 via-stone-50 to-red-50">
        <div className="mx-auto grid max-w-6xl gap-8 px-4 py-12 md:grid-cols-[0.8fr_1.2fr] md:py-16">
          <div className="rounded-3xl border border-stone-200 bg-white p-4 shadow-sm">
            <Image
              src="/images/sudipto-panda.png"
              alt={`${advocate.name}, ${advocate.designation}`}
              width={520}
              height={520}
              priority
              className="aspect-square w-full rounded-2xl object-cover"
            />
          </div>

          <div className="flex flex-col justify-center">
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-red-900">
              Profile
            </p>

            <h1 className="mt-4 text-4xl font-bold tracking-tight text-slate-950 md:text-6xl">
              {advocate.name}
            </h1>

            <p className="mt-5 text-2xl leading-9 text-slate-800">
              {advocate.designation}, {advocate.court}
            </p>

            <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-600">
              {advocate.name} has {advocate.experience} of professional legal
              practice. His work includes civil matters relating to property,
              banking matters, matrimonial matters, criminal matters, writ
              proceedings, arbitration proceedings, conveyancing, registration,
              contract drafting and tribunal applications.
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
        </div>
      </section>

      <section className="mx-auto grid max-w-6xl gap-6 px-4 py-14 md:grid-cols-3">
        <div className="rounded-2xl border border-stone-200 bg-white p-6 shadow-sm">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-red-900">
            Court
          </p>
          <p className="mt-3 text-lg font-semibold text-slate-900">
            {advocate.court}
          </p>
        </div>

        <div className="rounded-2xl border border-stone-200 bg-white p-6 shadow-sm">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-red-900">
            Experience
          </p>
          <p className="mt-3 text-lg font-semibold text-slate-900">
            {advocate.experience}
          </p>
        </div>

        <div className="rounded-2xl border border-stone-200 bg-white p-6 shadow-sm">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-red-900">
            Chamber
          </p>
          <p className="mt-3 text-lg font-semibold leading-7 text-slate-900">
            Kolkata
          </p>
        </div>
      </section>

      <section className="border-y border-stone-200 bg-stone-100">
        <div className="mx-auto max-w-6xl px-4 py-14">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-red-900">
              Professional Work
            </p>

            <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-950 md:text-4xl">
              Areas handled before courts, tribunals and related forums
            </h2>

            <p className="mt-4 text-lg leading-8 text-slate-600">
              The following areas are listed for informational purposes only.
            </p>
          </div>

          <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {practiceAreas.map((area) => (
              <div
                key={area}
                className="rounded-2xl border border-stone-200 bg-white p-5 shadow-sm"
              >
                <p className="font-semibold leading-7 text-slate-800">{area}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-14">
        <div className="grid gap-6 rounded-3xl border border-stone-200 bg-white p-6 shadow-sm md:grid-cols-[1.2fr_0.8fr] md:p-8">
          <div>
            <h2 className="text-2xl font-bold tracking-tight text-slate-950">
              Chamber Contact
            </h2>

            <div className="mt-4 space-y-2 leading-7 text-slate-600">
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
          </div>

          <div className="flex flex-col justify-center gap-3">
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
              WhatsApp Chamber
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}