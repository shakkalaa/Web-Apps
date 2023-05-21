class Block extends GameObject {
/* Block Properties */
static SIZE = 32;

constructor(x, y, image="Assets/tile-brick.png") {
    super( x * Block.SIZE, y * Block.SIZE, Block.SIZE, Block.SIZE, image);
}

isTouchingX(gameObject, ratio) {
    const overlap = this.getWidth() * ratio;
    return ( Math.abs( this.getX() - gameObject.getX() ) < overlap );
}

isTouchingY(gameObject, ratio) {
    const overlap = this.getHeight() * ratio;
    return ( Math.abs( this.getY() - gameObject.getY() ) < overlap );
}

isTouching(gameObject) {
    return this.isTouchingY(gameObject, 1.0) && this.isTouchingX(gameObject, 0.75);
}
    
}
