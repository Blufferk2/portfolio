'use client';

import {
  createContext,
  useCallback,
  useLayoutEffect,
  useSyncExternalStore,
  type ReactNode,
} from 'react';

export type DualityMode = 'official' | 'honest';

interface DualityContextValue {
  mode: DualityMode;
  toggle: () => void;
  setMode: (mode: DualityMode) => void;
}

export const DualityContext = createContext<DualityContextValue | null>(null);

const STORAGE_KEY = 'duality-mode';

// Store for syncing with localStorage
let listeners: Array<() => void> = [];
let currentMode: DualityMode = 'official';

function getSnapshot(): DualityMode {
  return currentMode;
}

function getServerSnapshot(): DualityMode {
  return 'official';
}

function subscribe(listener: () => void) {
  listeners.push(listener);
  return () => {
    listeners = listeners.filter((l) => l !== listener);
  };
}

function emitChange() {
  for (const listener of listeners) {
    listener();
  }
}

function setStoredMode(mode: DualityMode) {
  currentMode = mode;
  if (typeof window !== 'undefined') {
    localStorage.setItem(STORAGE_KEY, mode);
    document.documentElement.setAttribute('data-mode', mode);
  }
  emitChange();
}

// Initialize from localStorage on first load
if (typeof window !== 'undefined') {
  const stored = localStorage.getItem(STORAGE_KEY);
  if (stored === 'official' || stored === 'honest') {
    currentMode = stored;
  }
}

interface DualityProviderProps {
  children: ReactNode;
  defaultMode?: DualityMode;
}

export function DualityProvider({
  children,
  defaultMode = 'official',
}: DualityProviderProps) {
  const mode = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);

  // Set initial mode on mount
  useLayoutEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored === 'official' || stored === 'honest') {
      currentMode = stored;
      document.documentElement.setAttribute('data-mode', stored);
    } else {
      currentMode = defaultMode;
      document.documentElement.setAttribute('data-mode', defaultMode);
    }
    emitChange();
  }, [defaultMode]);

  const toggle = useCallback(() => {
    setStoredMode(currentMode === 'official' ? 'honest' : 'official');
  }, []);

  const setMode = useCallback((newMode: DualityMode) => {
    setStoredMode(newMode);
  }, []);

  return (
    <DualityContext.Provider value={{ mode, toggle, setMode }}>
      {children}
    </DualityContext.Provider>
  );
}
