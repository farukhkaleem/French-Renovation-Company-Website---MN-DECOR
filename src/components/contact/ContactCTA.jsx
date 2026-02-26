import emailjs from "@emailjs/browser"
import { useRef, useState } from "react"
    
function ContactCTA() {
    const form = useRef()
    const [status, setStatus] = useState("idle")

    const sendEmail = (e) => {
  e.preventDefault()

  if (!form.current) return
 
  if (form.current.website.value) {
    console.log("Bot detected")
    return
  }

  setStatus("sending")

  emailjs
    .sendForm(
      "service_cn48mad",
      "template_4vrish4",
      form.current,
      {
        publicKey: "vettLgI4u-bDBEPLZ",
      }
    )
    .then(() => {
      setStatus("success")
      form.current.reset()
    })
    .catch((error) => {
      console.error(error)
      setStatus("error")
    })
}

  return (
    <section className="contact-cta">
      <div className="container">
        <div className="row g-5">

          {/* LEFT IMAGE */}
          <div className="col-lg-4 mb-4 mb-lg-0">
            <img
              src="/images/640x640/WhatsApp-Image-2025-04-08-at-6.09.23-PM.webp"
              alt=""
              className="contact-image"
            />
          </div>

          {/* MIDDLE CONTENT */}
          <div className="col-lg-4 mb-4 mb-lg-0">

            <h2 className="contact-title">
              Besoin d’un devis personnalisé ?
            </h2>

            <p className="contact-desc">
              Nos experts sont à votre écoute pour répondre à toutes vos
              questions et vous proposer une solution adaptée.
            </p>

            <ul className="contact-benefits">
              <li>Une étude personnalisée</li>
              <li>Un devis détaillé et transparent</li>
              <li>Des conseils d’experts</li>
              <li>Respect du budget et des délais</li>
              <li>Des solutions éco-responsables</li>
              <li>Accompagnement de A à Z</li>
            </ul>

          </div>

          {/* RIGHT FORM */}
          <div className="col-lg-4">

            {/* ✅ SUCCESS STATE */}
            {status === "success" ? (
              <div className="contact-success">
                <h4>✅ Message envoyé !</h4>
                <p>
                  Merci pour votre demande.  
                  Notre équipe vous contactera très bientôt.
                </p>
              </div>
            ) : (

              /* ✅ FORM */
              <form
                ref={form}
                onSubmit={sendEmail}
                className="contact-form"
              >
                <input name="name" placeholder="Nom" required />
                <input name="email" type="email" placeholder="Email" required />
                <input name="phone" placeholder="Téléphone" />
                <input name="subject" placeholder="Objet" />

                <textarea
                  name="message"
                  rows="6"
                  placeholder="Message"
                  required
                />
                <input
                  type="text"
                  name="website"
                  autoComplete="off"
                  tabIndex="-1"
                  style={{ display: "none" }}
                />

                <button
                  type="submit"
                  disabled={status === "sending"}
                  className="btn btn-outline-dark"
                >
                  {status === "sending"
                    ? "Envoi en cours..."
                    : "Envoyez Un Message"}
                </button>

                {/* ERROR MESSAGE */}
                {status === "error" && (
                  <p className="contact-error">
                    Une erreur est survenue. Réessayez.
                  </p>
                )}
              </form>
            )}

          </div>


        </div>
      </div>
    </section>
  )
}
export default ContactCTA