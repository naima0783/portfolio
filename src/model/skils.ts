import Competence from "./competence";

export default class Skils {
  title: string;
  image: string;
  description: string;
  competences: Competence[];

  constructor(
    title: string,
    image: string,
    competences: Competence[],
    description?: string
  ) {
    this.title = title;
    this.image = image;
    this.description = description ? description : "";
    this.competences = competences;
  }
}
