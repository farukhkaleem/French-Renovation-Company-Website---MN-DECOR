import Layout from "../components/layout/Layout"
import Hero from "../components/common/Hero"
import "../styles/contact.css"
import ContactCTA from "../components/contact/ContactCTA"
import ContactInfo from "../components/contact/ContactInfo"
import GoogleMapSection from "../components/contact/GoogleMapSection"

function Contact() {
  return (
    <Layout>
      <Hero
        title1="Discutons de votre projet dès aujourd’hui !"
        title2="CONTACTEZ NOUS"
        title3="Un projet de rénovation résidentielle ? Commerciale ou Hôtelière ? Notre équipe est prête à vous accompagner avec des solutions sur mesure et un service de qualité."
        background="/images/1920x1272/13.webp"
        small
      />
      <ContactCTA />
      <ContactInfo />
      <GoogleMapSection
        mapUrl="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2618.7310700787834!2d2.4097794771224694!3d48.97764349230594!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e66a5292a5323d%3A0xce2e4a27e80e56b5!2s29-31%20Bd%20de%20la%20Muette%2C%2095140%20Garges-l%C3%A8s-Gonesse%2C%20France!5e0!3m2!1sen!2s!4v1771738087945!5m2!1sen!2s"
      />
    </Layout>
  )
}

export default Contact
