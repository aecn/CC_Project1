// Annie Chen - Project 1

let scene = 1;

function setup() {
  createCanvas(1000, 800);
}


function draw() {
if (scene == 1){
  wing(); 
}
if (scene == 2){
  bite();
}
}

// not colored yet
//fresh buffalo wing. inspired by this pixel art: https://www.pngfind.com/mpng/xJoooi_chicken-leg-xbox-a-button-pixel-hd-png/
function wing(){
    background("#fcbf49");
    for(x = 40; x<width; x+=40){
    for(y = 40; y<height; y+=40){
      if(x>=100 && x<=140 && y>=260 && y<=460){ // row 1
        stroke("#ffffff");
        ellipse(x, y, 40, 40);
      } else if (x>=140 && x<=180 && y>=180 && y<=500){ // row 2
        stroke("#ffffff");
        ellipse(x, y, 40, 40);
      } else if (x>=180 && x<=220 && y>=140 && y<=500){ // row 3
        stroke("#ffffff");
        ellipse(x, y, 40, 40);      
      } else if (x>=220 && x<=260 && y>=100 && y<=540){ // row 4
        stroke("#ffffff");
        ellipse(x, y, 40, 40);       
      } else if (x>=260 && x<=300 && y>=100 && y<=580){ // row 5
        stroke("#ffffff");
        ellipse(x, y, 40, 40);
      } else if (x>=300 && x<=340 && y>=100 && y<=580){ // row 6
        stroke("#ffffff");
        ellipse(x, y, 40, 40);
      } else if (x>=340 && x<=380 && y>=100 && y<=620){ // row 7
        stroke("#ffffff");
        ellipse(x, y, 40, 40);
      } else if (x>=380 && x<=420 && y>=100 && y<=620){ // row 8
        stroke("#ffffff");
        ellipse(x, y, 40, 40);
      } else if (x>=420 && x<=460 && y>=100 && y<=620){ // row 9
        stroke("#ffffff");
        ellipse(x, y, 40, 40);
      } else if (x>=460 && x<=500 && y>=140 && y<=660){ // row 10
        stroke("#ffffff");
        ellipse(x, y, 40, 40);
      } else if (x>=500 && x<=540 && y>=140 && y<=660){ // row 11
        stroke("#ffffff");
        ellipse(x, y, 40, 40);
      } else if (x>=540 && x<=580 && y>=180 && y<=660){ // row 12
        stroke("#ffffff");
        ellipse(x, y, 40, 40);
      } else if (x>=580 && x<=620 && y>=260 && y<=740){ // row 13
        stroke("#ffffff");
        ellipse(x, y, 40, 40);
      } else if (x>=620 && x<=660 && y>=340 && y<=780){ // row 14
        stroke("#ffffff");
        ellipse(x, y, 40, 40);
      } else if (x>=660 && x<=700 && y>=540 && y<=780){ // row 15
        stroke("#ffffff");
        ellipse(x, y, 40, 40);
      } else if (x>=700 && x<=740 && y>=580 && y<=740){ // row 16
        stroke("#ffffff");
        ellipse(x, y, 40, 40);
      } else if (x>=740 && x<=780 && y>=620 && y<=740){ // row 17
        stroke("#ffffff");
        ellipse(x, y, 40, 40);
      }
    }
  }
}

