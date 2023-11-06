let gravity;
let systems;

function setup() {
  createCanvas(720, 400);
  systems = new ParticleSystem(createVector(width/2, 70));
  gravity = createVector(0, 1);
}

function draw() {
  background(51);
    systems.add(gravity);
    systems.addParticle();
    systems.run();
}

// function mouseClicked() {
//   let mpos = createVector(mouseX, mouseY);
//   let s = new ParticleSystem(mpos);
//   systems.push(s);
// }