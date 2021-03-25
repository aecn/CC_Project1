// Annie Chen - Project 1


// some code is inspired by https://p5js.org/examples/math-sine-wave.html &
// https://p5js.org/examples/objects-array-of-objects.html.
// i will modify these further

var scene = 1; // scene variable defined globally
//let particles = [];

// scene 4: waves variables
let xSpacing = 40; // spacing between individual ellipses in the wave
let w; // width of wave
let angle = 0; // angle starts at 0
let h = 300; // height of wave
let cycle = 600; // # of pixels in a cycle before repeating
let inc; // increment of x of xSpacing
let y; // array

// scene 5: particles bouncing
let particleX;
let changeDirection;

// simmering 
let particle = []; // array of particle objects


function setup() {
  createCanvas(1000, 800);
  // scene 4
  w = width + 20; // add w, ?
  inc = (TWO_PI / cycle) * xSpacing; // inc is 2pi/cycle ?
  y = new Array(floor(w / xSpacing)); // ?
  // scene 5
  particleX = 1;
  changeDirection = false;
  // scene 6
    for (let p = 0; p < 50; p++) {
    particle.push(new Orb());
  }
}

function draw() {
  // scene 1: a buffalo wing is presented to you. Go ahead and take a bite by clicking!
  // wing pattern function called
  if (scene == 1) {
    background("#ffd500");
    wing(500, 400); 
  }

  // scene 2: You take a bite. Yum... suddenly, it starts to burn!
  // wing pattern is modified to have a "bite". The background color becomes brighter.
  if (scene == 2) {
    background("#ffea00");
    bite(500, 400);
  } 

  // scene 3: (continuation to scene 2). Panic arises as you start to realize how spicy the wing was
  // flashing red, orange-red colors
  if (scene == 3) {
    background("#ffffff");
    // work in progress
  }   

  // scene 4: rapid waves of hot spiciness take over
  // object = waves
  if (scene == 4) {
    background(0);
    displayWave();
    moveWave();
    // work in progress
  }   

  // scene 5: rapid panic of particles
  if (scene == 5) { // work in progress
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

  // scene 6
  if (scene == 6) {
    background("#ffba08");
  for (let p = 0; p < particle.length; p++) {
    particle[p].update();
    particle[p].display();
   }
  }
}


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

// buffalo wing with a bite. This will be the second scene after the viewer clicks or presses a key to "eat"
function bite(posX, posY){
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
      } else if (x>=380 && x<=420 && y>=260 && y<=620){ // row 8
        fill("#ff8500");
        ellipse(x, y, 40, 40);
      } else if (x>=420 && x<=460 && y>=340 && y<=620){ // row 9
        fill("#ff9100");
        ellipse(x, y, 40, 40);
      } else if (x>=460 && x<=500 && y>=340 && y<=660){ // row 10
        fill("#ff6d00");
        ellipse(x, y, 40, 40);
      } else if (x>=500 && x<=540 && y>=380 && y<=660){ // row 11
        fill("#ff5400");
        ellipse(x, y, 40, 40);
      } else if (x>=540 && x<=580 && y>=380 && y<=660){ // row 12
        fill("#ff4800");
        ellipse(x, y, 40, 40);
      } else if (x>=580 && x<=620 && y>=340 && y<=740){ // row 13
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


function mousePressed() {
  scene = scene + 1;
  if (scene > 6) {
    scene = 1;
  }
}

// waves
function moveWave() {
  angle += 0.1;

  let x = angle; // for every x, generate y value
  for (let z = 0; z < y.length; z++) {
    y[z] = sin(x) * h;
    x += inc; // add increment
  }
}

function displayWave() {
  noStroke();
  fill(255);
  for(let x = 0; x < y.length; x++) {
    ellipse(x * xSpacing, height / 2 + y[x], 20, 20);
  }
}



// sizzling orbs
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