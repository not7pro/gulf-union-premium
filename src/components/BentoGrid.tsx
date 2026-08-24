"use client";

import { useEffect, useRef, useState } from "react";
import styles from "./BentoGrid.module.css";
import gsap from "gsap";

interface Metric {
  title: string;
  value: string;
  span?: number;
  highlight?: boolean;
}

const METRICS: Metric[] = [
  { title: "EMPLOYEES WORLDWIDE", value: "1,300+", highlight: true },
  { title: "WORLD-CLASS FACTORIES", value: "4" },
  { title: "PRODUCTION LINES", value: "17" },
  { title: "LITERS / YEAR", value: "500M+", span: 2, highlight: true },
  { title: "FACILITY SIZE (m²)", value: "65,000" },
  { title: "COUNTRIES EXPORTED TO", value: "42+" },
];

export default function BentoGrid() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Interactive glowing cursor effect
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        setMousePosition({
          x: e.clientX - rect.left,
          y: e.clientY - rect.top,
        });
      }
    };

    const container = containerRef.current;
    if (container) {
      container.addEventListener("mousemove", handleMouseMove);
    }
    
    return () => {
      if (container) container.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div 
      className={styles.bentoWrapper} 
      ref={containerRef}
      style={{
        '--mouse-x': `${mousePosition.x}px`,
        '--mouse-y': `${mousePosition.y}px`
      } as React.CSSProperties}
    >
      <div className={styles.bentoHeader}>
        <span className="eyebrow" style={{ color: 'rgba(255,255,255,0.6)' }}>ENTERPRISE SCALE</span>
        <h2 className={styles.bentoTitle}>THE FOUNDATION BEHIND THE BRANDS</h2>
      </div>

      <div className={styles.grid}>
        {METRICS.map((metric, i) => (
          <div 
            key={i} 
            className={`${styles.card} ${metric.span === 2 ? styles.span2 : ''} ${metric.highlight ? styles.highlightCard : ''}`}
          >
            <div className={styles.cardGlow}></div>
            <div className={styles.cardContent}>
              <div className={styles.metricValue}>{metric.value}</div>
              <div className={styles.metricTitle}>{metric.title}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
