import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import React from "react";

const projects = [
  {
    title: "Fresh Food",
    description: "Site de vente de produits frais en ligne",
    imgUrl: "/assets/img/fresh-food.jpg",
    footer: "Site réalisé avec PHP et MySQL",
  },
  {
    title: "Restaurant Akira",
    description: "Site de vente de produits frais en ligne",
    imgUrl: "/assets/img/restaurant-japonais.jpg",
    footer: "Site réalisé avec WordPress",
  },
  {
    title: "Espace bien-être",
    description: "Site de vente de produits frais en ligne",
    imgUrl: "/assets/img/espace-bien-etre.jpg",
    footer: "Site réalisé avec LARAVEL",
  },
  {
    title: "SEO",
    description: "Amélioration du référencement d'un site e-commerce",
    imgUrl: "/assets/img/seo.jpg",
    footer: "Utilisation des outils SEO",
  },
  {
    title: "Création d'une API",
    description: "Création d'une API RESFULL publique",
    imgUrl: "/assets/img/coder.jpg",
    footer: "PHP - SYMFONY",
  },
  {
    title: "Maquette d'un site web",
    description: "Création du prototype d'un site",
    imgUrl: "/assets/img/screens.jpg",
    footer: "Réalisé avec FIGMA",
  },
];

const Project = ({ title }) => {
  const project = projects.find((p) => p.title === title);
  if (!project) return null;
  return (
    <Card className="project-card h-100">
      <div className="project-card">
        <Card.Img variant="top" src={project.imgUrl} className="project-img" />
        <Card.Body className="text-center">
          <Card.Title as="h4">{project.title}</Card.Title>

          <Card.Text>
            <p>{project.description}</p>
          </Card.Text>

          <Button variant="primary" className="project-btn mb-3">
            Voir le site
          </Button>
        </Card.Body>
        <Card.Footer className="text-center text-muted">
          {project.footer}
        </Card.Footer>{" "}
      </div>
    </Card>
  );
};

export default Project;
