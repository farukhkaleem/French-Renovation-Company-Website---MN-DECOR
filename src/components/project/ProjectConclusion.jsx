import { Link } from "react-router-dom"

function ProjectConclusion({ title, text, image, reverse = false, }) {
  return (
    <section className="project-conclusion">
      <div className="container">
        <div className={`row ${reverse ? "flex-lg-row-reverse" : ""}`}>

          {/* TEXT */}
          <div className="col-lg-6">
            <h2>{title}</h2>

            <p>{text}</p>

            <Link to="/contact" className="btn btn-outline-dark">
              Contactez-Nous Dès Maintenant !
            </Link>
          </div>

          {/* IMAGE */}
          <div className="col-lg-6">
            <img src={image} alt="" className="conclusion-image" />
          </div>

        </div>
      </div>
    </section>
  )
}

export default ProjectConclusion