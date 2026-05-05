import { Button } from '@/components/ui/button'
import { ArrowRight, Check, Heart, Quote, Sparkles, Star } from 'lucide-react'
import Link from 'next/link'
import React from 'react'
import heroImg from "@/assets/hero-portrait.jpg";
import methodImg from "@/assets/method-visual.jpg";
import ebook from "@/assets/product-ebook.jpg";
import course from "@/assets/product-course.jpg";
import guide from "@/assets/product-guide.jpg";
import leadMagnet from "@/assets/lead-magnet.jpg";
import Image from 'next/image';

type Props = {}

const page = (props: Props) => {
  return (
  <>
    <section className="relative overflow-hidden">
        <div className="container-luxe py-12 md:py-20">
          
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 animate-fade-in">
              <p className="eyebrow mb-6">The Aligned Method™ · Est. 2018</p>
              <h1 className="font-serif text-5xl md:text-7xl lg:text-[5.5rem] leading-[1.02] tracking-tight">
                Stand <em className="text-blush-gradient">tall.</em><br />
                Move <em className="text-blush-gradient">freely.</em><br />
                Live <span className="text-gradient">unburdened.</span>
              </h1>
              <p className="mt-8 text-lg md:text-xl text-muted-foreground max-w-xl leading-relaxed font-light">
                Fix your posture and eliminate low back pain — without painkillers,
                without surgery, even if you sit all day. A quiet, deliberate method
                trusted by over 12,000 women worldwide.
              </p>
              <div className="mt-10 flex flex-wrap gap-4">
                <Button asChild variant="blush" size="lg">
                  <Link href="/program">
                    Begin the Program <ArrowRight />
                  </Link>
                </Button>
                <Button asChild variant="glass" size="lg">
                  <Link href="/free-guide">Get the Free Guide</Link>
                </Button>
              </div>
              <div className="mt-12 flex items-center gap-6 text-sm text-muted-foreground">
                <div className="flex -space-x-2">
                  {[0,1,2,3].map(i => (
                    <div key={i} className="h-9 w-9 rounded-full border-2 border-background " />
                  ))}
                </div>
                <div>
                  <div className="flex gap-0.5 text-blush mb-1">
                    {Array.from({length:5}).map((_,i) => <Star key={i} size={12} fill="currentColor" />)}
                  </div>
                  <span className="text-xs">Loved by 12,000+ women globally</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5 relative animate-scale-in">
              <div className="absolute -inset-8 bg-gradient-to-br from-blush/20 via-transparent to-rose-dust/10 blur-3xl rounded-full" />
              <div className="relative rounded-[2rem] overflow-hidden glass-card pink-glow">
                <Image
                src={heroImg}
                className='w-full'
                alt='hero image'
                />
              </div>
              <div className="absolute -bottom-6 -left-6 glass rounded-2xl p-5 max-w-[220px] hidden md:block animate-float">
                <div className="flex items-center gap-2 mb-2">
                  <Sparkles size={14} className="text-blush" />
                  <span className="text-xs eyebrow">Average result</span>
                </div>
                <p className="font-serif text-2xl">87% less pain</p>
                <p className="text-xs text-muted-foreground mt-1">in 6 weeks</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    
      <section className="py-12 border-y">
        <div className="container-luxe">
          <p className="eyebrow text-center mb-8">As featured in</p>
          <div className="flex flex-wrap justify-center items-center gap-x-14 gap-y-6 opacity-60">
            {["VOGUE", "GOOP", "Well+Good", "Harper's Bazaar", "MindBodyGreen", "ELLE"].map(p => (
              <span key={p} className="font-serif text-xl tracking-[0.2em]">{p}</span>
            ))}
          </div>
        </div>
      </section>

      
      <section className="py-32">
        <div className="container-luxe">
          <div className="max-w-3xl mb-20">
            <p className="eyebrow mb-5">If this sounds familiar</p>
            <h2 className="font-serif text-4xl md:text-6xl leading-tight">
              You've tried everything — and your body still <em className="text-blush-gradient">won't let you forget.</em>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { t: "The 3pm collapse", d: "By mid-afternoon your shoulders round, your lower back aches, and no amount of stretching seems to help." },
              { t: "The morning stiffness", d: "You wake up feeling 20 years older than you are. The first ten minutes are a careful negotiation with your spine." },
              { t: "The painkiller cycle", d: "Ibuprofen has become a daily ritual. You know it's not a solution — but you don't know what is." },
              { t: "The fear of movement", d: "You've stopped doing the things you love because you're afraid of 'making it worse.'" },
              { t: "The expensive merry-go-round", d: "Chiropractors. Massages. Specialists. Each one helps for a week. Then you're back where you started." },
              { t: "The slow shrinking", d: "You catch your reflection and barely recognize the posture. When did you start carrying yourself like this?" },
            ].map((p, i) => (
              <div key={i} className="glass-card rounded-3xl p-8 hover-lift">
                <Heart size={20} className="text-blush mb-4" />
                <h3 className="font-serif text-2xl mb-3">{p.t}</h3>
                <p className="text-muted-foreground leading-relaxed text-sm">{p.d}</p>
              </div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <p className="text-xl md:text-2xl font-serif italic text-blush-gradient max-w-2xl mx-auto">
              "I built this method for the woman who's done settling for 'manage it.'"
            </p>
          </div>
        </div>
      </section>

      
      <section className="py-32 relative">
        <div className="container-luxe">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div className="rounded-[2rem] overflow-hidden glass-card">
                <Image
                 src={methodImg}
                 alt='method img'
                />
              </div>
            </div>
            <div>
              <p className="eyebrow mb-5">Meet Lina</p>
              <h2 className="font-serif text-4xl md:text-5xl leading-tight mb-6">
                Twelve years.<br />Over 8,000 women.<br /><em className="text-blush-gradient">One quiet revolution</em> in spinal care.
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-5">
                I'm Lina Reeve — a clinical physiotherapist (MSc, OMT) who spent
                a decade in private practice before realizing the women I treated
                didn't need another appointment. They needed a method they could
                live with.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-8">
                The Aligned Method™ is the result. A precise, gentle, profoundly
                effective sequence that retrains posture from the inside out —
                refined across thousands of in-person sessions, now available
                wherever you are.
              </p>
              <Button asChild variant="outline" size="lg">
                <Link href="/about">Read her story <ArrowRight /></Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      
      <section className="py-32">
        <div className="container-luxe">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <p className="eyebrow mb-5">The signature framework</p>
            <h2 className="font-serif text-4xl md:text-6xl leading-tight">
              The <em className="text-blush-gradient">ALIGN</em> Method™
            </h2>
            <p className="mt-6 text-lg text-muted-foreground">
              Five precise stages that move you from chronic tension to lasting freedom.
              Designed for the modern woman, refined over a decade.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-5">
            {[
              { l: "A", t: "Assess", d: "Map your unique pattern of compensation. We start with awareness — never assumption." },
              { l: "L", t: "Lengthen", d: "Release the silent shorteners — psoas, pectorals, hip flexors — that pull you out of alignment." },
              { l: "I", t: "Integrate", d: "Wake up the deep stabilizers your nervous system has forgotten how to use." },
              { l: "G", t: "Ground", d: "Rebuild your foundation: feet, pelvis, breath. Posture begins from below." },
              { l: "N", t: "Nurture", d: "Daily 8-minute rituals that protect your progress for years to come." },
            ].map((s, i) => (
              <div key={i} className="glass-card rounded-3xl p-7 hover-lift relative overflow-hidden group">
                <div className="absolute -top-6 -right-6 font-serif text-[8rem] leading-none text-blush/10 group-hover:text-blush/20 transition-colors">{s.l}</div>
                <p className="eyebrow mb-3 relative">Stage 0{i+1}</p>
                <h3 className="font-serif text-3xl mb-3 relative">{s.t}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed relative">{s.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

    
      <section className="py-32">
        <div className="container-luxe">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div className="max-w-2xl">
              <p className="eyebrow mb-5">The collection</p>
              <h2 className="font-serif text-4xl md:text-6xl leading-tight">
                Premium tools for <em className="text-blush-gradient">a body you can trust.</em>
              </h2>
            </div>
            <Button asChild variant="glass">
              <Link href="/shop">View all products <ArrowRight /></Link>
            </Button>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { img: course, tag: "Flagship Course", title: "The ALIGN Program", price: "$397", desc: "8-week video course. The full method." },
              { img: ebook, tag: "Bestseller Ebook", title: "The Posture Reset", price: "$29", desc: "180 pages. The science, beautifully explained." },
              { img: guide, tag: "Daily Companion", title: "Daily Spine Rituals", price: "$19", desc: "PDF guide. 12-minute morning ritual." },
            ].map((p, i) => (
              <Link href="/shop" key={i} className="group block">
                <div className="rounded-3xl overflow-hidden glass-card hover-lift">
                  <div className="aspect-[4/5] overflow-hidden">
                    <Image 
                     src={p.img}
                     alt={p.title}
                    />
                  </div>
                  <div className="p-7">
                    <p className="eyebrow mb-2 text-blush">{p.tag}</p>
                    <h3 className="font-serif text-2xl mb-2">{p.title}</h3>
                    <p className="text-sm text-muted-foreground mb-4">{p.desc}</p>
                    <div className="flex items-center justify-between">
                      <span className="font-serif text-xl">{p.price}</span>
                      <span className="text-sm text-blush group-hover:translate-x-1 transition-transform inline-flex items-center gap-1">Explore <ArrowRight size={14} /></span>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

    
      <section className="py-32">
        <div className="container-luxe">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <p className="eyebrow mb-5">In her own words</p>
            <h2 className="font-serif text-4xl md:text-6xl">Quiet transformations.</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              { q: "After 11 years of chronic low back pain, I went six weeks without a single flare-up. I cried the first morning I woke up without bracing.", n: "Eleanor M.", r: "London, UK" },
              { q: "I've worked with three physios. None of them ever explained why I kept reinjuring. Lina did it in week one — and then she fixed it.", n: "Sofia R.", r: "Milan, Italy" },
              { q: "I'm a desk-bound consultant. I assumed pain was the price. I was wrong. This program gave me my body back.", n: "Priya K.", r: "Singapore" },
            ].map((t, i) => (
              <div key={i} className="glass-card rounded-3xl p-8 hover-lift">
                <Quote size={24} className="text-blush mb-5" />
                <p className="font-serif text-xl leading-relaxed mb-6">"{t.q}"</p>
                <div className="flex items-center gap-3 pt-5 border-t border-border/50">
                  <div className="h-10 w-10 rounded-full bg-gradient-to-br from-blush/60 to-rose-dust/60" />
                  <div>
                    <p className="text-sm font-medium">{t.n}</p>
                    <p className="text-xs text-muted-foreground">{t.r}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

    
      <section className="py-32">
        <div className="container-luxe">
          <div className="glass-card rounded-[2.5rem] overflow-hidden">
            <div className="grid lg:grid-cols-2 gap-0">
              <div className="relative bg-gradient-to-br from-blush/20 to-rose-dust/10 p-12 lg:p-16 flex items-center justify-center">
                <Image
                 src={leadMagnet}
                 alt="lead magnet"
                />
              </div>
              <div className="p-12 lg:p-16 flex flex-col justify-center">
                <p className="eyebrow mb-5 text-blush">Complimentary</p>
                <h2 className="font-serif text-4xl md:text-5xl leading-tight mb-5">
                  The 7-Day <em className="text-blush-gradient">Posture Reset</em>
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-8">
                  A free, beautifully designed guide. Seven mornings, eight minutes a day,
                  one quietly transformed body. Sent straight to your inbox.
                </p>
                <ul className="space-y-3 mb-8">
                  {["A daily 8-minute spine ritual", "The 3 postural mistakes draining your energy", "Lina's signature breathing reset"].map((b,i) => (
                    <li key={i} className="flex items-center gap-3 text-sm">
                      <Check size={16} className="text-blush shrink-0" /> {b}
                    </li>
                  ))}
                </ul>
                <form className="flex flex-col sm:flex-row gap-3">
                  <input
                    type="email"
                    placeholder="Your email address"
                    className="flex-1 h-12 rounded-full bg-input/60 border border-border px-5 text-sm focus:outline-none focus:border-blush/50 placeholder:text-muted-foreground"
                  />
                  <Button variant="blush" type="button" asChild>
                    <Link href="/free-guide">Send my guide</Link>
                  </Button>
                </form>
                <p className="text-xs text-muted-foreground mt-4">No spam. Unsubscribe in one click.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      
      <section className="py-32">
        <div className="container-luxe text-center">
          <p className="eyebrow mb-6">Your next chapter</p>
          <h2 className="font-serif text-5xl md:text-7xl leading-tight max-w-4xl mx-auto">
            A body that <em className="text-blush-gradient">carries you</em><br />
            instead of the other way around.
          </h2>
          <p className="mt-8 text-lg text-muted-foreground max-w-xl mx-auto">
            Whichever path you choose, you don't have to keep negotiating with your spine.
          </p>
          <div className="mt-10 flex flex-wrap gap-4 justify-center">
            <Button asChild variant="blush" size="lg">
              <Link href="/program">Start the Program</Link>
            </Button>
            <Button asChild variant="glass" size="lg">
              <Link href="/consultation">Book a 1:1 Session</Link>
            </Button>
          </div>
        </div>
      </section>
      </>
      
  )
}

export default page