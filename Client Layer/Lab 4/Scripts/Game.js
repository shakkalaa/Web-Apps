class Game{
    /*Properties*/
    #world;
    #isOver;
    #level;
    #scene;
    #controller;

    constructor(){
        this.#isOver = false;
        this.#world = new World();
        //console.log('world', this.#world); //Test - delete this line after finishing this goal
        this.#level = 0;
        const levelData = this.#world.getLevel(this.#level);
        this.#scene = new Scene(levelData);
        const player = this.#scene.getPlayer();
        this.#controller = new Controller( player );

    }

    update(){
        this.#controller.update();
        this.#scene.update();
        if ( this.#scene.getExit().isTouching( this.#scene.getPlayer() ) ) {
            this.#level++;
            
            if (this.#level < this.#world.getLength() ){
                this.loadScene();
            }
            else{
                this.#isOver = true;
            }
        }
        if ( this.#scene.hasCollisions() ){
            this.loadScene()
        }
            

        //console.log("Game Update"); //Test - delete this line after finishing this goal.
    }

    render(){
       // console.log("Game Render"); //Test - delete this line after finishing this goal.
       this.#scene.draw();

    }

    loadScene(){
        const map = this.#world.getLevel(this.#level);
        this.#scene = new Scene(map);
        this.#controller = new Controller( this.#scene.getPlayer() );
    }

    /*the main game loop (static method)*/
    static main(){
        if (game.#isOver === false) {
            game.update();
            game.render();
            window.requestAnimationFrame(Game.main)
        }else{
            console.log("Game Over!");
        }
    }
}

const game = new Game();