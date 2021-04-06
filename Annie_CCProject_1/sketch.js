// Annie Chen - Project 1 - edited after feedback

// story is told by the mouse click (8 scenes total, then resets automatically to 1 after 8th scene)

// Some sources I used for inspiration:
//https://p5js.org/examples/objects-array-of-objects.html
//shiffman - https://www.youtube.com/watch?v=UcdigVaIYAk

var scene = 1; // scene variable declared globally

// scenes 1,2,3,4(part of it),8
//these are variations of the leaf
let leaf1; 
let leaf2;
let leaf3;

// scenes 4 & 5: particle movement (bouce) begins
let positionX = 500;
let positionY = 400;
let speedX = 20;
let speedY = 25;
let radius = 25;

// scene 6: particles jittering/shaking
let particleX;
let changeDirection;
let particle = []; // array of particle objects

// scene 7: sizzling fire effect
let fire = []; // array of fire particles
let numFire = 40;


function setup() {
  createCanvas(1000, 800); 

// scenes 1,2,3,4,8
leaf1 = new Leaf(200, 700);
leaf2 = new Leaf(480, 950);
leaf3 = new Leaf(180, 1200);

// scene 6
for (let p = 0; p < 150; p++) { // up to 150 particles from 0
  particle.push(new Orb()); // class called, particle pushed
}
}

