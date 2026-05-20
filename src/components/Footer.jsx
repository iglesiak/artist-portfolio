import { Link } from 'react-router-dom'
import { artist } from '../data/artworks'
import './Footer.css'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__inner">
        <p className="footer__name">{artist.name}</p>
        <nav className="footer__links" aria-label="Footer navigation">
          <Link to="/">Work</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
        </nav>
        <p className="footer__copy">© {new Date().getFullYear()} {artist.name}</p>
      </div>
    </footer>
  )
}
