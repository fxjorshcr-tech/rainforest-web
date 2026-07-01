'use client'
import { useState } from 'react'
import styles from './page.module.css'

const LOGO = 'https://mmlbslwljvmscbgsqkkq.supabase.co/storage/v1/object/public/Fotos/Gemini_Generated_Image_nlssx0nlssx0nlss-removebg-preview.png'

const IMAGES = {
  braulioCarrillo: 'https://mmlbslwljvmscbgsqkkq.supabase.co/storage/v1/object/sign/PRUEBAS/Gemini_Generated_Image_ffc13effc13effc1.png?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV9iZmNkZjM3My00NzkzLTRhYjQtYmRhOC04OWY1ZmNiMjdhMzciLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJQUlVFQkFTL0dlbWluaV9HZW5lcmF0ZWRfSW1hZ2VfZmZjMTNlZmZjMTNlZmZjMS5wbmciLCJpYXQiOjE3Njc5OTAyMTksImV4cCI6MTc5OTUyNjIxOX0.PNFoxQrn56Q0QxpRIE6E-NSQwKVMwpIl6nTKFLUCSb8',
  jaco: 'https://mmlbslwljvmscbgsqkkq.supabase.co/storage/v1/object/sign/PRUEBAS/Gemini_Generated_Image_x8fc74x8fc74x8fc.png?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV9iZmNkZjM3My00NzkzLTRhYjQtYmRhOC04OWY1ZmNiMjdhMzciLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJQUlVFQkFTL0dlbWluaV9HZW5lcmF0ZWRfSW1hZ2VfeDhmYzc0eDhmYzc0eDhmYy5wbmciLCJpYXQiOjE3Njc5OTAzNDEsImV4cCI6MTc5OTUyNjM0MX0.QDCsJK53Wwcom43-6rTsmYim5FVc2CyDAPDfvsPOMJU',
  stMaarten: 'https://mmlbslwljvmscbgsqkkq.supabase.co/storage/v1/object/sign/PRUEBAS/Gemini_Generated_Image_qtlr8hqtlr8hqtlr.png?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV9iZmNkZjM3My00NzkzLTRhYjQtYmRhOC04OWY1ZmNiMjdhMzciLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJQUlVFQkFTL0dlbWluaV9HZW5lcmF0ZWRfSW1hZ2VfcXRscjhocXRscjhocXRsci5wbmciLCJpYXQiOjE3Njc5ODk5NzUsImV4cCI6MTc5OTUyNTk3NX0.sAzAbP7JpjBvIJNdNlS0wPUuUyWhZLCu3H383YJ5L3g',
  gallery1: 'https://mmlbslwljvmscbgsqkkq.supabase.co/storage/v1/object/sign/PRUEBAS/Gemini_Generated_Image_i34zzii34zzii34z.png?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV9iZmNkZjM3My00NzkzLTRhYjQtYmRhOC04OWY1ZmNiMjdhMzciLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJQUlVFQkFTL0dlbWluaV9HZW5lcmF0ZWRfSW1hZ2VfaTM0enppaTM0enppaTM0ei5wbmciLCJpYXQiOjE3Njc5OTA3MjMsImV4cCI6MTc5OTUyNjcyM30.Z8LPk0MA1LdZ-7Bow2Eq3m06eq5_Ag6Voa0Y3icjFWU',
  gallery2: 'https://mmlbslwljvmscbgsqkkq.supabase.co/storage/v1/object/sign/PRUEBAS/Gemini_Generated_Image_yc787jyc787jyc78.png?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV9iZmNkZjM3My00NzkzLTRhYjQtYmRhOC04OWY1ZmNiMjdhMzciLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJQUlVFQkFTL0dlbWluaV9HZW5lcmF0ZWRfSW1hZ2VfeWM3ODdqeWM3ODdqeWM3OC5wbmciLCJpYXQiOjE3Njc5OTA4NjgsImV4cCI6MTc5OTUyNjg2OH0.eUwSdLR7eVSXzKaGQWhH5ro9w4WseHDUVHM2pNUhb2s',
}

