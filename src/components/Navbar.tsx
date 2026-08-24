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

  // Force dark navbar on homepage hero, unless scrolled
  const isHomepage = pathname === "/";
  const navClass = scrolled ? `${styles.navbar} ${styles.navbarScrolled}` : styles.navbar;

  return (
    <nav className={navClass} style={!scrolled && !isHomepage ? { color: 'var(--text-primary)' } : {}}>
      <Link href="/" className={styles.logo}>
        GULF UNION
      </Link>

      <div className={styles.navLinks}>
        <Link href="/who-we-are">Who We Are</Link>
        <Link href="/brands">Brands</Link>
        <Link href="/manufacturing">Manufacturing</Link>
        <Link href="/sustainability">Sustainability</Link>
        <Link href="/global-presence">Global Presence</Link>
        <Link href="/newsroom">Newsroom</Link>
      </div>

      <div className={styles.actions}>
        <button className={styles.langToggle}>AR</button>
        <ThemeToggle />
        <button className={styles.mobileMenuBtn}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="square">
            <line x1="3" y1="12" x2="21" y2="12"></line>
            <line x1="3" y1="6" x2="21" y2="6"></line>
            <line x1="3" y1="18" x2="21" y2="18"></line>
          </svg>
        </button>
      </div>
    </nav>
  );
}
