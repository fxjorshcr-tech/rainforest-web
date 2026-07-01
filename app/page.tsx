import styles from './page.module.css'

const IMAGES = {
  hero: 'https://mmlbslwljvmscbgsqkkq.supabase.co/storage/v1/object/sign/PRUEBAS/Gemini_Generated_Image_t7oyaht7oyaht7oy.png?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV9iZmNkZjM3My00NzkzLTRhYjQtYmRhOC04OWY1ZmNiMjdhMzciLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJQUlVFQkFTL0dlbWluaV9HZW5lcmF0ZWRfSW1hZ2VfdDdveWFodDdveWFodDdveS5wbmciLCJpYXQiOjE3Njc5ODk3MDQsImV4cCI6MTc5OTUyNTcwNH0.FcNzx1q5Q4Pyr-JTDzQLWHOseQUI4bpsOzV9f635V00',
  stMaarten: 'https://mmlbslwljvmscbgsqkkq.supabase.co/storage/v1/object/sign/PRUEBAS/Gemini_Generated_Image_qtlr8hqtlr8hqtlr.png?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV9iZmNkZjM3My00NzkzLTRhYjQtYmRhOC04OWY1ZmNiMjdhMzciLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJQUlVFQkFTL0dlbWluaV9HZW5lcmF0ZWRfSW1hZ2VfcXRscjhocXRscjhocXRsci5wbmciLCJpYXQiOjE3Njc5ODk5NzUsImV4cCI6MTc5OTUyNTk3NX0.sAzAbP8JpjBvIJNdNlS0wPUuUyWhZLCu3H383YJ5L3g',
  // Intercambiado: el teleférico es Braulio Carrillo
  braulioCarrillo: 'https://mmlbslwljvmscbgsqkkq.supabase.co/storage/v1/object/sign/PRUEBAS/Gemini_Generated_Image_ffc13effc13effc1.png?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV9iZmNkZjM3My00NzkzLTRhYjQtYmRhOC04OWY1ZmNiMjdhMzciLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJQUlVFQkFTL0dlbWluaV9HZW5lcmF0ZWRfSW1hZ2VfZmZjMTNlZmZjMTNlZmZjMS5wbmciLCJpYXQiOjE3Njc5OTAyMTksImV4cCI6MTc5OTUyNjIxOX0.PNFoxQrn56Q0QxpRIE6E-NSQwKVMwpIl6nTKFLUCSb8',
  // Intercambiado: la canoa es Panama
  panama: 'https://mmlbslwljvmscbgsqkkq.supabase.co/storage/v1/object/sign/PRUEBAS/Gemini_Generated_Image_v1m2hvv1m2hvv1m2.png?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV9iZmNkZjM3My00NzkzLTRhYjQtYmRhOC04OWY1ZmNiMjdhMzciLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJQUlVFQkFTL0dlbWluaV9HZW5lcmF0ZWRfSW1hZ2VfdjFtMmh2djFtMmh2djFtMi5wbmciLCJpYXQiOjE3Njc5OTAxMDksImV4cCI6MTc5OTUyNjEwOX0.wHUVFRvfXKZtVL-Falrake2bWhmOVVDfy1mNRgMlLjY',
  jaco: 'https://mmlbslwljvmscbgsqkkq.supabase.co/storage/v1/object/sign/PRUEBAS/Gemini_Generated_Image_x8fc74x8fc74x8fc.png?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV9iZmNkZjM3My00NzkzLTRhYjQtYmRhOC04OWY1ZmNiMjdhMzciLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJQUlVFQkFTL0dlbWluaV9HZW5lcmF0ZWRfSW1hZ2VfeDhmYzc0eDhmYzc0eDhmYy5wbmciLCJpYXQiOjE3Njc5OTAzNDEsImV4cCI6MTc5OTUyNjM0MX0.QDCsJK53Wwcom43-6rTsmYim5FVc2CyDAPDfvsPOMJU',
  stLucia: 'https://mmlbslwljvmscbgsqkkq.supabase.co/storage/v1/object/sign/PRUEBAS/Gemini_Generated_Image_hsdf30hsdf30hsdf.png?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV9iZmNkZjM3My00NzkzLTRhYjQtYmRhOC04OWY1ZmNiMjdhMzciLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJQUlVFQkFTL0dlbWluaV9HZW5lcmF0ZWRfSW1hZ2VfaHNkZjMwaHNkZjMwaHNkZi5wbmciLCJpYXQiOjE3Njc5OTA0ODIsImV4cCI6MTc5OTUyNjQ4Mn0.ctOLSXPIrBhyPSdoOG0PFzWTqNg0Pnzu67X_0739FiM',
  gallery1: 'https://mmlbslwljvmscbgsqkkq.supabase.co/storage/v1/object/sign/PRUEBAS/Gemini_Generated_Image_i34zzii34zzii34z.png?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV9iZmNkZjM3My00NzkzLTRhYjQtYmRhOC04OWY1ZmNiMjdhMzciLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJQUlVFQkFTL0dlbWluaV9HZW5lcmF0ZWRfSW1hZ2VfaTM0enppaTM0enppaTM0ei5wbmciLCJpYXQiOjE3Njc5OTA3MjMsImV4cCI6MTc5OTUyNjcyM30.Z8LPk0MA1LdZ-7Bow2Eq3m06eq5_Ag6Voa0Y3icjFWU',
  gallery2: 'https://mmlbslwljvmscbgsqkkq.supabase.co/storage/v1/object/sign/PRUEBAS/Gemini_Generated_Image_yc787jyc787jyc78.png?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV9iZmNkZjM3My00NzkzLTRhYjQtYmRhOC04OWY1ZmNiMjdhMzciLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJQUlVFQkFTL0dlbWluaV9HZW5lcmF0ZWRfSW1hZ2VfeWM3ODdqeWM3ODdqeWM3OC5wbmciLCJpYXQiOjE3Njc5OTA4NjgsImV4cCI6MTc5OTUyNjg2OH0.eUwSdLR7eVSXzKaGQWhH5ro9w4WseHDUVHM2pNUhb2s',
}

