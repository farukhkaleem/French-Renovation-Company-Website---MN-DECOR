function CommitmentSection() {
  return (
    <section className="commitment-section">
      <div className="container">

        <div className="row align-items-center justify-content-around">

          {/* LEFT CONTENT */}
          <div className="col-lg-5">

            <h2 className="commitment-title">
              Notre engagement repose sur trois piliers :
            </h2>

            <ul className="commitment-list">

              <li>
                <strong>Une qualité d’exécution irréprochable</strong>
                <p>
                  Nous accordons une attention minutieuse à chaque détail afin de
                  garantir des finitions d’exception. Grâce à notre savoir-faire
                  et à l’utilisation de matériaux haut de gamme, nous assurons
                  des réalisations esthétiques, durables et conformes aux
                  standards les plus exigeants.
                </p>
              </li>

              <li>
                <strong>Une gestion rigoureuse des chantiers</strong>
                <p>
                  Nos projets sont encadrés par une équipe de professionnels
                  expérimentés, garantissant une coordination efficace et un
                  suivi précis à chaque étape. De la planification aux dernières
                  finitions, nous veillons au respect des délais, du budget et
                  des normes de sécurité.
                </p>
              </li>

              <li>
                <strong>Une approche personnalisée</strong>
                <p>
                  Chaque projet est unique, tout comme chaque client. Nous
                  prenons le temps d’écouter vos besoins, de comprendre vos
                  attentes et d’adapter nos solutions en conséquence. Notre
                  objectif : vous offrir un service sur mesure, parfaitement
                  aligné avec votre vision.
                </p>
              </li>

            </ul>

          </div>

          {/* RIGHT IMAGE */}
          <div className="col-lg-6">
            <div className="commitment-image-wrapper">
              <img
                src="/images/640x427/12-8.webp"
                alt="MN Decor"
              />
            </div>
          </div>

        </div>

      </div>
    </section>
  )
}

export default CommitmentSection