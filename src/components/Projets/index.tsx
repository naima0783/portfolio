import { useRef } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import "./style.css";
import ProjetCard from "./ProjetCard";

interface Competence {
  nom: string;
}

interface Projet {
  titre: string;
  description: string;
  competences: Competence[];
}

const Projets = () => {
  const projets: Projet[] = [
    {
      titre: "Projet 1",
      description: "",
      competences: [{ nom: "React" }, { nom: "TypeScript" }],
    },
    {
      titre: "Projet 2",
      description: "",

      competences: [{ nom: "Node.js" }, { nom: "MongoDB" }],
    },
    {
      titre: "Projet 3",
      description: "",

      competences: [{ nom: "Angular" }, { nom: "Firebase" }],
    },
  ];
  const ref = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"],
  });

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 1000,
    damping: 30,
  });
  return (
    <section id="Projets">
      <div className="projects" ref={ref}>
        <div className="progress">
          <h1>Projets</h1>
          <motion.div
            className="progressBar"
            style={{ scaleX: scaleX }}
          ></motion.div>
        </div>
      </div>

      <div className="grid">
        {projets.map((projet, index) => (
          <ProjetCard
            key={index}
            titre={projet.titre}
            description={projet.description}
            competences={projet.competences}
          />
        ))}
      </div>
    </section>
  );
};

export default Projets;
