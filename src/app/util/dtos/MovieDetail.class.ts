import { CategoryDetail } from "./CategoryDetail.class";

export class MovieDetail {
  tittle: string;
  image: string;
  category: CategoryDetail

  constructor(tittle: string, image: string, category: CategoryDetail) {
    this.tittle = tittle;
    this.image = image;
    this.category = category;
  }
}