function draw() {
// scene 1: a delicious buffalo wing is presented to you. Go ahead and take a bite by clicking!
if (scene == 1) {
  background("#ffd500"); // yellow
  shadows();
  plate(500, 400); // plate
  plateInner(500, 400);
  plateDecor(500, 400);
  wing(500, 400);
  sauceCup(800, 600);
  sauce(800, 600);
  sauceDetail(500, 400);
  leaf1.display();
  push();
  scale(0.8);
  leaf2.display();
  pop();
  push();
  scale(0.5);
  leaf3.display(); // smaller size leaf
  pop();
  cup(500, 400);
}

// scene 2: You take a bite. Yum!
// wing pattern is modified to have a "bite". The background color becomes brighter.
if (scene == 2) {
  background("#ffea00"); // lighter yellow
  shadows();
  plate(500, 400); // plate
  plateInner(500, 400);
  plateDecor(500, 400);
  bite1(500, 400);
  sauceCup(800, 600);
  sauce(800, 600);
  sauceDetail2(500, 400);
  leaf1.display();
  push();
  scale(0.8);
  leaf2.display();
  pop();
  push();
  scale(0.5);
  leaf3.display(); // smaller size leaf
  pop();
  cup(500, 400);
} 

// scene 3: (continuation to scene 2). 2nd bite --> Panic arises as you start to realize how spicy the wing is.
// the wing starts to flash red, orange-red colors. You could see how much it burns now.
if (scene == 3) {
  background("#fbff12"); // lightest yellow
  shadows();
  plate(500, 400); // plate
  plateInner(500, 400);
  plateDecor(500, 400);
  frameRate(5);
  fill(random(240, 255),random(30,255), 0, this.alpha); // random flashing to represent true spiciness
  bite2(500, 400);
  sauceCup(800, 600);
  sauce(800, 600);
  sauceDetail3(500, 400);
  leaf1.display();
  push();
  scale(0.8);
  leaf2.display();
  pop();
  push();
  scale(0.5);
  leaf3.display(); // smaller size leaf
  pop();
  cup(500, 400);
} 

    // scene 4: the spiciness starts to overtake the screen. click when the entire screen fills up
    if (scene == 4) {
    // the ellipses cover the previous background 
      frameRate(60);
      stroke("#d00000");
      strokeWeight(2);
      fill(208, 0, 0, 150); // colors vaey in opacity
      ellipse(positionX, positionY, radius * 2, radius * 2); // different spicy particles, played around with the variables for diff. movement
      fill(208, 0, 0, 49); // different shades of orange and red
      ellipse(positionX*2, positionY*2.5, radius, radius); // multiplication
      fill(220, 47, 2, 120);
      ellipse(positionX*3, positionY, radius * 2, radius * 2);
      fill(208, 0, 0, 150);
      ellipse(positionX/2, positionY*1.5, radius * 2, radius * 2); // division
      fill(246, 170, 28, 180);
      ellipse(positionX, positionY*4, radius * 2, radius * 2);
      ellipse(positionX*1.5, positionY*1.5, radius * 2, radius * 2);
      fill(208, 0, 0, 85);
      ellipse(positionX*2, positionY/1.5, radius * 4.5, radius * 4.5); // initial position change
      ellipse(100, positionY*1.5, radius * 3, radius * 3);
      fill(251, 119, 37, 200);
      ellipse(positionX*3.5, 350, radius * 6, radius * 6);
      fill(208, 0, 0, 50);
      ellipse(850, positionY*4.7, radius * 4, radius * 4);
      fill(244, 140, 6, 160);
      ellipse(positionX*5, positionY*1.5, radius * 2, radius * 2);
      positionX += speedX; // position and speed are a function of each other
      positionY += speedY;
      if (positionX > width - radius || positionX < radius) { // if x position reaches width (exlcuding radius change), then change directions
        speedX = -speedX;
      }
      if (positionY > height - radius || positionY < radius) { // if y position reaches width (excluding radius change), then change directions
        speedY = -speedY;
      }
    }

    // scene 5: fully abstract now. spicy particles go everywhere
  if (scene == 5) {
    background("#e85d04");
    frameRate(60);
    stroke("#d00000");
    strokeWeight(2);
    fill("#d00000");
    ellipse(positionX, positionY, radius * 2, radius * 2); // different spicy particles, played around with the variables for diff. movement
    fill("#d00000"); // different shades of orange and red
    ellipse(positionX*2, positionY*2.5, radius, radius); // multiplication
    fill("#dc2f02");
    ellipse(positionX*3, positionY, radius * 2, radius * 2);
    fill("#d00000");
    ellipse(positionX/2, positionY*1.5, radius * 2, radius * 2); // division
    fill("#f6aa1c");
    ellipse(positionX, positionY*4, radius * 2, radius * 2);
    ellipse(positionX*1.5, positionY*1.5, radius * 2, radius * 2);
    fill("#d00000");
    ellipse(positionX*2, positionY/1.5, radius * 4.5, radius * 4.5); // initial position change
    ellipse(100, positionY*1.5, radius * 3, radius * 3);
    fill("#fb7725");
    ellipse(positionX*3.5, 350, radius * 6, radius * 6);
    fill("#d00000");
    ellipse(850, positionY*4.7, radius * 4, radius * 4);
    fill("#f48c06");
    ellipse(positionX*5, positionY*1.5, radius * 2, radius * 2);
    positionX += speedX; // position and speed are a function of each other
    positionY += speedY;
    if (positionX > width - radius || positionX < radius) { // if x position reaches width (exlcuding radius change), then change directions
      speedX = -speedX;
    }
    if (positionY > height - radius || positionY < radius) { // if y position reaches width (excluding radius change), then change directions
      speedY = -speedY;
    }
  }

// scene 6: this feeling begins to overtake you. Your tastebuds are on fire. the rapid particles represent the spice flavor tingling!
if (scene == 6) {
  frameRate(50);
  background("#f77f00");
  for (let p = 0; p < particle.length; p++) { // array, access length of 150
    particle[p].update();
    particle[p].display();
  }
}
// scene 7: fire-like effect
if (scene == 7) {
  frameRate(30);
  background("#dc2f02");
  for(let m = fire.length -5; m>=0; m--){
    fire[m].move();
    fire[m].display();

    if(fire[m].size <= 0){
      fire.splice(m, 1);  // deletes extra build up of fire to run more smoothly
    }
  }// these are for additional fire particles
  let x = 500;
  let y = 0;
  let size = random(30, 160); // size ranges from 30-160 
  let f = new Fire(x, y, size);
  fire.push(f);
}
// scene 8: snap back to reality. After an attack of spiciness, your vision is clear again.
// overlap with previous scene is on purpose to demonstrate that new knowledge, that yes, the wing is spicy
// water cup is empty
if (scene == 8) {
  frameRate(15);
  plate(500, 400); // plate
  plateInner(500, 400);
  plateDecor(500, 400);
  fill(random(240, 255),random(30,255), 0); // random flashing to represent true spiciness
  bite2(500, 400);
  sauceCup(800, 600);
  sauce(800, 600);
  sauceDetail3(500, 400);
  leaf1.display();
  push();
  scale(0.8);
  leaf2.display();
  pop();
  push();
  scale(0.5);
  leaf3.display(); // smaller size leaf
  pop();
  cup2(500, 400);
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
  noStroke();
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
  ellipse(830, 400, 300, 300);
}

function sauce(posX, posY){ // sauce itself
  stroke("#b08968");
  fill("#faedcd");
  scale(1);
  ellipse(830, 400, 250, 250);
  ellipse(800, 450, 10, 10);
  ellipse(890, 330, 10, 10);
}

function sauceDetail(posX, posY){
  noStroke();
  fill("#EDCB96"); // sauce shading
  arc(840, 400, 200, 200, 0, HALF_PI);
}

function sauceDetail2(posX, posY){
  noStroke();
  fill("#EDCB96"); // sauce shading
  arc(840, 400, 200, 200, PI, HALF_PI);  
}

function sauceDetail3(posX, posY){
  noStroke();
  fill("#EDCB96"); // sauce shading
  arc(840, 400, 200, 200, HALF_PI, HALF_PI);   
}

function plateDecor(posX, posY){
    fill("#CAF7E2");
    stroke("#58B09C");
    mid = 440;
    circ = 26; // # of circles
    angle = Math.PI*2 / circ; // divide full circle by individual circles
    rad = 390; // radius
    circRad = sin(angle/2) * rad;

    for(let w = 0; w < circ; w++){ // draw circles in a ring

        xCirc = mid + cos(angle*w) * rad;
        yCirc = mid - sin(angle*w) * rad;

        ellipse(xCirc-8, yCirc+20, circRad, circRad); // positioning of the ring
    }
}

function cup(posX, posY){
  stroke("#9999a1");
  fill("#f4f4f6"); // outer cup
  ellipse(920, 5, 400, 400);
  fill("#90e0ef"); // outer blue
  ellipse(920, 5, 350, 350); 
  noStroke();
  fill("#caf0f8"); // inner blue
  ellipse(920, 5, 300, 300);
}

function cup2(posX, posY){ 
  stroke("#9999a1");
  fill("#f4f4f6"); // outer cup
  ellipse(920, 5, 400, 400);
  fill("#e6e6e9"); // ring
  ellipse(920, 5, 350, 350); 
}

function shadows(){
  fill("#fcbf49"); // darker yellow
  ellipse(380, 450, 900, 900); // plate shadow
  ellipse(880, 5, 400, 400); // cup shadow
  ellipse(830, 450, 300, 300); // sauce cup shadow
}

function mousePressed() { // controls the scene switch
  scene = scene + 1;
  if (scene > 8) {
    scene = 1;
  }
}