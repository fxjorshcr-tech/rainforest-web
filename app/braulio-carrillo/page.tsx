'use client'
import { useState } from 'react'
import styles from './page.module.css'

const VIDEO_URL = 'https://mmlbslwljvmscbgsqkkq.supabase.co/storage/v1/object/sign/PRUEBAS/Video_de_Tren_en_Bosques_Costarricenses.mp4?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV9iZmNkZjM3My00NzkzLTRhYjQtYmRhOC04OWY1ZmNiMjdhMzciLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJQUlVFQkFTL1ZpZGVvX2RlX1RyZW5fZW5fQm9zcXVlc19Db3N0YXJyaWNlbnNlcy5tcDQiLCJpYXQiOjE3Njc5OTMzMjMsImV4cCI6MTc5OTUyOTMyM30.oLocALyHX6aouQT1IZxfT9l-44lvXnnUbqnbq-6Xsx0'

const tours = [
  {
    id: '6in1',
    badge: 'BEST SELLER',
    badgeColor: '#f7931e',
    title: '6 IN 1 TOUR - FULL DAY PASS',
    duration: '5 Hours',
    description: 'Enjoy the most complete package of eco-adventures in Costa Rica. Enjoy the spectacular Atlantic rainforest, a cable car flight through the treetops and the great excitement of enjoying the safest canopy tour in the area.',
    activities: ['Canopy', 'Aerial Tram', 'Orchid Garden', 'Butterfly Garden', 'Nature Walk', 'Snake and Frog Exhibitions'],
    services: ['Free Parking'],
    priceAdult: 109,
    priceKid: 69,
    notes: ['Closed toe shoes required', 'To take zip line tour you must be in good physical condition'],
    time: '8:15am to 4:00pm (visitor must enter the park at 2:00pm the latest). 6 in 1 tour time: at 10:00am.',
  },
  {
    id: 'canopy',
    badge: 'SUPER FUN!',
    badgeColor: '#f7931e',
    title: 'CANOPY (ZIP LINE) - HALF DAY PASS',
    duration: '2.5 Hours',
    description: 'Fly through and over the rainforest on the safest and most fun canopy tour in the country and experience first-hand why Costa Rica is the best destination in the world for Adventure and Eco-tourism.',
    activities: ['Canopy Zip Line', 'Butterfly Garden', 'Orchid Garden', 'Snake and Frog Exhibitions', 'Nature Walk'],
    services: ['Free Parking'],
    priceAdult: 67,
    priceKid: 44,
    notes: ['Closed toe shoes required', 'To take zip line tour you must be in good physical condition'],
    time: 'Zipline times: at 08:00am, 10:00am and at 2:00pm. All clients must be present 15 minutes before the confirmed time for the tour.',
  },
  {
    id: 'bird',
    badge: null,
    badgeColor: null,
    title: 'BIRD WATCHING TOUR - FULL DAY PASS',
    duration: '8 Hours',
    description: 'Rainforest Adventures has been recognized by the National Audubon Society as one of the best birding spots in Costa Rica. You can spend hours looking for and admiring the majestic species that nest in our rainforest.',
    activities: ['Bird Watching', 'Aerial Tram', 'Nature Walk'],
    services: ['Locker', 'Free Parking'],
    priceAdult: 95,
    priceKid: null,
    notes: ['Closed toe shoes required', 'All clients must be present 15 minutes before the confirmed time for the tour'],
    time: 'Bird Watching Tour time: at 7:30 am.',
  },
]

const reviews = [
  { name: 'Maria Garcia', rating: 5, text: 'Incredible experience! The aerial tram ride through the rainforest was breathtaking. Our guide was very knowledgeable about the local wildlife.', date: '2 weeks ago' },
  { name: 'John Smith', rating: 5, text: 'Best zipline adventure ever! The staff was professional and made sure we felt safe throughout. Highly recommend the 6-in-1 package.', date: '1 month ago' },
  { name: 'Ana Rodriguez', rating: 5, text: 'A must-do in Costa Rica! The butterfly garden was magical and the views from the canopy were unbelievable. Will definitely come back!', date: '3 weeks ago' },
  { name: 'Michael Johnson', rating: 4, text: 'Great family outing. Kids loved the snake and frog exhibitions. The only reason for 4 stars is the wait time, but totally worth it.', date: '1 month ago' },
  { name: 'Sophie Martin', rating: 5, text: 'Exceeded all expectations! The bird watching tour was amazing - we spotted toucans and quetzals. Our guide knew every species.', date: '2 months ago' },
  { name: 'Carlos Mendez', rating: 5, text: 'Pura vida! This is the real Costa Rica experience. The rainforest is pristine and the activities are well organized. 10/10!', date: '1 week ago' },
  { name: 'Emma Wilson', rating: 5, text: 'The aerial tram gave us views we\'ll never forget. Saw monkeys, sloths, and countless birds. Staff was incredibly friendly.', date: '3 weeks ago' },
  { name: 'David Lee', rating: 4, text: 'Fun adventure for the whole family. The ziplines were thrilling and safe. Great value for money with the full day pass.', date: '1 month ago' },
  { name: 'Isabella Torres', rating: 5, text: 'Absolutely stunning! The orchid garden was beautiful and the nature walk was peaceful. Perfect escape from the city.', date: '2 weeks ago' },
  { name: 'James Brown', rating: 5, text: 'One of the highlights of our Costa Rica trip! Professional staff, beautiful scenery, and unforgettable memories. Highly recommend!', date: '1 month ago' },
]

