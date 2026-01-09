import styles from './page.module.css'

export default function Home() {
  return (
    <>
      {/* Header */}
      <header className={styles.header}>
        <div className={styles.headerContainer}>
          <div className={styles.logo}>
            <span className={styles.logoText}>RAINFOREST</span>
            <span className={styles.logoSubtext}>ADVENTURE</span>
          </div>
          <nav className={styles.nav}>
            <a href="#inicio">Inicio</a>
            <a href="#experiencias">Experiencias</a>
            <a href="#nosotros">Nosotros</a>
            <a href="#galeria">Galería</a>
            <a href="#contacto">Contacto</a>
          </nav>
          <a href="#reservar" className={styles.headerBtn}>Reservar</a>
        </div>
      </header>

      {/* Hero Section */}
      <section className={styles.hero} id="inicio">
        <div className={styles.heroPlaceholder}>
          <span>HERO IMAGE</span>
          <span>1920 x 800 px</span>
        </div>
        <div className={styles.heroContent}>
          <h1>VIVE LA AVENTURA</h1>
          <p>Descubre la magia del bosque tropical con experiencias únicas e inolvidables</p>
          <div className={styles.heroButtons}>
            <a href="#experiencias" className="btn">Explorar Tours</a>
            <a href="#reservar" className="btn btn-outline">Reservar Ahora</a>
          </div>
        </div>
      </section>

      {/* Experiences Section */}
      <section className={`section ${styles.experiences}`} id="experiencias">
        <div className="container">
          <h2 className="section-title">Nuestras Experiencias</h2>
          <p className="section-subtitle">Aventuras diseñadas para todos los niveles</p>

          <div className={styles.experiencesGrid}>
            {[
              { title: 'Canopy Zipline', desc: 'Vuela sobre el dosel del bosque con nuestras tirolesas de clase mundial' },
              { title: 'Teleférico Aéreo', desc: 'Recorre el bosque desde las alturas en nuestro teleférico panorámico' },
              { title: 'Caminata Guiada', desc: 'Explora senderos naturales con guías expertos en flora y fauna' },
              { title: 'Tour Nocturno', desc: 'Descubre la vida salvaje que despierta cuando cae la noche' },
              { title: 'Puentes Colgantes', desc: 'Camina entre las copas de los árboles en puentes suspendidos' },
              { title: 'Rappel en Cascada', desc: 'Desciende por cascadas naturales en una aventura extrema' },
            ].map((exp, i) => (
              <div key={i} className={styles.experienceCard}>
                <div className={styles.experienceImage}>
                  <span>IMAGEN {i + 1}</span>
                  <span>400 x 300 px</span>
                </div>
                <div className={styles.experienceContent}>
                  <h3>{exp.title}</h3>
                  <p>{exp.desc}</p>
                  <a href="#" className={styles.experienceLink}>Ver más →</a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className={`section ${styles.about}`} id="nosotros">
        <div className="container">
          <div className={styles.aboutGrid}>
            <div className={styles.aboutImage}>
              <span>IMAGEN NOSOTROS</span>
              <span>600 x 500 px</span>
            </div>
            <div className={styles.aboutContent}>
              <h2 className={styles.aboutTitle}>SOBRE NOSOTROS</h2>
              <p>
                Con más de 20 años de experiencia, somos líderes en turismo de aventura
                eco-sostenible. Nuestro compromiso es ofrecer experiencias inolvidables
                mientras protegemos el medio ambiente.
              </p>
              <p>
                Contamos con las certificaciones más exigentes en seguridad y
                sostenibilidad, garantizando aventuras seguras y responsables.
              </p>
              <div className={styles.aboutStats}>
                <div className={styles.statItem}>
                  <span className={styles.statNumber}>20+</span>
                  <span className={styles.statLabel}>Años de Experiencia</span>
                </div>
                <div className={styles.statItem}>
                  <span className={styles.statNumber}>500K+</span>
                  <span className={styles.statLabel}>Visitantes Felices</span>
                </div>
                <div className={styles.statItem}>
                  <span className={styles.statNumber}>50+</span>
                  <span className={styles.statLabel}>Aventuras Únicas</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className={`section ${styles.gallery}`} id="galeria">
        <div className="container">
          <h2 className="section-title">Galería</h2>
          <p className="section-subtitle">Momentos capturados en nuestras aventuras</p>

          <div className={styles.galleryGrid}>
            {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
              <div key={i} className={styles.galleryItem}>
                <span>GALERÍA {i}</span>
                <span>400 x 400 px</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className={styles.cta}>
        <div className={styles.ctaPlaceholder}>
          <span>BACKGROUND IMAGE</span>
          <span>1920 x 500 px</span>
        </div>
        <div className={styles.ctaContent}>
          <h2>¿LISTO PARA LA AVENTURA?</h2>
          <p>Reserva ahora y obtén un 15% de descuento en tu primera experiencia</p>
          <a href="#reservar" className="btn">Reservar Ahora</a>
        </div>
      </section>

      {/* Contact Section */}
      <section className={`section ${styles.contact}`} id="contacto">
        <div className="container">
          <h2 className="section-title">Contáctanos</h2>
          <p className="section-subtitle">Estamos aquí para ayudarte a planear tu aventura</p>

          <div className={styles.contactGrid}>
            <div className={styles.contactInfo}>
              <div className={styles.contactItem}>
                <div className={styles.contactIcon}>📍</div>
                <div>
                  <h4>Ubicación</h4>
                  <p>Bosque Tropical, Costa Rica</p>
                </div>
              </div>
              <div className={styles.contactItem}>
                <div className={styles.contactIcon}>📞</div>
                <div>
                  <h4>Teléfono</h4>
                  <p>+506 1234 5678</p>
                </div>
              </div>
              <div className={styles.contactItem}>
                <div className={styles.contactIcon}>✉️</div>
                <div>
                  <h4>Email</h4>
                  <p>info@rainforest.com</p>
                </div>
              </div>
              <div className={styles.contactItem}>
                <div className={styles.contactIcon}>🕐</div>
                <div>
                  <h4>Horario</h4>
                  <p>Lunes - Domingo: 7:00 AM - 5:00 PM</p>
                </div>
              </div>
            </div>
            <form className={styles.contactForm}>
              <input type="text" placeholder="Nombre completo" />
              <input type="email" placeholder="Correo electrónico" />
              <input type="tel" placeholder="Teléfono" />
              <textarea placeholder="Mensaje" rows={5}></textarea>
              <button type="submit" className="btn">Enviar Mensaje</button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className={styles.footer}>
        <div className={styles.footerMain}>
          <div className="container">
            <div className={styles.footerGrid}>
              <div className={styles.footerCol}>
                <div className={styles.footerLogo}>
                  <span>RAINFOREST</span>
                  <span>ADVENTURE</span>
                </div>
                <p>Tu destino para aventuras eco-sostenibles en el corazón del bosque tropical.</p>
                <div className={styles.socialLinks}>
                  <a href="#">FB</a>
                  <a href="#">IG</a>
                  <a href="#">TW</a>
                  <a href="#">YT</a>
                </div>
              </div>
              <div className={styles.footerCol}>
                <h4>Enlaces Rápidos</h4>
                <ul>
                  <li><a href="#inicio">Inicio</a></li>
                  <li><a href="#experiencias">Experiencias</a></li>
                  <li><a href="#nosotros">Nosotros</a></li>
                  <li><a href="#galeria">Galería</a></li>
                  <li><a href="#contacto">Contacto</a></li>
                </ul>
              </div>
              <div className={styles.footerCol}>
                <h4>Experiencias</h4>
                <ul>
                  <li><a href="#">Canopy Zipline</a></li>
                  <li><a href="#">Teleférico Aéreo</a></li>
                  <li><a href="#">Caminata Guiada</a></li>
                  <li><a href="#">Tour Nocturno</a></li>
                  <li><a href="#">Puentes Colgantes</a></li>
                </ul>
              </div>
              <div className={styles.footerCol}>
                <h4>Contacto</h4>
                <ul>
                  <li>Bosque Tropical, Costa Rica</li>
                  <li>+506 1234 5678</li>
                  <li>info@rainforest.com</li>
                  <li>Lun - Dom: 7AM - 5PM</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.footerBottom}>
          <div className="container">
            <p>© 2025 Rainforest Adventure. Todos los derechos reservados.</p>
          </div>
        </div>
      </footer>
    </>
  )
}
