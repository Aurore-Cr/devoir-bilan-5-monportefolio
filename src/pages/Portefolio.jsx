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
        <h2 className="container text-center mt-5">Portfolio</h2>
        <p className="text-center mb-4">
          Voici quelques-unes de mes réalisations.
          <hr
            className="mx-auto my-4 responsive"
            style={{
              width: "400px",
              borderTop: "4px solid #0d6efd",
              opacity: 1,
            }}
          />
        </p>
      </div>

      <div className="container">
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
