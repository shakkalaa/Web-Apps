class Exit extends Block {
    constructor(x, y) {
        super(x,y,"Assets/tile-exit.png");
    }
    isTouching( player ) {
        return super.isTouchingX(player,0.25) && super.isTouchingY(player, 0.25);
    }
}
