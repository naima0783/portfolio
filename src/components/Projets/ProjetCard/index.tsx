import { Chip } from "@mui/material";
import { useState } from "react";
import Skils from "../../../model/skils";
import "./style.css";

interface Props {
  skill: Skils;
  image: string;
}

const ProjetCard = ({ skill, image }: Props) => {
  return (
    <article className="cardProjet horizontal">
      <div className="card-image">
        <img
          className="imgCard"
          src={require("../../../assets/portfolio1.png")}
          alt={skill.title}
        />
      </div>
      <div className="card-stacked">
        <div className="card-content">
          <h3 className="titl">{skill.title}</h3>
          {skill.competences.map((competence) => (
            <Chip
              key={competence.nom}
              style={{
                backgroundColor: "#099ddc",
                color: "white",
                marginTop: 2,
                marginRight: 2,
              }}
              label={competence.nom}
              className="chip"
            />
          ))}
        </div>
      </div>
    </article>
  );
};
export default ProjetCard;
