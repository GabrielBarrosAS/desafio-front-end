import { CategoryDetail } from "src/app/category/util/CategoryDetail.class";

export class MovieDetail{
    name:string;
    url:string;
    category: CategoryDetail
  
    constructor(name: string,url:string,category:CategoryDetail){
      this.name = name;
      this.url = url;
      this.category = category;
    }
  }