'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { ArrowDown, ArrowRight, FileText, MapPin } from 'lucide-react';

import { SocialLinks } from '@/components/common/social-links';
import { Button } from '@/components/ui/button';
import { profile } from '@/content/profile';

function RotatingRole() {
  const [index, setIndex] = useState(0);
  const still = useReducedMotion();

  useEffect(() => {
    if (still) return;
    const timer = window.setInterval(
      () => setIndex((value) => (value + 1) % profile.rotatingRoles.length),
      2600,
    );
    return () => window.clearInterval(timer);
  }, [still]);

  return (
    <span className="relative inline-flex h-[1.3em] items-center overflow-hidden align-bottom">
      {/* aria-live keeps the rotation audible to screen readers without
          announcing every frame of the animation. */}
      <span className="sr-only" aria-live="polite">
        {profile.rotatingRoles[index]}
      </span>
      <motion.span
        key={index}
        initial={{ y: still ? 0 : '100%', opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: '-100%', opacity: 0 }}
        transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
        aria-hidden
        className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent"
      >
        {profile.rotatingRoles[index]}
      </motion.span>
    </span>
  );
}

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-32 sm:pt-40">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="aurora absolute inset-0 animate-aurora-drift" />
        <div className="blueprint absolute inset-0" />
      </div>

      <div className="container">
        <div className="grid items-center gap-12 lg:grid-cols-[1.15fr_.85fr] lg:gap-16">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            >
              <p className="inline-flex items-center gap-2 rounded-full border bg-background/60 px-3 py-1.5 text-xs font-medium text-muted-foreground backdrop-blur">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-60" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
                </span>
                {profile.availability}
              </p>

              <h1 className="mt-6 font-display text-4xl font-semibold leading-[1.05] tracking-tightest text-balance sm:text-6xl lg:text-[4.25rem]">
                {profile.headline}
              </h1>

              <p className="mt-6 max-w-xl text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg">
                {profile.subheadline}
              </p>

              <p className="mt-5 font-mono text-sm text-muted-foreground">
                <span className="opacity-60">focus:</span> <RotatingRole />
              </p>

              <div className="mt-8 flex flex-wrap items-center gap-3">
                <Button asChild size="lg">
                  <a href="#work">
                    View work
                    <ArrowRight className="h-4 w-4" />
                  </a>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <a href="#contact">Let&rsquo;s work together</a>
                </Button>
                {/* Only offered when the PDF actually exists — see profile.ts. */}
                {profile.resumeAvailable && (
                  <Button asChild variant="ghost" size="lg">
                    <a href={profile.resumePath} download>
                      <FileText className="h-4 w-4" />
                      Resume
                    </a>
                  </Button>
                )}
              </div>

              <div className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-3">
                <SocialLinks />
                <p className="flex items-center gap-1.5 text-sm text-muted-foreground">
                  <MapPin className="h-3.5 w-3.5" aria-hidden />
                  {profile.location}
                </p>
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="relative mx-auto w-full max-w-sm lg:max-w-none"
          >
            <div className="absolute -inset-4 -z-10 rounded-[2rem] bg-gradient-to-br from-primary/20 to-accent/10 blur-2xl" />
            <div className="relative overflow-hidden rounded-[1.75rem] border shadow-lift">
              <Image
                src="/portrait.jpg"
                alt={`${profile.name}, ${profile.title}`}
                width={880}
                height={1100}
                priority
                sizes="(max-width: 1024px) 384px, 480px"
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-background/95 via-background/60 to-transparent p-5 pt-16">
                <p className="font-display font-semibold">{profile.name}</p>
                <p className="text-sm text-muted-foreground">
                  {profile.title} · {profile.company}
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        <div className="mt-16 flex justify-center pb-8">
          <a
            href="#about"
            aria-label="Scroll to about section"
            className="group flex flex-col items-center gap-2 text-xs text-muted-foreground"
          >
            <span className="font-mono uppercase tracking-[0.2em]">Scroll</span>
            <span className="grid h-9 w-9 place-items-center rounded-full border transition-transform group-hover:translate-y-1">
              <ArrowDown className="h-3.5 w-3.5" aria-hidden />
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}
