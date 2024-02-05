import React, { useState, useRef } from "react";
import { useScroll, useSpring, motion } from "framer-motion";
import "./style.css";
import { FaLinkedin, FaWhatsapp } from "react-icons/fa";

const Contact = () => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"],
  });

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });

  const [name, setName] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const mailtoLink = `mailto:${"naima.amimeur.pro@gmail.com"}?subject=${encodeURIComponent(
      name
    )}&body=${encodeURIComponent(message)}`;

    window.location.href = mailtoLink;
  };

  return (
    <section id="Contact">
      <div className="contactTitle" ref={ref}>
        <div className="progress">
          <h1>Contact</h1>
          <motion.div
            className="progressBar"
            style={{ scaleX: scaleX }}
          ></motion.div>
        </div>
      </div>

      <div className="contact-content">
        <div className="contact-info">
          <h1>Me contacter</h1>
          <button
            onClick={() =>
              window.open(
                "https://www.linkedin.com/in/naima-amimeur/",
                "_blank"
              )
            }
          >
            LinkedIn
          </button>
          <button
            onClick={() =>
              window.open(
                "https://api.whatsapp.com/send?phone=330783023253",
                "_blank"
              )
            }
          >
            WhatsApp
          </button>
        </div>

        <div className="contact-form" ref={ref}>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              id="form-input-control-name"
              name="user_name"
              placeholder="Objet"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <textarea
              id="form-textarea-control-message"
              name="user_message"
              placeholder="Message…"
              required
              rows={15}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
            <button type="submit">Envoyer</button>
          </form>{" "}
        </div>
      </div>
    </section>
  );
};

export default Contact;
