function setup() {
  createCanvas(1000, 800);
  background("#d8e2dc");
}


function draw() {
  
  fill("#77bfa3");
  rect(310, 380, 400, 500, 80); // body
  
  noStroke();
  fill("#774936");
  rect(0, 700, 1000, 100); // table
  
  fill("#f6f4d2");
  arc(500, 670, 300, 100, 0, PI, CHORD); // plate
  
  fill("#ffdab9");
  arc(500, 385, 120, 130, 0, PI, CHORD); // shirt collar line
  
  fill("#d4a373");
  arc(500, 100, 400, 200, PI, 2*PI, CHORD); // hair
  
  fill("#ffdab9");
  arc(500, 100, 400, 500, 0, PI, CHORD); // head
  
  noStroke();
  line(450, 340, 450, 420); // left neck line
  line(550, 340, 550, 420); // right neck line
  rect(450, 330, 100, 80); // middle neck
  
}