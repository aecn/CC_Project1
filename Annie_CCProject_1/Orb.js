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
    fill("#FF0000");
    ellipse(this.x, this.y, this.size, this.size); // the x&y coordinates + the size is random
  }
}

// "#dc2f02"