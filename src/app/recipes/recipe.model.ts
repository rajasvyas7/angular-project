export class Recipe {
    public name: string;
    public description: string;
    public imageUrl: string;

    constructor(name: string, desc: string, imgUrl: string) {
        this.name = name;
        this.description =  desc;
        this.imageUrl = imgUrl;
    }
}