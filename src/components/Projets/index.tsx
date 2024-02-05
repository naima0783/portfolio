import { useRef } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import ProjetCard from "./ProjetCard";
import Skils from "../../model/skils";
import "./style.css";
interface Props {
  cards: Skils[] | undefined;
}

const Projets = ({ cards }: Props) => {
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

      <article className="flexbox">
        {cards?.map((skill: Skils) => (
          <ProjetCard
            key={skill.title}
            skill={skill}
            image="../../../assets/portfolio1.png"
          />
        ))}
      </article>
    </section>
  );
};

export default Projets;
