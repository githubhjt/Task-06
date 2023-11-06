class ParticleSystem {
  constructor(position) {
    this.origin = position.copy();
    this.particles = [];
  }

  addParticle() {
    this.particles.push(new Particle(this.origin));
  }

  add(aForce) {
    for (let p of this.particles) {
      p.applyForce(aForce);
    }
  }

  run() {
    for (let i = this.particles.length - 1; i >= 0; i--) {
      let p = this.particles[i];
      p.run();

      if (p.isDead()) {
        this.particles.splice(i, 1);
      }
    }
  }

  checkEdges() {
    if (this.position.y > height) {
      this.velocity.y *= -1;
      this.position.y = height;
    }
  }
  
  checkEdges1() {
    if (this.velocity.y < 0) {
      this.velocity.x += 0.1;
    }
  }
}