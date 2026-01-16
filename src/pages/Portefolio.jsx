import Project from "../components/Card";
import React from "react";

function Portefolio() {
  return (
    <div className="Portefolio">
      <h2>My Projects</h2>
      <p>Here are some of the projects I've worked on recently.</p>
      <Project title="Fresh Food" />
      <Project title="Restaurant Akira" />
      <Project title="Espace bien-être" />
      <Project title="SEO" />
      <Project title="Création d'une API" />
      <Project title="Maquette d'un site web" />
    </div>
  );
}
export default Portefolio;
