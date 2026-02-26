import Layout from "../../components/layout/Layout";
import Hero from "../../components/common/Hero";
import "../../styles/project.css";
import ProjectConclusion from "../../components/project/ProjectConclusion";
import Content from "../../components/Content";
import ContentWithoutImage from "../../components/project/ContentWithoutImage";

function P7() {
  return (
    <Layout>
        <Hero
            title1=""
            title2="Élégance et Modernité"
            title3="Rénovation de l'Hôtel Mercure – Paris 9ème"
            background="/images/1920x1272/4-11.webp"
            small
        />
        <Content
            title="Élégance et Modernité"
            image="/images/640x427/11-8.webp"
            content={[
                {
                    type: "text",
                    value: "L’Hôtel Mercure, situé dans le 9ème arrondissement de Paris, à deux pas du Moulin Rouge, a fait appel à l’expertise de MN Decor pour une rénovation complète de ses espaces stratégiques : couloirs, paliers, escaliers, cuisine, restaurant et accueil. L’objectif était d’offrir un nouveau souffle à cet établissement tout en garantissant la continuité de son activité hôtelière."
                }
            ]}
        />
        <Content
            title="Un chantier en plusieurs phases, sans interruption du service"
            image="/images/640x427/14-5.webp"
            content={[
                {
                    type: "text",
                    value: "Pour minimiser l’impact sur la clientèle et permettre le bon déroulement des activités de l’hôtel, les travaux ont été réalisés en plusieurs phases. Chaque zone a bénéficié d’une durée de 2 semaines pour être entièrement rénovée, en respectant des normes strictes d’isolation et de règlementation architecturale."
                }
            ]}
            reverse
        />
        <Content
            title="Des travaux organisés et optimisés"
            image="/images/640x427/15-5.webp"
            content={[
                {
                    type: "subheading",
                    value: "Planification précise"
                },
                {
                    type: "text",
                    value: "Un calendrier rigoureux a été établi pour garantir une coordination optimale entre les différentes étapes du projet."
                },
                {
                    type: "subheading",
                    value: "Matériaux haut de gamme"
                },
                {
                    type: "text",
                    value: "L’utilisation de matériaux de qualité a été privilégiée pour assurer une finition soignée et durable."
                },
                {
                    type: "subheading",
                    value: "Gestion du bruit et de la poussière"
                },
                {
                    type: "text",
                    value: "Des horaires spécifiques ont été respectés pour limiter les nuisances sonores. Les accès ont été temporairement condamnés et mis hors poussière afin de garantir le confort des clients et du personnel."
                },
                {
                    type: "subheading",
                    value: "Sécurisation des espaces"
                },
                {
                    type: "text",
                    value: "Des passages protégés ont été installés pour assurer la sécurité des résidents et des employés."
                }
            ]}
        />
        <ProjectConclusion
          title="Un chantier maîtrisé en 4 mois et 2 semaines"
          text="MN Decor a su relever le défi de cette rénovation en milieu occupé en respectant les délais impartis et en garantissant un résultat à la hauteur des attentes du client. L’Hôtel Mercure arbore désormais un design moderne et raffiné, offrant une expérience renouvelée à ses visiteurs."
          image="/images/640x427/11-8.webp"
          reverse
        />
    
    </Layout>
  )
}

export default P7