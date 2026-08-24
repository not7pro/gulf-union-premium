import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Careers — Build What's Next",
  description: "Join Gulf Union Foods Co. — a team of 1,300+ professionals dedicated to quality, innovation, and growth in the Saudi beverage industry.",
  alternates: { canonical: "/careers" },
};

export default function Careers() {
  return (
    <main style={{ backgroundColor: 'var(--bg-primary)', minHeight: '100vh' }}>
      <header className="section" style={{ 
        height: '60vh', 
        display: 'flex', 
        alignItems: 'center', 
        borderBottom: '1px solid var(--border-color)',
        background: 'var(--bg-secondary)'
      }}>
        <div className="container">
          <span className="eyebrow">CAREERS</span>
          <h1 className="hero-heading">BUILD WHAT&apos;S NEXT.</h1>
          <p className="body-large" style={{ marginTop: '24px', maxWidth: '600px' }}>
            Join a team of 1,300+ professionals dedicated to quality, innovation, and growth.
          </p>
        </div>
      </header>
      
      <section className="section">
        <div className="container" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '80px', alignItems: 'center' }}>
          <div>
            <span className="eyebrow">LIFE AT GULF UNION</span>
            <h2 className="section-heading" style={{ marginBottom: '24px' }}>Growth and Opportunity</h2>
            <p className="body-text" style={{ marginBottom: '24px' }}>
              We believe our people are our greatest asset. At Gulf Union, we foster an environment of continuous learning, professional development, and empowerment — closely aligned with Saudi Vision 2030.
            </p>
            <ul className="body-text" style={{ paddingLeft: '20px', marginBottom: '24px' }}>
              <li style={{ marginBottom: '12px' }}>Professional development and training programs</li>
              <li style={{ marginBottom: '12px' }}>Competitive compensation and benefits</li>
              <li style={{ marginBottom: '12px' }}>Inclusive, diverse work environment</li>
              <li style={{ marginBottom: '12px' }}>Opportunities across 4 manufacturing facilities</li>
            </ul>
          </div>
          <div style={{ background: 'var(--bg-secondary)', padding: '40px', display: 'flex', justifyContent: 'center' }}>
            <img 
              src="https://gulf-union.com/images/logo.png" 
              alt="Gulf Union Foods Co. logo — careers" 
              style={{ maxWidth: '200px', objectFit: 'contain' }}
              loading="lazy"
            />
          </div>
        </div>
      </section>

      {/* Current openings */}
      <section className="section" style={{ background: 'var(--bg-secondary)', borderTop: '1px solid var(--border-color)' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <span className="eyebrow">OPEN POSITIONS</span>
          <h2 className="section-heading" style={{ marginBottom: '24px' }}>Current Openings</h2>
          
          <div style={{ 
            padding: '60px 40px', 
            border: '1px solid var(--border-color)', 
            background: 'var(--bg-primary)',
            maxWidth: '600px',
            margin: '0 auto',
          }}>
            <p className="body-text" style={{ marginBottom: '24px' }}>
              There are no open positions at this time. However, we are always looking for talented individuals to join our growing team.
            </p>
            <p className="body-text" style={{ marginBottom: '32px' }}>
              Send your CV and a brief introduction to our HR team — we&apos;ll keep your profile on file for future opportunities.
            </p>
            <a 
              href="mailto:info@gulf-union.com?subject=Career%20Inquiry%20—%20Gulf%20Union%20Foods" 
              className="cta-link"
              aria-label="Send your CV to Gulf Union Foods HR team"
            >
              SEND YOUR CV →
            </a>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section" style={{ textAlign: 'center' }}>
        <h2 className="section-heading" style={{ marginBottom: '16px' }}>LEARN MORE ABOUT US</h2>
        <p className="body-text" style={{ marginBottom: '32px' }}>Discover our heritage, our brands, and our manufacturing excellence.</p>
        <div style={{ display: 'flex', gap: '24px', justifyContent: 'center' }}>
          <Link href="/who-we-are" className="cta-link" aria-label="Learn about Gulf Union's history">WHO WE ARE</Link>
          <Link href="/manufacturing" className="cta-link" aria-label="Explore Gulf Union's manufacturing facilities">MANUFACTURING</Link>
        </div>
      </section>
    </main>
  );
}
