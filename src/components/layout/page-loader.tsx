'use client';

import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

/**
 * Brief entry veil. Deliberately short and dismissed on the first paint after
 * mount — a loader that outstays the content it covers is a cost, not a feature.
 */
export function PageLoader() {
  const [done, setDone] = useState(false);

  useEffect(() => {
    const timer = window.setTimeout(() => setDone(true), 620);
    return () => window.clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {!done && (
        <motion.div
          aria-hidden
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
          className="fixed inset-0 z-[60] grid place-items-center bg-background"
        >
          <motion.div
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35 }}
            className="flex flex-col items-center gap-4"
          >
            <span className="grid h-11 w-11 place-items-center rounded-xl bg-ink font-mono text-sm text-background">
              RS
            </span>
            <span className="h-px w-24 overflow-hidden bg-border">
              <motion.span
                initial={{ x: '-100%' }}
                animate={{ x: '0%' }}
                transition={{ duration: 0.6, ease: 'easeInOut' }}
                className="block h-full w-full bg-primary"
              />
            </span>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
