import { Button } from '@/components/ui/button'
import { ArrowRight, Calendar, Check, Clock, ShieldCheck } from 'lucide-react'
import Image from 'next/image'
import React from 'react'
import img from "@/assets/consultation-visual.jpg";

type Props = {}

const page = (props: Props) => {
  return (
    <>
    <section className="container-luxe py-12 md:py-20">
      <div className="grid lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-7 animate-fade-in">
          <p className="eyebrow mb-6">Private 1:1 Consultations</p>
          <h1 className="font-serif text-5xl md:text-7xl leading-[1.05]">
            An hour with Lina,<br /><em className="text-blush-gradient">undivided.</em>
          </h1>
          <p className="mt-6 text-lg md:text-xl text-muted-foreground max-w-xl leading-relaxed">
            For the woman who wants the most precise, most personal version of this work.
            A private virtual session — every minute designed around your body, your patterns,
            your life.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <Button variant="blush" size="lg" asChild>
              <a href="#book">Book a Session <ArrowRight /></a>
            </Button>
            <Button variant="glass" size="lg">View availability</Button>
          </div>
          <div className="mt-10 flex flex-wrap gap-8 text-sm text-muted-foreground">
            <div className="flex items-center gap-2"><Clock size={14} className="text-blush" /> 60 minutes</div>
            <div className="flex items-center gap-2"><Calendar
             size={14} className="text-blush" /> Virtual, worldwide</div>
            <div className="flex items-center gap-2"><ShieldCheck size={14} className="text-blush" /> Limited to 8/month</div>
          </div>
        </div>
        <div className="lg:col-span-5 relative animate-scale-in">
          <div className="absolute -inset-10 bg-linear-to-br from-blush/20 to-transparent blur-3xl rounded-full" />
          <div className="relative rounded-[2rem] overflow-hidden glass-card pink-glow">
            <Image
             src={img}
             alt='image'
            />
          </div>
        </div>
      </div>
    </section>

    <section className="py-32">
      <div className="container-luxe grid lg:grid-cols-3 gap-8">
        {[
          { t: "Who it's for", d: "People with persistent or complex postural pain who want a precise, personalized roadmap. Especially powerful for those who've tried multiple practitioners without lasting results." },
          { t: "What happens in session", d: "A full postural assessment via video. We map your patterns, identify the root drivers of your pain, and build a fully individualized 30-day protocol you'll leave with." },
          { t: "Outcomes", d: "Clarity on why your pain has persisted. A precise daily protocol. Direct guidance on movement, ergonomics, and breath. Most clients report meaningful change within two weeks." },
        ].map((c, i) => (
          <div key={i} className="glass-card rounded-3xl p-10 hover-lift">
            <p className="eyebrow mb-4 text-blush">0{i+1}</p>
            <h3 className="font-serif text-3xl mb-4">{c.t}</h3>
            <p className="text-muted-foreground leading-relaxed">{c.d}</p>
          </div>
        ))}
      </div>
    </section>

    <section id="book" className="py-32">
      <div className="container-luxe max-w-3xl">
        <div className="text-center mb-12">
          <p className="eyebrow mb-5">Reserve your time</p>
          <h2 className="font-serif text-4xl md:text-6xl">A space held just for you.</h2>
        </div>

        <div className="glass-card rounded-3xl p-10 md:p-14">
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div>
              <label className="eyebrow block mb-2">First name</label>
              <input className="w-full h-12 rounded-full bg-input/60 border border-border px-5 text-sm focus:outline-none focus:border-blush/50" />
            </div>
            <div>
              <label className="eyebrow block mb-2">Last name</label>
              <input className="w-full h-12 rounded-full bg-input/60 border border-border px-5 text-sm focus:outline-none focus:border-blush/50" />
            </div>
            <div className="md:col-span-2">
              <label className="eyebrow block mb-2">Email</label>
              <input type="email" className="w-full h-12 rounded-full bg-input/60 border border-border px-5 text-sm focus:outline-none focus:border-blush/50" />
            </div>
            <div className="md:col-span-2">
              <label className="eyebrow block mb-2">Briefly, what would you like to work on?</label>
              <textarea rows={4} className="w-full rounded-3xl bg-input/60 border border-border px-5 py-4 text-sm focus:outline-none focus:border-blush/50 resize-none" />
            </div>
          </div>

          <div className="flex items-center justify-between flex-wrap gap-4 pt-6 border-t border-border/50">
            <div>
              <p className="font-serif text-3xl">$295</p>
              <p className="text-xs text-muted-foreground">per 60-minute session</p>
            </div>
            <Button variant="blush" size="lg">Request your session <ArrowRight /></Button>
          </div>

          <div className="mt-8 grid sm:grid-cols-3 gap-4 text-xs text-muted-foreground">
            {["Confidential & secure", "Reschedule with 48h notice", "Recording sent after session"].map(t => (
              <div key={t} className="flex items-center gap-2"><Check size={12} className="text-blush" /> {t}</div>
            ))}
          </div>
        </div>
      </div>
    </section>
    </>
  )
}

export default page