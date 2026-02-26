import Layout from "../../components/layout/Layout";
import Hero from "../../components/common/Hero";
import "../../styles/project.css";
import ProjectConclusion from "../../components/project/ProjectConclusion";
import Content from "../../components/Content";

function P2() {
  return (
    <Layout>
        <Hero
            title1=""
            title2="Transformation de nos bureaux et locaux de stockage"
            title3=""
            background="/images/1920x1272/13.webp"
            small
        />
        <Content 
            title="Des bureaux repensés, un stockage optimisé"
            image="/images/640x427/6-4.webp"
            content={[
                {
                    type: "text",
                    value: "Nous avons entièrement rénové nos bureaux et notre local de stockage en interne ! L’objectif ? Moderniser notre environnement de travail pour le rendre plus fonctionnel, lumineux et inspirant. Nos équipes ont mis tout leur cœur dans ce projet pour créer un espace qui reflète notre dynamisme et notre engagement envers l’excellence."
                }
            ]}
        />
        <Content 
            title="Un coin convivial dédié à nos clients"
            image="/images/640x427/13-3.webp"
            content={[
                {
                    type: "text",
                    value: "Venez discuter autour d’un café dans notre nouvel espace d’accueil ! Nous avons aménagé un lieu chaleureux et design pour échanger avec vous en toute sérénité. Que ce soit pour un projet, une question ou simplement un moment de partage, cet espace a été pensé pour vous offrir une expérience agréable et personnalisée."
                }
            ]}
            reverse
        />
        <Content 
            title="Des moments entre collègues… et même une douche !"
            image="/images/640x427/10-4.webp"
            content={[
                {
                    type: "text",
                    value: "À la fin de la journée, notre espace détente devient le lieu idéal pour se retrouver entre collègues. Discussions informelles, fous rires ou petites célébrations : c’est ici que nous cultivons notre esprit d’équipe !"
                },
                {
                    type: "text",
                    value: "Et pour ceux qui aiment enchaîner sport et travail (ou simplement rentrer chez eux frais et dispos), nous avons même ajouté une salle d’eau avec douche – pratique et élégante."
                }
            ]}
        />
        <Content 
            title="Un investissement pour l’humain et la planète"
            image="/images/640x427/17-1.webp"
            content={[
                {
                    type: "text",
                    value: "En recyclant des matériaux et en privilégiant des solutions durables, nous avons voulu allier modernité et respect de l’environnement. Parce que prendre soin de nos équipes et de nos clients, c’est aussi prendre soin de notre planète."
                }
            ]}
            reverse
        />
        <ProjectConclusion
          title="Envie de voir ça en vrai ?"
          text="Passez nous dire bonjour ! Nous sommes fiers de partager ces nouveaux espaces avec vous."
          image="/images/640x427/12-4.webp"
        />
    
    </Layout>
  )
}

export default P2