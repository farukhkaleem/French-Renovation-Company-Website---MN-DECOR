import Layout from "../../components/layout/Layout";
import Hero from "../../components/common/Hero";
import "../../styles/project.css";
import ProjectConclusion from "../../components/project/ProjectConclusion";
import Content from "../../components/Content";
import ContentWithoutImage from "../../components/project/ContentWithoutImage";

function P5() {
  return (
    <Layout>
        <Hero
            title1=""
            title2="Rénovation Intérieure"
            title3="Projet de Rénovation Complète au 5ᵉ Étage – Le Marais (Paris 4ᵉ)"
            background="/images/1920x1272/10.webp"
            small
        />
        <Content
          title="Contexte du Projet"
          image="/images/640x427/1-3.webp"
          content={[
            {
              type: "text",
              value: "Situé dans le cœur historique du Marais (Paris 4ᵉ), cet appartement au 5ᵉ étage d’un immeuble haussmannien présentait un espace sous-exploité : pièces cloisonnées, équipements obsolètes et manque de luminosité. MN Décor a été sollicitée pour transformer ce lieu en un écrin moderne, intégrant une cuisine ouverte, une salle de bain design et une pièce de vie spacieuse, tout en respectant le cachet patrimonial du bâtiment."
            }
          ]}
        />
        <Content
          title="Objectifs"
          image="/images/640x427/1-3.webp"
          content={[
            {
              type: "text",
              value: "L’objectif principal du projet était de repenser entièrement l’aménagement intérieur pour créer un espace fonctionnel, lumineux et contemporain, tout en préservant les éléments architecturaux d’origine (moulures, cheminées, parquet). Il s’agissait de moderniser les installations (électricité, plomberie) et d’optimiser la circulation pour offrir un cadre de vie agréable et adapté aux besoins actuels."
            },
            {
              type: "list",
              items: [
                "Optimiser l’espace 40m² pour créer des zones fonctionnelles et fluides.",
                "Moderniser les installations (électricité, plomberie, isolation) aux normes actuelles.",
                "Livrer un projet clé en main dans un délai serré 2 mois, avec une coordination parfaite des corps de métier."
              ]
            }
          ]}
          reverse
        />
        <ContentWithoutImage
          title="Phases Clés & Réalisations"
          content={[
            {
              type: "subheading",
              value: "Réaménagement des Volumes"
            },
            {
              type: "list",
              items: [
                "Ouverture de la cuisine sur le salon pour une pièce de vie lumineuse.",
                "Renforcement des poutres, murs porteurs conservés"
              ]
            },
            {
              type: "subheading",
              value: "Salle de Bain Design (3 m²)"
            },
            {
              type: "list",
              items: [
                "Douche à l’italienne, paroi en verre.",
                "Mobilier suspendu, vasque posée, carrelage soigné.",
                "Sèche-serviette intégré."
              ]
            },
            {
              type: "subheading",
              value: "Rénovation Technique"
            },
            {
              type: "list",
              items: [
                "Électricité encastrée, éclairage LED.",
                "Plomberie neuve, adaptation au réseau existant.",
                "Isolation phonique : laine de roche sous parquet et cloisons."
              ]
            },
            {
              type: "subheading",
              value: "Finitions & Déco"
            },
            {
              type: "list",
              items: [
                "Parquet chêne massif.",
                "Peinture blanche mate + panneaux bois brut en cuisine."
              ]
            },
           
          ]}
        />
        <Content
          title="Défis Relevés par MN Décor"
          image="/images/640x427/1-3.webp"
          content={[
            {
              type: "text",
              value: "Ce projet a été un véritable défi en raison de la complexité technique et du respect des délais. MN Décor a su faire preuve d’une grande réactivité et d’une organisation rigoureuse pour livrer un résultat à la hauteur des attentes du client, alliant modernité et charme de l’ancien."
            },
            {
              type: "list",
              items: [
                "Accès compliqué: Logement au 5ᵉ étage sans ascenseur, nécessitant un chantier organisé (montage de matériaux par monte-charge).",
                "Contraintes architecturales: Respect des règles de copropriété (travaux silencieux en journée, protection des parties communes).",
                "Personnalisation extrême: Adaptation des meubles sur mesure aux angles irréguliers de l’appartement."
              ]
            }
          ]}
          
        />
        <Content
          title="Résultats"
          image="/images/640x427/1-3.webp"
          content={[
            {
              type: "subheading",
              value: "Esthétique"
            },
            {
              type: "text",
              value: "Harmonisation parfaite entre modernité et patrimoine, avec une circulation fluide et des matériaux nobles."
            },
            {
              type: "subheading",
              value: "Fonctionnalité"
            },
            {
              type: "text",
              value: "Espaces optimisés (ex : cuisine ouverte équipée, salle de bain ergonomique)."
            },
            {
              type: "subheading",
              value: "Satisfaction client"
            },
            {
              type: "text",
              value: "Le propriétaire, conquis, a recommandé MN Décor à sa famille et ses collègues."
            }

          ]}
          reverse
        />
        <ProjectConclusion
          title="Notre Engagement"
          text="Nous disposons d’une solide maîtrise des rénovations en immeubles classés, notamment dans le Marais à Paris, avec une approche entièrement sur mesure allant de l’esquisse 3D à la livraison finale, où chaque détail est pensé en étroite collaboration avec le client, tout en garantissant une transparence totale grâce à un suivi de chantier régulier via une plateforme dédiée."
          image="/images/640x427/1-3.webp"
        />
    </Layout>
  )
}

export default P5