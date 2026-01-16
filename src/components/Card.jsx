import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

export const project = [
  {
    title: "Fresh Food",
    description: "Site de vente de produits frais en ligne",
    imgUrl: "/assets/img/fresh-food.jpg",
  },
  {
    title: "Restaurant Akira",
    description: "Site de vente de produits frais en ligne",
    imgUrl: "/assets/img/restaurant-japonais.jpg",
  },
  {
    title: "Espace bien-être",
    description: "Site de vente de produits frais en ligne",
    imgUrl: "/assets/img/espace-bien-etre.jpg",
  },
  {
    title: "SEO",
    description: "Amélioration du référencement d'un site e-commerce",
    imgUrl: "/assets/img/seo.jpg",
  },
  {
    title: "Création d'une API",
    description: "Création d'une API RESFULL publique",
    imgUrl: "/assets/img/coder.jpg",
  },
  {
    title: "Maquette d'un site web",
    description: "Création du prototype d'un site",
    imgUrl: "/assets/img/screens.jpg",
  },
];

const Project = ({ title }) => {
  const projectData = project.find((proj) => proj.title === title);
  if (!projectData) return null;
  return (
    <Card style={{ width: "18rem" }}>
      <div>
        <Card.Img variant="top" src={projectData.imgUrl} />
        <div>
          <Card.Title>{projectData.title}</Card.Title>
          <Card.Body>
            <Card.Text>
              <p>{projectData.description}</p>
            </Card.Text>
          </Card.Body>
          <Button variant="primary">Go somewhere</Button>
        </div>
      </div>
    </Card>
  );
};

export default Project;