const tours = [
  {
    id: '6in1',
    badge: 'BEST SELLER',
    image: IMAGES.braulioCarrillo,
    title: '6 IN 1 TOUR - FULL DAY PASS',
    duration: '5 Hours',
    description: 'Enjoy the most complete package of eco-adventures in Costa Rica. Enjoy the spectacular Atlantic rainforest, a cable car flight through the treetops and the great excitement of enjoying the safest canopy tour in the area.',
    activities: ['Canopy', 'Aerial Tram', 'Orchid Garden', 'Butterfly Garden', 'Nature Walk', 'Snake and Frog Exhibitions'],
    services: ['LOCKER', 'FREE PARKING'],
    priceAdult: 109,
    priceKid: 69,
    requirements: null,
    openingTime: '8:15am to 4:00pm',
  },
  {
    id: 'canopy',
    badge: 'SUPER FUN!',
    image: IMAGES.gallery2,
    title: 'CANOPY (ZIP LINE) - HALF DAY PASS',
    duration: '2.5 Hours',
    description: 'Fly through and over the rainforest on the safest and most fun canopy tour in the country and experience first-hand why Costa Rica is the best destination in the world for Adventure and Eco-tourism.',
    activities: ['Canopy Zip Line', 'Butterfly Garden', 'Orchid Garden', 'Snake and Frog Exhibitions', 'Nature Walk'],
    services: null,
    priceAdult: 67,
    priceKid: 44,
    requirements: null,
    openingTime: 'Zipline times: 08:00am, 10:00am, 2:00pm',
  },
  {
    id: 'bird-full',
    badge: null,
    image: IMAGES.gallery1,
    title: 'BIRD WATCHING TOUR - FULL DAY PASS',
    duration: '8 Hours',
    description: 'Rainforest Adventures has been recognized by the National Audubon Society as one of the best birding spots in Costa Rica. You can spend hours looking for and admiring the majestic species that nest in our rainforest.',
    activities: ['Bird Watching', 'Aerial Tram', 'Nature Walk'],
    services: ['LOCKER', 'FREE PARKING'],
    priceAdult: 95,
    priceKid: null,
    requirements: ['Closed toe shoes required', 'All clients must be present 15 minutes before the confirmed time for the tour.'],
    openingTime: 'Bird Watching Tour time: at 7:30 am.',
  },
  {
    id: 'bird-half',
    badge: null,
    image: IMAGES.jaco,
    title: 'BIRD WATCHING TOUR - HALF DAY PASS',
    duration: '4 Hours',
    description: 'Rainforest Adventures has been recognized by the National Audubon Society as one of the best birding spots in Costa Rica. You can spend hours looking for and admiring the majestic species that nest in our rainforest.',
    activities: ['Bird Watching', 'Nature Walk'],
    services: ['LOCKER', 'FREE PARKING'],
    priceAdult: 47,
    priceKid: null,
    requirements: ['Closed toe shoes required', 'All clients must be present 15 minutes before the confirmed time for the tour.'],
    openingTime: 'Bird Watching Tour time: at 7:30 am.',
  },
  {
    id: 'frog',
    badge: null,
    image: IMAGES.braulioCarrillo,
    title: 'FROG NIGHT TOUR',
    duration: '1 Hour 15 Minutes',
    description: 'Be part of the experience of the nocturnal world of amphibians in the company of our guide. Discover the fascinating creatures that come alive after dark in our rainforest.',
    activities: ['Frog Watching', 'Nature Walk'],
    services: ['LOCKER', 'FREE PARKING'],
    priceAdult: 38,
    priceKid: null,
    requirements: ['Closed toe shoes required', 'All clients must be present 15 minutes before the confirmed time for the tour.'],
    openingTime: 'Frog Night Tour time: at 6:00 pm.',
  },
]

const reviews = [
  { name: 'Jaron Brown', initial: 'J', color: '#8B4513', rating: 5, text: 'Pablo is the best! So knowledgeable about the area and safe and...', date: '1 day ago' },
  { name: 'Kel Koh', initial: 'K', color: '#2196F3', rating: 5, text: 'Absolute first class private transportation service company. We...', date: '1 day ago' },
  { name: 'Jorge Salas O...', initial: 'J', color: '#FF5722', rating: 5, text: 'Diego and his company was just amazing. Very...', date: '3 days ago' },
  { name: 'Katherine Jon...', initial: 'K', color: '#FF5722', rating: 5, text: 'Our experience with Diego & his team was exceptional from start...', date: '3 days ago' },
  { name: 'Srikanth Ragh...', initial: 'S', color: '#4CAF50', rating: 5, text: 'Diego Salas and his team made our trip to Costa Rica seamless...', date: '6 days ago' },
  { name: 'Maria Garcia', initial: 'M', color: '#9C27B0', rating: 5, text: 'Incredible experience! The aerial tram ride through the rainforest was breathtaking...', date: '1 week ago' },
  { name: 'John Smith', initial: 'J', color: '#3F51B5', rating: 5, text: 'Best zipline adventure ever! The staff was professional and made sure we felt safe...', date: '2 weeks ago' },
  { name: 'Ana Rodriguez', initial: 'A', color: '#E91E63', rating: 5, text: 'A must-do in Costa Rica! The butterfly garden was magical and the views...', date: '2 weeks ago' },
  { name: 'Michael Johnson', initial: 'M', color: '#009688', rating: 4, text: 'Great family outing. Kids loved the snake and frog exhibitions...', date: '3 weeks ago' },
  { name: 'Sophie Martin', initial: 'S', color: '#FF9800', rating: 5, text: 'Exceeded all expectations! The bird watching tour was amazing...', date: '1 month ago' },
]

