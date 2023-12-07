import React, { useState, useRef } from "react";
import { useScroll, useSpring, motion } from "framer-motion";
import "./style.css";

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

  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const mailtoLink = `mailto:${email}?subject=${encodeURIComponent(
      name
    )}&body=${encodeURIComponent(message)}`;
    window.location.href = mailtoLink;
  };

  return (
    <section id="Contact" className="contactTitle">
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
            onClick={() => window.open("https://www.whatsapp.com", "_blank")}
          >
            WhatsApp
          </button>
        </div>
        <div className="contact-form" ref={ref}>
          <form onSubmit={handleSubmit}>
            <input
              type="email"
              id="form-input-control-email"
              name="user_email"
              placeholder="Email…"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="text"
              id="form-input-control-name"
              name="user_name"
              placeholder="Name…"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <textarea
              id="form-textarea-control-message"
              name="user_message"
              placeholder="Message…"
              required
              rows={4}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
            <button type="submit">Submit</button>
          </form>{" "}
        </div>
      </div>
    </section>
  );
};

export default Contact;
