// //CLASSES: will move these here soon

// // sizzling orbs, for spicy feeling
// class Orb {
//   constructor() {
//     this.x = random(1000); // fill up the canvas randomly
//     this.y = random(800); // fill up the canvas randomly 
//     this.size = random(10, 80); // size of ellipse is random
//     this.speed = 10; // rapid speed = represents the spiciness in a person's mouth
//   }

//   update() { // how the orbs are updated
//     this.x += random(-this.speed, this.speed); // move by the speed
//     this.y += random(-this.speed, this.speed); // move by the speed
//   }

//   display() { // what the orbs look like
//     fill("#dc2f02");
//     ellipse(this.x, this.y, this.size, this.size); // the x&y coordinates + the size is random
//   }
// }

// // leaves, for decoration purposes
// class Leaf {

//   constructor(x, y) {
//     this.posX = x;
//     this.posY = y;
//   }

//   display(){ // orig (200, 700)
//     noStroke();
//     fill("#70e000");
//     triangle(this.posX-100, this.posY+100, this.posX, this.posY+100, this.posX, this.posY);
//     fill("#38b000");
//     triangle(this.posX-100, this.posY, this.posX, this.posY, this.posX-100, this.posY+100);
//     fill("#008000");
//     triangle(this.posX, this.posY, this.posX-100, this.posY, this.posX+100, this.posY-100);
//     fill("#9ef01a");
//     triangle(this.posX, this.posY+100, this.posX, this.posY, this.posX+100, this.posY-100);
//   }

// }