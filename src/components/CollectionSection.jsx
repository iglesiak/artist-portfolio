import { Link } from 'react-router-dom'
import './CollectionSection.css'

export default function CollectionSection({ collection, index }) {
  const featured = collection.artworks[0]

  return (
    <article
      className={`collection-section ${index % 2 === 1 ? 'collection-section--reverse' : ''}`}
      id={collection.id}
    >
      <Link
        to={`/collections/${collection.id}`}
        className="collection-section__image-link"
      >
        <img
          src={featured.image}
          alt={featured.title}
          className="collection-section__image"
          loading="lazy"
        />
      </Link>

      <div className="collection-section__content">
        <span className="collection-section__year">{collection.year}</span>
        <h2 className="collection-section__name">
          <Link to={`/collections/${collection.id}`}>{collection.name}</Link>
        </h2>
        <p className="collection-section__description">{collection.description}</p>
        <p className="collection-section__count">
          {collection.artworks.length} works
        </p>
        <Link to={`/collections/${collection.id}`} className="collection-section__cta">
          View collection
          <span aria-hidden="true">→</span>
        </Link>
      </div>
    </article>
  )
}
