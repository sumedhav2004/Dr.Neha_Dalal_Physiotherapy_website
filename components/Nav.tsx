"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const links = [
  { href: "/", label: "Home" },
  { href: "/program", label: "Program" },
  { href: "/shop", label: "Shop" },
  { href: "/consultation", label: "Consultation" },
  { href: "/about", label: "About" },
  { href: "/free-guide", label: "Free Guide" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  // scroll effect
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // close mobile menu on route change
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        scrolled ? "py-3" : "py-5"
      }`}
    >
      <div className="container-luxe">
        <div
          className={`flex items-center justify-between rounded-full px-5 md:px-7 py-3 transition-all duration-500 ${
            scrolled ? "glass-card shadow-card" : ""
          }`}
        >
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <span className="h-8 w-8 rounded-full bg-gradient-to-br from-blush to-rose-dust pink-glow group-hover:scale-110 transition-transform" />
            <span className="font-serif text-xl tracking-wide">
              Dr. Neha Dalal
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-8">
            {links.map((l) => {
              const isActive =
                pathname === l.href ||
                (l.href !== "/" && pathname.startsWith(l.href));

              return (
                <Link
                  key={l.href}
                  href={l.href}
                  className={`text-sm tracking-wide transition-colors relative after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-px after:bg-blush after:transition-all ${
                    isActive
                      ? "text-blush after:w-full"
                      : "text-foreground/75 hover:text-blush after:w-0 hover:after:w-full"
                  }`}
                >
                  {l.label}
                </Link>
              );
            })}
          </nav>

          {/* CTA */}
          <div className="hidden lg:block">
            <Button asChild variant="blush" size="sm">
              <Link href="/consultation">Book a Session</Link>
            </Button>
          </div>

          {/* Mobile toggle */}
          <button
            onClick={() => setOpen((v) => !v)}
            className="lg:hidden text-foreground p-2"
            aria-label="Menu"
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {open && (
          <div className="lg:hidden mt-3 glass-card rounded-3xl p-6">
            <nav className="flex flex-col gap-4">
              {links.map((l) => {
                const isActive =
                  pathname === l.href ||
                  (l.href !== "/" && pathname.startsWith(l.href));

                return (
                  <Link
                    key={l.href}
                    href={l.href}
                    className={`text-base ${
                      isActive ? "text-blush" : "text-foreground/80"
                    }`}
                  >
                    {l.label}
                  </Link>
                );
              })}

              <Button asChild variant="blush" className="mt-2">
                <Link href="/consultation">Book a Session</Link>
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}