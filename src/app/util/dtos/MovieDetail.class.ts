import { CategoryDetail } from "./CategoryDetail.class";

export class MovieDetail {
  tittle: string;
  image: string;
  synopsis: string;
  duration: number;
  languageID: number;
  categoryID:number;
  launchData:string;
  category:CategoryDetail;
  constructor(tittle: string="", 
              image: string="",
              synopsis:string="",
              duration:number=0,
              categoryID: number=0,
              languageID: number=0,
              launchData:string="",
              category:CategoryDetail=new CategoryDetail()) {
    this.tittle = tittle;
    this.image = image;
    this.synopsis = synopsis;
    this.duration = duration;
    this.categoryID = categoryID;
    this.languageID = languageID;
    this.launchData = launchData;
    this.category = category;
  }
}