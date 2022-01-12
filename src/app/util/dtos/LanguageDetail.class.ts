export class LanguageDetail {
    id: number;
    name: string;
    tag: string;

    constructor(id: number=0, name: string="", tag: string="") {
        this.id = id;
        this.name = name;
        this.tag = tag;
    }
}