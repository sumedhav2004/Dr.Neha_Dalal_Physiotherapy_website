import { Button } from '@/components/ui/button'
import { ArrowRight, Check, Clock, PlayCircle, Sparkles } from "lucide-react";
import React from 'react'
import programImg from "@/assets/program-visual.jpg";
import Image from 'next/image';

const modules = [
  { w: "Week 1", t: "Awareness", d: "Map your unique postural blueprint. Understand exactly which patterns are causing your pain — and why nothing has worked yet." },
  { w: "Week 2", t: "Release", d: "Targeted releases for the four 'silent shorteners' (psoas, pec minor, suboccipitals, hip flexors). 12 minutes per day." },
  { w: "Week 3", t: "Breath & Core", d: "Reconnect your diaphragm to your deep core. The single most overlooked piece of low-back rehab." },
  { w: "Week 4", t: "The Pelvis", d: "Restore neutral pelvic alignment. This is where the magic happens — most students notice dramatic shifts here." },
  { w: "Week 5", t: "Spinal Rotation", d: "Reintroduce graceful, fluid rotation through the thoracic spine. Re-claim movement you forgot you had." },
  { w: "Week 6", t: "Standing Tall", d: "Integrate everything into how you sit, stand, walk, and lift. Your new default." },
  { w: "Week 7", t: "Strength", d: "Gentle, precise strengthening for the deep stabilizers that hold your alignment in place permanently." },
  { w: "Week 8", t: "The Ritual", d: "Lock in your daily 8-minute maintenance practice. Designed to protect your progress for the next 30 years." },
];


type Props = {}

