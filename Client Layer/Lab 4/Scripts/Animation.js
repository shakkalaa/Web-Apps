class Animation{
    /* Animation Properties */
    #startTime;
    #frameIndex;
    #sequence;
    
    constructor(images){
        this.#startTime = Date.now();
        this.#frameIndex = 0;
        this.#sequence = images.map( e => Object.assign(new Image(), {src:e}) );
    }
    
    getImage(){
        const index = this.#frameIndex;
        const now = Date.now();
    
        if(now - this.#startTime > 75){
            this.#frameIndex = (index + 1) % this.#sequence.length;
            this.#startTime = now;
        }
        return this.#sequence[index];
    }
}
    