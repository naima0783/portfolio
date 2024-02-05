import Competence from "./competence";

export default class Skils {
  title: string;
  image: string;
  competences: Competence[];

  constructor(title: string, image: string, competences: Competence[]) {
    this.title = title;
    this.image = image;
    this.competences = competences;
  }
}
