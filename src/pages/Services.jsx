import React from "react";
import Card from "../components/Card";

function Services() {
  return (
    <div className="Services">
      <img className="img-fluid" src="./assets/img/banner.jpg" alt="Banner" />
      <h2 className="text-center">Mon offre de services</h2>
      <p className=" flex items-center text-center">
        Voici les prestations sur lesquelles je peux intervenir
        <Card />
        <Card />
        <Card />
      </p>
    </div>
  );
}
export default Services;
