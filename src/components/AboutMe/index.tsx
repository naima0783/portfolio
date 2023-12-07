import { motion, useScroll, useSpring } from "framer-motion";
import { useRef } from "react";
import "./style.css";
const AboutMe = () => {
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
    <section id="Me">
      <div className="aboutMe" ref={ref}>
        <div className="progress">
          <h1>Qui suis-je ? </h1>
          <motion.div
            className="progressBar"
            style={{ scaleX: scaleX }}
          ></motion.div>
        </div>
      </div>

      <article>
        <div>
          <img src="../../assets/scroll.png" alt="" />
          <p>Naima</p>
        </div>
        <div>
          <img src="../../assets/scroll.jpg" alt="" />
          <p>lalala</p>
        </div>
      </article>
    </section>
  );
};
export default AboutMe;
