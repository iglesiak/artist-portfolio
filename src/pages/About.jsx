import Footer from '../components/Footer'
import { artist } from '../data/artworks'
import './About.css'

export default function About() {
  return (
    <div className="page about-page">
      <header className="page-header">
        <div className="container">
          <p className="page-header__label">About</p>
          <h1>{artist.name}</h1>
          <p className="page-header__subtitle">{artist.tagline}</p>
        </div>
      </header>

      <section className="about-content">
        <div className="container about-grid">
          <div className="about-portrait">
            <img
              src="https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=800&q=80&auto=format&fit=crop"
              alt="Elena Voss in her studio"
              loading="lazy"
            />
          </div>

          <div className="about-text">
            <p>
              Elena Voss is a contemporary painter based in Brooklyn. Her work has been
              exhibited at galleries across North America and Europe, including solo
              shows at Meridian Gallery (New York) and Atelier Nord (Oslo).
            </p>
            <p>
              Working primarily in oil on linen, Voss builds surfaces through dozens of
              translucent layers — a process that can take months for a single canvas.
              Her subjects emerge slowly: a horizon line, a window at dusk, the glow of
              a streetlamp reflected in wet pavement.
            </p>
            <p>
              Voss received her MFA from Yale School of Art and her BFA from RISD. She
              has been awarded residencies at the MacDowell Colony and Skowhegan School
              of Painting & Sculpture.
            </p>

            <div className="about-details">
              <div>
                <h3>Education</h3>
                <ul>
                  <li>MFA, Yale School of Art</li>
                  <li>BFA, Rhode Island School of Design</li>
                </ul>
              </div>
              <div>
                <h3>Selected exhibitions</h3>
                <ul>
                  <li>Horizon Lines — Meridian Gallery, NYC (2025)</li>
                  <li>Liminal Waters — Atelier Nord, Oslo (2024)</li>
                  <li>Interior Echoes — CAMH, Houston (2023)</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
