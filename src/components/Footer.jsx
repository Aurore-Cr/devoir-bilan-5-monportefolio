import React from "react";
import "bootstrap-icons/font/bootstrap-icons.css";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-dark text-light  mt-5 ">
      <div className="container py-5">
        <div className="row gy-4">
          <div className="col-12 col-md-4 ">
            {/* bloc 1 */}

            <h5 className="fw-semibold">John Doe</h5>
            <ul className="list-unstyled  small">
              <li> 40 rue Laure Diebold</li>
              <li> 69009 Lyon, France</li>
              <li> 10 20 30 40 50</li>
              <li>
                <a href="mailto:john.doe@example.com" className="footer-link">
                  john.doe@gmail.com
                </a>
              </li>
            </ul>

            {/* Icônes des réseaux sociaux */}

            <div className="d-flex gap-3 mt-2">
              <a
                href="https://github.com/github-john-doe"
                target="_blank"
                rel="nofollow noopener noreferrer"
                className="social-icon"
              >
                <i className="bi bi-github fs-4"></i>
              </a>

              <li className="d-flex ">
                <a
                  href="https://twitter.com/johndoe"
                  target="_blank"
                  rel="nofollow noopener noreferrer"
                  className="social-icon"
                >
                  <i className="bi bi-twitter fs-4"></i>
                </a>
              </li>

              <li className="d-flex ">
                <a
                  href="https://linkedin.com/in/johndoe"
                  target="_blank"
                  rel="nofollow noopener noreferrer"
                  className="social-icon"
                >
                  <i className="bi bi-linkedin fs-4"></i>
                </a>
              </li>
            </div>
          </div>

          {/* bloc 2 */}

          <div className="col-12 col-md-4">
            <h5 className="fw-semibold">Liens utiles</h5>
            <ul className="list-unstyled ">
              <li>
                <Link to="/" className="footer-link">
                  Accueil
                </Link>
              </li>
              <li>
                <Link to="/Services" className="footer-link">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/Portfolio" className="footer-link">
                  Portefolio
                </Link>
              </li>
              <li>
                <Link to="/Contact" className="footer-link">
                  Me contacter
                </Link>
              </li>
              <li>
                <Link to="/Mentions" className="footer-link">
                  Mentions légales
                </Link>
              </li>
            </ul>
          </div>

          {/* bloc 3 */}

          <div className="col-12 col-md-4 ">
            <h5 className="fw-semibold">Mes dernières réalisations</h5>
            <ul className="list-unstyled">
              <li>
                <Link to="/Portfolio" className="footer-link">
                  Fresh Food
                </Link>
              </li>
              <li>
                <Link to="/Portfolio" className="footer-link">
                  Restaurant Akira
                </Link>
              </li>
              <li>
                <Link to="/Portfolio" className="footer-link">
                  Espace bien-être
                </Link>
              </li>
              <li>
                <Link to="/Portfolio" className="footer-link">
                  SEO
                </Link>
              </li>
              <li>
                <Link to="/Portfolio" className="footer-link">
                  Création d'une API
                </Link>
              </li>
              <li>
                <Link to="/Portfolio" className="footer-link">
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
