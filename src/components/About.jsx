import { Container, Row, Col, Card } from "react-bootstrap";
import Competence from "./Competence";

const About = () => {
  return (
    <section className="py-4 bg-light">
      <Container>
        <Row className="justify-content-center">
          <Col lg={10} xl={9}>
            <Card className="shadow border-0">
              <Card.Body>
                <Row>
                  <Col md={6}>
                    <h4 className="section-title fw-bold">À propos</h4>
                    <img
                      src="./assets/img/john-doe-about.jpg"
                      alt="about"
                      className="img-fluid about-img"
                    />
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Optio, necessitatibus consectetur tempore perferendis
                      nostrum, ex delectus reiciendis impedit aut iure enim
                      placeat? Natus, neque at?
                    </p>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Optio, necessitatibus consectetur tempore perferendis
                      nostrum, ex delectus reiciendis impedit aut iure enim
                      placeat? Natus, neque at?
                    </p>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Optio, necessitatibus consectetur tempore perferendis
                      nostrum, ex delectus reiciendis impedit aut iure enim
                      placeat? Natus, neque at?
                    </p>
                  </Col>

                  <Col md={6}>
                    <h4 className="section-title fw-bold">Mes compétences</h4>
                    <Competence />
                  </Col>
                </Row>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default About;
