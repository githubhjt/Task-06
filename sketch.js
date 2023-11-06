
let systems = [];
let system;
let gravity;

function setup() {
  createCanvas(720, 400);
  gravity = createVector(0, 1);
  system = new ParticleSystem();
}

function draw() {
  background(51, 15);

  for (let s of systems) {
    s.add(gravity);
    s.addParticle();
    s.run();

    system.checkEdges();
    system.checkEdges1();
    // s.checkEdges();
    // s.checkEdges1();
  } 

  if (mouseIsPressed) {
    let mpos = createVector (mouseX, mouseY);
    let s = new ParticleSystem(mpos);
    systems.push(s);
  }

  // let particles = new Particle(createVector);
  // particles.checkEdges();
  // particles.checkEdges1();
}