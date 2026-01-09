import styles from './page.module.css'

const IMAGES = {
  hero: 'https://mmlbslwljvmscbgsqkkq.supabase.co/storage/v1/object/sign/PRUEBAS/Gemini_Generated_Image_t7oyaht7oyaht7oy.png?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV9iZmNkZjM3My00NzkzLTRhYjQtYmRhOC04OWY1ZmNiMjdhMzciLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJQUlVFQkFTL0dlbWluaV9HZW5lcmF0ZWRfSW1hZ2VfdDdveWFodDdveWFodDdveS5wbmciLCJpYXQiOjE3Njc5ODk3MDQsImV4cCI6MTc5OTUyNTcwNH0.FcNzx1q5Q4Pyr-JTDzQLWHOseQUI4bpsOzV9f635V00',
  stMaarten: 'https://mmlbslwljvmscbgsqkkq.supabase.co/storage/v1/object/sign/PRUEBAS/Gemini_Generated_Image_qtlr8hqtlr8hqtlr.png?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV9iZmNkZjM3My00NzkzLTRhYjQtYmRhOC04OWY1ZmNiMjdhMzciLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJQUlVFQkFTL0dlbWluaV9HZW5lcmF0ZWRfSW1hZ2VfcXRscjhocXRscjhocXRsci5wbmciLCJpYXQiOjE3Njc5ODk5NzUsImV4cCI6MTc5OTUyNTk3NX0.sAzAbP8JpjBvIJNdNlS0wPUuUyWhZLCu3H383YJ5L3g',
  braulioCarrillo: 'https://mmlbslwljvmscbgsqkkq.supabase.co/storage/v1/object/sign/PRUEBAS/Gemini_Generated_Image_v1m2hvv1m2hvv1m2.png?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV9iZmNkZjM3My00NzkzLTRhYjQtYmRhOC04OWY1ZmNiMjdhMzciLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJQUlVFQkFTL0dlbWluaV9HZW5lcmF0ZWRfSW1hZ2VfdjFtMmh2djFtMmh2djFtMi5wbmciLCJpYXQiOjE3Njc5OTAxMDksImV4cCI6MTc5OTUyNjEwOX0.wHUVFRvfXKZtVL-Falrake2bWhmOVVDfy1mNRgMlLjY',
  panama: 'https://mmlbslwljvmscbgsqkkq.supabase.co/storage/v1/object/sign/PRUEBAS/Gemini_Generated_Image_ffc13effc13effc1.png?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV9iZmNkZjM3My00NzkzLTRhYjQtYmRhOC04OWY1ZmNiMjdhMzciLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJQUlVFQkFTL0dlbWluaV9HZW5lcmF0ZWRfSW1hZ2VfZmZjMTNlZmZjMTNlZmZjMS5wbmciLCJpYXQiOjE3Njc5OTAyMTksImV4cCI6MTc5OTUyNjIxOX0.PNFoxQrn56Q0QxpRIE6E-NSQwKVMwpIl6nTKFLUCSb8',
  jaco: 'https://mmlbslwljvmscbgsqkkq.supabase.co/storage/v1/object/sign/PRUEBAS/Gemini_Generated_Image_x8fc74x8fc74x8fc.png?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV9iZmNkZjM3My00NzkzLTRhYjQtYmRhOC04OWY1ZmNiMjdhMzciLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJQUlVFQkFTL0dlbWluaV9HZW5lcmF0ZWRfSW1hZ2VfeDhmYzc0eDhmYzc0eDhmYy5wbmciLCJpYXQiOjE3Njc5OTAzNDEsImV4cCI6MTc5OTUyNjM0MX0.QDCsJK53Wwcom43-6rTsmYim5FVc2CyDAPDfvsPOMJU',
  stLucia: 'https://mmlbslwljvmscbgsqkkq.supabase.co/storage/v1/object/sign/PRUEBAS/Gemini_Generated_Image_hsdf30hsdf30hsdf.png?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV9iZmNkZjM3My00NzkzLTRhYjQtYmRhOC04OWY1ZmNiMjdhMzciLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJQUlVFQkFTL0dlbWluaV9HZW5lcmF0ZWRfSW1hZ2VfaHNkZjMwaHNkZjMwaHNkZi5wbmciLCJpYXQiOjE3Njc5OTA0ODIsImV4cCI6MTc5OTUyNjQ4Mn0.ctOLSXPIrBhyPSdoOG0PFzWTqNg0Pnzu67X_0739FiM',
  gallery1: 'https://mmlbslwljvmscbgsqkkq.supabase.co/storage/v1/object/sign/PRUEBAS/Gemini_Generated_Image_i34zzii34zzii34z.png?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV9iZmNkZjM3My00NzkzLTRhYjQtYmRhOC04OWY1ZmNiMjdhMzciLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJQUlVFQkFTL0dlbWluaV9HZW5lcmF0ZWRfSW1hZ2VfaTM0enppaTM0enppaTM0ei5wbmciLCJpYXQiOjE3Njc5OTA3MjMsImV4cCI6MTc5OTUyNjcyM30.Z8LPk0MA1LdZ-7Bow2Eq3m06eq5_Ag6Voa0Y3icjFWU',
  gallery2: 'https://mmlbslwljvmscbgsqkkq.supabase.co/storage/v1/object/sign/PRUEBAS/Gemini_Generated_Image_yc787jyc787jyc78.png?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV9iZmNkZjM3My00NzkzLTRhYjQtYmRhOC04OWY1ZmNiMjdhMzciLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJQUlVFQkFTL0dlbWluaV9HZW5lcmF0ZWRfSW1hZ2VfeWM3ODdqeWM3ODdqeWM3OC5wbmciLCJpYXQiOjE3Njc5OTA4NjgsImV4cCI6MTc5OTUyNjg2OH0.eUwSdLR7eVSXzKaGQWhH5ro9w4WseHDUVHM2pNUhb2s',
}

