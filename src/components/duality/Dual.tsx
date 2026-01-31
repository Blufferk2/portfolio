'use client';

import { type ReactNode, type ElementType } from 'react';
import { useDualityMode } from '@/hooks/useDualityMode';

interface DualProps {
  official: ReactNode;
  honest: ReactNode;
  className?: string;
  as?: ElementType;
}

export function Dual({
  official,
  honest,
  className,
  as: Component = 'span',
}: DualProps) {
  const { mode } = useDualityMode();

  // For now, simple switch. Dither transition will be added in Fase 4.
  const content = mode === 'official' ? official : honest;

  return <Component className={className}>{content}</Component>;
}
