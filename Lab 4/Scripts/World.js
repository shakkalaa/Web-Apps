class World{
    /*World Properties*/
    #levels;

    constructor(){
        //parse all map data and save it for later
        this.#levels = world.map(level => (level.split('\n')).map(row => row.split("")));
    }

    getLevel(level){
        return this.#levels[level];
    }

}