function ServicesGallery() {
  const images = [
    "/images/640x427/1-3.webp",
    "/images/640x427/2-4.webp",
    "/images/640x427/1-5.webp",
    "/images/640x427/1-10.webp",
    "/images/640x427/1-6.webp",
    "/images/640x427/1-7.webp",
  ]

  return (
    <section className="section-padding">
      <div className="container text-center">

        <h2>NOS PRESTATIONS</h2>

        <p className="gallery-desc">
          Des rénovations adaptées à chaque projet avec des finitions haut de gamme.
          MN Decor réalise tous vos travaux de rénovation et d’aménagement intérieur.
        </p>

        <div className="gallery-grid">
          {images.map((img, i) => (
            <div key={i} className="gallery-item">
              <img src={img} alt="" />
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}

export default ServicesGallery
