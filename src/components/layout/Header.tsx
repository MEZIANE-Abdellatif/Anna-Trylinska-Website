"use client";

import Image from "next/image";
import { useState } from "react";
import { navLinks } from "@/lib/content";
import { MaterialIcon } from "@/components/ui/MaterialIcon";

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="fixed top-0 z-50 h-20 w-full border-b border-outline-variant/30 bg-surface/90 shadow-sm backdrop-blur-md">
      <nav className="mx-auto flex h-full max-w-container-max items-center justify-between px-margin-mobile md:px-gutter">
        <a href="#" className="relative flex shrink-0 items-center">
          <Image
            src="/images/anna-trylinska-logo.jpg"
            alt="Anna Trylińska — Immigration Lawyer Poland"
            width={2000}
            height={1443}
            className="h-10 w-auto md:h-12"
            priority
          />
        </a>

        <ul className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                className="font-label-md text-label-md text-on-surface-variant transition-colors duration-300 hover:text-primary"
                href={link.href}
              >
                {link.label}
              </a>
            </li>
          ))}
          <li>
            <button
              type="button"
              className="rounded-lg bg-primary px-6 py-2.5 font-label-md text-on-primary transition-all hover:brightness-110 active:scale-95"
            >
              Book a Consultation
            </button>
          </li>
        </ul>

        <button
          type="button"
          className="text-primary md:hidden"
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileOpen}
          onClick={() => setMobileOpen((open) => !open)}
        >
          <MaterialIcon name={mobileOpen ? "close" : "menu"} />
        </button>
      </nav>

      {mobileOpen && (
        <div className="border-t border-outline-variant/30 bg-surface md:hidden">
          <ul className="space-y-1 px-margin-mobile py-4">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  className="block py-3 font-label-md text-label-md text-on-surface-variant transition-colors hover:text-primary"
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li className="pt-2">
              <button
                type="button"
                className="w-full rounded-lg bg-primary px-6 py-3 font-label-md text-on-primary transition-all hover:brightness-110 active:scale-95"
              >
                Book a Consultation
              </button>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
