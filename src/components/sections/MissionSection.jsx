import { Link } from "react-router-dom"
function MissionSection({ background }) {
  return (
    <section
      className="mission-section"
      style={{
        backgroundImage: `url(${background})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="mission-overlay">
        <div className="container">
          <div className="row justify-content-center">

            <div className="col-lg-5">
              <div className="mission-card">

                <p className="section-subtitle">NOTRE MISSION</p>

                <h3>
                  Transformer Vos Espaces
                  <br />
                  avec Excellence
                </h3>

                <p>
                  Chez MN Decor, nous croyons que la rénovation ne se limite
                  pas à moderniser un espace : elle doit améliorer votre
                  confort, optimiser votre cadre de vie et valoriser votre
                  patrimoine.
                </p>

                <ul className="mission-list">
                  <li>L’écoute et la personnalisation</li>
                  <li>L’excellence technique</li>
                  <li>Le respect des délais et du budget</li>
                  <li>Une rénovation responsable</li>
                </ul>

                <Link className="btn btn-accent mt-3" to="/contact">
                  Contactez Nous
                </Link>

              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  )
}

export default MissionSection
