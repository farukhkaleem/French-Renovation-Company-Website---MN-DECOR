import Layout from "../components/layout/Layout"
import Hero from "../components/common/Hero"
import "../styles/portfolio.css"
import PortfolioShowcase from "../components/portfolioSections/PortfolioShowcase"
function Portfolio() {
  return (
    <Layout>
      <Hero
        title1="Découvrez nos projets et laissez-vous inspirer !"
        title2="NOS PRESTATIONS"
        title3=""
        background="/images/2268x1276/IMG_4859-1.webp"
        small
      />
      <PortfolioShowcase
        heading="Aménagement Commercial"
        subheading="Projet Création Boutique de Vêtements Haut de Gamme — Faubourg Saint-Honoré, Paris"
        text="Un lieu de vente alliant luxe, design et expérience client, au cœur du quartier le plus prestigieux de Paris."
        buttonUrl="/project/aménagement-commercial"
        image1="/images/640x427/1-4.webp"
        image2="/images/640x427/6-3.webp"
      /> 
      <PortfolioShowcase
        heading="Transformation de Bureau"
        subheading="Projet de rénovation de nos bureau au sein de notre entreprise"
        text="Une transformation réfléchie pour créer un environnement de travail moderne, fonctionnel et inspirant."
        buttonUrl="/project/transformation-de-bureau"
        image1="/images/640x427/12-4.webp"
        image2="/images/640x427/5-4.webp"
      /> 
      <PortfolioShowcase
        heading="Rénovation Hôtelière"
        subheading="Projet de rénovation de l’Hôtel des Deux Avenues – 2023"
        text="Une rénovation haut de gamme, mêlant confort moderne et atmosphère chaleureuse, au service de l’hospitalité parisienne."
        buttonUrl="/project/rénovation-hôtelière"
        image1="/images/640x427/4-5.webp"
        image2="/images/640x427/6-5.webp"
      /> 
      <PortfolioShowcase
        heading="Rénovation Restauration​"
        subheading="Projet de Rénovation chez Starbucks – 2024"
        text="Un tout nouvel espace Starbucks, pensé pour offrir plus de confort, de style et une expérience café unique à chaque visite."
        buttonUrl="/project/rénovation-restauration"
        image1="/images/640x427/Untitled-design-51.webp"
        image2="/images/640x427/Untitled-design-52.webp"
      /> 
      <PortfolioShowcase
        heading="Rénovation Intérieure"
        subheading="Projet de Rénovation Complète au 5ᵉ Étage – Le Marais (Paris 4ᵉ)"
        text="Une transformation intégrale d’un espace parisien unique, alliant raffinement et fonctionnalité au cœur du Marais."
        buttonUrl="/project/rénovation-intérieure"
        image1="/images/640x427/2-10.webp"
        image2="/images/640x427/31.webp"
      /> 
      <PortfolioShowcase
        heading="Aménagement de Salle de Sport"
        subheading="Situé dans le 16ᵉ arrondissement de Paris, ce club de fitness"
        text="Un espace dédié au bien-être, où design moderne et équipements haut de gamme se rencontrent pour offrir une expérience sportive exceptionnelle."
        buttonUrl="/project/aménagement-de-salle-de-sport"
        image1="/images/640x427/1-10.webp"
        image2="/images/640x427/17-3.webp"
      /> 
      <PortfolioShowcase
        heading="Élégance et Modernité"
        subheading="Rénovation de l’Hôtel Mercure – Paris 9ème"
        text="Une transformation mêlant raffinement et design contemporain, au cœur de la capitale."
        buttonUrl="/project/elégance-et-modernité"
        image1="/images/640x427/7-9.webp"
        image2="/images/640x427/11-8.webp"
      /> 
      <PortfolioShowcase
        heading="Ravalement de façade"
        subheading="Lycée Jean Rostaud – Mantes la Jolie (78)"
        text="Nous travaillons avec des matériaux de qualité et dans le respect des normes en vigueur. Nos équipes assurent un travail soigné, rapide et sécurisé."
        buttonUrl="/project/ravalement-de-façade"
        image1="/images/640x427/3-11.webp"
        image2="/images/640x427/1-13.webp"
      /> 
      <PortfolioShowcase
        heading="Rénovation de Façade"
        subheading="Rafraîchissement de Façade – Entrepôt à Compans (2022)"
        text="Une intervention ciblée pour redonner éclat et durabilité à une structure industrielle."
        buttonUrl="/project/renovation-de-façade-2"
        image1="/images/640x427/3-5.webp"
        image2="/images/640x427/1-6.webp"
      /> 
      <PortfolioShowcase
        heading="Rénovation Résidentielle"
        subheading="Rénovation d’un Appartement Haussmannien – Paris 18ᵉ (2022)"
        text="Une rénovation qui sublime l’architecture classique tout en apportant confort et modernité à un espace de vie parisien."
        buttonUrl="/project/renovation-résidentielle"
        image1="/images/640x427/19.webp"
        image2="/images/640x427/30.webp"
      /> 
    </Layout>
  )
}

export default Portfolio
