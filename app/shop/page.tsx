import React from 'react'
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import course from "@/assets/product-course.jpg";
import ebook from "@/assets/product-ebook.jpg";
import guide from "@/assets/product-guide.jpg";
import mini from "@/assets/product-mini.jpg";
import Link from 'next/link';
import Image from 'next/image';

type Props = {}
const products = [
  { img: course, cat: "Course", title: "The ALIGN Program", price: "$397", desc: "The complete 8-week video curriculum. Lina's signature method, broken into 12-minute daily sessions you can actually keep up with.", cta: "Learn More", link: "/program" },
  { img: ebook, cat: "Ebook", title: "The Posture Reset", price: "$29", desc: "180 illustrated pages on the science of posture, written like an essay collection — beautiful, deeply researched, and impossible to put down.", cta: "Buy Now" },
  { img: guide, cat: "PDF Guide", title: "Daily Spine Rituals", price: "$19", desc: "A pocket-sized guide to Lina's 12-minute morning ritual. Print it, frame it, follow it. Your spine will thank you within a week.", cta: "Buy Now" },
  { img: mini, cat: "Mini Resource", title: "10-Minute Lower Back Reset", price: "$9", desc: "A single-session video and printable card. Use it the moment your back starts complaining. Fast, gentle, devastatingly effective.", cta: "Buy Now" },
  { img: ebook, cat: "Ebook", title: "Sit Like a Queen", price: "$24", desc: "The desk-worker's manifesto. How to set up your workspace, your body, and your day so sitting stops costing you so much.", cta: "Buy Now" },
  { img: guide, cat: "PDF Guide", title: "The Sleep Alignment Audit", price: "$15", desc: "A guided self-assessment of how you sleep — and the small, exquisite changes that turn your bed into a recovery tool.", cta: "Buy Now" },
];

const page = (props: Props) => {
  return (
    <>
    <section className="container-luxe py-12 md:py-20 text-center max-w-3xl mx-auto">
      <p className="eyebrow mb-6">The collection</p>
      <h1 className="font-serif text-5xl md:text-7xl leading-[1.05]">
        The <em className="text-blush-gradient">Atelier</em>
      </h1>
      <p className="mt-6 text-lg text-muted-foreground">
        Considered, beautifully made digital tools for the woman building a body she trusts.
        Every piece is born from clinical practice and refined for daily life.
      </p>
    </section>

    <section className="container-luxe pb-32">
      <div className="flex flex-wrap gap-3 justify-center mb-16">
        {["All", "Courses", "Ebooks", "PDF Guides", "Mini Resources"].map((c, i) => (
          <button key={c} className={`px-5 py-2 rounded-full text-sm transition-all ${i === 0 ? "bg-blush text-ink" : "glass hover:border-blush/30"}`}>
            {c}
          </button>
        ))}
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {products.map((p, i) => (
          <article key={i} className="glass-card rounded-3xl overflow-hidden hover-lift group flex flex-col">
            <div className="aspect-[4/5] overflow-hidden bg-gradient-to-br from-blush/10 to-transparent">
              <Image
               src={p.img}
               alt={p.title}
              />
            </div>
            <div className="p-7 flex-1 flex flex-col">
              <p className="eyebrow text-blush mb-2">{p.cat}</p>
              <h3 className="font-serif text-2xl mb-3">{p.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed mb-6 flex-1">{p.desc}</p>
              <div className="flex items-center justify-between pt-5 border-t border-border/50">
                <span className="font-serif text-2xl">{p.price}</span>
                {p.link ? (
                  <Button variant="blush" size="sm" asChild><Link href={p.link}>{p.cta} <ArrowRight size={14} /></Link></Button>
                ) : (
                  <Button variant="blush" size="sm">{p.cta} <ArrowRight size={14} /></Button>
                )}
              </div>
            </div>
          </article>
        ))}
      </div>

      <div className="mt-24 glass-card rounded-3xl p-12 text-center">
        <p className="eyebrow mb-4 text-blush">Bundle & save</p>
        <h2 className="font-serif text-3xl md:text-5xl mb-5">The Complete Library</h2>
        <p className="text-muted-foreground max-w-xl mx-auto mb-8">
          Every ebook, every PDF guide, every mini resource. One curated bundle.
        </p>
        <p className="font-serif text-4xl mb-2"><span className="line-through text-muted-foreground text-2xl mr-3">$96</span> $59</p>
        <Button variant="blush" size="lg" className="mt-6">Get the Library</Button>
      </div>
    </section>
    </>
  )
}

export default page