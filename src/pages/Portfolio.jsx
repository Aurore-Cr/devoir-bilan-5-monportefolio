import Project from "../components/Card";
import React from "react";

function Portfolio() {
  return (
    <div className="Portfolio">
      <div classNAme="banner">
        <img
          className="img-fluid w-100"
          src="./assets/img/banner.jpg"
          alt="Banner"
        />
        <h2 className="container text-center mt-5 mb-2">Portfolio</h2>
        <p className="text-center">
          Voici quelques-unes de mes réalisations.
          <hr hr className="title-separator" />
        </p>
      </div>

      <div className="container mx-auto">
        <div className="row justify-content-center">
          <div className="col-md-4 mb-4">
            <Project title="Fresh Food" />
          </div>
          <div className="col-md-4 mb-4">
            <Project title="Restaurant Akira" />
          </div>
          <div className="col-md-4 mb-4">
            <Project title="Espace bien-être" />
          </div>
          <div className="col-md-4 mb-4">
            <Project title="SEO" />
          </div>
          <div className="col-md-4 mb-4">
            <Project title="Création d'une API" />
          </div>
          <div className="col-md-4 mb-4">
            <Project title="Maquette d'un site web" />
          </div>
        </div>
      </div>
    </div>
  );
}
export default Portfolio;
