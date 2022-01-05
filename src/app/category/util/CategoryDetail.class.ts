export class CategoryDetail {
    id: number;
    name: string;
    tag: string;
    background: string;

    constructor(id: number, name: string, tag: string, background: string) {
        this.id = id;
        this.name = name;
        this.tag = tag;
        this.background = background;
    }
}