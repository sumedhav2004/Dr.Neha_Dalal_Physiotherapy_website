import React from 'react'
import { Mail } from "lucide-react";
import Link from 'next/link';
import { FaInstagram } from 'react-icons/fa';

type Props = {}

const Footer = (props: Props) => {
  return (
    <footer className="mt-32 border-t border-border/60">
    <div className="container-luxe py-20">
      <div className="grid md:grid-cols-4 gap-12">
        <div className="md:col-span-2">
          <div className="flex items-center gap-2 mb-5">
            <span className="h-8 w-8 rounded-full bg-gradient-to-br from-blush to-rose-dust" />
            <span className="font-serif text-2xl">Dr. Neha Dalal</span>
          </div>
          <p className="text-muted-foreground max-w-md leading-relaxed">
            A modern approach to posture and pain — designed for people who refuse to
            accept tension as a way of life.
          </p>
          <div className="flex gap-3 mt-6">
            <a href="#" className="h-10 w-10 rounded-full glass flex items-center justify-center hover:text-blush transition-colors" aria-label="Instagram">
              <FaInstagram />
            </a>
            <a href="#" className="h-10 w-10 rounded-full glass flex items-center justify-center hover:text-blush transition-colors" aria-label="Email">
              <Mail size={16} />
            </a>
          </div>
        </div>

        <div>
          <h4 className="eyebrow mb-5">Explore</h4>
          <ul className="space-y-3 text-sm">
            <li><Link href="/program" className="text-foreground/75 hover:text-blush transition">The Program</Link></li>
            <li><Link href="/shop" className="text-foreground/75 hover:text-blush transition">Digital Shop</Link></li>
            <li><Link href="/consultation" className="text-foreground/75 hover:text-blush transition">Consultations</Link></li>
            <li><Link href="/about" className="text-foreground/75 hover:text-blush transition">About Lina</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="eyebrow mb-5">Resources</h4>
          <ul className="space-y-3 text-sm">
            <li><Link href="/free-guide" className="text-foreground/75 hover:text-blush transition">Free Posture Guide</Link></li>
            <li><a href="#" className="text-foreground/75 hover:text-blush transition">Journal</a></li>
            <li><a href="#" className="text-foreground/75 hover:text-blush transition">Press</a></li>
            <li><a href="#" className="text-foreground/75 hover:text-blush transition">Contact</a></li>
          </ul>
        </div>
      </div>

      <div className="divider-soft my-12" />

      <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-muted-foreground">
        <p>© {new Date().getFullYear()} Neha Dalal · The Aligned Method™. All rights reserved.</p>
        <p className="tracking-wider">Crafted with intention.</p>
      </div>
    </div>
  </footer>
  )
}

export default Footer