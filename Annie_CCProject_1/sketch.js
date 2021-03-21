// Annie Chen - Project 1

function setup() {
  createCanvas(1000, 750);
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
  arc(500, 100, 380, 180, PI, 2*PI, CHORD); // hair
  
  fill("#ffdab9");
  arc(500, 100, 380, 500, 0, PI, CHORD); // head
  
  noStroke();
  line(450, 340, 450, 420); // left neck line
  line(550, 340, 550, 420); // right neck line
  rect(450, 330, 100, 80); // middle neck

  fill("#000000");
  ellipse(400, 200, 30, 30); // left eye
  ellipse(600, 200, 30, 30); // right eye
  fill("#ffffff");
  ellipse(410, 205, 10, 10); // left eye highlight
  ellipse(590, 205, 10, 10); // right eye highlight

  fill("#ffd6ba");
  stroke("#c18c5d");
  triangle(500, 200, 475, 250, 525, 250); // nose

  noFill();
  stroke("#c18c5d");
  arc(500, 275, 120, 80, 0, PI, OPEN); // mouth


  
}