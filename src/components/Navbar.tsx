"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import ThemeToggle from "./ThemeToggle";
import styles from "./Navbar.module.css";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isHomepage = pathname === "/" || pathname === "/gulf-union-premium" || pathname === "/gulf-union-premium/";
  const navClass = scrolled ? `${styles.navbar} ${styles.navbarScrolled}` : styles.navbar;

  return (
    <nav className={navClass} style={!scrolled && !isHomepage ? { color: 'var(--text-primary)' } : {}} role="navigation" aria-label="Main navigation">
      <Link href="/" className={styles.logo} aria-label="Gulf Union Foods — Home">
        <img 
          src="/gulf-union-premium/images/logo.png" 
          alt="Gulf Union Foods Co. logo" 
          style={{ height: '40px', width: 'auto' }}
        />
      </Link>

      <div className={styles.navLinks}>
        <Link href="/who-we-are">Who We Are</Link>
        <Link href="/brands">Brands</Link>
        <Link href="/manufacturing">Manufacturing</Link>
        <Link href="/sustainability">Sustainability</Link>
        <Link href="/global-presence">Global Presence</Link>
        <Link href="/newsroom">Newsroom</Link>
        <Link href="/contact">Contact</Link>
      </div>

      <div className={styles.actions}>
        <button 
          className={styles.langToggle} 
          title="Arabic version coming soon"
          aria-label="Switch to Arabic — coming soon"
          onClick={() => alert('Arabic version coming soon. الموقع العربي قريبًا.')}
        >
          AR
        </button>
        <ThemeToggle />
        <button className={styles.mobileMenuBtn} aria-label="Open mobile menu">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="square" aria-hidden="true">
            <line x1="3" y1="12" x2="21" y2="12"></line>
            <line x1="3" y1="6" x2="21" y2="6"></line>
            <line x1="3" y1="18" x2="21" y2="18"></line>
          </svg>
        </button>
      </div>
    </nav>
  );
}
