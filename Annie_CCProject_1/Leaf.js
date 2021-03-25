// leaves, for decoration purposes
class Leaf {

  constructor(x, y) {
    this.posX = x;
    this.posY = y;
  }

  display(){ // orig (200, 700), the +-100s are based around this point
    noStroke();
    fill("#70e000");
    triangle(this.posX-100, this.posY+100, this.posX, this.posY+100, this.posX, this.posY);
    fill("#38b000");
    triangle(this.posX-100, this.posY, this.posX, this.posY, this.posX-100, this.posY+100);
    fill("#008000");
    triangle(this.posX, this.posY, this.posX-100, this.posY, this.posX+100, this.posY-100);
    fill("#9ef01a");
    triangle(this.posX, this.posY+100, this.posX, this.posY, this.posX+100, this.posY-100);
  }

}