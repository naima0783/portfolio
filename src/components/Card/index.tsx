import React from "react";

interface Competence {
  nom: string;
  description: string;
}

const Card = ({ nom, description }: Competence) => {
  return (
    <div className="card">
      <h3>{nom}</h3>
      <p>{description}</p>
    </div>
  );
};

export default Card;
