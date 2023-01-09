import { Chapitre } from "../Chapitres/Chapitre";

export interface Formation {
  id : number,
  name : string,
  creatorId : number,
  description : string,
  progress : number,
  chapitres : Chapitre[]
}
