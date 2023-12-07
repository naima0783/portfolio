import "./style.css";
import { motion } from "framer-motion";
import Sidebar from "../Sidebar";
import { FaLinkedin, FaGithub } from "react-icons/fa";

const Navbar = () => {
  return (
    <div className="navbar">
      {/* SideBar */}
      <Sidebar />
      <div className="wrapper">
        <motion.span
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          Portfolio
        </motion.span>
        <div className="social">
          <a
            href="https://www.linkedin.com/in/amimeurnaima/"
            target="_blank"
            rel="noreferrer"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://github.com/naima0783"
            target="_blank"
            rel="noreferrer"
          >
            <FaGithub />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
