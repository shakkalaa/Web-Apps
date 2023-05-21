class Pose{
    static RIGHT = new Pose("Assets/link-right.png", "Assets/link-right2.png");
    static LEFT = new Pose("Assets/link-left.png", "Assets/link-left2.png");
    
    constructor(...images){
        this.animation = new Animation(images);
    }

    getImage(){
        return this.animation.getImage();
    }
}