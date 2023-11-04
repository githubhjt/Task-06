/*
let system;
let gravity;
let wind;

function setup() {
  createCanvas(720, 400);
  system = new ParticleSystem(createVector(width / 2, 70));

  gravity = createVector(0, 0.005);
}

function draw() {
  background(51);
  system.addParticle();
  system.run();

  if (mouseIsPressed) {
    let wind = createVector(0.01, 0);
    system.add(wind);
  }
  system.add(gravity);
}
*/

let gravity;
let systems = [];

function setup() {
  createCanvas(720, 400);
  gravity = createVector(0, 0.05);
}

function draw() {
  background(51);

  for (let s of systems) {
    s.addParticle();
    s.add(gravity);
    s.run();
  }
}

function mouseClicked() {
  let mpos = createVector(mouseX, mouseY);
  let s = new ParticleSystem(mpos);
  systems.push(s);
}
