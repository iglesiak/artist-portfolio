import { useState } from 'react'
import Footer from '../components/Footer'
import { artist } from '../data/artworks'
import './Contact.css'

export default function Contact() {
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(e) {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <div className="page contact-page">
      <header className="page-header">
        <div className="container">
          <p className="page-header__label">Contact</p>
          <h1>Get in touch</h1>
          <p className="page-header__subtitle">
            For inquiries about available works, commissions, or press — reach out to the studio.
          </p>
        </div>
      </header>

      <section className="contact-content">
        <div className="container contact-grid">
          <div className="contact-info">
            <div className="contact-info__block">
              <h3>Studio</h3>
              <p>{artist.location}</p>
            </div>
            <div className="contact-info__block">
              <h3>Email</h3>
              <p>
                <a href={`mailto:${artist.email}`}>{artist.email}</a>
              </p>
            </div>
            <div className="contact-info__block">
              <h3>Representation</h3>
              <p>
                Meridian Gallery<br />
                New York, NY<br />
                <a href="mailto:info@meridiangallery.com">info@meridiangallery.com</a>
              </p>
            </div>
            <div className="contact-info__block">
              <h3>Follow</h3>
              <p>
                <a href="#" aria-label="Instagram">Instagram</a>
                {' · '}
                <a href="#" aria-label="Artsy">Artsy</a>
              </p>
            </div>
          </div>

          <div className="contact-form-wrap">
            {submitted ? (
              <div className="contact-success" role="status">
                <h2>Thank you</h2>
                <p>Your message has been received. The studio will respond within a few business days.</p>
              </div>
            ) : (
              <form className="contact-form" onSubmit={handleSubmit}>
                <div className="form-row">
                  <label htmlFor="name">Name</label>
                  <input id="name" name="name" type="text" required autoComplete="name" />
                </div>
                <div className="form-row">
                  <label htmlFor="email">Email</label>
                  <input id="email" name="email" type="email" required autoComplete="email" />
                </div>
                <div className="form-row">
                  <label htmlFor="subject">Subject</label>
                  <select id="subject" name="subject" required defaultValue="">
                    <option value="" disabled>
                      Select a topic
                    </option>
                    <option value="acquisition">Work acquisition</option>
                    <option value="commission">Commission inquiry</option>
                    <option value="press">Press & media</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                <div className="form-row">
                  <label htmlFor="message">Message</label>
                  <textarea id="message" name="message" rows={6} required />
                </div>
                <button type="submit" className="contact-form__submit">
                  Send message
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
