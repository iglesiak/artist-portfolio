import ImmersiveHero from '../components/ImmersiveHero'
import CollectionSection from '../components/CollectionSection'
import Footer from '../components/Footer'
import { collections, artist } from '../data/artworks'
import './Home.css'

export default function Home() {
  return (
    <>
      <ImmersiveHero />

      <section className="home-intro">
        <div className="container">
          <p className="home-intro__label">Studio</p>
          <h2 className="home-intro__heading">{artist.tagline}</h2>
          <p className="home-intro__text">
            Based in {artist.location}, Elena Voss creates large-scale oil paintings
            that explore the emotional residue of place — coastlines at dusk,
            rooms filled with amber light, cities after everyone has gone home.
          </p>
        </div>
      </section>

      <section id="collections" className="home-collections">
        <div className="container">
          <header className="home-collections__header">
            <p className="home-collections__label">Collections</p>
            <h2>Selected bodies of work</h2>
          </header>

          {collections.map((collection, index) => (
            <CollectionSection
              key={collection.id}
              collection={collection}
              index={index}
            />
          ))}
        </div>
      </section>

      <Footer />
    </>
  )
}
