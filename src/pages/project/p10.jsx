import Layout from "../../components/layout/Layout";
import Hero from "../../components/common/Hero";
import "../../styles/project.css";
import ProjectConclusion from "../../components/project/ProjectConclusion";
import Content from "../../components/Content";
import ContentWithoutImage from "../../components/project/ContentWithoutImage";

function P10() {
  return (
    <Layout>
        <Hero
            title1=""
            title2="Rénovation Résidentielle"
            title3="Rénovation d’un Appartement Haussmannien – Paris 18ᵉ (2022)"
            background="/images/2000x1334/1-3.webp"
            small
        />
        <Content
            title="OBJECTIF DU PROJET"
            image="/images/640x427/19.webp"
            content={[
              {
                type:"text",
                value:"L’objectif de ce projet était de moderniser l’appartement tout en conservant l’élégance haussmannienne. L’installation électrique et de plomberie soit mise en forme et respecter les délais avec une équipe organisé et efficace"
              }
            ]}
        />
        <Content
            title="TRAVAUX RÉALISÉES"
            image="/images/640x427/17.webp"
            content={[
              {
                type:"text",
                value:"Nous avons effectué une rénovation complète alliant respect du charme ancien et modernisation : retrait des anciens revêtements en protégeant les moulures, mise aux normes de l’électricité et de la plomberie pour plus de sécurité, réparation des murs et plafonds dans le respect des détails d’époque, pose de carrelage moderne dans les pièces d’eau, ponçage et vitrification du parquet d’origine, et mise en valeur des moulures par une peinture aux teintes élégantes."
              }
            ]}
            reverse
        />
        <ProjectConclusion
            title="ENVIE DE RÉNOVER ?"
            text="MN Décor donne vie à vos projets de rénovation, en alliant savoir-faire technique et respect du style architectural d’origine. Envie de rénover ? MN Décor transforme vos espaces avec soin, tout en préservant leur cachet architectural."
            image="/images/640x427/11-2.webp"
        />

    </Layout>
  )
}

export default P10