const destinations = [
  {
    id: 'st-maarten',
    name: 'St. Maarten',
    region: 'Caribbean',
    image: IMAGES.stMaarten,
  },
  {
    id: 'braulio-carrillo',
    name: 'Braulio Carrillo',
    region: 'Costa Rica',
    image: IMAGES.braulioCarrillo,
  },
  {
    id: 'jaco',
    name: 'Jaco Beach',
    region: 'Costa Rica',
    image: IMAGES.jaco,
  },
  {
    id: 'panama',
    name: 'Panama',
    region: 'Central America',
    image: IMAGES.panama,
  },
  {
    id: 'st-lucia',
    name: 'St. Lucia',
    region: 'Caribbean',
    image: IMAGES.stLucia,
  },
]

export default function Home() {
  return (
    <>
      {/* Header - Transparent & Fixed */}
      <header className={styles.header}>
        <div className={styles.headerInner}>
          <a href="#" className={styles.logo}>
            <span className={styles.logoIcon}>🌿</span>
            <div>
              <span className={styles.logoMain}>Rainforest</span>
              <span className={styles.logoSub}>Adventures</span>
            </div>
          </a>

          <nav className={styles.nav}>
            <div className={styles.navItem}>
              <span className={styles.navLink}>
                Destinations <span className={styles.dropdownArrow}>▼</span>
              </span>
              <div className={styles.dropdown}>
                <a href="#">St. Maarten</a>
                <a href="#">St. Lucia</a>
                <a href="/braulio-carrillo">Costa Rica - Braulio Carrillo</a>
                <a href="#">Costa Rica - Jaco Beach</a>
                <a href="#">Panama</a>
              </div>
            </div>
            <a href="#experiences">Experiences</a>
            <a href="#about">About</a>
            <a href="#contact">Contact</a>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <section className={styles.hero}>
        <div className={styles.heroImage}>
          <img src={IMAGES.hero} alt="Rainforest Adventure" />
          <div className={styles.heroOverlay} />
        </div>

        <div className={styles.heroContent}>
          <h1 className={styles.heroTitle}>
            ADVENTURE<br />
            <span>AWAITS</span>
          </h1>
          <p className={styles.heroDesc}>
            Featuring locations in the coolest destinations in Central America and the Caribbean.
          </p>
          <a href="#destinations" className={styles.heroBtn}>
            GO EXPLORING
          </a>
        </div>

        {/* Social Icons */}
        <div className={styles.heroSocial}>
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className={styles.heroSocialLink} title="Facebook">
            <svg viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className={styles.heroSocialLink} title="Instagram">
            <svg viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
          </a>
          <a href="https://tripadvisor.com" target="_blank" rel="noopener noreferrer" className={styles.heroSocialLink} title="TripAdvisor">
            <svg viewBox="0 0 24 24"><path d="M12.006 4.295c-2.67 0-5.338.784-7.645 2.353H0l1.963 2.135a5.997 5.997 0 0 0 4.04 10.43 5.976 5.976 0 0 0 4.075-1.6L12 19.705l1.922-2.09a5.972 5.972 0 0 0 4.072 1.598 5.997 5.997 0 0 0 4.04-10.43L24 6.647h-4.35a13.573 13.573 0 0 0-7.644-2.352zM12 6.255c1.531 0 3.063.303 4.504.912C13.943 8.088 12 10.555 12 13.389c0-2.834-1.943-5.301-4.504-6.222A11.1 11.1 0 0 1 12 6.255zM6.003 9.5a4.5 4.5 0 1 1 0 9 4.5 4.5 0 0 1 0-9zm11.994 0a4.5 4.5 0 1 1 0 9 4.5 4.5 0 0 1 0-9zM6.003 11.25a2.75 2.75 0 1 0 0 5.5 2.75 2.75 0 0 0 0-5.5zm11.994 0a2.75 2.75 0 1 0 0 5.5 2.75 2.75 0 0 0 0-5.5z"/></svg>
          </a>
        </div>
      </section>

      {/* Destinations */}
      <section className={styles.destinations} id="destinations">
        <div className="container">
          <h2 className={styles.destinationsTitle}>CHOOSE YOUR DESTINATION</h2>

          {/* Top Row - 2 cards */}
          <div className={styles.destRowTop}>
            {destinations.slice(0, 2).map((dest) => (
              <a key={dest.id} href={`#${dest.id}`} className={styles.destCard}>
                <img src={dest.image} alt={dest.name} className={styles.destImage} />
                <div className={styles.destGradient} />
                <div className={styles.destInfo}>
                  <span className={styles.destRegion}>{dest.region}</span>
                  <h3 className={styles.destName}>{dest.name}</h3>
                </div>
              </a>
            ))}
          </div>

          {/* Bottom Row - 3 cards */}
          <div className={styles.destRowBottom}>
            {destinations.slice(2).map((dest) => (
              <a key={dest.id} href={`#${dest.id}`} className={styles.destCard}>
                <img src={dest.image} alt={dest.name} className={styles.destImage} />
                <div className={styles.destGradient} />
                <div className={styles.destInfo}>
                  <span className={styles.destRegion}>{dest.region}</span>
                  <h3 className={styles.destName}>{dest.name}</h3>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className={styles.about} id="about">
        <div className="container">
          <h2 className={styles.aboutTitle}>ABOUT RAINFOREST ADVENTURES</h2>
          <p className={styles.aboutText}>
            Rainforest Adventures creates unique and memorable adventures that inspire a sustainable
            use of the environment and appreciation of the local culture while making a positive
            impact on our communities. Featuring locations in the coolest destinations in Central
            America and the Caribbean.
          </p>
        </div>
      </section>

      {/* TripAdvisor Section */}
      <section className={styles.tripadvisor}>
        <div className="container">
          <div className={styles.tripContent}>
            <div className={styles.tripBadge}>
              <div className={styles.tripCard}>
                <span className={styles.tripYear}>2019</span>
                <span className={styles.tripCert}>Certificate of</span>
                <span className={styles.tripExc}>Excellence</span>
                <div className={styles.tripOwl}>
                  <span>●</span><span>●</span>
                </div>
                <div className={styles.tripYears}>
                  <span>2015</span>
                  <span>2016</span>
                  <span>HALL OF FAME</span>
                  <span>2017</span>
                  <span>2018</span>
                </div>
              </div>
            </div>
            <div className={styles.tripInfo}>
              <div className={styles.tripLogo}>
                <span className={styles.tripOwlLogo}>●●</span>
                <span>trip<strong>advisor</strong></span>
              </div>
              <p>Award-Winning Adventures Since 2015</p>
              <p className={styles.tripDesc}>
                Recognized for consistently delivering outstanding experiences
                to travelers around the world. Our commitment to excellence has
                earned us a place in the TripAdvisor Hall of Fame.
              </p>
              <div className={styles.tripStats}>
                <div className={styles.tripStat}>
                  <span className={styles.tripStatNumber}>5+</span>
                  <span className={styles.tripStatLabel}>Years Winner</span>
                </div>
                <div className={styles.tripStat}>
                  <span className={styles.tripStatNumber}>4.8</span>
                  <span className={styles.tripStatLabel}>Avg Rating</span>
                </div>
                <div className={styles.tripStat}>
                  <span className={styles.tripStatNumber}>10K+</span>
                  <span className={styles.tripStatLabel}>Reviews</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experiences */}
      <section className={styles.experiences} id="experiences">
        <div className="container">
          <div className={styles.expGrid}>
            <div className={styles.expContent}>
              <h2 className={styles.expTitle}>UNFORGETTABLE EXPERIENCES</h2>
              <p className={styles.expDesc}>
                From adrenaline-pumping ziplines to serene aerial tram rides,
                our adventures are designed for all skill levels and ages.
              </p>

              <div className={styles.expList}>
                <div className={styles.expItem}>
                  <div className={styles.expIcon}>⚡</div>
                  <div>
                    <h4>Canopy Ziplines</h4>
                    <p>Soar through the treetops on world-class zipline courses</p>
                  </div>
                </div>
                <div className={styles.expItem}>
                  <div className={styles.expIcon}>🚡</div>
                  <div>
                    <h4>Aerial Tram</h4>
                    <p>Glide through the rainforest canopy in comfort</p>
                  </div>
                </div>
                <div className={styles.expItem}>
                  <div className={styles.expIcon}>🌉</div>
                  <div>
                    <h4>Hanging Bridges</h4>
                    <p>Walk among the treetops on suspension bridges</p>
                  </div>
                </div>
                <div className={styles.expItem}>
                  <div className={styles.expIcon}>🦜</div>
                  <div>
                    <h4>Wildlife Tours</h4>
                    <p>Discover exotic flora and fauna with expert guides</p>
                  </div>
                </div>
              </div>

              <a href="#book" className={styles.expBtn}>
                Book Your Adventure
              </a>
            </div>

            <div className={styles.expImages}>
              <div className={styles.expImageMain}>
                <img src={IMAGES.gallery1} alt="Adventure Experience" />
              </div>
              <div className={styles.expImageSecondary}>
                <img src={IMAGES.gallery2} alt="Rainforest Experience" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className={styles.stats}>
        <div className="container">
          <div className={styles.statsGrid}>
            <div className={styles.statItem}>
              <span className={styles.statNumber}>5</span>
              <span className={styles.statLabel}>Destinations</span>
            </div>
            <div className={styles.statItem}>
              <span className={styles.statNumber}>30+</span>
              <span className={styles.statLabel}>Years Experience</span>
            </div>
            <div className={styles.statItem}>
              <span className={styles.statNumber}>2M+</span>
              <span className={styles.statLabel}>Happy Visitors</span>
            </div>
            <div className={styles.statItem}>
              <span className={styles.statNumber}>100%</span>
              <span className={styles.statLabel}>Eco-Certified</span>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className={styles.cta}>
        <div className={styles.ctaImage}>
          <img src={IMAGES.braulioCarrillo} alt="Book your adventure" />
          <div className={styles.ctaOverlay} />
        </div>
        <div className={styles.ctaContent}>
          <h2>READY FOR ADVENTURE?</h2>
          <p>Book your rainforest experience today and create memories that last a lifetime.</p>
          <a href="#book" className={styles.ctaBtn}>
            Book Now
          </a>
        </div>
      </section>

      {/* Stripe Payment Section */}
      <section className={styles.stripeSection}>
        <div className="container">
          <div className={styles.stripeContent}>
            <div className={styles.stripeInfo}>
              <div className={styles.stripeLogo}>
                <span className={styles.stripeS}>S</span>
                <span>stripe</span>
              </div>
              <h3 className={styles.stripeTitle}>Secure & Easy Payments</h3>
              <p className={styles.stripeDesc}>
                We use Stripe for all transactions, ensuring your payment information
                is always safe and encrypted with industry-leading security standards.
              </p>
            </div>
            <div className={styles.stripeFeatures}>
              <div className={styles.stripeFeature}>
                <span className={styles.stripeFeatureIcon}>🔒</span>
                <div>
                  <h4>256-bit Encryption</h4>
                  <p>Bank-level security</p>
                </div>
              </div>
              <div className={styles.stripeFeature}>
                <span className={styles.stripeFeatureIcon}>💳</span>
                <div>
                  <h4>All Cards Accepted</h4>
                  <p>Visa, Mastercard, Amex</p>
                </div>
              </div>
              <div className={styles.stripeFeature}>
                <span className={styles.stripeFeatureIcon}>✓</span>
                <div>
                  <h4>Instant Confirmation</h4>
                  <p>Receive tickets by email</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className={styles.footer}>
        <div className="container">
          <div className={styles.footerGrid}>
            <div className={styles.footerBrand}>
              <div className={styles.footerLogo}>
                <span>🌿</span>
                <div>
                  <span>Rainforest</span>
                  <span>Adventures</span>
                </div>
              </div>
              <p>
                World-class eco-adventures in the most beautiful
                rainforest destinations across the Caribbean and Central America.
              </p>
              <div className={styles.socialLinks}>
                <a href="#">FB</a>
                <a href="#">IG</a>
                <a href="#">TW</a>
                <a href="#">YT</a>
              </div>
            </div>

            <div className={styles.footerLinks}>
              <h4>Destinations</h4>
              <ul>
                <li><a href="#">St. Maarten</a></li>
                <li><a href="#">Braulio Carrillo</a></li>
                <li><a href="#">Panamá</a></li>
                <li><a href="#">Jacó</a></li>
                <li><a href="#">St. Lucia</a></li>
              </ul>
            </div>

            <div className={styles.footerLinks}>
              <h4>Experiences</h4>
              <ul>
                <li><a href="#">Canopy Ziplines</a></li>
                <li><a href="#">Aerial Tram</a></li>
                <li><a href="#">Hanging Bridges</a></li>
                <li><a href="#">Wildlife Tours</a></li>
                <li><a href="#">Night Tours</a></li>
              </ul>
            </div>

            <div className={styles.footerLinks}>
              <h4>Contact</h4>
              <ul>
                <li>info@rainforestadventure.com</li>
                <li>+1 (888) 555-0123</li>
                <li>Mon - Sun: 7AM - 5PM</li>
              </ul>
            </div>
          </div>

          <div className={styles.footerBottom}>
            <p>© 2025 Rainforest Adventures. All rights reserved.</p>
            <div className={styles.footerBottomLinks}>
              <a href="#">Privacy Policy</a>
              <a href="#">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>

      {/* WhatsApp Floating Button */}
      <a
        href="https://wa.me/18885550123"
        target="_blank"
        rel="noopener noreferrer"
        className={styles.whatsappBtn}
        title="Chat on WhatsApp"
      >
        <svg viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
      </a>
    </>
  )
}
