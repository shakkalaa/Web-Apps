class Game{
    /*Properties*/
    #world;
    #isOver;
    #level;
    #scene;

    constructor(){
        this.#isOver = false;
        this.#world = new World();
        //console.log('world', this.#world); //Test - delete this line after finishing this goal
        this.#level = 0;
        const levelData = this.#world.getLevel(this.#level);
        this.#scene = new Scene(levelData);
    }

    update(){
        //console.log("Game Update"); //Test - delete this line after finishing this goal.
    }

    render(){
       // console.log("Game Render"); //Test - delete this line after finishing this goal.
       this.#scene.draw();

    }

    /*the main game loop (static method)*/
    static main(){
        if (game.isOver === false) {
            game.update();
            game.render();
            window.requestAnimationFrame(Game.main)
        }else{
            console.log("Game Over!");
        }
    }
}

const game = new Game();