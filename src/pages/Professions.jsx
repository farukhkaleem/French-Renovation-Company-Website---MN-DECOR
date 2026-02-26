import Layout from "../components/layout/Layout"
import Hero from "../components/common/Hero"
import Content from "../components/Content"

function Professions() {
  return(
    <Layout>
      <Hero
        title1=""
        title2="NOS METIERS"
        title3="Ce que nous faisons"
        background="/images/1920x1280/black-pendant-lamps-in-white-building-1381782.webp"
        small
      />
      <Content
        title="PEINTURE INTÉRIEURE"
        image="/images/1024x683/1-1-1024x683.webp"
        content={[
          {
            type: "text",
            value:
              "Nous réalisons la mise en peinture de vos intérieurs, en effectuant préalablement la préparation des murs (rebouchage, ponçage, application de sous-couche). Nous utilisons des peintures de qualité, adaptées aux différents supports et besoins (mat, satiné, brillant, acrylique, glycéro)."
          }
        ]}
      />
      <Content
        title="RAVALEMENT DE FAÇADE"
        image="/images/1024x683/4-2-1024x683.webp"
        content={[
          {
            type: "text",
            value:
              "Nous restaurons et embellissons vos façades en réalisant un diagnostic précis avant d’entreprendre les travaux. Nous procédons au nettoyage, à la réparation des fissures et à l’application de revêtement protecteur (enduits, peintures adaptées, peintures techniques, imperméabilisation…)."
          }
        ]}
        reverse
      />
      <Content
        title="POSE DE SOLS"
        subtitle="Parquet"
        image="/images/1024x683/7-1024x683.webp"
        content={[
          {
            type: "text",
            value:
              "Nous installons tous types de parquets :"
          },
          {
            type: "list",
            items: [
              "Parquet massif : cloué ou collé pour une grande durabilité",
              "Parquet contrecollé : pose flottante ou collée pour une installation plus rapide",
              "Parquet stratifié : idéal pour une alternative économique et résistante"
            ]
          },
          {
            type: "text",
            value:
              "La pose est réalisée après une préparation minutieuse du support (vérification de la planéité, isolation phonique si nécessaire)."
          }
        ]}
        
      />
      <Content
        title="Sols Souples"
        image="/images/1024x683/10-1024x683.webp"
        content={[
          {
            type: "text",
            value:
              "Nous installons des revêtements souples tels que le linoleum, le PVC en lé ou en dalle et la moquette. Nous veillons à la préparation du sol (ragréage si nécessaire) avant d’appliquer les revêtements."
          }
        ]}
        reverse
      />
      <Content
        title="Carrelage et Faïence"
        image="/images/1024x683/2-2-1024x683.webp"
        content={[
          {
            type: "text",
            value:
              "Nous réalisons la pose de carrelage et faïence sur les sols et murs, en veillant à un alignement parfait et une finition soignée. Nous utilisons des techniques de pose droite, en diagonale ou autres types de pose selon vos envies."
          }
        ]}
        
      />
      <Content
        title="PLOMBERIE"
        image="/images/1024x683/8-1024x683.webp"
        content={[
          {
            type: "text",
            value:
              "Nous intervenons pour l’installation et la rénovation complète de vos réseaux de plomberie :"
          },
          {
            type: "list",
            items: [
              "Pose et remplacement de robinetterie",
              "Installation de baignoires, douches à l’italienne, éviers et WC",
              "Remplacement de ballon d’eau chaude",
              "Rénovation intégrale des canalisations et circuits d’eau"
            ]
          },
          {
            type: "text",
            value:
              "Nous garantissons un travail soigné avec des matériaux de qualité."
          }
        ]}
        reverse
      />
      <Content
        title="ÉLECTRICITÉ"
        image="/images/1024x683/3-2-1024x683.webp"
        content={[
          {
            type: "text",
            value:
              "Nous réalisons la mise aux normes, la modernisation ou la rénovation complète de votre réseau électrique :"
          },
          {
            type: "list",
            items: [
              "Installation de prises, interrupteurs et tableaux électriques",
              "Mise en place de luminaires et spots encastrés",
              "Remplacement des anciens circuits électriques par des installations conformes aux normes actuelles",
              "Diagnostic et mise aux normes des installations existantes"
            ]
          }
        ]}
        
      />
      <Content
        title="PLÂTRERIE ET PETITE MENUISERIE"
        image="/images/1024x683/5-2-1024x683.webp"
        content={[
          {
            type: "text",
            value:
              "Nous effectuons la pose de cloisons en placoplâtre sur ossature métallique, faux plafonds et corniches pour structurer vos espaces intérieurs. Nous intervenons également en menuiserie pour la pose et l’ajustement de portes, placards, plinthes et boiseries."
          }
        ]}
        reverse
      />
      <Content
        title="POSE DE REVÊTEMENTS MURAUX"
        image="/images/1024x683/6-1-1024x683.webp"
        content={[
          {
            type: "text",
            value:
              "Nous appliquons différents types de revêtement muraux pour embellir vos intérieurs :"
          },
          {
            type: "list",
            items: [
              "Papier peint avec raccords soignés",
              "Toile de verre renforcée pour une meilleure résistance",
              "Enduits décoratifs tels que le Stucco…"
            ]
          },
          {
            type: "text",
            value:
              "Nous garantissons une finition parfaite pour un rendu harmonieux."
          }
        ]}
        
      />
      <Content
        title="PONÇAGE ET VITRIFICATION DE PARQUET"
        image="/images/1024x683/9-1024x683.webp"
        content={[
          {
            type: "text",
            value:
              "Nous redonnons vie à vos parquets en réalisant un ponçage en plusieurs passes (gros grain, moyen, finition) suivi de l’application de vernis protecteur (vitrificateur mat, satiné ou brillant) ou d’une huile naturelle pour un effet plus authentique."
          }
        ]}
        reverse
      />



    </Layout>
  )
}

export default Professions
