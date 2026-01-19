import React from "react";
import "bootstrap-icons/font/bootstrap-icons.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

function Services() {
  return (
    <div className="Services">
      <img className="img-fluid" src="./assets/img/banner.jpg" alt="Banner" />
      <h2 className="text-center mt-4">Mon offre de services</h2>
      <p className=" flex items-center text-center mb-4">
        Voici les prestations sur lesquelles je peux intervenir
      </p>
      <hr className="title-separator" />
      <div className="container">
        <div class="row g-4 justify-content-center">
          <div class="col-md-3">
            <div class="card service-card h-100">
              <div class="card-body text-center">
                <i class="bi bi-brush service-icon"></i>
                <h4 class="mt-3 fw-bold">
                  <strong> UX Design</strong>{" "}
                </h4>
                <p>
                  L’UX Design consiste à concevoir des produits (sites web,
                  applications mobiles, logiciels, objects connectés, etc.) en
                  plaçant l'utilisateur au centre des préoccupations. l'objectif
                  est de rendre l'expérience utilisateur la plus fluide et
                  agréable possible.
                </p>
              </div>
            </div>
          </div>

          <div class="col-md-3">
            <div class="card service-card h-100">
              <div class="card-body text-center">
                <i class="bi bi-code-slash service-icon"></i>
                <h4 class="mt-3 fw-bold">
                  <strong>Développement web </strong>{" "}
                </h4>
                <p>
                  Le développement de sites web consiste à créer des sites
                  internet en utilisant des langages de programmation (HTML,
                  CSS, JavaScript, PHP, etc.) et des frameworks (Bootstrap,
                  React, Angular, etc.).
                </p>
              </div>
            </div>
          </div>
          <div class="col-md-3">
            <div class="card service-card h-100">
              <div class="card-body text-center">
                <i class="bi bi-search service-icon"></i>
                <h4 class="mt-3 fw-bold">
                  <strong>Référencement </strong>{" "}
                </h4>
                <p>
                  Le référencement naturel (SEO) est une technique qui consiste
                  à optimiser un site web pour le faire remonter dans les
                  résultats des moteurs de recherche (Google, Bong, Yahoo,
                  etc.). l'objectif est d'attirer un maximum de visiteurs
                  qualifiés sur le site.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Services;
