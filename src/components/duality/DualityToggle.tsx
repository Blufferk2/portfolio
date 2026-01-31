'use client';

import { useEffect } from 'react';
import { useDualityMode } from '@/hooks/useDualityMode';

export function DualityToggle() {
  const { mode, toggle } = useDualityMode();

  // Keyboard shortcut: D to toggle
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Don't trigger if user is typing in an input
      if (
        e.target instanceof HTMLInputElement ||
        e.target instanceof HTMLTextAreaElement
      ) {
        return;
      }

      if (e.key === 'd' || e.key === 'D') {
        toggle();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [toggle]);

  return (
    <button
      onClick={toggle}
      className="fixed bottom-6 right-6 z-50 flex h-10 w-10 items-center justify-center rounded-full border border-[var(--border)] bg-[var(--bg)] text-xs font-medium text-[var(--text-secondary)] transition-colors hover:border-[var(--text-muted)] hover:text-[var(--text)]"
      aria-label={`Switch to ${mode === 'official' ? 'honest' : 'official'} mode`}
      title="Press D to toggle"
    >
      {mode === 'official' ? 'O' : 'H'}
    </button>
  );
}
