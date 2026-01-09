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
            <a href="#destinations">Destinations</a>
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
            FB
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className={styles.heroSocialLink} title="Instagram">
            IG
          </a>
          <a href="https://tripadvisor.com" target="_blank" rel="noopener noreferrer" className={styles.heroSocialLink} title="TripAdvisor">
            TA
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
    </>
  )
}
