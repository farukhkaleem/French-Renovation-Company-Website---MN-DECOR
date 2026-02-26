import Layout from "../components/layout/Layout"
import HeroHome from "../components/sections/HeroHome"
import QuoteSection from "../components/sections/QuoteSection"
import AboutPreview from "../components/sections/AboutPreview"
import WhyChooseUs from "../components/sections/WhyChooseUs"
import MissionSection from "../components/sections/MissionSection"
import missionBg from "/images/2048x1152/IMG_4859-2048x1152.webp"
// import ServicesGallery from "../components/sections/ServicesGallery"
import ProjectsGallery from "../components/sections/ProjectsGallery"
import TransformationsSection from "../components/sections/TransformationsSection"
import TestimonialsSection from "../components/sections/TestimonialsSection"
import CertificationsSection from "../components/sections/CertificationsSection"
import "../styles/Home.css"


function Home() {
  return (
    <Layout>
      <HeroHome
        background="/images/1440x2560/IMG_4802-scaled.webp"
        foreground="/images/640x565/1-1.webp"
      />
      <QuoteSection />
      <AboutPreview />
      <WhyChooseUs />
      <MissionSection background={missionBg} />
      <ProjectsGallery />
      <TransformationsSection />
      <TestimonialsSection />
      <CertificationsSection />
    </Layout>
  )
}

export default Home
