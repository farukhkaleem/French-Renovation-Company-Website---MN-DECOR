import {
  FaMapMarkerAlt,
  FaEnvelope,
  FaPhoneAlt,
  FaLinkedinIn,
  FaFacebookF,
  FaInstagram,
  FaTiktok,
} from "react-icons/fa"

function ContactInfo() {
  return (
    <section className="contact-info">
      <div className="container">

        {/* HEADER */}
        <div className="contact-info-header">

          <div>
            <h2>Coordonnées</h2>
            <p>
              Pour toute question ou information supplémentaire,
              n'hésitez pas à nous contacter.
            </p>
          </div>

          <div className="contact-socials">
            <a href="http://www.linkedin.com/in/mn-decor-016b87357"><FaLinkedinIn /></a>
            <a href="https://www.facebook.com/share/1BhFM69u5N/?mibextid=wwXIfr"><FaFacebookF /></a>
            <a href="https://www.instagram.com/mndecor__?igsh=eGNpdXdlNXV2eGRi&utm_source=qr"><FaInstagram /></a>
            <a href="https://www.tiktok.com/@mndeco?_t=ZN-8vMXHKdm6WE&_r=1"><FaTiktok /></a>
          </div>

        </div>

        {/* CARDS */}
        <div className="row g-4">

          {/* ADDRESS */}
          <div className="col-lg-4">
            <div className="contact-card">
              <div className="contact-icon">
                <FaMapMarkerAlt />
              </div>

              <div>
                <h5>Adresse</h5>
                <p>
                  29-31 Boulevard de La Muette,<br />
                  95140 Garges-lès-Gonesse
                </p>
              </div>
            </div>
          </div>

          {/* EMAIL */}
          <div className="col-lg-4">
            <div className="contact-card">
              <div className="contact-icon">
                <FaEnvelope />
              </div>

              <div>
                <h5>Email</h5>
                <p>contact@mndecor.fr</p>
              </div>
            </div>
          </div>

          {/* PHONE */}
          <div className="col-lg-4">
            <div className="contact-card">
              <div className="contact-icon">
                <FaPhoneAlt />
              </div>

              <div>
                <h5>Téléphone</h5>
                <p>
                  Mobile : 07 82 00 83 57<br />
                  Fixe : 01 83 83 45 35
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

export default ContactInfo