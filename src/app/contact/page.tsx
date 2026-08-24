"use client";

import { useState, FormEvent } from "react";

export default function Contact() {
  const [formState, setFormState] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validate = (form: FormData) => {
    const errs: Record<string, string> = {};
    const name = form.get('name') as string;
    const email = form.get('email') as string;
    const message = form.get('message') as string;
    
    if (!name || name.trim().length < 2) errs.name = 'Please enter your name.';
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) errs.email = 'Please enter a valid email address.';
    if (!message || message.trim().length < 10) errs.message = 'Please enter a message (at least 10 characters).';
    
    return errs;
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const errs = validate(form);
    
    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      setFormState('error');
      return;
    }

    setFormState('submitting');
    setErrors({});

    // Simulate form submission (replace with real endpoint)
    setTimeout(() => {
      setFormState('success');
    }, 1500);
  };

  const inputStyle = {
    width: '100%', 
    padding: '16px 0', 
    background: 'transparent', 
    border: 'none', 
    borderBottom: '1px solid var(--border-color)', 
    color: 'var(--text-primary)', 
    outline: 'none', 
    fontSize: '1.1rem',
    fontFamily: 'inherit',
  };

  const errorStyle = {
    color: '#B22222',
    fontSize: '0.8rem',
    marginTop: '6px',
  };

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
          <span className="eyebrow">GET IN TOUCH</span>
          <h1 className="hero-heading">CONTACT US</h1>
        </div>
      </header>

      <section className="section">
        <div className="container" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '80px' }}>
          <div>
            <h2 className="section-heading" style={{ marginBottom: '24px' }}>Let&apos;s Talk.</h2>
            <p className="body-large" style={{ marginBottom: '60px' }}>
              We&apos;re here to answer any questions you may have about our products, 
              distribution, or corporate partnerships.
            </p>
            
            <div style={{ marginBottom: '40px' }}>
              <span className="eyebrow">HEADQUARTERS</span>
              <p className="body-text" style={{ fontSize: '1.5rem', color: 'var(--text-primary)' }}>Riyadh, Saudi Arabia</p>
            </div>

            <div style={{ marginBottom: '40px' }}>
              <span className="eyebrow">PHONE</span>
              <p style={{ fontSize: '1.5rem' }}>
                <a href="tel:+966920022205" style={{ color: 'var(--text-primary)', borderBottom: '1px solid var(--border-color)' }}>
                  +966 9200 22205
                </a>
              </p>
            </div>
            
            <div>
              <span className="eyebrow">EMAIL</span>
              <p style={{ fontSize: '1.5rem' }}>
                <a href="mailto:info@gulf-union.com" style={{ color: 'var(--text-primary)', borderBottom: '1px solid var(--border-color)' }}>
                  info@gulf-union.com
                </a>
              </p>
            </div>
          </div>
          
          <div style={{ background: 'var(--bg-secondary)', padding: '60px', border: '1px solid var(--border-color)' }}>
            {formState === 'success' ? (
              <div style={{ textAlign: 'center', padding: '60px 0' }}>
                <div style={{ fontSize: '3rem', marginBottom: '24px' }}>✓</div>
                <h3 className="section-heading" style={{ marginBottom: '16px' }}>MESSAGE SENT</h3>
                <p className="body-text">Thank you for reaching out. Our team will get back to you within 1–2 business days.</p>
                <button 
                  onClick={() => setFormState('idle')}
                  style={{ marginTop: '32px', background: 'none', border: '1px solid var(--border-color)', padding: '12px 24px', cursor: 'pointer', color: 'var(--text-primary)', fontFamily: 'inherit' }}
                >
                  SEND ANOTHER MESSAGE
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
                <div>
                  <label htmlFor="contact-name" className="eyebrow">NAME</label>
                  <input 
                    type="text" 
                    id="contact-name" 
                    name="name" 
                    required
                    aria-describedby={errors.name ? 'name-error' : undefined}
                    style={{ ...inputStyle, borderColor: errors.name ? '#B22222' : undefined }} 
                  />
                  {errors.name && <p id="name-error" style={errorStyle}>{errors.name}</p>}
                </div>
                <div>
                  <label htmlFor="contact-email" className="eyebrow">EMAIL</label>
                  <input 
                    type="email" 
                    id="contact-email" 
                    name="email" 
                    required
                    aria-describedby={errors.email ? 'email-error' : undefined}
                    style={{ ...inputStyle, borderColor: errors.email ? '#B22222' : undefined }} 
                  />
                  {errors.email && <p id="email-error" style={errorStyle}>{errors.email}</p>}
                </div>
                <div>
                  <label htmlFor="contact-message" className="eyebrow">MESSAGE</label>
                  <textarea 
                    id="contact-message" 
                    name="message" 
                    rows={4} 
                    required
                    aria-describedby={errors.message ? 'message-error' : undefined}
                    style={{ ...inputStyle, borderColor: errors.message ? '#B22222' : undefined, resize: 'vertical', fontFamily: 'inherit' }} 
                  />
                  {errors.message && <p id="message-error" style={errorStyle}>{errors.message}</p>}
                </div>
                <button 
                  type="submit"
                  disabled={formState === 'submitting'}
                  style={{ 
                    background: formState === 'submitting' ? '#666' : 'var(--text-primary)', 
                    color: 'var(--bg-primary)', 
                    padding: '16px 32px', 
                    border: 'none', 
                    fontWeight: '500', 
                    textTransform: 'uppercase' as const, 
                    letterSpacing: '0.1em', 
                    cursor: formState === 'submitting' ? 'not-allowed' : 'pointer', 
                    alignSelf: 'flex-start', 
                    marginTop: '16px',
                    fontFamily: 'inherit',
                    transition: 'background 0.3s ease',
                  }}
                >
                  {formState === 'submitting' ? 'SENDING...' : 'SEND MESSAGE'}
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </main>
  );
}
