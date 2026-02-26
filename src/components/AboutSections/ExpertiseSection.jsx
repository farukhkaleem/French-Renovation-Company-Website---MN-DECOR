function ExpertiseSection() {
  const items = [
    {
      image: "/images/300x200/1-3-300x200.webp",
      label: "Logements",
      title: "Rénovation complète et aménagement sur mesure.",
      text: "Transformation d’appartements haussmanniens avec des finitions haut de gamme.",
    },
    {
      image: "/images/300x200/2-3-300x200.webp",
      label: "Hôtellerie",
      title: "Modernisation d’établissements pour offrir confort et prestige.",
      text: "Rénovation d’hôtels 3/4 étoiles : accueil, chambres thématiques, salles de bains, espaces communs.",
    },
    {
      image: "/images/300x200/3-3-300x200.webp",
      label: "Boutiques",
      title: "Agencement d’espaces de vente pour une expérience client optimisée.",
      text: "Aménagement de magasins de luxe : cosmétiques, prêt-à-porter, design raffiné et mise en valeur des produits.",
    },
    {
      image: "/images/300x200/4-3-300x200.webp",
      label: "Bâtiments Publics",
      title: "Rénovation et mise aux normes des espaces institutionnels.",
      text: "Travaux de modernisation de lycées : salles de classe, espaces communs, infrastructures adaptées.",
    },
  ]

  return (
    <section className="expertise-section">
      <div className="container">

        <h2 className="text-center mb-5" style={{fontSize:"32px"}}>
          Nos domaines d’interventions
        </h2>

        <div className="row">
          {items.map((item, index) => (
            <div key={index} className="col-lg-3 col-md-6 mb-4">

              <div className="expertise-card">

                <div className="expertise-image-wrapper">
                  <img src={item.image} alt="" />
                  <span className="expertise-label">
                    {item.label}
                  </span>
                </div>

                <div className="expertise-content">
                  <h6>{item.title}</h6>
                  <p>{item.text}</p>
                </div>

              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  )
}

export default ExpertiseSection