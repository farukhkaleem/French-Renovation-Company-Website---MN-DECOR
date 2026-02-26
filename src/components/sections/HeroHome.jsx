import { Link } from "react-router-dom"
function HeroHome({ background, foreground }) {
  return (
    <section
      className="hero-home"
      style={{
        backgroundImage: `url(${background})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="hero-overlay">
        <div className="container h-100">
          <div className="row align-items-center h-100">

            {/* LEFT CONTENT */}
            <div className="col-lg-6 text-white">
              <p className="hero-label">
                Innovation • Qualité • Confiance
              </p>

              <h1 className="hero-title">
                Votre Vision,
                <br />
                Notre Expertise
              </h1>

              <p className="hero-desc">
                Des rénovations sur mesure, alliant savoir-faire artisanal
                et technologies modernes.
              </p>
              <Link to="/contact" className="btn btn-accent mt-3">Demander un devis</Link>
            </div>

            {/* RIGHT IMAGE */}
            <div className="col-lg-6 d-none d-lg-flex justify-content-end">
  <div className="hero-home-image-container">
    <img
      src={foreground}
      className="hero-home-image"
      alt=""
    />

    <p>📍 Paris, France</p>
  </div>
</div>


          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroHome
