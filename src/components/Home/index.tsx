import Navbar from "../Navbar";
import Hero from "../hero";
import Projets from "../Projets";
import AboutMe from "../AboutMe";
import MySkills from "../MySkills";
import Contact from "../Contact";

const Home = () => {
  return (
    <>
      <section id="Home">
        <Navbar />
        <Hero />
      </section>
      <AboutMe />
      <MySkills />
      <Projets />
      <Contact />
    </>
  );
};

export default Home;
