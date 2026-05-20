import { useEffect, useState } from 'react'
import { featuredArtwork, artist } from '../data/artworks'
import './ImmersiveHero.css'

export default function ImmersiveHero() {
  const [loaded, setLoaded] = useState(false)
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const onScroll = () => setScrollY(window.scrollY)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const parallax = scrollY * 0.35
  const opacity = Math.max(0, 1 - scrollY / 600)

  return (
    <section className="hero" aria-label="Featured artwork">
      <div
        className="hero__image-wrap"
        style={{ transform: `translateY(${parallax}px)` }}
      >
        <img
          src={featuredArtwork.image}
          alt={featuredArtwork.title}
          className={`hero__image ${loaded ? 'hero__image--loaded' : ''}`}
          onLoad={() => setLoaded(true)}
        />
        <div className="hero__overlay" />
      </div>

      <div className="hero__content" style={{ opacity }}>
        <p className="hero__eyebrow">{artist.name}</p>
        <h1 className="hero__title">{featuredArtwork.title}</h1>
        <p className="hero__meta">
          {featuredArtwork.medium} · {featuredArtwork.year}
        </p>
        <p className="hero__description">{featuredArtwork.description}</p>
      </div>

      <a href="#collections" className="hero__scroll" aria-label="Scroll to collections">
        <span>Explore</span>
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
          <path d="M10 3v14M4 11l6 6 6-6" stroke="currentColor" strokeWidth="1.2" />
        </svg>
      </a>
    </section>
  )
}
