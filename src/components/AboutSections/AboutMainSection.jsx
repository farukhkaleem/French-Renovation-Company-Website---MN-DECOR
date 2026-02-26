
function AboutMainSection() {
  return (
    <section className="about-main-section">
      <div className="container">

        <div className="row align-items-start justify-content-around">

          {/* LEFT CONTENT */}
          <div className="col-lg-5">
            <h1 className="about-title">
              Qui sommes-nous ?
            </h1>

            <p>
              MN DECOR est une entreprise familiale fondée le 11 mars 2022 par
              Mohamed Naeem, fort de plusieurs années d’expérience dans le secteur
              du bâtiment. Passionné par son métier et animé par la volonté
              d’entreprendre, il a créé MN DECOR avec l’ambition d’offrir des
              prestations de rénovation et de second œuvre alliant qualité,
              innovation et rigueur.
            </p>

            <p>
              Dès la création de l’entreprise, l’équipe de MN DECOR s’est
              pleinement investie dans son développement. Grâce à son expertise
              technique et à son sens aigu de l’organisation, elle a contribué à
              structurer et dynamiser l’activité de la société. Aujourd’hui,
              la direction assure la gestion de l’entreprise et veille à la
              satisfaction des clients en garantissant un service d’excellence.
            </p>

            <p>
              Grâce à un savoir-faire éprouvé et une approche innovante,
              MN DECOR s’est imposée en quelques années comme une référence
              incontournable en Île-de-France dans le domaine de la rénovation
              et du second œuvre. Notre engagement et notre exigence de qualité
              nous ont permis de connaître une croissance exceptionnelle,
              passant d’un chiffre d’affaires de 350 000 € en 2022 à plus de
              2 000 000 € en 2024.
            </p>

          </div>

          {/* RIGHT IMAGE */}
          <div className="col-lg-5">
            <div className="about-image-wrapper">
              <img
                src="/images/2813x3125/Untitled-design-18.webp"
                alt="MN Decor"
                style={{ boxShadow: "5px 10px 10px rgba(0, 0, 0, 0.3)" }}
              />
              <span className="about-image-caption">
                Application D’enduit De Ragréage
              </span>
            </div>
          </div>

        </div>

      </div>
    </section>
  )
}

export default AboutMainSection