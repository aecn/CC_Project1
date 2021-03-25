// Annie Chen - Project 1

// story is told by the mouse click
// Inspiration of scene 5 https://p5js.org/examples/objects-array-of-objects.html.

var scene = 1; // scene variable declared globally

// scenes 1-2-3
//these are variations of the leaf
let leaf1; 
let leaf2;
let leaf3;

// scene 5: particles bouncing
let particleX;
let changeDirection;
let particle = []; // array of particle objects


function setup() {
  createCanvas(1000, 800); 

  // scenes 1,2,3
  leaf1 = new Leaf(200, 700);
  leaf2 = new Leaf(480, 950);

  // scene 5
  for (let p = 0; p < 50; p++) { 
    particle.push(new Orb()); // class called
  }

  // scene 4
  particleX = 1; // starts at 1
  changeDirection = false; // change direction
}

function draw() {
  // scene 1: a delicious buffalo wing is presented to you. Go ahead and take a bite by clicking!
  if (scene == 1) {
    background("#ffd500");
    plate(500, 400); // plate
    plateInner(500, 400);
    wing(500, 400); 
    leaf1.display();
    scale(0.8);
    leaf2.display();
    sauceCup(800, 600);
    sauce(800, 600);
  }

  // scene 2: You take a bite. Yum!
  // wing pattern is modified to have a "bite". The background color becomes brighter.
  if (scene == 2) {
    background("#ffea00");
    plate(500, 400); // plate
    plateInner(500, 400);
    bite1(500, 400);
    leaf1.display();
    scale(0.8);
    leaf2.display();
    sauceCup(800, 600);
    sauce(800, 600);
  } 

  // scene 3: (continuation to scene 2). 2nd bite --> Panic arises as you start to realize how spicy the wing is.
  // the wing starts to flash red, orange-red colors. You could see how much it burns now.
  if (scene == 3) {
    background("#fbff12");
    plate(500, 400); // plate
    plateInner(500, 400);
    frameRate(5); // slower
    noStroke();
    fill(random(240, 255),random(30,255), 0, this.alpha);
    bite2(500, 400);
    leaf1.display();
    scale(0.8);
    leaf2.display();
    sauceCup(800, 600);
  } 

      // scene 4: rapid movement
  if (scene == 4) { // work in progress
    frameRate(50);
    background("#e85d04");
  ellipse(x,50,50); // ellipse shapes
  ellipse(x, 100, 100);

  if(x>width){
    changeDirection=true ;  // if the ellipse hits the max width, change directions
  } else if (x<=0){
    changeDirection=false;  // if the ellipse hits the min width, change directions
  }
  if (x>=0 && changeDirection == false){ //if x reaches min width, move right
    x=x+10;
  } else if(changeDirection == true){ // move back left
    x=x-10;
  } 
}

  // scene 5: this feeling overtakes you. Your tastebuds are on fire. the rapid particles represent the spice flavor tingling!
  if (scene == 5) {
    frameRate(50);
    background("#ffba08");
    for (let p = 0; p < particle.length; p++) {
      particle[p].update();
      particle[p].display();
    }
  }
  // scene 6: fire-like effect- WIP
if (scene == 6) {
  background(0);
 }
}

