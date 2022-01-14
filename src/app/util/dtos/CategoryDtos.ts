import { LanguageDetail } from "./LanguageDetail.class";

class CategoryDetail {
    id: number;
    name: string;
    tag: string;
    language: LanguageDetail;

    constructor(id: number = 0, name: string = "", tag: string = "", languageID: number = 0,language: LanguageDetail = new LanguageDetail()) {
        this.id = id;
        this.name = name;
        this.tag = tag;
        this.language = language;
    }
}

class CategoryPostDto {
    id: number;
    name: string;
    tag: string;
    languageID: number;

    constructor(id: number = 0, name: string = "", tag: string = "", languageID: number = 0) {
        this.id = id;
        this.name = name;
        this.tag = tag;
        this.languageID = languageID;
    }
}

class CategoryPutDto {
    id: number;
    name: string;
    tag: string;
    languageID: number;
    active: boolean;

    constructor(id: number = 0, name: string = "", tag: string = "", languageID: number = 0, active: boolean = true) {
        this.id = id;
        this.name = name;
        this.tag = tag;
        this.languageID = languageID;
        this.active = active;
    }
}

export { CategoryDetail, CategoryPostDto,CategoryPutDto }