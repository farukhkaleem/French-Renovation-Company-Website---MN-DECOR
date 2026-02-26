import { Link } from "react-router-dom"

function ProjectsGallery() {
  const projects = [
    {
      image: "/images/640x427/1-3.webp",
      title: "Rénovation Appartement Paris",
      slug: "renovation-résidentielle",
    },
    {
      image: "/images/640x427/2-4.webp",
      title: "Peinture Intérieure Moderne",
      slug: "rénovation-intérieure",
    },
    {
      image: "/images/640x427/1-5.webp",
      title: "Rénovation Chambre",
      slug: "transformation-de-bureau",
    },
    {
      image: "/images/640x427/1-10.webp",
      title: "Salle de Bain Design",
      slug: "aménagement-de-salle-de-sport",
    },
    {
      image: "/images/640x427/1-6.webp",
      title: "Revêtement de Sol",
      slug: "renovation-de-façade-2",
    },
    {
      image: "/images/640x427/1-7.webp",
      title: "Décoration Murale",
      slug: "rénovation-intérieure",
    },
  ]

  return (
    <section className="section-padding">
      <div className="container">

        <h2 className="text-center mb-4">NOS PRESTATIONS</h2>
        <p className="gallery-desc" style={{textAlign:"center"}}>
          Des rénovations adaptées à chaque projet avec des finitions haut de gamme.
          MN Decor réalise tous vos travaux de rénovation et d’aménagement intérieur.
        </p>
        <div className="projects-grid">
          {projects.map((project, index) => (
            <Link
              to={`/project/${project.slug}`}
              key={index}
              className="project-card"
            >
              <img src={project.image} alt="" />

              <div className="project-overlay">
                <h5>{project.title}</h5>
                <p>Voir le projet</p>
              </div>

              <div className="project-title">
                {project.title}
              </div>
            </Link>
          ))}
        </div>

      </div>
    </section>
  )
}

export default ProjectsGallery
