"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { advocate } from "@/lib/siteData";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/profile", label: "Profile" },
  { href: "/practice-areas", label: "Practice Areas" },
  { href: "/pay-fees", label: "Pay Fees" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  function isActivePath(href: string) {
    if (href === "/") {
      return pathname === "/";
    }

    return pathname.startsWith(href);
  }

  return (
    <header className="sticky top-0 z-50 border-b border-stone-200 bg-stone-50/95 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4">
        <Link
          href="/"
          className="group"
          aria-label="Go to homepage"
          onClick={() => setIsOpen(false)}
        >
          <div className="text-lg font-bold tracking-tight text-slate-950">
            {advocate.name}
          </div>
          <div className="text-sm text-slate-600">
            {advocate.designation}, {advocate.court}
          </div>
        </Link>

        <nav
          className="hidden items-center gap-6 md:flex"
          aria-label="Primary navigation"
        >
          {navItems.map((item) => {
            const active = isActivePath(item.href);

            return (
              <Link
                key={item.href}
                href={item.href}
                className={`text-sm font-medium transition ${
                  active
                    ? "text-red-900"
                    : "text-slate-700 hover:text-red-900"
                }`}
              >
                {item.label}
              </Link>
            );
          })}

          <Link
            href="/pay-fees"
            className="rounded-full bg-red-900 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-red-950"
          >
            Pay Fees
          </Link>
        </nav>

        <button
          type="button"
          className="inline-flex items-center rounded-md border border-stone-300 px-3 py-2 text-sm font-medium text-slate-800 md:hidden"
          aria-label="Toggle navigation menu"
          aria-expanded={isOpen}
          onClick={() => setIsOpen((current) => !current)}
        >
          {isOpen ? "Close" : "Menu"}
        </button>
      </div>

      {isOpen ? (
        <div className="border-t border-stone-200 bg-stone-50 md:hidden">
          <nav
            className="mx-auto grid max-w-6xl gap-1 px-4 py-3"
            aria-label="Mobile navigation"
          >
            {navItems.map((item) => {
              const active = isActivePath(item.href);

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className={`rounded-lg px-3 py-3 text-base font-medium ${
                    active
                      ? "bg-red-50 text-red-900"
                      : "text-slate-700 hover:bg-stone-100 hover:text-red-900"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}

            <div className="mt-3 grid grid-cols-2 gap-3 border-t border-stone-200 pt-4">
              <a
                href={`tel:${advocate.phone}`}
                className="rounded-full border border-red-900 px-4 py-3 text-center text-sm font-semibold text-red-900"
              >
                Call
              </a>

              <a
                href={`https://wa.me/91${advocate.whatsapp}`}
                className="rounded-full bg-red-900 px-4 py-3 text-center text-sm font-semibold text-white"
              >
                WhatsApp
              </a>
            </div>
          </nav>
        </div>
      ) : null}
    </header>
  );
}