import ContentRow from "./ContentRow"
import aboutImg from "/images/700x700/WhatsApp-Image-2025-11-25-at-16.04.09_0acbbdd0-rf82r57lizuzpw5l9kf9792n4pxu0qhqqpgxjsg194.webp"

function AboutPreview() {
  return (
    <ContentRow
      title="L’Art de la Rénovation par l’Excellence"
      subtitle="À PROPOS DE NOUS — MN DECOR"
      text1="Depuis 2022, MN Decor s’est imposé comme un acteur clé de la rénovation et du second œuvre en Île-de-France. Fondée par Mohamed Naeem, notre entreprise combine savoir-faire artisanal et innovations techniques pour transformer vos espaces avec précision et élégance."
      text2="Nous croyons que chaque projet est unique et mérite une attention particulière, du choix des matériaux à la qualité des finitions. Grâce à une approche rigoureuse et un accompagnement personnalisé, nous avons su gagner la confiance de nombreux clients."
      image={aboutImg}
      buttonText="En savoir plus"
    />
  )
}

export default AboutPreview
