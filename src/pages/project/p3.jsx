import Layout from "../../components/layout/Layout";
import Hero from "../../components/common/Hero";
import "../../styles/project.css";
import ProjectConclusion from "../../components/project/ProjectConclusion";
import Content from "../../components/Content";
import ContentWithoutImage from "../../components/project/ContentWithoutImage";

function P3() {
  return (
    <Layout>
        <Hero
            title1="Projet de rénovation de l’Hôtel des Deux Avenues – 2024"
            title2="Rénovation Hôtelière"
            title3=""
            background="/images/1920x1272/12.webp"
            small
        />
        <Content
            title="Contexte et Enjeux"
            image="/images/640x427/15-2.webp"
            content={[
                {
                    type: "subheading",
                    value: "Localisation privilégiée"
                },
                {
                    type: "text",
                    value: "Situé dans une petite rue animée à seulement 10 minutes à pied de la place de l’Étoile, de l’Arc de Triomphe et des Champs-Élysées, l’hôtel jouit d’un emplacement de choix dans un quartier élégant."
                },
                {
                    type: "subheading",
                    value: "Objectif du propriétaire"
                },
                {
                    type: "text",
                    value: "Offrir un rafraîchissement complet pour moderniser le look de l’établissement, tout en assurant une rénovation en douceur, sans fermeture, afin de préserver l’activité commerciale."
                },
                {
                    type: "subheading",
                    value: "Contraintes majeures"
                },
                {
                    type: "list",
                    items: [
                        "Réaliser les travaux sans interrompre le service pour la clientèle.",
                        "Respecter le règlement d’urbanisme et les normes architecturales de l’édifice.", 
                        "Limiter les nuisances sonores et la poussière pour garantir le confort des clients."
                    ]
                }
            ]}
          />
          <ContentWithoutImage
            title="Stratégie de Réalisation : Un Phasage Ingénieux"
            content={[
                {
                    type: "text",
                    value: "Pour répondre à ces contraintes, les travaux ont été soigneusement découpés en phases :"
                },
                {
                    type: "subheading",
                    value: "Phase"
                },
                {
                    type: "list",
                    items: [
                        "Rénovation des 6ᵉ et 5ᵉ étages (Durée : 2 mois) ",
                        "Isolation complète des zones en rénovation.",
                        "Mise en place de protections spécifiques pour éviter la propagation de poussière et de bruit."
                    ]
                },
                {
                    type: "subheading",
                    value: "Phase 2"
                }, 
                {
                    type: "list",
                    items: [
                        "Rénovation des 3ᵉ et 4ᵉ étages (Durée : 2 mois)",
                        "Poursuite des travaux dans une autre zone de l’établissement tout en gardant les espaces clients opérationnels.",
                        "Amélioration des infrastructures en respectant les normes de qualité."
                    ]
                },
                {
                    type: "subheading",
                    value: "Phase"
                }, 
                {
                    type: "list",
                    items: [
                        "Rénovation des 2ᵉ et 1ᵉ étages (Durée : 2 mois)",
                        "Finalisation des travaux avec le même soin apporté aux étages supérieurs.",
                        "Création d’un passage sécurisé pour assurer la circulation des clients pendant les opérations."
                    ]
                },
                {
                    type: "text",
                    value: "Durée Totale des Travaux : 6 mois"
                }
            ]}
          />
          <Content
            title="Mesures de Sécurité et de Confort"
            image="/images/640x427/16-2.webp"
            content={[
                {
                    type: "text",
                    value: "Des passages sécurisés ont été aménagés pour garantir la circulation des clients malgré les travaux."
                },
                {
                    type: "text",
                    value: "Les nuisances sonores sont limitées grâce à des plages horaires dédiées aux travaux bruyants."
                },
                {
                    type: "text",
                    value: "Les zones de chantier sont fermées et isolées pour assurer propreté et sécurité.Des matériaux de haute qualité sont utilisés, conformes aux normes strictes.La rénovation respecte l’authenticité et le cachet historique de l’hôtel."
                }
            ]}
            reverse
          />
          <ProjectConclusion
            title="Bilan du Projet"
            text="L’approche par phasage mise en place par l’équipe de MN Décor a permis de mener à bien une rénovation ambitieuse, tout en maintenant l’activité de l’Hôtel des Deux Avenues. Grâce à une organisation rigoureuse et au respect strict des exigences de sécurité et de confort, l’hôtel arbore désormais un nouveau visage moderne, sans avoir perdu son charme authentique."
            image="/images/640x427/3-6.webp"
          />
    </Layout>
  )
}

export default P3