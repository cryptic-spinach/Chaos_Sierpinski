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

function addDot() {
    noStroke();
    previousX = x;
    previousY = y;
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
    nextDot = new Dot(x, y);
    marks.push(nextDot);
    choose = Math.floor(Math.random() * 3);
    z = new Line(x, y, previousX, previousY, 255);
}

function vertices() {
  noStroke();
  fill(165, 204, 65, 155);
  ellipse(x1, y1, 20);
  ellipse(x2, y2, 20);
  ellipse(x3, y3, 20);
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
