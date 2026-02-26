import { Link } from "react-router-dom"
function ContentRow({
  subtitle,
  title,
  text1,
  text2,
  image,
  reverse,
  buttonText
}) {
  return (
    <section className="section-padding">
      <div className="container">
        <div className="row align-items-center justify-content-around">

          {/* IMAGE */}
          <div className={`col-lg-5 ${reverse ? "order-lg-2" : ""}`}>
            <img src={image} className="img-fluid rounded" alt="" style={{boxShadow: "0 20px 50px rgba(0,0,0,0.35)"}}/>
          </div>

          {/* TEXT */}
          <div className={`mt-sm-5 col-lg-5 ${reverse ? "order-lg-1" : ""}`}>
            {subtitle && <p className="section-subtitle">{subtitle}</p>}

            <h2>{title}</h2>

            <p>{text1}</p>
            {text2 && <p>{text2}</p>}

            {buttonText && (
              <Link className="btn btn-accent mt-3" to="/contact">
                {buttonText}
              </Link>
            )}
          </div>

        </div>
      </div>
    </section>
  )
}

export default ContentRow
