function Content({
  title,
  subtitle,
  content = [],
  image,
  reverse = false,
}) {
  return (
    <section className="service-section">
      <div className="container">

        <div className={`row justify-content-around ${reverse ? "flex-lg-row-reverse" : ""}`}>

          {/* TEXT */}
          <div className="col-lg-5">

            <h2 className="service-title">{title}</h2>
            {subtitle && (
              <h3 className="service-subtitle">{subtitle}</h3>
            )}
            {/* Dynamic Content Renderer */}
            {content.map((block, index) => {

              if (block.type === "text") {
                return <p key={index}>{block.value}</p>
              }
              if (block.type === "subheading"){
                return <h5 key={index} className="service-subheading">{block.value}</h5>
              }
              if (block.type === "list") {
                return (
                  <ul key={index} className="service-list">
                    {block.items.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                )
              }

              return null
            })}

          </div>

          {/* IMAGE */}
          <div className="col-lg-6">
            <img src={image} className="service-image" alt="" />
          </div>

        </div>

      </div>
    </section>
  )
}

export default Content