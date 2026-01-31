'use client';

import { useCallback, useEffect, useRef, useState } from 'react';

interface UseHoldOptions {
  /** Time in ms before hold is triggered */
  threshold?: number;
  /** Callback when hold starts */
  onHoldStart?: () => void;
  /** Callback when hold ends */
  onHoldEnd?: () => void;
  /** Callback during hold with progress (0-1) */
  onHoldProgress?: (progress: number) => void;
}

interface UseHoldReturn {
  isHolding: boolean;
  holdProgress: number;
  handlers: {
    onMouseDown: () => void;
    onMouseUp: () => void;
    onMouseLeave: () => void;
    onTouchStart: () => void;
    onTouchEnd: () => void;
  };
}

export function useHold(options: UseHoldOptions = {}): UseHoldReturn {
  const {
    threshold = 500,
    onHoldStart,
    onHoldEnd,
    onHoldProgress,
  } = options;

  const [isHolding, setIsHolding] = useState(false);
  const [holdProgress, setHoldProgress] = useState(0);

  const startTimeRef = useRef<number | null>(null);
  const frameRef = useRef<number | null>(null);
  const triggeredRef = useRef(false);
  const isActiveRef = useRef(false);
  const thresholdRef = useRef(threshold);

  // Store values in refs to avoid dependency issues
  const onHoldStartRef = useRef(onHoldStart);
  const onHoldEndRef = useRef(onHoldEnd);
  const onHoldProgressRef = useRef(onHoldProgress);

  useEffect(() => {
    thresholdRef.current = threshold;
    onHoldStartRef.current = onHoldStart;
    onHoldEndRef.current = onHoldEnd;
    onHoldProgressRef.current = onHoldProgress;
  }, [threshold, onHoldStart, onHoldEnd, onHoldProgress]);

  // Animation loop using ref to avoid self-reference issues
  useEffect(() => {
    function tick() {
      if (startTimeRef.current === null || !isActiveRef.current) return;

      const elapsed = Date.now() - startTimeRef.current;
      const progress = Math.min(elapsed / thresholdRef.current, 1);

      setHoldProgress(progress);
      onHoldProgressRef.current?.(progress);

      if (progress >= 1 && !triggeredRef.current) {
        triggeredRef.current = true;
        setIsHolding(true);
        onHoldStartRef.current?.();
      }

      if (progress < 1 && isActiveRef.current) {
        frameRef.current = requestAnimationFrame(tick);
      }
    }

    // Store tick function for external access
    (window as unknown as { __holdTick?: () => void }).__holdTick = tick;

    return () => {
      delete (window as unknown as { __holdTick?: () => void }).__holdTick;
    };
  }, []);

  const startHold = useCallback(() => {
    isActiveRef.current = true;
    startTimeRef.current = Date.now();
    triggeredRef.current = false;
    setHoldProgress(0);

    // Start animation loop
    function tick() {
      if (startTimeRef.current === null || !isActiveRef.current) return;

      const elapsed = Date.now() - startTimeRef.current;
      const progress = Math.min(elapsed / thresholdRef.current, 1);

      setHoldProgress(progress);
      onHoldProgressRef.current?.(progress);

      if (progress >= 1 && !triggeredRef.current) {
        triggeredRef.current = true;
        setIsHolding(true);
        onHoldStartRef.current?.();
      }

      if (progress < 1 && isActiveRef.current) {
        frameRef.current = requestAnimationFrame(tick);
      }
    }

    frameRef.current = requestAnimationFrame(tick);
  }, []);

  const endHold = useCallback(() => {
    isActiveRef.current = false;

    if (frameRef.current !== null) {
      cancelAnimationFrame(frameRef.current);
      frameRef.current = null;
    }

    startTimeRef.current = null;

    if (triggeredRef.current) {
      onHoldEndRef.current?.();
    }

    setIsHolding(false);
    setHoldProgress(0);
    triggeredRef.current = false;
  }, []);

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      if (frameRef.current !== null) {
        cancelAnimationFrame(frameRef.current);
      }
    };
  }, []);

  return {
    isHolding,
    holdProgress,
    handlers: {
      onMouseDown: startHold,
      onMouseUp: endHold,
      onMouseLeave: endHold,
      onTouchStart: startHold,
      onTouchEnd: endHold,
    },
  };
}
