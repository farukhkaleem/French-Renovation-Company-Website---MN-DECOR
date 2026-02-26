function ProjectContentSection({
  title,
  subtitle,
  content,
  image,
  reverse = false,
}) {
  return (
    <section className="project-content">
      <div className="container">

        <div className={`row justify-content-around ${reverse ? "flex-lg-row-reverse" : ""}`}>

          {/* IMAGE */}
          <div className="col-lg-5 mb-4 mb-lg-0">
            <img src={image} alt="" className="project-content-image" />
          </div>

          {/* CONTENT */}
          <div className="col-lg-6">

            {subtitle && (
              <p className="project-subtitle">{subtitle}</p>
            )}

            <h2 className="project-custom-title">{title}</h2>

            <div className="project-text">
              {content}
            </div>

          </div>

        </div>

      </div>
    </section>
  )
}

export default ProjectContentSection