const page = (props: Props) => {
  return (
    <>
      <section className="container-luxe py-12 md:py-20">
      <div className="grid lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-7 animate-fade-in">
          <p className="eyebrow mb-6">The flagship program · 8 weeks</p>
          <h1 className="font-serif text-5xl md:text-7xl leading-[1.05]">
            The <em className="text-blush-gradient">ALIGN</em><br />Program
          </h1>
          <p className="mt-6 text-lg md:text-xl text-muted-foreground max-w-xl leading-relaxed">
            The complete eight-week course for women who are ready to stop managing
            their pain and start truly resolving it. The same method Lina uses with
            her private clients — refined for home practice.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <Button variant="blush" size="lg" asChild>
              <a href="#enroll">Enroll now <ArrowRight /></a>
            </Button>
            <Button variant="glass" size="lg">
              <PlayCircle /> Watch the trailer
            </Button>
          </div>
          <div className="mt-10 flex flex-wrap gap-8 text-sm text-muted-foreground">
            <div className="flex items-center gap-2"><Clock size={14} className="text-blush" /> 12 min / day</div>
            <div className="flex items-center gap-2"><Sparkles size={14} className="text-blush" /> Lifetime access</div>
            <div className="flex items-center gap-2"><Check size={14} className="text-blush" /> 60-day guarantee</div>
          </div>
        </div>
        <div className="lg:col-span-5 relative animate-scale-in">
          <div className="absolute -inset-10 bg-gradient-to-br from-blush/20 to-transparent blur-3xl rounded-full" />
          <div className="relative rounded-[2rem] overflow-hidden glass-card pink-glow">
            <Image
             src={programImg}
             alt='program-image'
            />
          </div>
        </div>
      </div>
    </section>

    {/* WHO IT'S FOR */}
    <section className="py-32">
      <div className="container-luxe grid lg:grid-cols-2 gap-16">
        <div className="glass-card rounded-3xl p-10">
          <p className="eyebrow mb-5 text-blush">Who this is for</p>
          <h3 className="font-serif text-3xl mb-6">You'll thrive here if...</h3>
          <ul className="space-y-4">
            {[
              "You sit at a desk most of the day and feel it in your back, neck, or shoulders",
              "You've tried physio, chiro, massage — and the relief never lasts",
              "You want to understand your body, not just be 'fixed' by someone else",
              "You're committed to 12 minutes a day for a real, lasting result",
              "You're done with painkillers as a lifestyle",
            ].map((p, i) => (
              <li key={i} className="flex gap-3 text-foreground/85">
                <Check size={18} className="text-blush shrink-0 mt-1" /> <span>{p}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="glass-card rounded-3xl p-10">
          <p className="eyebrow mb-5">What you'll achieve</p>
          <h3 className="font-serif text-3xl mb-6">By week eight, expect to...</h3>
          <ul className="space-y-4">
            {[
              "Wake up without that grinding morning stiffness",
              "Sit through a full workday without bracing or shifting",
              "Stand visibly taller — friends and family will notice",
              "Reclaim activities you'd quietly given up on",
              "Trust your body to support you, not betray you",
            ].map((p, i) => (
              <li key={i} className="flex gap-3 text-foreground/85">
                <Sparkles size={18} className="text-blush shrink-0 mt-1" /> <span>{p}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>

    {/* MODULE BREAKDOWN */}
    <section className="py-32">
      <div className="container-luxe">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="eyebrow mb-5">Your 8-week journey</p>
          <h2 className="font-serif text-4xl md:text-6xl">A guided sequence, not a library.</h2>
          <p className="mt-5 text-muted-foreground">
            Every module unlocks at the right time, in the right order. No overwhelm. No guesswork.
          </p>
        </div>

        <div className="space-y-4 max-w-4xl mx-auto">
          {modules.map((m, i) => (
            <div key={i} className="glass-card rounded-2xl p-7 md:p-8 grid md:grid-cols-12 gap-6 items-center hover-lift">
              <div className="md:col-span-2">
                <p className="eyebrow text-blush">{m.w}</p>
                <p className="font-serif text-3xl mt-1">0{i+1}</p>
              </div>
              <div className="md:col-span-9">
                <h3 className="font-serif text-2xl mb-2">{m.t}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{m.d}</p>
              </div>
              <div className="md:col-span-1 flex md:justify-end">
                <PlayCircle className="text-blush/60" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* PRICING */}
    <section id="enroll" className="py-32">
      <div className="container-luxe">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="eyebrow mb-5">Investment</p>
          <h2 className="font-serif text-4xl md:text-6xl">Two thoughtful ways to begin.</h2>
        </div>
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <div className="glass-card rounded-3xl p-10 hover-lift">
            <p className="eyebrow mb-3">Self-paced</p>
            <h3 className="font-serif text-3xl mb-2">The ALIGN Program</h3>
            <p className="text-muted-foreground text-sm mb-6">For the disciplined self-starter.</p>
            <div className="flex items-baseline gap-2 mb-8">
              <span className="font-serif text-5xl">$397</span>
              <span className="text-sm text-muted-foreground">one-time</span>
            </div>
            <ul className="space-y-3 mb-10 text-sm">
              {["Full 8-week curriculum", "60+ HD video lessons", "Printable workbook & rituals", "Lifetime access & updates", "Private community"].map((f,i) => (
                <li key={i} className="flex gap-3"><Check size={16} className="text-blush" /> {f}</li>
              ))}
            </ul>
            <Button variant="outline" size="lg" className="w-full">Enroll in the Program</Button>
          </div>

          <div className="glass-card rounded-3xl p-10 relative hover-lift border-blush/30 pink-glow">
            <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gradient-to-r from-blush to-rose-dust text-ink text-xs px-4 py-1.5 rounded-full tracking-wider">MOST CHOSEN</div>
            <p className="eyebrow mb-3 text-blush">Guided + Private</p>
            <h3 className="font-serif text-3xl mb-2">The ALIGN Program · Atelier</h3>
            <p className="text-muted-foreground text-sm mb-6">Program + 3 private 1:1 sessions with Lina.</p>
            <div className="flex items-baseline gap-2 mb-8">
              <span className="font-serif text-5xl">$897</span>
              <span className="text-sm text-muted-foreground">one-time</span>
            </div>
            <ul className="space-y-3 mb-10 text-sm">
              {["Everything in the Program", "3× private 1:1 video sessions with Lina", "Custom postural assessment", "Personalized adjustments throughout", "Direct messaging access for 90 days"].map((f,i) => (
                <li key={i} className="flex gap-3"><Check size={16} className="text-blush" /> {f}</li>
              ))}
            </ul>
            <Button variant="blush" size="lg" className="w-full">Reserve your spot</Button>
            <p className="text-xs text-muted-foreground text-center mt-4">Limited to 12 women per cohort.</p>
          </div>
        </div>

        <p className="text-center text-sm text-muted-foreground mt-10">
          60-day money-back guarantee · Pay in 3 with Klarna or Affirm
        </p>
      </div>
    </section>
    </>
  )
}

export default page