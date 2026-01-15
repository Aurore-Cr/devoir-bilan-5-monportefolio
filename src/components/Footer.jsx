import React from "react";
import "bootstrap-icons/font/bootstrap-icons.css";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-dark text-light content-center mt-5 px-4 lg:px-lg-5">
      <div className="container mx-auto px-4 lg:px-lg-5 fs-6 py-5">
        <div className="row gx-4 gy-3 mb-4">
          <div className="col-12 col-md-4 mb-4 mb-md-0">
            {/* bloc 1 */}

            <h5 className="">John Doe</h5>
            <ul className="list-unstyled  mb-0">
              <li className="adress"> 40 rue Laure Diebold</li>
              <li className="postal"> 69009 Lyon, France</li>
              <li className="phone"> 10 20 30 40 50</li>
              <li className="mail">
                <a
                  href="mailto:john.doe@example.com"
                  className="text-light text-decoration-none hover:underline"
                >
                  john.doe@gmail.com
                </a>
              </li>
            </ul>

            {/* Icônes des réseaux sociaux */}

            <ul className="d-flex list-unstyled  gap-2">
              <li className="d-flex ">
                <a
                  href="https://github.com/github-john-doe"
                  className="text-secondary p-0 rounded hover:bg-secondary hover:bg-opacity-25"
                  target="_blank"
                  rel="nofollow noopener noreferrer"
                >
                  <i className="bi bi-github fs-2"></i>
                </a>
              </li>
              <li className="d-flex ">
                <a
                  href="https://twitter.com/johndoe"
                  className="text-secondary p-0 rounded  hover:bg-secondary hover:bg-opacity-25"
                  target="_blank"
                  rel="nofollow noopener noreferrer"
                >
                  <i className="bi bi-twitter fs-2"></i>
                </a>
              </li>

              <li className="d-flex ">
                <a
                  href="https://linkedin.com/in/johndoe"
                  className="text-secondary p-0 rounded  hover:bg-secondary hover:bg-opacity-25"
                  target="_blank"
                  rel="nofollow noopener noreferrer"
                >
                  <i className="bi bi-linkedin fs-2"></i>
                </a>
              </li>
            </ul>
          </div>

          {/* bloc 2 */}

          <div className="col-12 col-md-4 mb-4 mb-md-0">
            <h5 className="">Liens utiles</h5>
            <ul className="list-unstyled mb-0 ">
              <li>
                <Link
                  to="/"
                  className="text-light text-decoration-none hover:text-light-50 hover:underline"
                >
                  Accueil
                </Link>
              </li>
              <li>
                <Link
                  to="/Services"
                  className="text-light text-decoration-none hover:underline"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  to="/Portefolio"
                  className="text-light text-decoration-none hover:underline"
                >
                  Portefolio
                </Link>
              </li>
              <li>
                <Link
                  to="/Contact"
                  className="text-light text-decoration-none hover:underline"
                >
                  Me contacter
                </Link>
              </li>
              <li>
                <Link
                  to="/Mentions"
                  className="text-light text-decoration-none hover:underline"
                >
                  Mentions légales
                </Link>
              </li>
            </ul>
          </div>

          {/* bloc 3 */}

          <div className="col-12 col-md-4 mb-4 mb-md-0">
            <h5 className="">Mes dernières réalisations</h5>
            <ul className="list-unstyled mb-0">
              <li>
                <Link
                  to="/Portefolio"
                  className="text-light text-decoration-none hover:text-light-50 hover:underline"
                >
                  Fresh Food
                </Link>
              </li>
              <li>
                <Link
                  to="/Portefolio"
                  className="text-light text-decoration-none hover:text-light-50 hover:underline"
                >
                  Restaurant Akira
                </Link>
              </li>
              <li>
                <Link
                  to="/Portefolio"
                  className="text-light text-decoration-none hover:underline"
                >
                  Espace bien-être
                </Link>
              </li>
              <li>
                <Link
                  to="/Portefolio"
                  className="text-light text-decoration-none hover:underline"
                >
                  SEO
                </Link>
              </li>
              <li>
                <Link
                  to="/Portefolio"
                  className="text-light text-decoration-none hover:underline"
                >
                  Création d'une API
                </Link>
              </li>
              <li>
                <Link
                  to="/Portefolio"
                  className="text-light text-decoration-none hover:underline"
                >
                  Maquette d'un site
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
