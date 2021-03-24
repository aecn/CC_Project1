// this won't be in the final project:
// I wanted to find a way to be able to drag the buffalo wing to the mouth of the person,
// I played around with some code from Shiffman and the p5js website

// class BuffaloWing {
//   constructor(x, y, w, h, a, b) {
//     this.dragging = false; // Is the object being dragged?
//     this.rollover = false; // Is the mouse over the ellipse?
//     this.x = x;
//     this.y = y;
//     this.w = w;
//     this.h = h;
//     this.offsetX = 0;
//     this.offsetY = 0;
//   }

//   over() {
//     // Is mouse over object
//     if (mouseX > this.x && mouseX < this.x + this.w && mouseY > this.y && mouseY < this.y + this.h) {
//       this.rollover = true;
//     } else {
//       this.rollover = false;
//     }
//   }

//   update() {
//     // Adjust location if being dragged
//     if (this.dragging) {
//       this.x = mouseX + this.offsetX;
//       this.y = mouseY + this.offsetY;
//     }
//   }

//   show() {
//     stroke(0);
//     // Different fill based on state
//     if (this.dragging) {

//     }
//   } else if (this.rollover) {
//     fill(100);
//   } 

// pressed() {
//
//     if (mouseX > this.x && mouseX < this.x + this.w && mouseY > this.y && mouseY < this.y + this.h) {
//       this.dragging = true;
//       // If so, keep track of relative location of click to corner of rectangle
//       this.offsetX = this.x - mouseX;
//       this.offsetY = this.y - mouseY;
//     }
//   }

//   released() {
//     // Quit dragging
//     this.dragging = false;
//   }
// }


//   function wing() {
//   fill("#ff7900"); // orange
//   triangle(440, 690, 440, 610, 580, 650);
//   ellipse(450, 650, 80, 80); // chicken wing (interactive one)
//   rect(480, 635, 100, 30, 10, 20); 
//   fill("#ffaa00"); // gold
//   triangle(440, 700, 440, 710, 540, 650); // bottom highlight
//   triangle(450, 620, 450, 630, 480, 640);
// }