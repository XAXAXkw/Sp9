class Artwork {
    constructor(id,name,price,w,h,tech,src){
        this.id = id;
        this.name = name;
        this.price = price;
        this.w = w;
        this.h = h;
        this.tech = tech;
        this.src = src;

    }



    
}

let artwork1 = new Artwork(666);
console.log(artwork1)
let artwork2 = new Artwork(66);
let artwork3 = new Artwork(6);
let artwork4 = new Artwork(63);


const LIST = [];
LIST.push(artwork1,artwork2,artwork3,artwork4);
console.log(LIST);



// export default class ClassName {Artwork}

//     {id:0,name:'Jukebox',price:7500,w:200,h:145,tech:'painting',src:require("@/assets/paint/organs.jpg")},