import Link from "next/link";
import { advocate } from "@/lib/siteData";

const policyLinks = [
  { href: "/disclaimer", label: "Disclaimer" },
  { href: "/privacy-policy", label: "Privacy Policy" },
  { href: "/refund-policy", label: "Refund Policy" },
  { href: "/terms", label: "Terms of Use" },
];

const quickLinks = [
  { href: "/profile", label: "Profile" },
  { href: "/practice-areas", label: "Practice Areas" },
  { href: "/pay-fees", label: "Pay Professional Fees" },
  { href: "/contact", label: "Contact Chamber" },
];

export default function Footer() {
  return (
    <footer className="border-t border-stone-200 bg-slate-950 text-white">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-12 md:grid-cols-[1.4fr_1fr_1fr]">
        <section>
          <h2 className="text-xl font-bold">{advocate.name}</h2>

          <p className="mt-2 text-sm leading-6 text-slate-300">
            {advocate.designation}, {advocate.court}
          </p>

          <p className="mt-5 max-w-md text-sm leading-6 text-slate-300">
            This website is for informational purposes only and does not constitute
            advertising, solicitation, or legal advice.
          </p>

          <div className="mt-6 flex flex-wrap gap-3">
            <a
              href={`tel:${advocate.phone}`}
              className="rounded-full bg-white px-4 py-2 text-sm font-semibold text-slate-950 transition hover:bg-stone-200"
            >
              Call Chamber
            </a>

            <a
              href={`https://wa.me/91${advocate.whatsapp}`}
              className="rounded-full border border-white/30 px-4 py-2 text-sm font-semibold text-white transition hover:bg-white/10"
            >
              WhatsApp
            </a>
          </div>
        </section>

        <section>
          <h3 className="text-sm font-semibold uppercase tracking-[0.18em] text-stone-300">
            Contact
          </h3>

          <div className="mt-5 space-y-3 text-sm leading-6 text-slate-300">
            <p>{advocate.address}</p>

            <p>
              Phone:{" "}
              <a className="hover:text-white" href={`tel:${advocate.phone}`}>
                {advocate.phone}
              </a>
            </p>

            <p>
              WhatsApp:{" "}
              <a
                className="hover:text-white"
                href={`https://wa.me/91${advocate.whatsapp}`}
              >
                {advocate.whatsapp}
              </a>
            </p>

            <p>
              Email:{" "}
              <a className="hover:text-white" href={`mailto:${advocate.email}`}>
                {advocate.email}
              </a>
            </p>
          </div>
        </section>

        <section>
          <h3 className="text-sm font-semibold uppercase tracking-[0.18em] text-stone-300">
            Website
          </h3>

          <nav className="mt-5 grid gap-3 text-sm" aria-label="Footer navigation">
            {quickLinks.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-slate-300 transition hover:text-white"
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </section>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-6xl flex-col gap-4 px-4 py-6 text-sm text-slate-400 md:flex-row md:items-center md:justify-between">
          <p>© {new Date().getFullYear()} {advocate.name}. All rights reserved.</p>

          <nav className="flex flex-wrap gap-x-5 gap-y-2" aria-label="Policy navigation">
            {policyLinks.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="transition hover:text-white"
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </footer>
  );
}