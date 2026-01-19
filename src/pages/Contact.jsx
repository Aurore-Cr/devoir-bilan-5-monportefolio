import { Container, Row, Col, Card, Form, Button } from "react-bootstrap";

const Contact = () => {
  return (
    <section className="py-5 bg-light">
      <Container>
        <h2 className="text-center">Contact</h2>
        <p className="text-center mb-4">
          Pour me contacter en vue d'un entretien ou d'une future collaboration,
          merci de remplir le formulaire de contact.
        </p>
        <hr className="title-separator" />

        <Card className="shadow border-0">
          <Card.Body>
            <Row>
              <Col md={6}>
                <h4 className="section-title">Formulaire de contact</h4>

                <Form>
                  <Form.Control
                    className="mb-2"
                    placeholder="Votre nom"
                    required
                  />
                  <Form.Control
                    className="mb-2"
                    placeholder="Votre adresse email"
                    required
                  />
                  <Form.Control
                    className="mb-2"
                    placeholder="Votre numéro de téléphone"
                    required
                  />
                  <Form.Control className="mb-2" placeholder="Sujet" required />
                  <Form.Control
                    as="textarea"
                    rows={15}
                    className="mb-3"
                    placeholder="Votre message"
                    required
                  />

                  <div className="text-center mt-1">
                    <Button type="submit" className="btn btn-primary px-4">
                      Envoyer
                    </Button>
                  </div>
                </Form>
              </Col>

              <Col md={6}>
                <h4 className="section-title">Mes coordonnées</h4>

                <h5>John Doe</h5>

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

                <iframe
                  title="map"
                  src="https://www.google.com/maps?q=40%20rue%20Laure%20Diebold%2069009%20Lyon&output=embed"
                  width="100%"
                  height="450"
                  style={{ border: 0 }}
                  loading="lazy"
                ></iframe>
              </Col>
            </Row>
          </Card.Body>
        </Card>
      </Container>
    </section>
  );
};

export default Contact;
