import { useState } from "react";
import { Container, Accordion } from "react-bootstrap";
import "../index.css";

const Mentions = () => {
  const [activeKey, setActiveKey] = useState("0");

  const handleSelect = (eventKey) => {
    if (eventKey !== activeKey) {
      setActiveKey(eventKey);
    }
  };

  return (
    <section className="py-5 bg-light">
      <Container>
        <h2 className="text-center">Mentions légales</h2>
        <hr className="title-separator" />

        <Accordion
          activeKey={activeKey}
          onSelect={handleSelect}
          className="shadow-sm"
        >
          <Accordion.Item
            eventKey="0"
            className={activeKey === "0" ? "accordion-active" : ""}
          >
            <Accordion.Header>Éditeur du site</Accordion.Header>
            <Accordion.Body>
              <h3>John Doe</h3>
              <div className="mb-0">
                <i class="bi bi-map"> </i>
                40 rue Laure Diebold
              </div>
              <div className="mb-0">
                <i class="bi bi-geo-alt"> </i>
                69009 Lyon, France
              </div>
              <div className="mb-0">
                <i class="bi bi-phone"> </i>
                10 20 30 40 50
              </div>
              <div className="mb-3">
                <i class="bi bi-envelope-at"> </i>
                john.doe@gmail.com
              </div>
            </Accordion.Body>
          </Accordion.Item>

          <Accordion.Item
            eventKey="1"
            className={activeKey === "1" ? "accordion-active" : ""}
          >
            <Accordion.Header>Hébergeur</Accordion.Header>
            <Accordion.Body>
              <h3>
                <div>
                  <strong>alwaysdata</strong>
                </div>
              </h3>
              <div className="mb-2">
                <adress>91 Rue du Faubourg Saint-Honoré, 75008 Paris</adress>
              </div>
              <div>
                <i class="bi bi-globe"> </i>
                <a
                  href="https://www.alwaysdata.com"
                  target="_blank"
                  rel="noreferrer"
                >
                  www.alwaysdata.com
                </a>
              </div>
            </Accordion.Body>
          </Accordion.Item>

          <Accordion.Item
            eventKey="2"
            className={activeKey === "2" ? "accordion-active" : ""}
          >
            <Accordion.Header>Crédits</Accordion.Header>
            <Accordion.Body>
              <h3>
                <strong>Crédits </strong>
              </h3>
              <p>
                Ce site a été réalisé par John Doe, étudiant au{" "}
                <a
                  href="https://www.centre-europeen-formation.fr/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Centre Européen de formation.
                </a>
                .
              </p>

              <p>
                <em>
                  Les images utilisées sur ce site sont libres de droits et ont
                  été obtenues sur le site{" "}
                  <a
                    href="https://pixabay.com"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Pixabay
                  </a>
                </em>
                .
              </p>

              <p>
                <em>
                  La favicon de ce site a été fournie par{" "}
                  <a
                    href="https://www.flaticon.com"
                    target="_blank"
                    rel="noreferrer"
                  >
                    John doe Icons erstellt von Freepik - Flaticon
                  </a>
                  .
                </em>
              </p>
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </Container>
    </section>
  );
};

export default Mentions;