//FUNCTIONS:
//fresh buffalo wing. inspired by this pixel art: https://www.pngfind.com/mpng/xJoooi_chicken-leg-xbox-a-button-pixel-hd-png/
function wing(posX, posY){
  for(x = 40; x<width; x+=40){
    for(y = 40; y<height; y+=40){
      if(x>=100 && x<=140 && y>=260 && y<=460){ // row 1
        noStroke();
        fill("#d00000");
        ellipse(x, y, 40, 40);
      } else if (x>=140 && x<=180 && y>=180 && y<=500){ // row 2
        fill("#ff4800");
        ellipse(x, y, 40, 40);
      } else if (x>=180 && x<=220 && y>=140 && y<=500){ // row 3
        fill("#ff5400");
        ellipse(x, y, 40, 40);      
      } else if (x>=220 && x<=260 && y>=100 && y<=540){ // row 4
        fill("#ff5400");
        ellipse(x, y, 40, 40);       
      } else if (x>=260 && x<=300 && y>=100 && y<=580){ // row 5
        fill("#ff6d00");
        ellipse(x, y, 40, 40);
      } else if (x>=300 && x<=340 && y>=100 && y<=580){ // row 6
        fill("#ff6d00");
        ellipse(x, y, 40, 40);
      } else if (x>=340 && x<=380 && y>=100 && y<=620){ // row 7
        fill("#ff8500");
        ellipse(x, y, 40, 40);
      } else if (x>=380 && x<=420 && y>=100 && y<=620){ // row 8
        fill("#ff8500");
        ellipse(x, y, 40, 40);
      } else if (x>=420 && x<=460 && y>=100 && y<=620){ // row 9
        fill("#ff9100");
        ellipse(x, y, 40, 40);
      } else if (x>=460 && x<=500 && y>=140 && y<=660){ // row 10
        fill("#ff6d00");
        ellipse(x, y, 40, 40);
      } else if (x>=500 && x<=540 && y>=140 && y<=660){ // row 11
        fill("#ff5400");
        ellipse(x, y, 40, 40);
      } else if (x>=540 && x<=580 && y>=180 && y<=660){ // row 12
        fill("#ff4800");
        ellipse(x, y, 40, 40);
      } else if (x>=580 && x<=620 && y>=260 && y<=740){ // row 13
        fill("#dc2f02");
        ellipse(x, y, 40, 40);
      } else if (x>=620 && x<=660 && y>=340 && y<=780){ // row 14
        fill("#e85d04");
        ellipse(x, y, 40, 40);
      } else if (x>=660 && x<=700 && y>=540 && y<=780){ // row 15
        fill("#f48c06");
        ellipse(x, y, 40, 40);
      } else if (x>=700 && x<=740 && y>=580 && y<=740){ // row 16
        fill("#f48c06");
        ellipse(x, y, 40, 40);
      } else if (x>=740 && x<=780 && y>=620 && y<=740){ // row 17
        fill("#ff9f1c");
        ellipse(x, y, 40, 40);
      }
    }
  }
}

// buffalo wing with a bite. This will be the second scene after the viewer clicks or presses mouse to "eat"
function bite1(posX, posY){
  for(x = 40; x<width; x+=40){
    for(y = 40; y<height; y+=40){
      if(x>=100 && x<=140 && y>=260 && y<=460){ // row 1
        noStroke();
        fill("#d00000");
        ellipse(x, y, 40, 40);
      } else if (x>=140 && x<=180 && y>=180 && y<=500){ // row 2
        fill("#ff4800");
        ellipse(x, y, 40, 40);
      } else if (x>=180 && x<=220 && y>=140 && y<=500){ // row 3
        fill("#ff5400");
        ellipse(x, y, 40, 40);      
      } else if (x>=220 && x<=260 && y>=100 && y<=540){ // row 4
        fill("#ff5400");
        ellipse(x, y, 40, 40);       
      } else if (x>=260 && x<=300 && y>=100 && y<=580){ // row 5
        fill("#ff6d00");
        ellipse(x, y, 40, 40);
      } else if (x>=300 && x<=340 && y>=100 && y<=580){ // row 6
        fill("#ff6d00");
        ellipse(x, y, 40, 40);
      } else if (x>=340 && x<=380 && y>=100 && y<=620){ // row 7
        fill("#ff8500");
        ellipse(x, y, 40, 40);
      } else if (x>=380 && x<=420 && y>=260 && y<=620){ // row 8 - bite
        fill("#ff8500");
        ellipse(x, y, 40, 40);
      } else if (x>=420 && x<=460 && y>=340 && y<=620){ // row 9 - bite
        fill("#ff9100");
        ellipse(x, y, 40, 40);
      } else if (x>=460 && x<=500 && y>=340 && y<=660){ // row 10 - bite
        fill("#ff6d00");
        ellipse(x, y, 40, 40);
      } else if (x>=500 && x<=540 && y>=380 && y<=660){ // row 11 - bite
        fill("#ff5400");
        ellipse(x, y, 40, 40);
      } else if (x>=540 && x<=580 && y>=380 && y<=660){ // row 12 - bite
        fill("#ff4800");
        ellipse(x, y, 40, 40);
      } else if (x>=580 && x<=620 && y>=340 && y<=740){ // row 13 - bite
        fill("#dc2f02");
        ellipse(x, y, 40, 40);
      } else if (x>=620 && x<=660 && y>=340 && y<=780){ // row 14
        fill("#e85d04");
        ellipse(x, y, 40, 40);
      } else if (x>=660 && x<=700 && y>=540 && y<=780){ // row 15
        fill("#f48c06");
        ellipse(x, y, 40, 40);
      } else if (x>=700 && x<=740 && y>=580 && y<=740){ // row 16
        fill("#f48c06");
        ellipse(x, y, 40, 40);
      } else if (x>=740 && x<=780 && y>=620 && y<=740){ // row 17
        fill("#ff9f1c");
        ellipse(x, y, 40, 40);
      }
    }
  }
}

