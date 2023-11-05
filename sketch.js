
let systems = [];
let particle;
let gravity;

function setup() {
  createCanvas(720, 400);
  gravity = createVector(0, 1);
  particle = new Particle();
}

function draw() {
  background(51, 15);

  for (let s of systems) {
    s.add(gravity);
    s.addParticle();
    s.run();
  } 

  if (mouseIsPressed) {
    let mpos = createVector (mouseX, mouseY);
    let s = new ParticleSystem(mpos);
    systems.push(s);
  }

particle.checkEdges();
particle.checkEdges1();

  // let particles = new Particle(createVector);
  // particles.checkEdges();
  // particles.checkEdges1();
}