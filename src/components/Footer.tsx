import Link from "next/link";
import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer} role="contentinfo">
      <div className={styles.footerGrid}>
        
        <div className={styles.footerBrand}>
          <img 
            src="/gulf-union-premium/images/logo.png" 
            alt="Gulf Union Foods Co. logo" 
            className={styles.footerLogo}
          />
          <p className={styles.footerDesc}>
            Gulf Union Foods Co. — Established in 1995. A leading Saudi beverage manufacturer serving 42+ global markets with premium juices, nectars, and drinks.
          </p>
          <div className={styles.footerContact}>
            <a href="tel:+966920022205" aria-label="Call Gulf Union Foods at +966 9200 22205">
              📞 +966 9200 22205
            </a>
            <a href="mailto:info@gulf-union.com" aria-label="Email Gulf Union Foods at info@gulf-union.com">
              ✉️ info@gulf-union.com
            </a>
          </div>
        </div>

        <div>
          <div className={styles.columnTitle}>Company</div>
          <div className={styles.footerLinks}>
            <Link href="/who-we-are">Who We Are</Link>
            <Link href="/manufacturing">Manufacturing</Link>
            <Link href="/sustainability">Sustainability</Link>
            <Link href="/global-presence">Global Presence</Link>
            <Link href="/newsroom">Newsroom</Link>
            <Link href="/careers">Careers</Link>
            <Link href="/contact">Contact Us</Link>
          </div>
        </div>

        <div>
          <div className={styles.columnTitle}>Our Brands</div>
          <div className={styles.footerLinks}>
            <Link href="/brands/original">Original®</Link>
            <Link href="/brands/klasse">KLASSE</Link>
            <Link href="/brands/cobra">COBRA</Link>
            <Link href="/brands/captain">Captain</Link>
            <Link href="/brands/splash">Splash</Link>
            <Link href="/brands/ori">Ori</Link>
            <Link href="/brands/al-qobtan">Al Qobtan</Link>
          </div>
        </div>

        <div>
          <div className={styles.columnTitle}>Get In Touch</div>
          <div className={styles.footerLinks}>
            <a href="tel:+966920022205">+966 9200 22205</a>
            <a href="mailto:info@gulf-union.com">info@gulf-union.com</a>
            <span style={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.85rem', marginTop: '12px' }}>
              Riyadh, Saudi Arabia
            </span>
          </div>
        </div>

      </div>

      <div className={styles.footerBottom}>
        <span>© {new Date().getFullYear()} Gulf Union Foods Co. All rights reserved.</span>
        <span>Riyadh, Saudi Arabia</span>
      </div>
    </footer>
  );
}
