function showFace() {
  push();
  gpFace.noStroke();
  gpFace.fill(130, 0, 0, 180);
  gpFace.translate(width / 2, height / 2 - 5);
  gpFace.rectMode(CENTER);
  gpFace.ellipse(-25, 0, 10);
  gpFace.ellipse(25, 0, 10);
  gpFace.rect(0, 23, 25, 20, 5, 5, 10, 10);
  gpFace.fill(200, 0, 0, 255);
  gpFace.rect(1, 31, 10, 5, 5, 5, 10, 10);
  //gpFace.ellipse(0, 25, 25, 20);
  pop();
}