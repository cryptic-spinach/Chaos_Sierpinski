class Line {
  constructor(x, y, xSub, ySub) {
    this.x = x;
    this.y = y;
    this.xSub = xSub;
    this.ySub = ySub;
    this.alpha = 255;
  }

  display() {
    stroke(66, 232, 244, this.alpha);
    line(this.x, this.y, this.xSub, this.ySub);
  }

}
