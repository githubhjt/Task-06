
let systems = [];
let gravity;

function setup() {
  createCanvas(720, 400);
  gravity = createVector(0, 1);
}

function draw() {
  background(51, 10);

  for (let s of systems) {
    s.add(gravity);
    s.addParticle();

    for (let p of s.particles) {
      p.checkEdges();
      p.checkEdges1();
    } 
    s.run();
    // s.checkEdges();
    // s.checkEdges1();

  } 

  if (mouseIsPressed) {
    let mpos = createVector (mouseX, mouseY);
    let s = new ParticleSystem(mpos);
    systems.push(s);
  }

  // let particles = new Particle();
  // particles.checkEdges();
  // particles.checkEdges1();
}