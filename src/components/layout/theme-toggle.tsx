'use client';

import { Moon, Sun } from 'lucide-react';
import { useTheme } from 'next-themes';

import { useMounted } from '@/hooks/use-mounted';

export function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  const mounted = useMounted();

  const dark = mounted && resolvedTheme === 'dark';

  return (
    <button
      type="button"
      onClick={() => setTheme(dark ? 'light' : 'dark')}
      aria-label={dark ? 'Switch to light theme' : 'Switch to dark theme'}
      className="grid h-10 w-10 place-items-center rounded-full border text-muted-foreground transition-colors hover:text-foreground"
    >
      {/* Before hydration the resolved theme is unknown, so render a fixed icon
          rather than one that flips on mount. */}
      {dark ? <Moon className="h-4 w-4" /> : <Sun className="h-4 w-4" />}
    </button>
  );
}
