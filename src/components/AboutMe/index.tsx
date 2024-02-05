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

      <div className="main-container">
        <div className="about_content">
          <div className="about__content-main">
            <div className=" paragraphe-presentation">
              <h3 className="aboutTitle  titre-presentation">Hello !</h3>
              <p>
                je suis Naima Amimeur, une développeuse Full Stack dynamique et
                déterminée, passionnée par l'exploration et la maîtrise des
                technologies de développement d'applications. Mon parcours
                académique a débuté par deux années universitaires en licence
                d'informatique, après lesquelles j'ai choisi de me tourner vers
                des formations professionnelles pour mieux intégrer le monde du
                travail. Cette démarche m'a permis d'obtenir mon titre
                professionnel de conceptrice développeuse d'applications
                (BAC+3/4).
              </p>
            </div>
          </div>
          <div className="about_skills">
            <h3 className="SkillsTitle">My Skills</h3>
            <div className="skillsDiv">
              <div className="skills">FIGMA</div>
              <div className="skills">SCRUM</div>
              <div className="skills">Github</div>

              <div className="skills">PRESTASHOP</div>

              <div className="skills">HTML</div>
              <div className="skills">CSS</div>
              <div className="skills">TypeScript</div>
              <div className="skills">JavaScript</div>
              <div className="skills">React</div>
              <div className="skills">ReactNative</div>
              <div className="skills">JAVA</div>
              <div className="skills">Spring</div>
              <div className="skills">Hibernate</div>
              <div className="skills">SPRING BOOT</div>
              <div className="skills">Conception BDD</div>
              <div className="skills">MySQL</div>
              <div className="skills">PHP</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default AboutMe;
