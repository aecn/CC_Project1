// a fire, sizzling effect
class Fire {
  constructor(posX, posY, fireSize){
    this.x = posX;
    this.y = posY;
    this.size = fireSize;
  }
  display() { // what each fire particle looks like 
    stroke("#FF0000");
    fill(random(200,230), random(50, 150), 20, this.alpha); // random shades of red-orange with some transparency
    ellipse(this.x, this.y, this.size); // x, y, size changes
  }
  move() {
    this.x = this.x + random(-100, 100);
    this.y = this.y + random(1,5);
  }
}