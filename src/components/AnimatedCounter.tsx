"use client";

import { useEffect, useRef, useState } from "react";

interface AnimatedCounterProps {
  from?: number;
  to: number;
  duration?: number;
  suffix?: string;
  prefix?: string;
  /** Legacy prop name alias for `to` */
  end?: number;
}

export default function AnimatedCounter({ from = 0, to, end, duration = 2, suffix = "", prefix = "" }: AnimatedCounterProps) {
  const target = to ?? end ?? 0;
  const [count, setCount] = useState(from);
  const [hasAnimated, setHasAnimated] = useState(false);
  const nodeRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (hasAnimated) return;
    
    const node = nodeRef.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated) {
            setHasAnimated(true);
            
            let startTime: number;
            const durationMs = duration * 1000;

            const animate = (timestamp: number) => {
              if (!startTime) startTime = timestamp;
              const progress = Math.min((timestamp - startTime) / durationMs, 1);
              // easeOutExpo
              const easeProgress = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
              setCount(Math.floor(easeProgress * (target - from) + from));
              if (progress < 1) {
                requestAnimationFrame(animate);
              }
            };

            requestAnimationFrame(animate);
          }
        });
      },
      { threshold: 0.2, rootMargin: "-50px" }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [from, target, duration, hasAnimated]);

  return (
    <span ref={nodeRef} aria-label={`${prefix}${target.toLocaleString()}${suffix}`}>
      {prefix}{count.toLocaleString()}{suffix}
    </span>
  );
}