const destinations = [
  {
    id: 'st-maarten',
    name: 'St. Maarten',
    country: 'Caribbean',
    image: IMAGES.stMaarten,
    description: 'Experience the thrill of our Caribbean paradise'
  },
  {
    id: 'braulio-carrillo',
    name: 'Braulio Carrillo',
    country: 'Costa Rica',
    image: IMAGES.braulioCarrillo,
    description: 'Explore the heart of Costa Rican rainforest'
  },
  {
    id: 'panama',
    name: 'Panamá',
    country: 'Central America',
    image: IMAGES.panama,
    description: 'Discover adventure in the Panama jungle'
  },
  {
    id: 'jaco',
    name: 'Jacó',
    country: 'Costa Rica',
    image: IMAGES.jaco,
    description: 'Pacific coast adventures await you'
  },
  {
    id: 'st-lucia',
    name: 'St. Lucia',
    country: 'Caribbean',
    image: IMAGES.stLucia,
    description: 'Rainforest adventures in paradise island'
  },
]

export default function Home() {
  return (
    <>
      {/* Header */}
      <header className={styles.header}>
        <div className={styles.headerInner}>
          <a href="#" className={styles.logo}>
            <span className={styles.logoIcon}>🌿</span>
            <div>
              <span className={styles.logoMain}>Rainforest</span>
              <span className={styles.logoSub}>Adventure</span>
            </div>
          </a>

          <nav className={styles.nav}>
            <a href="#destinations">Destinations</a>
            <a href="#experiences">Experiences</a>
            <a href="#about">About</a>
            <a href="#contact">Contact</a>
          </nav>

          <a href="#book" className={`btn btn-primary ${styles.headerCta}`}>
            Book Now
          </a>
        </div>
      </header>

      {/* Hero */}
      <section className={styles.hero}>
        <div className={styles.heroImage}>
          <img src={IMAGES.hero} alt="Rainforest Adventure" />
          <div className={styles.heroOverlay} />
        </div>

        <div className={styles.heroContent}>
          <p className={styles.heroTag}>Welcome to the jungle</p>
          <h1 className={styles.heroTitle}>
            Adventure<br />
            <span>Awaits</span>
          </h1>
          <p className={styles.heroDesc}>
            Experience world-class ziplines, aerial trams, and unforgettable
            rainforest adventures across the Caribbean and Central America.
          </p>
          <div className={styles.heroButtons}>
            <a href="#destinations" className="btn btn-primary">
              Explore Destinations
            </a>
            <a href="#experiences" className="btn btn-outline">
              View Experiences
            </a>
          </div>
        </div>

        <div className={styles.heroScroll}>
          <span>Scroll to explore</span>
          <div className={styles.scrollLine} />
        </div>
      </section>

      {/* Destinations */}
      <section className={`section ${styles.destinations}`} id="destinations">
        <div className="container">
          <div className={styles.sectionHeader}>
            <p className={styles.sectionTag}>Our Parks</p>
            <h2 className="heading-lg">Destinations</h2>
            <p className={styles.sectionDesc}>
              Five incredible locations across the Caribbean and Central America,
              each offering unique adventures in pristine rainforest settings.
            </p>
          </div>

          <div className={styles.destinationsGrid}>
            {destinations.map((dest, index) => (
              <a
                key={dest.id}
                href={`#${dest.id}`}
                className={`${styles.destCard} ${index === 0 ? styles.destCardLarge : ''}`}
              >
                <div className={styles.destImageWrap}>
                  <img src={dest.image} alt={dest.name} className={styles.destImage} />
                </div>
                <div className={styles.destContent}>
                  <span className={styles.destCountry}>{dest.country}</span>
                  <h3 className={styles.destName}>{dest.name}</h3>
                  <p className={styles.destDesc}>{dest.description}</p>
                  <span className={styles.destLink}>
                    Explore <span>→</span>
                  </span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Experiences */}
      <section className={`section ${styles.experiences}`} id="experiences">
        <div className="container">
          <div className={styles.expGrid}>
            <div className={styles.expContent}>
              <p className={styles.sectionTag}>What We Offer</p>
              <h2 className="heading-lg">Unforgettable Experiences</h2>
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

              <a href="#book" className="btn btn-dark">
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
          <h2 className="heading-lg">Ready for Adventure?</h2>
          <p>Book your rainforest experience today and create memories that last a lifetime.</p>
          <a href="#book" className="btn btn-primary">
            Book Now
          </a>
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
                  <span>Adventure</span>
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
            <p>© 2025 Rainforest Adventure. All rights reserved.</p>
            <div className={styles.footerBottomLinks}>
              <a href="#">Privacy Policy</a>
              <a href="#">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}
