import type { Metadata } from "next";
import PlantSelector from "@/components/PlantSelector";

export const metadata: Metadata = {
  title: "Manufacturing Excellence — 4 World-Class Facilities",
  description: "Gulf Union Foods operates 4 manufacturing facilities with 17 production lines across 65,000 m², producing 500 million liters annually.",
  alternates: { canonical: "/manufacturing" },
};

export default function Manufacturing() {
  return (
    <main style={{ backgroundColor: 'var(--bg-primary)', minHeight: '100vh' }}>
      <header className="section" style={{ 
        height: '40vh', 
        display: 'flex', 
        alignItems: 'center', 
        borderBottom: '1px solid var(--border-color)',
        background: 'var(--bg-secondary)'
      }}>
        <div className="container">
          <span className="eyebrow">FACILITIES</span>
          <h1 className="hero-heading">MANUFACTURING<br/>EXCELLENCE</h1>
        </div>
      </header>

      <PlantSelector />
    </main>
  );
}
