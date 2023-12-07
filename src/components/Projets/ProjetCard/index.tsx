interface Competence {
  nom: string;
}
interface Props {
  titre: string;
  description: string;
  competences: Competence[];
}

const ProjetCard = ({ titre, description, competences }: Props) => {
  return (
    <div className="card">
      <h3>{titre}</h3>
      <div className="competences">
        {competences.map((comp: Competence) => (
          <span className="chip">{comp.nom}</span>
        ))}
      </div>
    </div>
  );
};
export default ProjetCard;
