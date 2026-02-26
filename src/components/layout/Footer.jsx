import { Link } from "react-router-dom"
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTiktok } from "react-icons/fa"
import { color } from "framer-motion"


function Footer() {
  return (
    <footer className="bg-dark text-white pt-4">
      <div className="container py-4">
        <div className="row gy-3">

          {/* Brand Identity */}
          <div className="col-lg-3 col-md-6">
            <h5>MN Decor</h5>
            {/* <img src="/images/logo-2.png" width="50%"/> */}
            <p className="mb-2">
              Construction et rénovation intérieure et extérieure.
            </p>
          </div>

          {/* Website Pages */}
          <div className="col-lg-3 col-md-6">
            <h6>Navigation</h6>
            <ul className="list-unstyled mb-0">
              <li><Link className="text-white text-decoration-none" to="/">Accueil</Link></li>
              <li><Link className="text-white text-decoration-none" to="/qui-sommes-nous">Qui Sommes Nous</Link></li>
              <li><Link className="text-white text-decoration-none" to="/portfolio">Portfolio</Link></li>
              <li><Link className="text-white text-decoration-none" to="/nos-metiers">Nos Metiers</Link></li>
              <li><Link className="text-white text-decoration-none" to="/contact">Contact</Link></li>
            </ul>
          </div>

          {/* Policy / Company */}
          <div className="col-lg-3 col-md-6">
            <h6>Entreprise</h6>
            <ul className="list-unstyled mb-0">
              <li>Mentions légales</li>
              <li>Politique de confidentialité</li>
              <li>Conditions générales</li>
            </ul>
          </div>

          {/* Contact */}
          <div className="col-lg-3 col-md-6">
            <h6>Informations de contact</h6>
            <p className="mb-0">29-31 Boulevard de La Muette</p>
            <p className="mb-0">95140 Garges-lès-Gonesse</p>
            <p className="mb-0"><a href="" style={{color:"inherit", textDecoration:"none"}}>07 82 00 83 57</a></p>
            <p className="mb-0"><a href="" style={{color:"inherit", textDecoration:"none"}}>01 83 83 45 35</a></p>
            <p className="mb-0"><a href="" style={{color:"inherit", textDecoration:"none"}}>contact@mndecor.fr</a></p>
            {/* Social icons inline */}
            <div className="d-flex gap-3 mt-3">
              <a href="https://www.facebook.com/share/1BhFM69u5N/?mibextid=wwXIfr" style={{color:"inherit", textDecoration:"none"}}><FaFacebookF /></a>
              <a href="https://www.instagram.com/mndecor__?igsh=eGNpdXdlNXV2eGRi&utm_source=qr" style={{color:"inherit", textDecoration:"none"}}><FaInstagram /></a>
              <a href="http://www.linkedin.com/in/mn-decor-016b87357" style={{color:"inherit", textDecoration:"none"}}><FaLinkedinIn /></a>
              <a href="https://www.tiktok.com/@mndeco?_t=ZN-8vMXHKdm6WE&_r=1" style={{color:"inherit", textDecoration:"none"}}><FaTiktok /></a>
              
              
            </div>

          </div>

        </div>

        <hr className="border-secondary my-3" />

        <div className="text-center small">
          © {new Date().getFullYear()} MN Decor — Tous droits réservés. Conception et gestion : <a href="https://elevixdigital.com/" style={{color:"var(--accent)", textDecoration:"none", fontWeight:"5 00", fontSize:"1.2em"}}>Elevix Digital</a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
