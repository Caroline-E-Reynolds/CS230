export class WomensJeansProducts{
    title: string;
    tag: string;
    price: string;
    imagePath:string;


constructor({title, tag, price,imagePath}:
    {title:string, tag:string, price:string, imagePath:string}){
        this.title = title;
        this.tag = tag;
        this.price = price;
        this.imagePath = imagePath;
    }
}