// buffalo wing with a bite. This will be the second scene after the viewer clicks or presses a key to "eat"
function bite(){
    background("#fcbf49");
    for(x = 40; x<width; x+=40){
    for(y = 40; y<height; y+=40){
      if(x>=100 && x<=140 && y>=260 && y<=460){ // row 1
        stroke("#ffffff");
        ellipse(x, y, 40, 40);
      } else if (x>=140 && x<=180 && y>=180 && y<=500){ // row 2
        stroke("#ffffff");
        ellipse(x, y, 40, 40);
      } else if (x>=180 && x<=220 && y>=140 && y<=500){ // row 3
        stroke("#ffffff");
        ellipse(x, y, 40, 40);      
      } else if (x>=220 && x<=260 && y>=100 && y<=540){ // row 4
        stroke("#ffffff");
        ellipse(x, y, 40, 40);       
      } else if (x>=260 && x<=300 && y>=100 && y<=580){ // row 5
        stroke("#ffffff");
        ellipse(x, y, 40, 40);
      } else if (x>=300 && x<=340 && y>=100 && y<=580){ // row 6
        stroke("#ffffff");
        ellipse(x, y, 40, 40);
      } else if (x>=340 && x<=380 && y>=100 && y<=620){ // row 7
        stroke("#ffffff");
        ellipse(x, y, 40, 40);
      } else if (x>=380 && x<=420 && y>=260 && y<=620){ // row 8
        stroke("#ffffff");
        ellipse(x, y, 40, 40);
      } else if (x>=420 && x<=460 && y>=340 && y<=620){ // row 9
        stroke("#ffffff");
        ellipse(x, y, 40, 40);
      } else if (x>=460 && x<=500 && y>=340 && y<=660){ // row 10
        stroke("#ffffff");
        ellipse(x, y, 40, 40);
      } else if (x>=500 && x<=540 && y>=380 && y<=660){ // row 11
        stroke("#ffffff");
        ellipse(x, y, 40, 40);
      } else if (x>=540 && x<=580 && y>=380 && y<=660){ // row 12
        stroke("#ffffff");
        ellipse(x, y, 40, 40);
      } else if (x>=580 && x<=620 && y>=340 && y<=740){ // row 13
        stroke("#ffffff");
        ellipse(x, y, 40, 40);
      } else if (x>=620 && x<=660 && y>=340 && y<=780){ // row 14
        stroke("#ffffff");
        ellipse(x, y, 40, 40);
      } else if (x>=660 && x<=700 && y>=540 && y<=780){ // row 15
        stroke("#ffffff");
        ellipse(x, y, 40, 40);
      } else if (x>=700 && x<=740 && y>=580 && y<=740){ // row 16
        stroke("#ffffff");
        ellipse(x, y, 40, 40);
      } else if (x>=740 && x<=780 && y>=620 && y<=740){ // row 17
        stroke("#ffffff");
        ellipse(x, y, 40, 40);
      }
    }
  }
}

function mousePressed() {
  scene++;
  if (scene>3) {
    scene = 1;
  }
}

// previous stuff i've been working on/ experimenting:

// 1st attempt at drawing the buffalo wing shape:
// doesn't look like the shape at all, looks better on paper. I decided to look up pixel art to model some of my code after
// function wing(){
//   for(x = 50; x<width; x+=100){
//     for(y = 50; y<height; y+=100){
//       if(x>100 && x<200 && y>100 && y<400){
//         stroke("#ffffff");
//         ellipse(x, y, 50, 50);
//       } else if (x>200 && x<300 && y>100 && y<500){
//         stroke("#ffffff");
//         ellipse(x, y, 50, 50);
//       } else if (x>300 && x<400 && y>200 && y<500){
//         stroke("#ffffff");
//         ellipse(x, y, 50, 50);       
//       } else if (x>400 && x<500 && y>300 && y<500){
//         stroke("#ffffff");
//         ellipse(x, y, 50, 50);        
//       } else if (x>500 && x<600 && y>400 && y<500){
//         stroke("#ffffff");
//         ellipse(x, y, 50, 50); 
//       } else if (x>600 && x<700 && y>500 && y<600){
//         stroke("#ffffff");
//         ellipse(x, y, 50, 50); 
//       }
//     }
//   }
// }




