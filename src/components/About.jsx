import React from "react";
import Competence from "./Competence";

const About = () => {
  return (
    <section className="about">
      <div>
        <h2>À propos de moi</h2>
      </div>
      <div>
        <Competence />
      </div>
      <p>
        Je suis un développeur web passionné avec une expérience en création de
        sites web modernes et réactifs.
      </p>
    </section>
  );
};

export default About;
