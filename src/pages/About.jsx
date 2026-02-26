import Layout from "../components/layout/Layout"
import Hero from "../components/common/Hero"
import "../styles/About.css"
import "../styles/gallery.css"
import AboutMainSection from "../components/AboutSections/AboutMainSection"
import StatsSection from "../components/AboutSections/StatsSection"
import CommitmentSection from "../components/AboutSections/CommitmentSection"
import ExpertiseSection from "../components/AboutSections/ExpertiseSection"
import Gallery from "../components/Gallery"


function About() {
  return (
    <Layout>
      <Hero
        title1="Innovation. Qualité. Confiance."
        title2="QUI SOMMES NOUS"
        title3="Votre vision, Notre expertise"
        background="/images/1920x1280/about-bg.webp"
        small
      />
      <AboutMainSection />
      <StatsSection />
      <CommitmentSection />
      <ExpertiseSection />
      <Gallery
        title="CEUX QUI NOUS FONT CONFIANCE"
        images={[
          "/images/640x427/1-3.webp",
          "/images/640x427/1-5.webp",
          "/images/640x427/1-6.webp",
          "/images/640x427/1-7.webp",
          "/images/640x427/1-10.webp",
          "/images/640x427/2-4.webp",
          "/images/640x427/1-3.webp",
          "/images/640x427/1-5.webp",
        ]}
      />
    </Layout>
  )
}

export default About
