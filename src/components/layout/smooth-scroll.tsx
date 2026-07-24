'use client';

import { useEffect } from 'react';
import Lenis from 'lenis';

/**
 * Momentum scrolling. Disabled entirely when the visitor has asked for reduced
 * motion — hijacking the scroll is exactly the kind of thing that setting means
 * to switch off.
 */
export function SmoothScroll() {
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    const lenis = new Lenis({ duration: 1.05, smoothWheel: true });
    let frame = 0;

    const raf = (time: number) => {
      lenis.raf(time);
      frame = requestAnimationFrame(raf);
    };
    frame = requestAnimationFrame(raf);

    // Anchor links must go through Lenis or they jump instantly mid-animation.
    const onClick = (event: MouseEvent) => {
      const anchor = (event.target as HTMLElement).closest('a[href^="#"]');
      if (!anchor) return;
      const id = anchor.getAttribute('href')?.slice(1);
      if (!id) return;
      const target = document.getElementById(id);
      if (!target) return;
      event.preventDefault();
      lenis.scrollTo(target, { offset: -80 });
    };

    document.addEventListener('click', onClick);
    return () => {
      document.removeEventListener('click', onClick);
      cancelAnimationFrame(frame);
      lenis.destroy();
    };
  }, []);

  return null;
}
