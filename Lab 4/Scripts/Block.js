class Block extends GameObject {
/* Block Properties */
static SIZE = 32;

constructor(x, y, image="Assets/tile-brick.png") {
    super( x * Block.SIZE, y * Block.SIZE, Block.SIZE, Block.SIZE, image);
}
    
}
