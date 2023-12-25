import { Chip } from "@mui/material";
import { useState } from "react";
import Skils from "../../../model/skils";
import "./style.css";

interface Props {
  skill: Skils;
  borderColor?: string;
}

const ProjetCard = ({ skill, borderColor = "#009688" }: Props) => {
  const defaultColor: string = "transparent";
  const [color, setColor] = useState<string>(defaultColor);

  const showBorder = () => {
    setColor(borderColor);
  };

  const hideBorder = () => {
    setColor(defaultColor);
  };

  return (
    <article
      className="card horizontal"
      style={{ borderColor: color }}
      onMouseOver={showBorder}
      onMouseOut={hideBorder}
    >
      <div className="card-image">
        <img src={skill.image} alt={skill.title} />
      </div>
      <div className="card-stacked">
        <div className="card-content">
          <h3>{skill.title}</h3>
          {skill.competences.map((competence) => (
            <Chip
              key={competence.nom}
              style={{
                backgroundColor: "blue",
                color: "white",
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
