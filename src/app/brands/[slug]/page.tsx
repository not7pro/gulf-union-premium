import type { Metadata } from "next";
import styles from "./BrandMicrosite.module.css";
import Link from "next/link";
import { notFound } from "next/navigation";

const brandData: Record<string, { name: string; slogan: string; desc: string; img: string; groupImg: string; formats: string[]; color: string }> = {
  original: { name: "Original", slogan: "Enjoy the Taste of Quality!", desc: "Our flagship fruit nectar. The authentic taste of nature, crafted for generations.", img: "https://gulf-union.com/images/boriginal.png", groupImg: "https://gulf-union.com/images/boriginal%20grp.png", formats: ["PET", "Zero", "Carton", "Junior", "Cans", "Glass", "Iced Coffee"], color: "#1a1c75" },
  klasse: { name: "KLASSE", slogan: "The True German Taste!", desc: "A premium lifestyle malt beverage for the discerning palate.", img: "https://gulf-union.com/images/bklasse.png", groupImg: "https://gulf-union.com/images/bklasse%20grp.png", formats: ["Glass"], color: "#010101" },
  cobra: { name: "COBRA", slogan: "Stronger Than You Imagine.", desc: "Energy and vitality. The boost you need to conquer your day.", img: "https://gulf-union.com/images/bcobra.png", groupImg: "https://gulf-union.com/images/bcobra%20grp.png", formats: ["Can", "PET"], color: "#d62b24" },
  captain: { name: "Captain", slogan: "Every drop packed with fun!", desc: "A favorite for kids and families, packed with essential vitamins. Available in 250ml Strawberry, Raspberry and Blueberry.", img: "https://gulf-union.com/images/bcaptain.png", groupImg: "https://gulf-union.com/images/bcaptain%20grp.png", formats: ["250ml Strawberry", "250ml Raspberry", "250ml Blueberry"], color: "#8ac349" },
  splash: { name: "Splash", slogan: "Fizz up your fun!", desc: "Vibrant, sparkling refreshment for every moment.", img: "https://gulf-union.com/images/bsplash.png", groupImg: "https://gulf-union.com/images/bsplash%20grp.png", formats: ["Glass", "PET"], color: "#191f6d" },
  ori: { name: "Ori", slogan: "Flavor that reflects your vibe.", desc: "Crafted for the modern palate, light and sophisticated.", img: "https://gulf-union.com/images/bOri.png", groupImg: "https://gulf-union.com/images/bOri%20grp.png", formats: ["PET"], color: "#10b5e3" },
  "al-qobtan": { name: "Al Qobtan", slogan: "The choice that knows its way.", desc: "Timeless refreshment. A classic staple for every home.", img: "https://gulf-union.com/images/bal%20qobtan.png", groupImg: "https://gulf-union.com/images/bal%20qobtan%20grp.png", formats: ["Carton"], color: "#d62b24" }
};

export function generateStaticParams() {
  return Object.keys(brandData).map(slug => ({ slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const brand = brandData[params.slug];
  if (!brand) return {};
  return {
    title: `${brand.name}® — ${brand.slogan}`,
    description: `${brand.desc} Discover ${brand.name} by Gulf Union Foods Co.`,
    alternates: { canonical: `/brands/${params.slug}` },
    openGraph: {
      title: `${brand.name}® by Gulf Union Foods`,
      description: brand.desc,
      images: [{ url: brand.img, alt: `${brand.name} product` }],
    },
  };
}

export default function BrandPage({ params }: { params: { slug: string } }) {
  const brand = brandData[params.slug];
  
  if (!brand) {
    notFound();
  }

  return (
    <main>
      <section className={styles.brandHero}>
        <div className={styles.heroLayout}>
          <div className={styles.heroVisual}>
            <img 
              src={brand.groupImg} 
              alt={`${brand.name} product range including ${brand.formats.join(', ')} formats`} 
              className={styles.productImage} 
              fetchPriority="high"
            />
          </div>
          
          <div className={styles.heroContent}>
            <Link href="/brands" className="eyebrow" style={{ textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '8px' }} aria-label="Back to all brands">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="square" aria-hidden="true">
                <line x1="19" y1="12" x2="5" y2="12"></line>
                <polyline points="12 19 5 12 12 5"></polyline>
              </svg>
              ALL BRANDS
            </Link>
            <h1 className={styles.brandName}>{brand.name}®</h1>
            <p className={styles.brandDesc} style={{ fontSize: '1.8rem', fontWeight: 400, opacity: 0.9 }}>{brand.slogan}</p>
            <p className={styles.brandDesc}>{brand.desc}</p>
            
            <div className={styles.formats}>
              <span className="eyebrow">AVAILABLE FORMATS</span>
              <div className={styles.formatList}>
                {brand.formats.map(f => (
                  <span key={f} className={styles.formatTag}>{f}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Brand story section */}
      <section className="section" style={{ borderBottom: '1px solid var(--border-color)' }}>
        <div className="container" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '80px', alignItems: 'center' }}>
          <div>
            <span className="eyebrow">THE BRAND</span>
            <h2 className="section-heading" style={{ marginBottom: '24px' }}>{brand.slogan}</h2>
            <p className="body-text" style={{ marginBottom: '24px' }}>{brand.desc}</p>
            <p className="body-text">
              Part of the Gulf Union Foods portfolio since 1995, {brand.name} is manufactured across our state-of-the-art facilities and distributed to 42+ markets worldwide.
            </p>
          </div>
          <div style={{ display: 'flex', justifyContent: 'center', padding: '40px', background: 'var(--bg-secondary)' }}>
            <img 
              src={brand.img} 
              alt={`${brand.name} single product showcase`} 
              style={{ maxHeight: '400px', objectFit: 'contain' }}
              loading="lazy"
            />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section" style={{ textAlign: 'center', background: 'var(--bg-secondary)' }}>
        <h2 className="section-heading" style={{ marginBottom: '24px' }}>EXPLORE MORE BRANDS</h2>
        <Link href="/brands" className="cta-link" aria-label="View all Gulf Union brands">VIEW ALL BRANDS</Link>
      </section>
    </main>
  );
}
