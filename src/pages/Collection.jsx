import { Link, useParams, Navigate } from 'react-router-dom'
import Footer from '../components/Footer'
import { collections } from '../data/artworks'
import './Collection.css'

export default function Collection() {
  const { collectionId } = useParams()
  const collection = collections.find((c) => c.id === collectionId)

  if (!collection) {
    return <Navigate to="/" replace />
  }

  return (
    <div className="page collection-page">
      <header className="page-header">
        <div className="container">
          <Link to="/#collections" className="collection-back">
            ← All collections
          </Link>
          <p className="page-header__label">{collection.year}</p>
          <h1>{collection.name}</h1>
          <p className="page-header__subtitle">{collection.description}</p>
        </div>
      </header>

      <section className="collection-gallery">
        <div className="container">
          <div className="gallery-grid">
            {collection.artworks.map((artwork, index) => (
              <figure
                key={artwork.id}
                className={`gallery-item ${index === 0 ? 'gallery-item--featured' : ''}`}
              >
                <img src={artwork.image} alt={artwork.title} loading="lazy" />
                <figcaption>
                  <h2>{artwork.title}</h2>
                  <p>
                    {artwork.medium} · {artwork.year} · {artwork.dimensions}
                  </p>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
