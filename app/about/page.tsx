import { Button } from '@/components/ui/button'
import { ArrowRight } from 'lucide-react'
import Link from 'next/link'
import React from 'react'
import aboutImg from "@/assets/Dr_Neha_Dalal_About_Image.avif";
import Image from 'next/image';

type Props = {}

const page = (props: Props) => {
  return (

    <section className="container-luxe py-12 md:py-20">
      <div className="grid lg:grid-cols-12 gap-12 items-start">
        <div className="lg:col-span-5 lg:sticky lg:top-32 animate-scale-in">
          <div className="rounded-[2rem] overflow-hidden glass-card pink-glow">
            <Image
             src={aboutImg}
             className='w-full'
             alt='About Image'
            />
          </div>
          <div className="mt-8 glass-card rounded-2xl p-6">
            <p className="eyebrow mb-3 text-blush">Credentials</p>
            <ul className="space-y-2 text-sm text-foreground/80">
              <li>. Clinical Physiotherapist (BPT, MPT, musculoskeletal)</li>
              <li>. Spent 4 years</li>
              <li>· Lower back pain and Posture correction specialist</li>
              <li>· 500+ in-person treatment hours</li>
              <li></li>
            </ul>
          </div>
        </div>

        <div className="lg:col-span-7 animate-fade-in space-y-12">
          <div>
            <p className="eyebrow mb-6">About Neha</p>
            <h1 className="font-serif text-5xl md:text-6xl leading-[1.05]">
              I never wanted to be the kind of physio who <em className="text-blush-gradient">'managed' you</em> for the rest of your life.
            </h1>
          </div>

          <div className="space-y-6 text-lg text-foreground/85 leading-relaxed font-light">
            <p>
              I trained at PGI Rohtak because I wanted to understand the body
              the way a watchmaker understands a movement — every part, every tension,
              every cause and consequence.
            </p>
            <p>
              For some years, I ran a small private practice online. I saw the
              same patterns over and over again: brilliant people — working professionals, mothers,
              founders, dancers — quietly negotiating with their bodies every single day.
              Booking the appointment. Feeling better for a week. Coming back. Booking
              again.
            </p>
            <p>
              I started to feel something close to grief about it. These people didn't
              need <em>me.</em> They needed a method they could carry with them.
            </p>
            <p className="font-serif text-2xl text-blush-gradient italic">
              So I built one.
            </p>
            <p>
              The Aligned Method™ is what I taught my private clients between sessions.
              The cues. The micro-rituals. The breath patterns. The single mindset shift
              that, more than any technique, separates the people who heal from the people
              who don't.
            </p>
            <p>
              I refined it over thousands of hours of one-to-one practice.
            </p>
          </div>

          <div className="divider-soft" />

          <div>
            <p className="eyebrow mb-5">My philosophy</p>
            <h2 className="font-serif text-3xl md:text-4xl mb-6">Three quiet beliefs.</h2>
            <div className="space-y-6">
              {[
                { t: "Your body is not the problem.", d: "It is responding — intelligently — to the way you've been asking it to live. Change the ask, change the response." },
                { t: "Gentleness is not weakness.", d: "The most profound somatic change happens at low intensity, with high precision, repeated daily. Force is rarely the answer." },
                { t: "You should never need me forever.", d: "My job is to make myself unnecessary. The work is over when you can carry it on your own — and you can." },
              ].map((b, i) => (
                <div key={i} className="glass-card rounded-2xl p-7">
                  <h3 className="font-serif text-2xl mb-2 text-blush">{b.t}</h3>
                  <p className="text-muted-foreground leading-relaxed">{b.d}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="divider-soft" />

          {/* <div>
            <p className="eyebrow mb-5">Off the clock</p>
            <p className="text-foreground/80 leading-relaxed">
              I live in a small flat in Lisbon with too many books, a stubborn rescue
              greyhound named Otto, and a daily 6am sea-swim habit I am quietly evangelical
              about. I bake bread badly. I read poetry well. I am still, after all this,
              learning to slow down.
            </p>
          </div> */}

          <div className="pt-8 flex flex-wrap gap-4">
            <Button variant="blush" size="lg" asChild>
              <Link href="/program">Begin the program <ArrowRight /></Link>
            </Button>
            <Button variant="glass" size="lg" asChild>
              <Link href="/consultation">Work with me 1:1</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default page