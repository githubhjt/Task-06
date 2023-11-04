
let systems;
let gravity;

function setup() {
  createCanvas(720, 400);
  systems = new ParticleSystem(createVector(width/2, 70));
}

function draw() {
  background(51);
  gravity = createVector(0, 1);
  systems.add(gravity);
    systems.addParticle();
    systems.run();
}

// function mouseClicked() {
//   let mpos = createVector(mouseX, mouseY);
//   let s = new ParticleSystem(mpos);
//   systems.push(s);
// }