'use client';

import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';

import { ThemeToggle } from '@/components/layout/theme-toggle';
import { Button } from '@/components/ui/button';
import { useActiveSection } from '@/hooks/use-active-section';
import { profile } from '@/content/profile';
import { navigation } from '@/lib/site';
import { cn } from '@/lib/utils';

const SECTION_IDS = navigation.map((item) => item.id);

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const active = useActiveSection(SECTION_IDS);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // A menu that stays open while the page scrolls underneath feels broken.
  useEffect(() => {
    if (!open) return;
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  return (
    <header className="fixed inset-x-0 top-0 z-40">
      <div
        className={cn(
          'transition-all duration-300',
          scrolled ? 'glass shadow-soft' : 'bg-transparent',
        )}
      >
        <div className="container flex h-16 items-center gap-4">
          <a href="#top" className="group flex items-center gap-2.5 font-display font-semibold">
            <span className="grid h-8 w-8 place-items-center rounded-lg bg-ink font-mono text-xs text-background">
              RS
            </span>
            <span className="hidden sm:block">{profile.shortName}</span>
          </a>

          <nav aria-label="Primary" className="ml-auto hidden items-center gap-1 lg:flex">
            {navigation.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                aria-current={active === item.id ? 'true' : undefined}
                className={cn(
                  'relative rounded-full px-3.5 py-2 text-sm transition-colors',
                  active === item.id
                    ? 'text-foreground'
                    : 'text-muted-foreground hover:text-foreground',
                )}
              >
                {active === item.id && (
                  <motion.span
                    layoutId="nav-active"
                    className="absolute inset-0 rounded-full bg-muted"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
                <span className="relative">{item.label}</span>
              </a>
            ))}
          </nav>

          <div className="ml-auto flex items-center gap-2 lg:ml-0">
            <ThemeToggle />
            <Button asChild size="sm" className="hidden sm:inline-flex">
              <a href="#contact">Let&rsquo;s talk</a>
            </Button>
            <button
              type="button"
              onClick={() => setOpen((value) => !value)}
              aria-label={open ? 'Close menu' : 'Open menu'}
              aria-expanded={open}
              className="grid h-10 w-10 place-items-center rounded-full border lg:hidden"
            >
              {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.nav
            aria-label="Mobile"
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
            className="glass border-t lg:hidden"
          >
            <ul className="container grid gap-1 py-4">
              {navigation.map((item) => (
                <li key={item.id}>
                  <a
                    href={`#${item.id}`}
                    onClick={() => setOpen(false)}
                    className={cn(
                      'block rounded-xl px-4 py-3 text-sm font-medium transition-colors',
                      active === item.id ? 'bg-muted text-foreground' : 'text-muted-foreground',
                    )}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
