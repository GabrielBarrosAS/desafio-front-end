import { CategoryDetail } from "./CategoryDetail.class";

export class MovieDetail {
  tittle: string;
  image: string;
  synopsis: string;
  duration: number;
  category: CategoryDetail

  constructor(tittle: string, image: string, category: CategoryDetail,synopsis:string,duration:number) {
    this.tittle = tittle;
    this.image = image;
    this.category = category;
    this.synopsis = synopsis;
    this.duration = duration;
  }
}