import { CategoryDetail } from "./CategoryDetail.class";
import { LanguageDetail } from "./LanguageDetail.class";

class MovieDetail {
  id: number;
  tittle: string;
  image: string;
  synopsis: string;
  duration: number;
  launchData: string;
  category: CategoryDetail;
  language: LanguageDetail
  constructor(id: number=0,
    tittle: string = "",
    image: string = "",
    synopsis: string = "",
    duration: number = 0,
    launchData: string = "",
    category: CategoryDetail = new CategoryDetail(),
    language: LanguageDetail = new LanguageDetail()) {
    this.id = id;
    this.tittle = tittle;
    this.image = image;
    this.synopsis = synopsis;
    this.duration = duration;
    this.launchData = launchData;
    this.category = category;
    this.language = language
  }
}

class MoviePostDto {
  tittle: string;
  image: string;
  synopsis: string;
  duration: number;
  launchData: string;
  categoryID: number;
  languageID: number
  constructor(tittle: string = "",
    image: string = "",
    synopsis: string = "",
    duration: number = 0,
    launchData: string = "",
    categoryID: number = 0,
    languageID: number = 0) {
    this.tittle = tittle;
    this.image = image;
    this.synopsis = synopsis;
    this.duration = duration;
    this.launchData = launchData;
    this.categoryID = categoryID;
    this.languageID = languageID;
  }
}

class MoviePutDto {
  id: number;
  tittle: string;
  image: string;
  synopsis: string;
  duration: number;
  launchData: string;
  categoryID: number;
  languageID: number;
  active:boolean;
  constructor(id: number = 0,
    tittle: string = "",
    image: string = "",
    synopsis: string = "",
    duration: number = 0,
    launchData: string = "",
    categoryID: number = 0,
    languageID: number = 0,
    active:boolean = true) {
    this.id = id;
    this.tittle = tittle;
    this.image = image;
    this.synopsis = synopsis;
    this.duration = duration;
    this.launchData = launchData;
    this.categoryID = categoryID;
    this.languageID = languageID;
    this.active = active;
  }
}

export { MovieDetail, MoviePostDto, MoviePutDto }