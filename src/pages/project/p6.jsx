import Layout from "../../components/layout/Layout";
import Hero from "../../components/common/Hero";
import "../../styles/project.css";
import ProjectConclusion from "../../components/project/ProjectConclusion";
import Content from "../../components/Content";
import ContentWithoutImage from "../../components/project/ContentWithoutImage";

function P6() {
  return (
    <Layout>
        <Hero
            title1=""
            title2="Aménagement de Salle de Sport"
            title3="Situé dans le 16ᵉ arrondissement de Paris, ce club de fitness"
            background="/images/1024x768/748C7AA6-40E1-4BC9-9C14-7E9DF2CC36E8_1_105_c.jpeg.webp"
            small
        />
        <ContentWithoutImage
          title="Nos interventions sur ce projet incluent"
          content={[
            {
              type: "subheading",
              value: "Plâtrerie"
            },
            {
              type: "text",
              value: "Réalisation des travaux de plâtrerie en amont pour préparer et sublimer les surfaces, assurant une base parfaite avant la pose des différents revêtements."
            },
            {
              type: "subheading",
              value: "Revêtement de sol"
            },
            {
              type: "list",
              items: [
                "Installation de carrelage au sol : Pose de carrelage de haute qualité pour créer un sol durable et esthétique.",
                "Sol spécifique pour salle de sport/gym : Mise en place d’un revêtement adapté aux exigences techniques et de sécurité des espaces de sport, garantissant confort et performance.",
              ]
            },
            {
              type: "subheading",
              value: "Revêtement mural"
            },
            {
              type: "list",
              items: [
                "Enduit à la chaux pour intérieur : Application d’un enduit à la chaux pour apporter une ambiance chaleureuse et naturelle.",
                "Enduit d’argile : Utilisation d’un enduit d’argile pour une finition authentique et respectueuse de l’environnement.",
                "Papier peint : Pose de différents papiers peints soigneusement sélectionnés pour apporter une touche artistique et unique aux espaces.",
                "Peinture sur les murs et plafonds : Application de peintures de qualité pour harmoniser et sublimer les surfaces, tant sur les murs que sur les plafonds.",
              ]
            }
          ]}
        />
        <ProjectConclusion 
          title="Conclusion"
          text="Ce projet témoigne de notre capacité à transformer des espaces en véritables lieux d’inspiration, où chaque détail est pensé pour sublimer l’expérience des utilisateurs. MN Décor est fier de contribuer à cette révolution du fitness au féminin, en alliant savoir-faire technique et sens du design."
          image="/images/640x427/1-10.webp"
        />
    </Layout>
  )
}

export default P6