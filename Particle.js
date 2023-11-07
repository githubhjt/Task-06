class Particle {
  constructor(position) {
    this.acceleration = createVector(0, -0.3);
    this.velocity = createVector(random(-5, 0), random(1.5, 0));
    this.position = position.copy();
    this.lifespan = 255;
  }

  run() {
    this.update();
    // this.checkEdges();
    // this.checkEdges1();
    this.display();
  }

  applyForce(aForce) {
    this.acceleration.add(aForce);
  }

  update() {
    this.velocity.add(this.acceleration);
    this.position.add(this.velocity);
    this.lifespan -= 2.5;
    this.acceleration = createVector(0,0);

  }

  display() {
    noStroke();
    fill(190, this.lifespan);
    ellipse(this.position.x, this.position.y, 3.5, 3.5);
  }


  checkEdges() {
    if (this.position.y > height) {
      this.velocity.y *= -0.5;
      this.position.y = height;
    }
  }
  
  checkEdges1() {
    if (this.velocity.y < 0) {
      this.velocity.x += random(-1, 1.5);
    }
  }

  isDead() {
    return this.lifespan < 0;
  }
}