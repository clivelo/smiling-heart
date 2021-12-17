let gpFace;
let slider;
let init_r = 4;
let scaleFactor = 1.5;
let heartMaxSize = init_r * scaleFactor;
let r = init_r;
let rate = 1.5;
let out = true;

function setup() {
  createCanvas(500, 500);
  gpFace = createGraphics(width, height);
  frameRate(60);

  heart = new Heart();
}

function draw() {
  background(0);
  push();
  stroke(255);
  strokeWeight(1.5);
  noFill()
  textSize(15);
  //text("Size", slider.x * 3 + slider.width, slider.y + slider.height);
  text("Click the heart!", 10, height - 10);
  pop();

  push();
  stroke(255);
  fill(255, 30, 80);
  strokeWeight(r * 0.9);
  translate(width / 2, height / 2);
  animate();
  pop();

  image(gpFace, 0, 0);
}

function animate() {
  heart.show(r);
  if (out) {
    r += rate / 5;
  } else {
    r -= rate / 20;
  }
  if ((r > heartMaxSize && out == true) || (r < init_r && out == false)) {
    out = !out;
  }
}

function mousePressed() {
  if (mouseX >= 150 && mouseX <= 350 && mouseY >= 150 && mouseY <= 350) {
    showFace();
    setTimeout(function() {
      gpFace = createGraphics(width, height);
    }, 3000);
  }
}