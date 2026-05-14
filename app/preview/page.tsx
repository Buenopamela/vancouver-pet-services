import { Inter } from 'next/font/google'
import { getListings, getFeaturedListings } from '@/lib/listings'
import ListBusinessForm from '@/components/ListBusinessForm'

const inter = Inter({ subsets: ['latin'] })

const C = {
  bg: '#F9F6F1',
  white: '#FFFFFF',
  dark: '#1C1917',
  green: '#16A34A',
  greenLight: '#F0FDF4',
  greenText: '#15803D',
  body: '#57534E',
  muted: '#A8A29E',
  border: '#E7E5E4',
  borderDark: '#D6D3D1',
}

const serviceLabels: Record<string, string> = {
  walker: 'Dog Walker',
  grooming: 'Grooming',
  sitter: 'Pet Sitter',
  trainer: 'Dog Trainer',
}

export default function PreviewPage() {
  const featured = getFeaturedListings()
  const all = getListings()

  return (
    <div className={inter.className} style={{ background: C.bg, color: C.dark, minHeight: '100vh' }}>

      {/* ── Navbar ── */}
      <header style={{ background: C.bg, borderBottom: `1px solid ${C.border}`, position: 'sticky', top: 0, zIndex: 50 }}>
        <div style={{ maxWidth: 1160, margin: '0 auto', padding: '0 32px', height: 72, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>

          {/* Wordmark */}
          <div style={{ lineHeight: 1.1 }}>
            <div style={{ fontSize: 22, fontWeight: 900, letterSpacing: '-1px', color: C.dark }}>VPS</div>
            <div style={{ fontSize: 10, fontWeight: 500, color: C.muted, letterSpacing: '0.04em', textTransform: 'uppercase' }}>Vancouver Pet Services</div>
          </div>

          {/* Nav links */}
          <nav style={{ display: 'flex', gap: 28, alignItems: 'center' }}>
            <a href="#listings" className="hidden sm:block" style={{ fontSize: 14, color: C.body, textDecoration: 'none', fontWeight: 500 }}>Browse</a>
            <a href="#list" className="hidden sm:block" style={{ fontSize: 14, color: C.body, textDecoration: 'none', fontWeight: 500 }}>List your business</a>
            <a href="#listings" style={{
              fontSize: 13, fontWeight: 700, color: '#fff',
              background: C.green, padding: '8px 16px',
              borderRadius: 7, textDecoration: 'none',
              letterSpacing: '-0.2px', whiteSpace: 'nowrap'
            }}>
              Find services
            </a>
          </nav>
        </div>
      </header>

      {/* ── Hero ── */}
      <section style={{ background: C.bg, padding: '100px 32px 88px', maxWidth: 1160, margin: '0 auto' }}>
        <p style={{ fontSize: 12, fontWeight: 700, color: C.green, letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: 24 }}>
          Vancouver, BC
        </p>
        <h1 style={{
          fontSize: 'clamp(44px, 6.5vw, 76px)',
          fontWeight: 900,
          lineHeight: 1.02,
          letterSpacing: '-2.5px',
          color: C.dark,
          maxWidth: 700,
          margin: '0 0 28px'
        }}>
          Trusted pet care,<br />close to home.
        </h1>
        <p style={{ fontSize: 18, color: C.body, lineHeight: 1.65, maxWidth: 460, margin: '0 0 48px' }}>
          Find and compare dog walkers, groomers, and pet sitters across Vancouver neighbourhoods.
        </p>
        <div style={{ display: 'flex', gap: 14 }}>
          <a href="#listings" style={{
            background: C.green, color: '#fff',
            padding: '15px 36px', borderRadius: 10,
            fontWeight: 700, fontSize: 15, textDecoration: 'none',
            letterSpacing: '-0.2px'
          }}>
            Find services
          </a>
          <a href="#list" style={{
            border: `1.5px solid ${C.borderDark}`, color: C.dark,
            padding: '15px 36px', borderRadius: 10,
            fontWeight: 600, fontSize: 15, textDecoration: 'none',
            background: 'transparent'
          }}>
            List your business
          </a>
        </div>
      </section>

      {/* ── Stats bar ── */}
      <div style={{ borderTop: `1px solid ${C.border}`, borderBottom: `1px solid ${C.border}`, background: C.white }}>
        <div style={{ maxWidth: 1160, margin: '0 auto', padding: '0 32px', display: 'flex', flexWrap: 'wrap', gap: '0 40px' }}>
          {[
            { value: `${all.length}`, label: 'Service providers' },
            { value: '5', label: 'Neighbourhoods' },
            { value: '3', label: 'Service types' },
            { value: 'Free', label: 'To list your business' },
          ].map(({ value, label }) => (
            <div key={label} style={{ padding: '28px 0' }}>
              <div style={{ fontSize: 22, fontWeight: 800, color: C.dark, letterSpacing: '-0.5px' }}>{value}</div>
              <div style={{ fontSize: 12, color: C.muted, marginTop: 3, fontWeight: 500 }}>{label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* ── Featured listings ── */}
      <section id="listings" style={{ maxWidth: 1160, margin: '0 auto', padding: '80px 32px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: 40 }}>
          <h2 style={{ fontSize: 26, fontWeight: 800, letterSpacing: '-0.5px', margin: 0, color: C.dark }}>Featured</h2>
          <a href="#all" style={{ fontSize: 13, color: C.green, fontWeight: 600, textDecoration: 'none' }}>View all →</a>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {featured.map((listing) => (
            <div key={listing.id} style={{ background: C.white, border: `1.5px solid ${C.border}`, borderRadius: 16, overflow: 'hidden' }}>
              <div style={{ aspectRatio: '16/9', background: '#E7E5E4', overflow: 'hidden' }}>
                <img src={listing.image_url} alt={listing.name} style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
              </div>
              <div style={{ padding: '20px 24px 24px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: 12, marginBottom: 6 }}>
                  <h3 style={{ fontSize: 15, fontWeight: 700, margin: 0, color: C.dark, lineHeight: 1.3 }}>{listing.name}</h3>
                  <span style={{ fontSize: 11, fontWeight: 600, color: C.greenText, background: C.greenLight, padding: '3px 8px', borderRadius: 4, whiteSpace: 'nowrap', flexShrink: 0 }}>
                    {serviceLabels[listing.service_type]}
                  </span>
                </div>
                <p style={{ fontSize: 13, color: C.muted, margin: '0 0 14px', fontWeight: 500 }}>
                  {listing.neighborhood} · {listing.price_range}
                </p>
                <p style={{ fontSize: 13, color: C.body, margin: '0 0 18px', lineHeight: 1.6,
                  display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', overflow: 'hidden'
                }}>
                  {listing.description}
                </p>
                <a href="#" style={{ fontSize: 13, fontWeight: 700, color: C.green, textDecoration: 'none' }}>View profile →</a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── All listings (compact rows) ── */}
      <section id="all" style={{ background: C.white, borderTop: `1px solid ${C.border}`, borderBottom: `1px solid ${C.border}` }}>
        <div style={{ maxWidth: 1160, margin: '0 auto', padding: '80px 32px' }}>
          <h2 style={{ fontSize: 26, fontWeight: 800, letterSpacing: '-0.5px', margin: '0 0 40px', color: C.dark }}>All services</h2>
          <div>
            {all.map((listing, i) => (
              <div key={listing.id} style={{
                display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                padding: '20px 0',
                borderTop: i === 0 ? `1px solid ${C.border}` : undefined,
                borderBottom: `1px solid ${C.border}`
              }}>
                <div>
                  <div style={{ fontSize: 15, fontWeight: 700, color: C.dark, marginBottom: 3 }}>{listing.name}</div>
                  <div style={{ fontSize: 13, color: C.muted, fontWeight: 500 }}>{listing.neighborhood} · {listing.price_range}</div>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: 16, flexShrink: 0, marginLeft: 24 }}>
                  <span style={{ fontSize: 12, fontWeight: 600, color: C.greenText }}>{serviceLabels[listing.service_type]}</span>
                  <a href="#" style={{
                    fontSize: 13, fontWeight: 600, color: C.dark,
                    border: `1.5px solid ${C.border}`, padding: '7px 16px',
                    borderRadius: 7, textDecoration: 'none', background: C.bg
                  }}>
                    View
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── How it works ── */}
      <section style={{ maxWidth: 1160, margin: '0 auto', padding: '96px 32px' }}>
        <h2 style={{ fontSize: 26, fontWeight: 800, letterSpacing: '-0.5px', margin: '0 0 64px', color: C.dark }}>How it works</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 48 }}>
          {[
            { n: '01', title: 'Search your area', desc: 'Filter by service type and neighbourhood to find the right match near you.' },
            { n: '02', title: 'Review the profile', desc: 'Check photos, price range, client testimonials, and the area they serve.' },
            { n: '03', title: 'Request a quote', desc: 'Send a short message and hear back directly from the service provider.' },
          ].map(({ n, title, desc }) => (
            <div key={n}>
              <div style={{ fontSize: 56, fontWeight: 900, color: C.border, lineHeight: 1, letterSpacing: '-3px', marginBottom: 16 }}>{n}</div>
              <h3 style={{ fontSize: 16, fontWeight: 700, margin: '0 0 10px', color: C.dark }}>{title}</h3>
              <p style={{ fontSize: 14, color: C.body, margin: 0, lineHeight: 1.65 }}>{desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── List your business ── */}
      <section id="list" style={{ background: C.dark, padding: '80px 32px' }}>
        <div style={{ maxWidth: 560, margin: '0 auto' }}>
          <p style={{ fontSize: 12, fontWeight: 700, color: C.green, letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: 16, textAlign: 'center' }}>
            For business owners
          </p>
          <h2 style={{ fontSize: 32, fontWeight: 900, color: '#fff', letterSpacing: '-1.5px', margin: '0 0 12px', lineHeight: 1.1, textAlign: 'center' }}>
            List your business
          </h2>
          <p style={{ fontSize: 15, color: 'rgba(255,255,255,0.55)', margin: '0 0 40px', lineHeight: 1.65, textAlign: 'center' }}>
            Free during our launch phase. We'll review your submission and be in touch within 2 business days.
          </p>
          <ListBusinessForm />
        </div>
      </section>

      {/* ── Footer ── */}
      <footer style={{ background: C.white, borderTop: `1px solid ${C.border}`, padding: '28px 32px', textAlign: 'center' }}>
        <p style={{ fontSize: 13, color: C.muted, margin: 0 }}>
          © {new Date().getFullYear()} Vancouver Pet Services · vancouverpetservices.ca
        </p>
      </footer>

    </div>
  )
}
