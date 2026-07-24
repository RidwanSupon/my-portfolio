'use client';

import { useEffect, useRef } from 'react';

import { useMediaQuery } from '@/hooks/use-media-query';

/**
 * A soft light that follows the pointer.
 *
 * Rendered only for devices with a real pointer and no reduced-motion request,
 * and positioned by writing CSS custom properties directly on the element —
 * running this through React state would re-render the tree on every mousemove.
 */
export function CursorGlow() {
  const ref = useRef<HTMLDivElement>(null);
  const fine = useMediaQuery('(pointer: fine)');
  const still = useMediaQuery('(prefers-reduced-motion: reduce)');

  useEffect(() => {
    if (!fine || still) return;
    const node = ref.current;
    if (!node) return;

    let raf = 0;
    const onMove = (event: MouseEvent) => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        node.style.setProperty('--x', `${event.clientX}px`);
        node.style.setProperty('--y', `${event.clientY}px`);
        node.style.opacity = '1';
      });
    };
    const onLeave = () => {
      node.style.opacity = '0';
    };

    window.addEventListener('mousemove', onMove, { passive: true });
    document.addEventListener('mouseleave', onLeave);
    return () => {
      window.removeEventListener('mousemove', onMove);
      document.removeEventListener('mouseleave', onLeave);
      cancelAnimationFrame(raf);
    };
  }, [fine, still]);

  if (!fine || still) return null;

  return (
    <div
      ref={ref}
      aria-hidden
      className="pointer-events-none fixed inset-0 z-0 opacity-0 transition-opacity duration-500"
      style={{
        background:
          'radial-gradient(22rem 22rem at var(--x, 50%) var(--y, 50%), hsl(var(--primary) / 0.07), transparent 70%)',
      }}
    />
  );
}
