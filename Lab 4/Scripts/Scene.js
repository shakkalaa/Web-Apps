class Scene{
    /*Scene Properties*/
    #background;

    constructor(map){
        this.setScene(map);
    }

    setScene(worldData){
        const cols = worldData[0].length; //Count of tiles height of world
        const rows = worldData.length; //Count of tiles across the world
        this.setBackground(rows, cols)

        for (let y = 0; y < rows; y++) {
           for (let x = 0; x < cols; x++) {
            const tiles = worldData[y][x];
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
    }
        
}