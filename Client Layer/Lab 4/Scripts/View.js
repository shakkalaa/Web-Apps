class View{
    /* View Properties*/
    #canvas;
    #context;

    constructor(){
    this.#canvas = document.getElementById("viewport");
    this.#context = this.#canvas.getContext("2d");
    }   

    picture(img, x, y, width, height){
    this.#context.drawImage(img, x, y, width, height);
    }
}

const view = new View();

