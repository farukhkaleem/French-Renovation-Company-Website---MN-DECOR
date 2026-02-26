import Layout from "../../components/layout/Layout";
import Hero from "../../components/common/Hero";
import "../../styles/project.css";
import ProjectConclusion from "../../components/project/ProjectConclusion";
import Content from "../../components/Content";

function P9() {
  return (
    <Layout>
        <Hero
            title1=""
            title2="Rénovation de Façade"
            title3="Rafraîchissement de Façade – Entrepôt à Compans (2022)"
            background="/images/1920x1272/11.webp"
            small
        />
        <Content
            title="Objectifs"
            image="/images/640x427/1-6.webp"
            content={[
              {
                type:"list",
                items:[
                    "Réparer les fissures pour protéger le bâtiment des infiltrations.",
                    "Moderniser l’aspect extérieur avec une mise en peinture soignée."
                ]
              }
            ]}
        />
        <Content
            title="Travaux Réalisés"
            image="/images/640x427/2-7.webp"
            content={[
              {
                type:"subheading",
                value:"Traitement des fissures"
              },
              {
                type:"list",
                items:[
                    "Ouverture des fissures pour nettoyage en profondeur.",
                    "Application de produits spécifiques pour reboucher durablement.",
                    "Lissage pour une surface uniforme avant peinture."
                ]
              },
              {
                type:"subheading",
                value: "Mise en peinture"
              },
              {
                type:"list",
                items:[
                    "Sous-couche d’accrochage pour une meilleure adhérence.",
                    "Peinture extérieure résistante aux intempéries, choisie pour sa durabilité.",
                    "Finition homogène pour un rendu moderne et esthétique."
                ]
              }
            ]}
            reverse
        />
        <ProjectConclusion
            title="Résultat"
            text="La façade de l’entrepôt a retrouvé une apparence neuve et soignée, offrant une meilleure protection contre les intempéries."
            image="/images/640x427/3-5.webp"
        />
    </Layout>
  )
}

export default P9