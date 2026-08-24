"use client";

import { useEffect, useRef, useState } from "react";
import styles from "./Timeline.module.css";

const HISTORY = [
  { year: "1995", title: "COMPANY FOUNDING", desc: "The journey of Gulf Union Foods Co. officially begins.", img: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2000&auto=format&fit=crop" },
  { year: "1999", title: "THE FIRST PLANT", desc: "Launch of Plant 1, establishing our core manufacturing foundation.", img: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2000&auto=format&fit=crop" },
  { year: "2000", title: "ORIGINAL® LAUNCH", desc: "Our flagship brand hits the market, setting a new standard for juices.", img: "https://images.unsplash.com/photo-1600271886742-f049cd451bba?q=80&w=2000&auto=format&fit=crop" },
  { year: "2003", title: "CAPTAIN® LAUNCH", desc: "Introducing a dedicated line for families and children.", img: "https://images.unsplash.com/photo-1556881286-fc6915169721?q=80&w=2000&auto=format&fit=crop" },
  { year: "2010", title: "PLANT 3 COMMISSIONED", desc: "Massive expansion of our production capabilities.", img: "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?q=80&w=2000&auto=format&fit=crop" }
];

export default function Timeline() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;
      const items = containerRef.current.querySelectorAll(`.${styles.timelineItem}`);
      
      items.forEach((item, index) => {
        const rect = item.getBoundingClientRect();
        // If the item is in the top half of the screen
        if (rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2) {
          setActiveIndex(index);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className={styles.timelineContainer} ref={containerRef}>
      {HISTORY.map((item, i) => (
        <div key={item.year} className={styles.timelineItem}>
          <div className={styles.overlay}></div>
          <img src={item.img} alt={item.year} className={styles.backgroundImage} style={{ 
            opacity: activeIndex === i ? 1 : 0.4,
            transform: activeIndex === i ? 'scale(1)' : 'scale(1.05)',
            transition: 'opacity 1s ease, transform 1s ease'
          }} />
          
          <div className={styles.content}>
            <div className={styles.year}>{item.year}</div>
            <h2 className={styles.title}>{item.title}</h2>
            <p className={styles.description}>{item.desc}</p>
          </div>
        </div>
      ))}

      <div className={styles.progressIndicator}>
        {HISTORY.map((_, i) => (
          <div 
            key={i} 
            className={`${styles.dot} ${activeIndex === i ? styles.dotActive : ""}`} 
          />
        ))}
      </div>
    </section>
  );
}
