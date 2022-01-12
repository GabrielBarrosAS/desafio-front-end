export class CategoryDetail {
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