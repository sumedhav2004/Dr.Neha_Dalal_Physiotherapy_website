import { Button } from "@/components/ui/button";
import { Check, Sparkles } from "lucide-react";
import leadMagnet from "@/assets/lead-magnet.jpg";
import React from 'react'
import Image from "next/image";

type Props = {}

const page = (props: Props) => {
  return (
    <>
      <section className="container-luxe py-12 md:py-20">
      <div className="grid lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-7 animate-fade-in">
          <p className="eyebrow mb-6 text-blush">Complimentary · No strings</p>
          <h1 className="font-serif text-5xl md:text-7xl leading-[1.05]">
            The 7-Day<br /><em className="text-blush-gradient">Posture Reset.</em>
          </h1>
          <p className="mt-6 text-lg md:text-xl text-muted-foreground max-w-xl leading-relaxed">
            A beautifully designed, free seven-day guide. Eight minutes a morning.
            One quietly transformed body. Sent straight to your inbox — with nothing
            to buy, ever, unless you want to.
          </p>

          <ul className="mt-10 space-y-4 max-w-md">
            {[
              "A daily 8-minute spine ritual you can do in your pyjamas",
              "The 3 postural mistakes silently draining your energy",
              "Lina's signature breathing reset (60 seconds, anywhere)",
              "A printable tracker so progress feels real",
              "A short audio companion in Lina's voice",
            ].map((b, i) => (
              <li key={i} className="flex gap-3 text-foreground/85">
                <Check size={18} className="text-blush shrink-0 mt-1" /> <span>{b}</span>
              </li>
            ))}
          </ul>

          <form className="mt-10 max-w-lg flex flex-col sm:flex-row gap-3">
            <input type="text" placeholder="First name" className="sm:w-1/3 h-12 rounded-full bg-input/60 border border-border px-5 text-sm focus:outline-none focus:border-blush/50" />
            <input type="email" placeholder="Email address" className="flex-1 h-12 rounded-full bg-input/60 border border-border px-5 text-sm focus:outline-none focus:border-blush/50" />
            <Button variant="blush" size="lg" type="button">Send it</Button>
          </form>
          <p className="text-xs text-muted-foreground mt-4">
            We respect your inbox. Unsubscribe anytime. No spam, ever.
          </p>
        </div>

        <div className="lg:col-span-5 relative animate-scale-in">
          <div className="absolute -inset-10 bg-gradient-to-br from-blush/30 to-rose-dust/10 blur-3xl rounded-full" />
          <div className="relative rounded-[2rem] overflow-hidden glass-card pink-glow animate-float">
            <Image
            src={leadMagnet}
            alt="lead-magnet"
             />
          </div>
        </div>
      </div>
    </section>

    <section className="py-32">
      <div className="container-luxe grid md:grid-cols-3 gap-8">
        {[
          { t: "Built by a clinician", d: "Every cue, every breath sequence is drawn from over 8,000 in-person treatment hours." },
          { t: "8 minutes — really", d: "Designed for women who don't have an extra hour. Slot it between coffee and your first email." },
          { t: "A genuine gift", d: "No bait-and-switch. No upsells in the inbox. If you want more, you'll come find us." },
        ].map((c, i) => (
          <div key={i} className="glass-card rounded-3xl p-8 hover-lift">
            <Sparkles className="text-blush mb-4" size={20} />
            <h3 className="font-serif text-2xl mb-3">{c.t}</h3>
            <p className="text-muted-foreground leading-relaxed text-sm">{c.d}</p>
          </div>
        ))}
      </div>
    </section>
    </>
  )
}

export default page