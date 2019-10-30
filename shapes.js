class Line {
  constructor(x, y, xSub, ySub, alpha) {
    this.x = x;
    this.y = y;
    this.xSub = xSub;
    this.ySub = ySub;
    this.alpha = alpha;
  }

  display() {
    stroke(255, 130, 0, this.alpha);
    line(this.x, this.y, this.xSub, this.ySub);
  }

}

class Dot {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  display() {
    stroke(66, 232, 244);
    ellipse(this.x, this.y, 2);
  }

  displayLast() {
    noStroke();
    fill(66, 232, 244, 155);
    ellipse(this.x, this.y, 12)
  }
}



class Vertex {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.r = 20;
    this.alpha = 155;
    this.ring = false;
  }

  show() {
    noStroke();
    if (this.alpha > 200){
      fill(165, 204, 65, 255);
    } else {
      fill(165, 204, 65, 155);
    }
    ellipse(this.x, this.y, 20);
  }

  glow() {
    noFill();
    if (this.alpha > 0) {
      this.alpha -= 6;
      stroke(165, 204, 65, this.alpha);
      this.r += 2;
      ellipse(this.x, this.y, this.r);
    } else {
      this.ring = false;
    }
  }
}

function dotFunction() {
  stroke(66, 232, 244);
    choose = Math.floor(Math.random() * 3);
    if (choose == 0) {
      x = (x+x1)/2;
      y = (y+y1)/2;
    }

    if (choose == 1) {
      x = (x+x2)/2;
      y = (y+y2)/2;
    }

    if (choose == 2) {
      x = (x+x3)/2;
      y = (y+y3)/2;
    }
    ellipse(x, y, 2);
}
