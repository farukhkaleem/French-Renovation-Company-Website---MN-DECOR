import { Link, NavLink } from "react-router-dom"
import { useEffect, useState } from "react"

function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 80)
    }

    window.addEventListener("scroll", handleScroll)

    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <nav
      className={`navbar navbar-expand-lg fixed-top ${
        scrolled || menuOpen
          ? "navbar-scrolled navbar-light"
          : "navbar-transparent navbar-dark"
      }`}
    >

      <div className="container">
        <Link className="navbar-brand" to="/">
          {/* MN Decor */}
          <img src="/images/MN-DECOR-logo.png" alt="" width="90px"/>
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#nav"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span className="navbar-toggler-icon"></span>
        </button>


        <div id="nav" className="collapse navbar-collapse">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <NavLink className="nav-link" to="/" end>
                Accueil
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink className="nav-link" to="/qui-sommes-nous">
                Qui Sommes Nous
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink className="nav-link" to="/portfolio">
                Portfolio
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink className="nav-link" to="/nos-metiers">
                Nos Metiers
              </NavLink>
            </li>

            <li className="nav-item me-lg-3">
              <NavLink className="nav-link" to="/contact">
                Contact
              </NavLink>
            </li>

            <li className="nav-item ms-lg-4">
              <a
                href="/contact"
                className="btn btn-accent nav-cta"
              >
                Demander un devis
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
