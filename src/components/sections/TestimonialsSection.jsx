function TestimonialsSection() {
  const testimonials = [
    {
      text: "MN Decor a transformé notre hôtel avec un design moderne et raffiné, tout en respectant des délais très serrés. Une équipe professionnelle et réactive.",
      author: "Jean-Luc M., Directeur d’hôtel à Paris",
    },
    {
      text: "Nous voulions moderniser notre appartement haussmannien tout en conservant son cachet. Le résultat est magnifique. Finitions impeccables et accompagnement personnalisé.",
      author: "Sophie et Thomas R., Neuilly-sur-Seine",
    },
    {
      text: "Mon salon a été récemment rénové par MN Decor. L’équipe est vraiment agréable, à l’écoute et surtout le résultat est impeccable.",
      author: "Pauline V.",
    },
  ]

  return (
    <section className="section-padding">
      <div className="container">

        <div className="row align-items-start">

          {/* LEFT INTRO */}
          <div className="col-lg-4">
            <p className="section-subtitle">
              CE QUE NOS CLIENTS DISENT DE NOUS
            </p>

            <h2>TÉMOIGNAGES CLIENTS</h2>

            <p className="testimonial-intro">
              La satisfaction de nos clients est notre plus grande fierté.
              Découvrez leurs retours d’expérience après nos réalisations.
            </p>
          </div>

          {/* RIGHT GRID */}
          <div className="col-lg-8">
            <div className="testimonial-grid">
              {testimonials.map((item, index) => (
                <div key={index} className="testimonial-item">
                  <p className="testimonial-text">“{item.text}”</p>
                  <span className="testimonial-author">
                    {item.author}
                  </span>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  )
}

export default TestimonialsSection
