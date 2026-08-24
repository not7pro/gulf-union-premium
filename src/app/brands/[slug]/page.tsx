import styles from "./BrandMicrosite.module.css";
import Link from "next/link";
import { notFound } from "next/navigation";

const brandData = {
  original: { name: "Original", desc: "Our flagship fruit nectar. The authentic taste of nature, crafted for generations.", img: "https://images.unsplash.com/photo-1600271886742-f049cd451bba?q=80&w=2000&auto=format&fit=crop", formats: ["Glass Bottle", "PET", "Carton"] },
  klasse: { name: "KLASSE", desc: "A premium lifestyle beverage for the discerning palate.", img: "https://images.unsplash.com/photo-1622543925917-763c34d1a86e?q=80&w=2000&auto=format&fit=crop", formats: ["Glass Bottle"] },
  cobra: { name: "COBRA", desc: "Energy and vitality. The boost you need to conquer your day.", img: "https://images.unsplash.com/photo-1527661591450-b444d9c10e56?q=80&w=2000&auto=format&fit=crop", formats: ["Can", "PET"] },
  captain: { name: "Captain", desc: "A favorite for kids and families, packed with essential vitamins.", img: "https://images.unsplash.com/photo-1556881286-fc6915169721?q=80&w=2000&auto=format&fit=crop", formats: ["Carton", "PET"] },
  splash: { name: "Splash", desc: "Fizz up your fun! Vibrant, sparkling refreshment.", img: "https://images.unsplash.com/photo-1624517452488-04869289c4ca?q=80&w=2000&auto=format&fit=crop", formats: ["Glass Bottle"] },
  ori: { name: "Ori", desc: "Crafted for the modern palate, light and sophisticated.", img: "https://images.unsplash.com/photo-1603569283847-aa295f0d016a?q=80&w=2000&auto=format&fit=crop", formats: ["PET"] },
  "al-qobtan": { name: "Al Qobtan", desc: "Timeless refreshment. A classic staple for every home.", img: "https://images.unsplash.com/photo-1587841961476-eb34dcb6249e?q=80&w=2000&auto=format&fit=crop", formats: ["Carton"] }
};

export function generateStaticParams() {
  return [
    { slug: "original" },
    { slug: "klasse" },
    { slug: "cobra" },
    { slug: "captain" },
    { slug: "splash" },
    { slug: "ori" },
    { slug: "al-qobtan" },
  ];
}

export default function BrandPage({ params }: { params: { slug: string } }) {
  const brand = brandData[params.slug as keyof typeof brandData];
  
  if (!brand) {
    notFound();
  }

  return (
    <main>
      <section className={styles.brandHero}>
        <div className={styles.heroLayout}>
          <div className={styles.heroVisual}>
            <img src={brand.img} alt={brand.name} className={styles.productImage} />
          </div>
          
          <div className={styles.heroContent}>
            <Link href="/brands" className="eyebrow" style={{ textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '8px' }}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="square">
                <line x1="19" y1="12" x2="5" y2="12"></line>
                <polyline points="12 19 5 12 12 5"></polyline>
              </svg>
              ALL BRANDS
            </Link>
            <h1 className={styles.brandName}>{brand.name}®</h1>
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
    </main>
  );
}
