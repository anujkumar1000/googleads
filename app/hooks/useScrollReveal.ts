'use client';

import { useEffect, useRef, useState } from 'react';

/**
 * Smart scroll reveal hook:
 * - Animates when element enters viewport
 * - Stays stable after animation completes (no disappearing on hover)
 * - Re-animates when element fully leaves viewport and comes back
 */
export function useScrollReveal<T extends HTMLElement = HTMLDivElement>(
  options?: { threshold?: number; rootMargin?: string }
) {
  const ref = useRef<T>(null);
  const [visible, setVisible] = useState(false);
  const { threshold = 0.15, rootMargin = '0px 0px -100px 0px' } = options || {};

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
        } else {
          // Only hide if element is COMPLETELY out of viewport
          if (entry.intersectionRatio === 0) {
            setVisible(false);
          }
        }
      },
      {
        threshold: [0, threshold],
        rootMargin,
      }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold, rootMargin]);

  return { ref, visible };
}