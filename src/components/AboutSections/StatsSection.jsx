import { FiHome, FiUsers, FiTrendingUp } from "react-icons/fi"

function StatsSection() {
  const stats = [
    {
      icon: <FiHome />,
      number: "250+",
      label: "PROJETS TERMINÉS",
    },
    {
      icon: <FiUsers />,
      number: "14+",
      label: "NOTRE ÉQUIPE",
    },
    {
      icon: <FiTrendingUp />,
      number: "65%",
      label: "AUGMENTATION CA 2023",
    },
    {
      icon: <FiTrendingUp />,
      number: "40%",
      label: "AUGMENTATION CA 2024",
    },
  ]

  return (
    <section className="stats-section">
      <div className="container mt-0">

        <div className="row text-center">
          {stats.map((item, index) => (
            <div key={index} className="col-lg-3 col-md-6 mb-4">

              <div className="stat-item">
                <div className="stat-icon">
                  {item.icon}
                </div>

                <h2 className="stat-number">
                  {item.number}
                </h2>

                <p className="stat-label">
                  {item.label}
                </p>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  )
}

export default StatsSection