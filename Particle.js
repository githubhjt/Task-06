class Particle {
  constructor(position) {
    this.acceleration = createVector(0, -0.3);
    this.velocity = createVector(random(-0.5, 0.5), random(1.5, 0));
    this.position = position.copy();
    this.lifespan = 255;
  }

  run() {
    this.update();
    this.display();
  }

  applyForce(aForce) {
    this.acceleration.add(aForce);
  }

  update() {
    this.velocity.add(this.acceleration);
    this.position.add(this.velocity);
    this.lifespan -= 2;
    this.acceleration = createVector(0,0);
  }

  display() {
    noStroke();
    fill(200, this.lifespan);
    ellipse(this.position.x, this.position.y, 3, 3);
  }

  isDead() {
    return this.lifespan < 0;
  }
}
