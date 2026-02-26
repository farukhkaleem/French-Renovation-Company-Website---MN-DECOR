function Hero({ title1,title2,title3, background, small }) {
  return (
    <div
      className={`hero-container ${small ? "hero-small" : ""}`}
      style={{
        backgroundImage: `url(${background})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="hero-overlay d-flex align-items-center w-100">
        <div className="container" style={{ textAlign: "center", color: "#fff" }}>
          <h6 className="">{title1}</h6>
          <h1 className="hero-title">{title2}</h1>
          <h4 className="hero-subsubtitle">{title3}</h4>
        </div>
      </div>
    </div>
  )
}

export default Hero
