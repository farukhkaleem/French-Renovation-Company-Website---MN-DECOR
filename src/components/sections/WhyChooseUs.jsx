import {
  FiAward,
  FiBox,
  FiMonitor,
  FiCheckCircle,
  FiCalendar,
  FiDollarSign
} from "react-icons/fi"

function WhyChooseUs() {
  const items = [
    {
      icon: <FiAward />,
      title: "Une expertise certifiée",
      text: "Plomb, Amiante SS4, Qualibat RGE (en cours).",
    },
    {
      icon: <FiBox />,
      title: "Des matériaux durables",
      text: "Peintures écologiques, bois certifié FSC, enduits à la chaux.",
    },
    {
      icon: <FiMonitor />,
      title: "Un suivi en temps réel",
      text: "Plateforme dédiée pour visualiser l’avancée des travaux.",
    },
    {
      icon: <FiCheckCircle />,
      title: "Un engagement qualité",
      text: "90% de nos clients nous recommandent.",
    },
    {
      icon: <FiCalendar />,
      title: "Respect des délais",
      text: "Planification rigoureuse en 4 étapes.",
    },
    {
      icon: <FiDollarSign />,
      title: "Budget maîtrisé",
      text: "Optimisation des coûts grâce à nos partenaires.",
    },
  ]

  return (
    <section className="section-padding why-section">
      <div className="container text-center">

        <h2 className="mb-5">Pourquoi Choisir MN Decor ?</h2>

        <div className="row g-4">
          {items.map((item, index) => (
            <div key={index} className="col-lg-4 col-md-6">
              <div className="why-card">
                <div className="why-icon">{item.icon}</div>
                <h5>{item.title}</h5>
                <p>{item.text}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}

export default WhyChooseUs
