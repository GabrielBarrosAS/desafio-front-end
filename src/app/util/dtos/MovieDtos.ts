import { CategoryDetail } from "./CategoryDetail.class";
import { LanguageDetail } from "./LanguageDetail.class";

class MovieDetail {
  tittle: string;
  image: string;
  synopsis: string;
  duration: number;
  launchData:string;
  category:CategoryDetail;
  language:LanguageDetail
  constructor(tittle: string="", 
              image: string="",
              synopsis:string="",
              duration:number=0,
              launchData:string="",
              category:CategoryDetail=new CategoryDetail(),
              language:LanguageDetail=new LanguageDetail()) {
    this.tittle = tittle;
    this.image = image;
    this.synopsis = synopsis;
    this.duration = duration;
    this.launchData = launchData;
    this.category = category;
    this.language = language
  }
}

class MoviePostDto{
  tittle: string;
  image: string;
  synopsis: string;
  duration: number;
  launchData:string;
  categoryID:number;
  languageID:number
  constructor(tittle: string="", 
              image: string="",
              synopsis:string="",
              duration:number=0,
              launchData:string="",
              categoryID:number=0,
              languageID:number=0) {
    this.tittle = tittle;
    this.image = image;
    this.synopsis = synopsis;
    this.duration = duration;
    this.launchData = launchData;
    this.categoryID = categoryID;
    this.languageID = languageID;
  }
}

export {MovieDetail,MoviePostDto}