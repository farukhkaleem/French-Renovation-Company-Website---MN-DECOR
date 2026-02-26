import { Link } from "react-router-dom"

function PortfolioShowcase({
  heading,
  subheading,
  text,
  buttonUrl,
  image1,
  image2,
  reverse = false,
}) {
  return (
    <section className="portfolio-showcase">
      <div className="container">

        <div className={`row align-items-center ${reverse ? "flex-lg-row-reverse" : ""}`}>

          {/* TEXT SIDE */}
          <div className="col-lg-4">
            <div className="portfolio-content">

              <h2>{heading}</h2>

              {subheading && (
                <p className="portfolio-subheading">
                  {subheading}
                </p>
              )}

              <p className="portfolio-text">
                {text}
              </p>

              <Link to={buttonUrl} className="btn btn-outline-dark">
                Voir Le Projet
              </Link>

            </div>
          </div>

          {/* IMAGES SIDE */}
          <div className="col-lg-8">
            <div className="portfolio-images">

              <div className="portfolio-img">
                <img src={image1} alt="" />
              </div>

              <div className="portfolio-img">
                <img src={image2} alt="" />
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  )
}

export default PortfolioShowcase