export default function BraulioCarrillo() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const visibleReviews = 5

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % (reviews.length - visibleReviews + 1))
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + (reviews.length - visibleReviews + 1)) % (reviews.length - visibleReviews + 1))
  }

  return (
    <>
      {/* Header - Sticky with Blur */}
      <header className={styles.header}>
        <div className={styles.headerInner}>
          <a href="/" className={styles.logo}>
            <img src={LOGO} alt="Rainforest Adventures" className={styles.logoImg} />
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
            <a href="/#experiences">Experiences</a>
            <a href="/#about">About</a>
            <a href="/#contact">Contact</a>
          </nav>
        </div>
      </header>

      {/* Hero - Text Bottom Left */}
      <section className={styles.hero}>
        <div className={styles.heroImage}>
          <img src={IMAGES.braulioCarrillo} alt="Braulio Carrillo, Costa Rica" />
          <div className={styles.heroOverlay} />
        </div>
        <div className={styles.heroContent}>
          <h1 className={styles.heroTitle}>
            BRAULIO CARRILLO<br />
            <span>COSTA RICA</span>
          </h1>
          <p className={styles.heroDesc}>
            Experience the most spectacular Atlantic rainforest adventures in Costa Rica.
          </p>
        </div>
      </section>

      {/* Features Bar */}
      <section className={styles.features}>
        <div className={styles.featuresInner}>
          <div className={styles.feature}>
            <span className={styles.featureIcon}>
              <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"><path d="M5 19c0-8 6-14 14-14 0 8-6 14-14 14z"/><path d="M5 19L15 9"/></svg>
            </span>
            <div>
              <strong>BE ONE</strong>
              <span>WITH NATURE</span>
            </div>
          </div>
          <div className={styles.feature}>
            <span className={styles.featureIcon}>
              <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"><path d="M13 2L4 14h6l-1 8 9-12h-6l1-8z"/></svg>
            </span>
            <div>
              <strong>FEEL THE</strong>
              <span>ADRENALINE</span>
            </div>
          </div>
          <div className={styles.feature}>
            <span className={styles.featureIcon}>
              <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"><rect x="5" y="11" width="14" height="9" rx="2"/><path d="M8 11V8a4 4 0 0 1 8 0v3"/></svg>
            </span>
            <div>
              <strong>PAYMENT 100%</strong>
              <span>SECURED</span>
            </div>
          </div>
        </div>
      </section>

      {/* Tours Section */}
      <section className={styles.tours}>
        <div className="container">
          {tours.map((tour) => (
            <div key={tour.id} className={styles.tourCard}>
              <div className={styles.tourImage}>
                {tour.badge && (
                  <div className={styles.tourBadge}>{tour.badge}</div>
                )}
                <img src={tour.image} alt={tour.title} />
              </div>

              <div className={styles.tourInfo}>
                <div className={styles.tourHeader}>
                  <span className={styles.tourLocation}>
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/></svg>
                    Braulio Carrillo
                  </span>
                  <span className={styles.tourDuration}>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67z"/></svg>
                    {tour.duration}
                  </span>
                </div>
                <h3 className={styles.tourTitle}>{tour.title}</h3>
                <p className={styles.tourDesc}>{tour.description}</p>

                <div className={styles.tourActivities}>
                  <strong>Activities:</strong>
                  <div className={styles.activityList}>
                    {tour.activities.map((act, i) => (
                      <span key={i} className={styles.activity}>✓ {act}</span>
                    ))}
                  </div>
                </div>

                {tour.services && (
                  <div className={styles.tourServices}>
                    <strong>Optional Services Available:</strong>
                    <div className={styles.servicesList}>
                      {tour.services.map((svc, i) => (
                        <span key={i} className={styles.serviceBadge}>{svc}</span>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              <div className={styles.tourPricing}>
                <div className={styles.priceLabel}>Price Starting From</div>
                <div className={styles.priceCurrency}>(USD)</div>
                <div className={styles.priceMain}>
                  <span className={styles.priceAmount}>${tour.priceAdult}</span>
                  <span className={styles.pricePer}>/Person</span>
                </div>
                {tour.priceKid && (
                  <div className={styles.priceKid}>
                    <span>${tour.priceKid}</span>
                    <span>/Kid</span>
                  </div>
                )}

                {tour.requirements && (
                  <div className={styles.tourRequirements}>
                    {tour.requirements.map((req, i) => (
                      <div key={i} className={styles.requirement}>
                        <span className={styles.reqIcon}>
                          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="9"/><path d="M12 11v5"/><path d="M12 7.5h.01"/></svg>
                        </span>
                        <span>{req}</span>
                      </div>
                    ))}
                  </div>
                )}

                <div className={styles.tourTime}>
                  <span className={styles.timeIcon}>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/></svg>
                  </span>
                  <span className={styles.timeLabel}>OPENING TIME</span>
                  <span className={styles.timeValue}>{tour.openingTime}</span>
                </div>

                <button className={styles.bookBtn}>BOOK NOW</button>
                <button className={styles.moreBtn}>MORE INFO</button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Google Reviews Section */}
      <section className={styles.reviewsSection}>
        <div className="container">
          <h2 className={styles.reviewsTitle}>What Our Customers Say</h2>

          <div className={styles.googleHeader}>
            <div className={styles.googleLogo}>
              <span className={styles.googleG}>G</span>oogle <span className={styles.reviewsWord}>Reviews</span>
            </div>
            <div className={styles.googleRating}>
              <span className={styles.ratingNumber}>5.0</span>
              <span className={styles.ratingStars}>★★★★★</span>
              <span className={styles.ratingCount}>(152)</span>
            </div>
            <a href="#" className={styles.reviewBtn}>Review us on Google</a>
          </div>

          <div className={styles.reviewsCarousel}>
            <button onClick={prevSlide} className={styles.carouselBtn}>‹</button>

            <div className={styles.reviewsTrack}>
              <div
                className={styles.reviewsSlider}
                style={{ transform: `translateX(-${currentSlide * (100 / visibleReviews)}%)` }}
              >
                {reviews.map((review, i) => (
                  <div key={i} className={styles.reviewCard}>
                    <div className={styles.reviewHeader}>
                      <div className={styles.reviewAvatar} style={{ background: review.color }}>
                        {review.initial}
                        <span className={styles.googleBadge}>G</span>
                      </div>
                      <div className={styles.reviewMeta}>
                        <span className={styles.reviewName}>{review.name} ✓</span>
                        <span className={styles.reviewDate}>{review.date}</span>
                      </div>
                    </div>
                    <div className={styles.reviewStars}>★★★★★</div>
                    <p className={styles.reviewText}>{review.text}</p>
                    <a href="#" className={styles.readMore}>Read more</a>
                  </div>
                ))}
              </div>
            </div>

            <button onClick={nextSlide} className={styles.carouselBtn}>›</button>
          </div>

          <div className={styles.carouselDots}>
            {Array.from({ length: reviews.length - visibleReviews + 1 }).map((_, i) => (
              <span
                key={i}
                className={`${styles.dot} ${i === currentSlide ? styles.dotActive : ''}`}
                onClick={() => setCurrentSlide(i)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className={styles.footer}>
        <div className="container">
          <div className={styles.footerGrid}>
            <div className={styles.footerBrand}>
              <div className={styles.footerLogo}>
                <img src={LOGO} alt="Rainforest Adventures" className={styles.footerLogoImg} />
              </div>
              <p>
                World-class eco-adventures in the most beautiful
                rainforest destinations across the Caribbean and Central America.
              </p>
              <div className={styles.socialLinks}>
                <a href="#">
                  <svg viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
                </a>
                <a href="#">
                  <svg viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
                </a>
                <a href="#">
                  <svg viewBox="0 0 24 24"><path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/></svg>
                </a>
                <a href="#">
                  <svg viewBox="0 0 24 24"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
                </a>
              </div>
            </div>

            <div className={styles.footerLinks}>
              <h4>Destinations</h4>
              <ul>
                <li><a href="#">St. Maarten</a></li>
                <li><a href="/braulio-carrillo">Braulio Carrillo</a></li>
                <li><a href="#">Panama</a></li>
                <li><a href="#">Jaco</a></li>
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

      {/* WhatsApp Button */}
      <a href="https://wa.me/18885550123" target="_blank" rel="noopener noreferrer" className={styles.whatsappBtn}>
        <svg viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
      </a>
    </>
  )
}
