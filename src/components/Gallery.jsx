function Gallery({ title, images = [] }) {
  return (
    <section className="gallery-section">
      <div className="container">

        {title && (
          <h2 className="text-center gallery-title">
            {title}
          </h2>
        )}

        <div className="gallery-grid">
          {images.map((img, index) => (
            <div key={index} className="gallery-item">
              <img src={img} alt="" />
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}

export default Gallery