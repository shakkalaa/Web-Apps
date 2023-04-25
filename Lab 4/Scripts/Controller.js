class Controller {
    /* Controller Properties */
    #player;
    #inputs;

    constructor(player) {
        this.#player = player;
        this.#inputs = new Set();
        document.addEventListener("keydown", this.buttonDown );
        document.addEventListener("keyup", this.buttonUp );
    }

    buttonDown = function(event){
        const inputs = this.#inputs;
        switch(event.keyCode){
            case 38: inputs.add('up'); break;
            case 37: inputs.add('left'); break;
            case 39: inputs.add('right'); break;
        }
    }.bind(this)

    buttonUp = function(event){
        const inputs = this.#inputs;
        switch(event.keyCode){
            case 38: inputs.delete('up'); break;
            case 37: inputs.delete('left'); break;
            case 39: inputs.delete('right'); break;
        }
    }.bind(this)

    update(){
        const inputs = this.#inputs;
        if (inputs.has('left')){
            this.#player.moveLeft();
        }

        if (inputs.has('right')){
            this.#player.moveRight();
        }
        
        if ( inputs.has('up') ){
            this.#player.jump()
        }
    }
        
}
