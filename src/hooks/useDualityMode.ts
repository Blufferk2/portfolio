'use client';

import { useContext } from 'react';
import { DualityContext } from '@/components/duality/DualityProvider';

export function useDualityMode() {
  const context = useContext(DualityContext);

  if (!context) {
    throw new Error('useDualityMode must be used within a DualityProvider');
  }

  return context;
}
