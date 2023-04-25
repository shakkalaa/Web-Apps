class Scene{
    /*Scene Properties*/
    #background;
    #blocks;
    #monsters;
    #player;
    #exit;



    constructor(map){
        this.#blocks = [];
        this.#monsters = [];
        this.setScene(map);
    }

    setScene(worldData){
        const cols = worldData[0].length; //Count of tiles height of world
        const rows = worldData.length; //Count of tiles across the world
        this.setBackground(rows, cols)

        for (let y = 0; y < rows; y++) {
           for (let x = 0; x < cols; x++) {
            const tile = worldData[y][x];
            this.setTile(x, y, tile);
            //console.log(tiles); //Test - delete this line after finishing this goal
           }
            
        }
    }

    setBackground( rows, cols, img="Assets/background.png" , tileSize=32 ){
        const width = cols * tileSize;
        const height = rows * tileSize;
        this.#background = new GameObject( 0, 0, width, height, img);
    }


    draw() {
        this.#background.draw();
        this.#blocks.forEach((block) => block.draw() );
        this.#monsters.forEach( (monster) => monster.draw() );
        this.#exit.draw();
        this.#player.draw();

    }
        
    setTile (x, y, tile){
        switch(tile){
            case "#": this.#blocks.push( new Block(x,y) ); break;
            case "@": this.#player = new Player(x,y); break;
            case "A": this.#monsters.push( new FloorHazard(x,y) ); break;
            case "V": this.#monsters.push( new CeilingHazard(x,y) ); break;
            case "!": this.#exit = new Exit(x,y); break;

        }
    }
        
    update() {
        this.#player.update(this.#blocks);
    }

    getPlayer() {
        return this.#player;
    }

    hasCollisions(){
        return this.#monsters.some( monster => monster.isTouching(this.#player) );
    }
    
    getCollisions(){
        return this.#monsters.filter( monster => monster.isTouching(this.#player) )
    }
       
    getExit() {
        return this.#exit;
    }
        
        
}