import React from "react";
import { Button } from "react-bootstrap";

const Hero = () => {
  return (
    <section className=" text-white text-center">
      <img
        className="bg-dark img-fluid w-100 h-30 object-center opacity-50"
        src="./assets/img/hero-bg.jpg"
        alt="Hero"
      />
      <h1 className=" bg-dark text-4xl font-bold mt-4">
        Bonjour, je suis John Doe
      </h1>
      <h2 className="bg-dark text-xl mt-2">Développeur web full stack</h2>
      <Button variant="danger hover:bg-red-700 text-white font-bold py-2 px-4 rounded mt-4 transition-transform duration-300 hover:scale-105">
        <a
          href="/src/components/Modal.jsx"
          className="text-white no-underline text-decoration-none "
        >
          En savoir plus
        </a>
      </Button>
    </section>
  );
};
export default Hero;
