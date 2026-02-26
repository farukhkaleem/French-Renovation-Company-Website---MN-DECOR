import Layout from "../../components/layout/Layout";
import Hero from "../../components/common/Hero";
import "../../styles/project.css";
import ProjectConclusion from "../../components/project/ProjectConclusion";
import Content from "../../components/Content";
import ContentWithoutImage from "../../components/project/ContentWithoutImage";

function P8() {
  return (
    <Layout>
        <Hero
            title1=""
            title2="Ravalement de façade"
            title3="Façades scolaires rénovées, confort assuré toute l’année."
            background="/images/1920x1272/1-14.webp"
            small
        />
        <Content 
            title="Objectifs du Projet"
            image="/images/640x427/4-10.webp"
            content={[
              {
                type: "text",
                value: "Mandatée pour la rénovation de ce lycée, notre équipe avait pour mission de restaurer l’image patrimoniale du bâtiment tout en assurant sa pérennité. Nous avons mis en œuvre des solutions techniques adaptées pour protéger durablement la structure contre l’humidité et les intempéries."
              },
              {
                type: "text",
                value: "Conscients de l’environnement sensible d’un établissement en activité, nous avons organisé le chantier de manière à garantir la sécurité des élèves et du personnel tout au long des travaux. Malgré les contraintes logistiques liées à la cohabitation avec les usagers, les délais ont été rigoureusement respectés, grâce à une planification précise et à une coordination étroite avec la direction de l’établissement."
              }
            ]}

        />
        <ContentWithoutImage
            title="Travaux réalisées : Rénovation complète de la façade"
            content={[
              {
                type: "text",
                value: "Dans le cadre de la réhabilitation de ce bâtiment scolaire, plusieurs étapes techniques ont été mises en œuvre pour garantir un résultat à la fois esthétique, durable et conforme aux exigences de sécurité."
              },
              {
                type: "subheading",
                value: "🏗️ Installation d’un échafaudage fixe"
              },
              {
                type: "text",
                value: "Avant le démarrage du chantier, une étude approfondie des accès et des zones sensibles (fenêtres, corniches, éléments saillants) a été réalisée.Un échafaudage tubulaire fixe a ensuite été monté dans le respect des normes de sécurité.La structure, entièrement modulable, a été adaptée pour contourner les obstacles architecturaux (statues, moulures, etc.) sans compromettre la stabilité."
              },
              {
                type: "subheading",
                value: "💦 Nettoyage haute pression"
              },
              {
                type: "text",
                value: "Un nettoyage en profondeur des façades a été effectué à l’aide de jets d’eau à haute pression (250 bars) afin d’éliminer efficacement les traces de pollution urbaine, mousses, lichens et autres micro-organismes. Des précautions particulières ont été prises pour ajuster la pression et préserver les matériaux fragiles (joints, pierres anciennes), garantissant ainsi une surface propre et homogène avant les réparations."
              },
              {
                type: "subheading",
                value: "🛠️ Reprise des fissures"
              },
              {
                type: "text",
                value: "Un diagnostic préalable a permis d’identifier les différentes typologies de fissures : structurelles (liées au tassement) et superficielles. Les interventions ont inclus :"

              },
              {
                type: "list",
                items: [
                  "Remplacement des joints dégradés à l’aide d’un mortier élastomère hydrofuge,",
                  "Rebouchage des fissures avec un enduit fibré assurant une excellente adhérence,",
                  "Application d’un primaire d’accroche pour renforcer l’imperméabilisation et prévenir toute infiltration future."
                ]

              },
              {
                type: "subheading",
                value: "🎨 Mise en peinture de la façade"
              },
              {
                type: "text",
                value: "Une peinture acrylique professionnelle, respirante et résistante aux UV, a été choisie (teinte : blanc ivoire, pour un rendu lumineux et sobre). L’application a été réalisée en deux couches, au rouleau pour les grandes surfaces, et à la brosse pour les détails architecturaux. Un travail en escalier a été privilégié pour éviter toute marque de reprise, assurant une finition uniforme et soignée."
              }
            ]}
        />
        <Content 
            title="Contraintes du chantier"
            image="/images/1024x678/2-15-1024x678.webp"
            content={[
              {
                type: "subheading",
                value: "Horaires adaptés"
              },
              {
                type: "text",
                value: "Travaux organisés en dehors des heures de cours pour limiter les nuisances au sein du lycée."
              },
              {
                type: "subheading",
                value: "Réparations techniques"
              },
              {
                type: "text",
                value: "Intervention ciblée sur des fissures complexes, nécessitant une expertise en pathologies du bâtiment."
              },
              {
                type: "subheading",
                value: "Climat anticipé"
              },
              {
                type: "text",
                value: "Planification ajustée pour éviter la pluie pendant les phases de séchage."
              }
            ]}
            reverse

        />
        <Content 
            title="Résultats obtenues"
            image="/images/640x427/5-10.webp"
            content={[
              {
                type: "subheading",
                value: "Esthétique "
              },
              {
                type: "text",
                value: "Façades rajeunies et homogènes, mettant en valeur l’architecture du lycée."
              },
              {
                type: "subheading",
                value: "Durabilité "
              },
              {
                type: "text",
                value: "Protection renforcée contre l’humidité et le gel pour une longévité optimale."
              },
              {
                type: "subheading",
                value: "Satisfaction client"
              },
              {
                type: "text",
                value: "Retours très positifs de la direction et des usagers de l’établissement."
              }
            ]}

        />
        <ProjectConclusion
            title="Pourquoi Choisir MN Décor ?"
            image="/images/640x427/3-11.webp"
            text="Grâce à une gestion rigoureuse et à un savoir-faire reconnu, MN Décor a mené à bien le ravalement du Gymnase du Lycée Jean Rostand sans perturber le bon déroulement des cours. Aujourd’hui, le gymnase arbore une façade entièrement rénovée et modernisée, reflétant une image dynamique et accueillante, en harmonie avec son environnement."
            reverse
        />
    
    </Layout>
  )
}

export default P8