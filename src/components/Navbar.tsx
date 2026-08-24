"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import ThemeToggle from "./ThemeToggle";
import styles from "./Navbar.module.css";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  return (
    <nav className={`${styles.navbar} ${scrolled ? styles.scrolled : ""}`}>
      <div className={styles.container}>
        <Link href="/" className={styles.logo}>
          <img src="https://gulf-union.com/images/logo.png" alt="Gulf Union Foods" />
        </Link>
        
        <div className={`${styles.links} ${mobileMenuOpen ? styles.mobileOpen : ""}`}>
          <Link href="/who-we-are" className={`${styles.link} ${pathname === "/who-we-are" ? styles.active : ""}`}>Who We Are</Link>
          <Link href="/brands" className={`${styles.link} ${pathname.startsWith("/brands") ? styles.active : ""}`}>Brands</Link>
          <Link href="/manufacturing" className={`${styles.link} ${pathname === "/manufacturing" ? styles.active : ""}`}>Manufacturing</Link>
          <Link href="/sustainability" className={`${styles.link} ${pathname === "/sustainability" ? styles.active : ""}`}>Sustainability</Link>
          <Link href="/global-presence" className={`${styles.link} ${pathname === "/global-presence" ? styles.active : ""}`}>Global Presence</Link>
          <Link href="/newsroom" className={`${styles.link} ${pathname === "/newsroom" ? styles.active : ""}`}>Newsroom</Link>
          <Link href="/careers" className={`${styles.link} ${pathname === "/careers" ? styles.active : ""}`}>Careers</Link>
          <Link href="/contact" className={`${styles.link} ${pathname === "/contact" ? styles.active : ""}`}>Contact</Link>
          
          <div className={styles.actions}>
            <button className={styles.langToggle}>EN / AR</button>
            <ThemeToggle />
          </div>
        </div>

        <button 
          className={styles.mobileToggle}
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle Menu"
        >
          {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>
    </nav>
  );
}
