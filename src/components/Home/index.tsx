import Navbar from "../Navbar";
import Hero from "../hero";
import Projets from "../Projets";
import AboutMe from "../AboutMe";
import Contact from "../Contact";
import data from "../../data/data.json";
const Home = () => {
  return (
    <>
      <section id="Home">
        <Navbar />
        <Hero />
      </section>
      <AboutMe />
      <Projets cards={data} />
      <Contact />
    </>
  );
};

export default Home;
