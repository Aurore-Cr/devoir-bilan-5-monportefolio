import { useState } from "react";
import { Button, Container } from "react-bootstrap";
import GithubModal from "../components/Modal";

const Hero = () => {
  const [show, setShow] = useState(false);

  return (
    <>
      <section className="hero-section text-white d-flex align-items-center text-center">
        <Container>
          <h1 className="display-4 fw-bold">Bonjour, je suis John Doe</h1>
          <h2 className="fw-bold mt-3">Développeur web full stack</h2>

          <Button
            variant="danger"
            className="mt-4 px-4"
            onClick={() => setShow(true)}
          >
            En savoir plus
          </Button>
        </Container>
      </section>

      <GithubModal show={show} handleClose={() => setShow(false)} />
    </>
  );
};

export default Hero;
