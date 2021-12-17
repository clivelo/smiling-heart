//y = -r * (13 * cos(i) - 5 * cos(2 * i) - 2 * cos(3 * i) - cos(4 * i));

class Heart {

  show(r) {
    beginShape();
    for (var i = 0; i < TWO_PI; i += 0.01) {
      let x = r * 15 * pow(sin(i), 3);
      let y = -r * (13 * cos(i) - 3 * cos(2 * i) - 2 * cos(3 * i) - cos(4 * i));
      vertex(x, y);
    }
    endShape();
  }
}