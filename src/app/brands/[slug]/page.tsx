import { notFound } from "next/navigation";
import styles from "./BrandMicrosite.module.css";

const brandData = {
  original: { name: "Original®", desc: "Enjoy the Taste of Quality. The pure, unadulterated taste of nature's finest fruits.", img: "https://images.unsplash.com/photo-1622597467836-f38240662f8b?q=80&w=2000&auto=format&fit=crop", formats: ["Carton", "PET", "Glass"] },
  klasse: { name: "KLASSE", desc: "The True German Taste. Premium non-alcoholic malt.", img: "https://images.unsplash.com/photo-1614316654877-3e13d1000fbd?q=80&w=2000&auto=format&fit=crop", formats: ["Glass Bottle"] },
  cobra: { name: "COBRA", desc: "Unleash the power. High-performance energy drink.", img: "https://images.unsplash.com/photo-1622543925917-763c34d1a86e?q=80&w=2000&auto=format&fit=crop", formats: ["Cans", "PET"] },
  captain: { name: "Captain", desc: "Packed with fun! Delicious juices kids love.", img: "https://images.unsplash.com/photo-1546173159-315724a31696?q=80&w=2000&auto=format&fit=crop", formats: ["Carton"] },
  splash: { name: "Splash", desc: "Fizz up your fun! Vibrant, sparkling refreshment.", img: "https://images.unsplash.com/photo-1624517452488-04869289c4ca?q=80&w=2000&auto=format&fit=crop", formats: ["Glass Bottle"] },
  ori: { name: "Ori", desc: "Crafted for the modern palate, light and sophisticated.", img: "https://images.unsplash.com/photo-1603569283847-aa295f0d016a?q=80&w=2000&auto=format&fit=crop", formats: ["PET"] },
  "al-qobtan": { name: "Al Qobtan", desc: "Timeless refreshment. A classic staple for every home.", img: "https://images.unsplash.com/photo-1587841961476-eb34dcb6249e?q=80&w=2000&auto=format&fit=crop", formats: ["Carton"] }
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
  
  if (!brand) return notFound();

  return (
    <div className={styles.microsite}>
      <header className={styles.hero} style={{ backgroundImage: `url(${brand.img})` }}>
        <div className={styles.overlay}></div>
        <div className={styles.content}>
          <h1 className="text-hero">{brand.name}</h1>
          <p className={styles.desc}>{brand.desc}</p>
        </div>
      </header>

      <section className={styles.details}>
        <div className={styles.container}>
          <div className={styles.formatBox}>
            <h3>Packaging Formats</h3>
            <ul>
              {brand.formats.map(f => <li key={f}>{f}</li>)}
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}
