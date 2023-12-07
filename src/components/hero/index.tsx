import "./style.css";
import { motion } from "framer-motion";

const textVariants = {
  initial: {
    x: -500,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
  scrollButton: {
    opacity: 0,
    y: 10,
    transition: {
      duration: 2,
      repeat: Infinity,
    },
  },
};

const sliderVariants = {
  initial: {
    x: 0,
  },
  animate: {
    x: "-220%",
    transition: {
      repeat: Infinity,
      repeatType: "mirror",
      duration: 20,
    },
  },
};

const Hero = () => {
  return (
    <div className="hero">
      <div className="wrapper">
        {/* text container */}
        <motion.div
          className="textContainer"
          variants={textVariants}
          initial="initial"
          animate="animate"
        >
          <motion.h2 variants={textVariants}>NAIMA AMIMEUR</motion.h2>
          <motion.h1 variants={textVariants}>Developpeuse Full Stack</motion.h1>
          <motion.div className="buttons" variants={textVariants}>
            <motion.a href="#Projects" variants={textVariants}>
              Mes Projets
            </motion.a>
            <motion.a href="#Contact" variants={textVariants}>
              Contactez-moi
            </motion.a>
          </motion.div>
          <motion.img
            variants={textVariants}
            animate="scrollButton"
            src="../../assets/scroll.png"
            alt="boutton"
          />
        </motion.div>
      </div>
      {/* slide text */}
      <motion.div
        className="sliderTextContainer"
        // variants={sliderVariants}
        initial="initial"
        animate="animate"
      >
        Hire Me
      </motion.div>
      {/* image container */}
      <div className="imageContainer">
        <img src="/hero.png" alt="développeur" />
      </div>
    </div>
  );
};

export default Hero;