// buffalo wing gets 2nd bite. This one is accompanied by the first feeling of spiciness
function bite2(posX, posY){
  for(x = 40; x<width; x+=40){
    for(y = 40; y<height; y+=40){
      if(x>=100 && x<=140 && y>=260 && y<=460){ // row 1
        // this entire section is eaten; no ellipse
      } else if (x>=140 && x<=180 && y>=180 && y<=500){ // row 2
        // this entire section is eaten; no ellipse
      } else if (x>=180 && x<=220 && y>=140 && y<=260){ // row 3 - bite
        ellipse(x, y, 40, 40);      
      } else if (x>=220 && x<=260 && y>=100 && y<=380){ // row 4 - bite
        ellipse(x, y, 40, 40);       
      } else if (x>=260 && x<=300 && y>=100 && y<=460){ // row 5 - bite 
        ellipse(x, y, 40, 40);
      } else if (x>=300 && x<=340 && y>=100 && y<=580){ // row 6
        ellipse(x, y, 40, 40);
      } else if (x>=340 && x<=380 && y>=100 && y<=620){ // row 7
        ellipse(x, y, 40, 40);
      } else if (x>=380 && x<=420 && y>=260 && y<=620){ // row 8
        ellipse(x, y, 40, 40);
      } else if (x>=420 && x<=460 && y>=340 && y<=620){ // row 9
        ellipse(x, y, 40, 40);
      } else if (x>=460 && x<=500 && y>=340 && y<=660){ // row 10
        ellipse(x, y, 40, 40);
      } else if (x>=500 && x<=540 && y>=380 && y<=660){ // row 11
        ellipse(x, y, 40, 40);
      } else if (x>=540 && x<=580 && y>=380 && y<=660){ // row 12
        ellipse(x, y, 40, 40);
      } else if (x>=580 && x<=620 && y>=340 && y<=740){ // row 13
        ellipse(x, y, 40, 40);
      } else if (x>=620 && x<=660 && y>=340 && y<=780){ // row 14
        ellipse(x, y, 40, 40);
      } else if (x>=660 && x<=700 && y>=540 && y<=780){ // row 15
        ellipse(x, y, 40, 40);
      } else if (x>=700 && x<=740 && y>=580 && y<=740){ // row 16
        ellipse(x, y, 40, 40);
      } else if (x>=740 && x<=780 && y>=620 && y<=740){ // row 17
        ellipse(x, y, 40, 40);
      }
    }
  }
}

function plate(posX, posY){ // plate outside
  push();
  stroke("#9999A1");
  strokeWeight(2);
  fill("#F4F4F6");
  rotate(PI/ 22);
  ellipse(500, 400, 900, 900);
  pop();
}

function plateInner(posX, posY){ // plate inside
  push();
  noStroke();
  fill("#E6E6E9");
  rotate( PI/ 22);
  ellipse(500, 400, 700, 700);
  pop();
}

function sauceCup(posX, posY){ // cup itself
  stroke("#9999A1");
  strokeWeight(2);
  fill("#F4F4F6");
  scale(1);
  ellipse(1050, 500, 350, 350);
}

function sauce(posX, posY){ // sauce itself
  stroke("#b08968");
  fill("#faedcd");
  scale(1);
  ellipse(1050, 500, 300, 300);
  ellipse(1000, 450, 10, 10);
  ellipse(1100, 600, 10, 10);
}

function mousePressed() { // controls the scene switch
  scene = scene + 1;
  if (scene > 6) {
    scene = 1;
  }
}

//CLASSES:

// sizzling orbs, for spicy feeling
class Orb {
  constructor() {
    this.x = random(1000); // fill up the canvas randomly
    this.y = random(800); // fill up the canvas randomly 
    this.size = random(10, 80); // size of ellipse is random
    this.speed = 10; // rapid speed = represents the spiciness in a person's mouth
  }

  update() { // how the orbs are updated
    this.x += random(-this.speed, this.speed); // move by the speed
    this.y += random(-this.speed, this.speed); // move by the speed
  }

  display() { // what the orbs look like
    fill("#dc2f02");
    ellipse(this.x, this.y, this.size, this.size); // the x&y coordinates + the size is random
  }
}

// leaves, for decoration purposes
class Leaf {

  constructor(x, y) {
    this.posX = x;
    this.posY = y;
  }

  display(){ // orig (200, 700)
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