export default function BraulioCarrillo() {
  const [currentReview, setCurrentReview] = useState(0)

  const nextReview = () => {
    setCurrentReview((prev) => (prev + 1) % reviews.length)
  }

  const prevReview = () => {
    setCurrentReview((prev) => (prev - 1 + reviews.length) % reviews.length)
  }

  return (
    <>
      {/* Header */}
      <header className={styles.header}>
        <div className={styles.headerInner}>
          <a href="/" className={styles.logo}>
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
            <a href="/#experiences">Experiences</a>
            <a href="/#about">About</a>
            <a href="/#contact">Contact</a>
          </nav>
        </div>
      </header>

      {/* Hero with Video */}
      <section className={styles.hero}>
        <div className={styles.heroVideo}>
          <video autoPlay muted loop playsInline>
            <source src={VIDEO_URL} type="video/mp4" />
          </video>
          <div className={styles.heroOverlay} />
        </div>
        <div className={styles.heroContent}>
          <h1 className={styles.heroTitle}>
            BRAULIO CARRILLO PARK<br />
            <span>COSTA RICA</span>
          </h1>
        </div>
      </section>

      {/* Features Bar */}
      <section className={styles.features}>
        <div className={styles.featuresInner}>
          <div className={styles.feature}>
            <span className={styles.featureIcon}>🌿</span>
            <div>
              <strong>BE ONE</strong>
              <span>WITH NATURE</span>
            </div>
          </div>
          <div className={styles.feature}>
            <span className={styles.featureIcon}>⚡</span>
            <div>
              <strong>FEEL THE</strong>
              <span>ADRENALINE</span>
            </div>
          </div>
          <div className={styles.feature}>
            <span className={styles.featureIcon}>🔒</span>
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
                  <div className={styles.tourBadge} style={{ background: tour.badgeColor }}>
                    {tour.badge}
                  </div>
                )}
                <div className={styles.tourImagePlaceholder}>
                  <span>Tour Image</span>
                </div>
              </div>

              <div className={styles.tourInfo}>
                <div className={styles.tourHeader}>
                  <span className={styles.tourLocation}>📍 Braulio Carrillo</span>
                  <span className={styles.tourDuration}>⏱ {tour.duration}</span>
                </div>
                <h3 className={styles.tourTitle}>{tour.title}</h3>
                <p className={styles.tourDesc}>{tour.description}</p>

                <div className={styles.tourActivities}>
                  <strong>Activities:</strong>
                  <div className={styles.activityList}>
                    {tour.activities.map((act, i) => (
                      <span key={i} className={styles.activity}>
                        <span className={styles.activityCheck}>✓</span>
                        {act}
                      </span>
                    ))}
                  </div>
                </div>

                <div className={styles.tourServices}>
                  <strong>Optional Services Available:</strong>
                  <div className={styles.serviceList}>
                    {tour.services.map((srv, i) => (
                      <span key={i} className={styles.service}>{srv}</span>
                    ))}
                  </div>
                </div>
              </div>

              <div className={styles.tourPricing}>
                <div className={styles.priceHeader}>Price Starting From</div>
                <div className={styles.priceCurrency}>(USD)</div>
                <div className={styles.priceMain}>
                  <span className={styles.priceAmount}>${tour.priceAdult}</span>
                  <span className={styles.pricePer}>/Person</span>
                </div>
                {tour.priceKid && (
                  <div className={styles.priceKid}>
                    <span className={styles.priceAmount}>${tour.priceKid}</span>
                    <span className={styles.pricePer}>/Kid</span>
                  </div>
                )}

                <div className={styles.tourNotes}>
                  {tour.notes.map((note, i) => (
                    <p key={i}>ℹ️ {note}</p>
                  ))}
                </div>

                <div className={styles.tourTime}>
                  <strong>⏰ OPENING TIME</strong>
                  <p>{tour.time}</p>
                </div>

                <button className={styles.bookBtn}>BOOK NOW</button>
                <button className={styles.moreBtn}>MORE INFO</button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Reviews Carousel */}
      <section className={styles.reviews}>
        <div className={styles.reviewsContent}>
          <div className={styles.reviewsImage}>
            <div className={styles.slothPlaceholder}>🦥</div>
          </div>
          <div className={styles.reviewsCarousel}>
            <h2 className={styles.reviewsTitle}>TESTIMONIALS</h2>

            <div className={styles.reviewCard}>
              <p className={styles.reviewText}>"{reviews[currentReview].text}"</p>
              <div className={styles.reviewAuthor}>
                <div className={styles.reviewStars}>
                  {'★'.repeat(reviews[currentReview].rating)}{'☆'.repeat(5 - reviews[currentReview].rating)}
                </div>
                <span className={styles.reviewName}>{reviews[currentReview].name}</span>
                <span className={styles.reviewDate}>{reviews[currentReview].date}</span>
              </div>
            </div>

            <div className={styles.reviewNav}>
              <button onClick={prevReview} className={styles.reviewNavBtn}>‹</button>
              <div className={styles.reviewDots}>
                {reviews.map((_, i) => (
                  <span
                    key={i}
                    className={`${styles.reviewDot} ${i === currentReview ? styles.reviewDotActive : ''}`}
                    onClick={() => setCurrentReview(i)}
                  />
                ))}
              </div>
              <button onClick={nextReview} className={styles.reviewNavBtn}>›</button>
            </div>

            <div className={styles.googleBadge}>
              <span className={styles.googleIcon}>G</span>
              <span>Google Reviews</span>
            </div>
          </div>
        </div>
      </section>

      {/* WhatsApp Button */}
      <a href="https://wa.me/18885550123" target="_blank" rel="noopener noreferrer" className={styles.whatsappBtn}>
        <svg viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
      </a>
    </>
  )
}
