import Layout from "../../components/layout/Layout";
import Hero from "../../components/common/Hero";
import "../../styles/project.css";
import ProjectContentSection from "../../components/project/ProjectContentSection";
import ProjectConclusion from "../../components/project/ProjectConclusion";
import Content from "../../components/Content";

function P1() {
  return (
    <Layout>
        <Hero
            title1=""
            title2="Aménagement Commercial"
            title3="Projet Création Boutique de Vêtements Haut de Gamme – Faubourg Saint-Honoré, Paris"
            background="/images/1920x1272/10.webp"
            small
        />
        <Content 
            title="Objectif du projet"
            image="/images/640x427/4-3.webp"
            content={[
                {
                    type: "text",
                    value: "Projet Création Boutique de Vêtements Haut de Gamme – Faubourg Saint-Honoré, Paris L’équipe MN Decor a réalisé la création d’une boutique de luxe dans le 8ème arrondissement, sur la prestigieuse rue Faubourg Saint-Honoré."
                }
            ]}
        />
        <ProjectContentSection
          title="Revêtements muraux et plafond"
          image="/images/640x427/5-3.webp"
          content={
            <>
              <h5>Revêtement de Sol</h5>
              <ul>
                <li><strong>Moquette :</strong> Pour une ambiance chaleureuse.</li>
                <li><strong>Marbre :</strong> Pour renforcer le côté haut de gamme.</li>
              </ul>

              <h5>Revêtement Mural</h5>
              <ul>
                <li><strong>Faïence :</strong> Zones spécifiques modernes.</li>
                <li><strong>Peinture :</strong> Finition élégante.</li>
              </ul>

              <h5>Revêtement de Plafond</h5>
              <ul>
                <li><strong>Peinture :</strong> Atmosphère lumineuse homogène.</li>
              </ul>
            </>
          }
        />

        <ProjectConclusion
          title="Conclusion"
          text="Ce projet illustre notre savoir-faire en matière de création d’espaces raffinés et sur-mesure. Chaque choix de revêtement a été pensé pour sublimer l’image de marque et offrir une expérience client unique."
          image="/images/640x427/6-3.webp"
        />





    </Layout>
  )
}

export default P1