// here is my another attempt- I realized I could just use the for loop with the if statements..

  // ellipse(200, 150, 100, 100); // 1m
  // ellipse(180, 200, 100, 100); // 1b
  // ellipse(230, 120, 100, 100); // 1t
  // ellipse(180, 260, 100, 100); // 2b
  // ellipse(230, 230, 100, 100); // 2m
  // ellipse(250, 180, 100, 100); // 2m
  // ellipse(280, 130, 100, 100); // 2t
  // ellipse(180, 310, 100, 100); // 3b
  // ellipse(250, 280, 100, 100);
  // ellipse()






// this draft, seen in the previous pushes, ended up being scrapped. I felt that it was too difficult to convey "spiciness" in this enviornment
// only ended up keeping the chicken wing idea (got rid of the person, going to show emotions abstractly instead of on a physical face

// function setup() {
//   createCanvas(1000, 750);
//   background("#d8e2dc");
// }


// function draw() {
  
//   stroke("#68b0ab"); // dark teal
//   fill("#77bfa3"); // lighter teal
//   rect(310, 380, 400, 500, 80); // body
  
//   noStroke();
//   fill("#774936"); // dark brown
//   rect(0, 700, 1000, 100); // table
  
//   fill("#ffdab9"); // peach
//   arc(500, 385, 120, 130, 0, PI, CHORD); // shirt collar line
  
//   fill("#d4a373"); // brown
//   arc(500, 100, 380, 180, PI, 2*PI, CHORD); // hair
  
//   fill("#ffdab9"); // peach
//   arc(500, 100, 380, 500, 0, PI, CHORD); // head
  
//   noStroke(); // neck has no outline
//   line(450, 340, 450, 420); // left neck line
//   line(550, 340, 550, 420); // right neck line
//   rect(450, 330, 100, 80); // middle neck

//   fill("#000000"); // black
//   ellipse(400, 200, 30, 30); // left eye
//   ellipse(600, 200, 30, 30); // right eye
//   fill("#ffffff"); // white
//   ellipse(410, 205, 10, 10); // left eye highlight
//   ellipse(590, 205, 10, 10); // right eye highlight

//   fill("#ffd6ba"); // peach
//   stroke("#c18c5d"); // brown beige
//   triangle(500, 200, 475, 250, 525, 250); // nose

//   noFill();
//   stroke("#c18c5d"); // brown beige
//   arc(500, 275, 120, 80, 0, PI, OPEN); // mouth
  
//   fill("#ff4800");
//   ellipse(530, 670, 130, 90); // chicken wing pile

//   noStroke();
//   fill("#fe4e00"); // hot red
//   ellipse(600, 650, 80, 80); // chicken wing behind
//   triangle(600, 610, 600, 690, 500, 700);
//   fill("#f4845f");
//   triangle(610, 620, 610, 630, 580, 630); // highlight


//   noStroke();
//   fill("#f6f4d2"); // creme
//   arc(500, 670, 300, 100, 0, PI, CHORD); // plate 

// // give the boy a buffalo wing to eat!


// if(keyIsPressed == true) {
//   let wingX = 500;
//   let wingY = 650;
//     wingY = wingY + 5;
//   }
// }



//these were some attempts at trying to create a function that could be manipulated

// //buffalo wing shape
// function wing(x, y) {
//   fill("#ff7900"); // orange
//   ellipse(wingX+50, wingY, 80, 80); 
//   rect(480, 635, 100, 30, 10, 20); 
//   fill("#ffaa00"); // gold
//   triangle(420, 650, 440, 680, 540, 650); // bottom highlight
//   fill("#eb4511");
//   triangle(450, 620, 450, 630, 480, 640); // top highlight
// }




// // //buffalo wing shape
// // function wing() {
// //   fill("#ff7900"); // orange
// //   triangle(440, 690, 440, 610, 580, 650);
// //   ellipse(450, 650, 80, 80); 
// //   rect(480, 635, 100, 30, 10, 20); 
// //   fill("#ffaa00"); // gold
// //   triangle(420, 650, 440, 680, 540, 650); // bottom highlight
// //   fill("#eb4511");
// //   triangle(450, 620, 450, 630, 480, 640); // top highlight
// // }




