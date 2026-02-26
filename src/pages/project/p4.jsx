import Layout from "../../components/layout/Layout";
import Hero from "../../components/common/Hero";
import "../../styles/project.css";
import Content from "../../components/Content";
import ContentWithoutImage from "../../components/project/ContentWithoutImage";

function P4() {
  return (
    <Layout>
        <Hero
            title1=""
            title2="Rénovation d'un restaurant"
            title3="Projet de Rénovation Starbucks – 2024"
            background="/images/1200x1600/WhatsApp-Image-2025-04-23-at-08.27.40.webp"
            small
        />
        <Content 
          title="OBJECTIF DU PROJET"
          image="/images/1200x900/WhatsApp-Image-2025-04-23-at-08.27.40-1.webp"
          content={[
            {
              type: "text",
              value: "L’objectif principal du projet était de moderniser l’espace Starbucks tout en créant une ambiance plus chaleureuse et confortable."
            },
            {
              type: "text",
              value: "Il s’agissait de repenser l’aménagement intérieur pour améliorer l’expérience client, favoriser la convivialité et offrir un cadre adapté aussi bien à la détente qu’au travail."
            }
          ]}
        />
        <ContentWithoutImage
          title="DEROULEMENT DES TRAVAUX DE STARBUCKS"
          content={[
            {
              type: "subheading",
              value: "Objectif"
            },
            {
              type: "text",
              value: "Réaménager un espace chaleureux et fonctionnel, adapté aux besoins d’un Starbucks urbain, favorisant à la fois la détente et le travail."
            },
            {
              type: "subheading",
              value: "Travaux réalisés"
            },
            {
              type: "list",
              items: [
                "Pose d’un parquet en bois clair pour une ambiance naturelle, douce et moderne.",
                "Installation d’une grande table centrale pour encourager les échanges, le coworking ou les pauses café.",
                "Mise en place de nouveaux éclairages LED encastrés, pour une lumière agréable et homogène dans tout l’espace.",
                "Intégration de sièges variés (chaises design, fauteuils confortables, tabourets hauts) pour répondre à différents usages : solo, duo ou groupes.",
                "Optimisation de l’acoustique et de la circulation, grâce à un mobilier bien disposé et des matériaux absorbants."
              ]
            }
          ]}
        />
        <ContentWithoutImage
          title="TRANSFORMATION DE L'ESPACE STARBUCKS- AVANT/APRES"
          content={[
            {
              type: "text",
              value: "Dans le cadre de sa démarche d’amélioration continue, Starbucks a repensé son espace pour offrir une ambiance plus chaleureuse, moderne et accueillante."
            },
            {
              type: "text",
              value: "L’agencement a été entièrement revu : pose d’un parquet en bois , installation d’une grande table , intégration de matériaux naturels, mobilier confortable, éclairage repensé et création de zones favorisant la détente comme le travail. Ce nouvel environnement reflète les valeurs de la marque : confort, convivialité et qualité d’accueil."
            }
          ]}
        />
    
    </Layout>
  )
}

export default P4