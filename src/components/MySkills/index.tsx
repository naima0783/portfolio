import React, { useRef } from "react";
import Card from "../Card"; // Assurez-vous que le chemin est correct
import { motion, useScroll, useSpring } from "framer-motion";
import "./style.css";

// Définition de l'interface Competence
interface Competence {
  nom: string;
  description: string;
}

const competences: Competence[] = [
  { nom: "JavaScript", description: "Langage de programmation pour le web." },
  {
    nom: "React",
    description: "Bibliothèque JavaScript pour interfaces utilisateurs.",
  },
  // Ajoutez d'autres compétences ici
];

const MaPage = () => {
  const ref = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"],
  });

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });
  return (
    <section>
      <div className="MySkills" ref={ref}>
        <div className="progress">
          <h1>Mes compétences </h1>
          <motion.div
            className="progressBar"
            style={{ scaleX: scaleX }}
          ></motion.div>
        </div>
      </div>
      <div>
        {competences.map((competence, index) => (
          <Card
            key={index}
            nom={competence.nom}
            description={competence.description}
          />
        ))}
      </div>
    </section>
  );
};

export default MaPage;
