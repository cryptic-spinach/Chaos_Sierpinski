var previousX;
var previousY;
var x = 300;
var y = 100;
var x1 = 300;
var x2 = 100
var x3 = 500;
var y1 = 100;
var y2 = 100 + 200*Math.sqrt(3);
var y3 = 100 + 200*Math.sqrt(3);
var choose = Math.floor(Math.random() * 3);
var z = new Line(x, y, x1, y1, 255);
var marks = [];
var nextDot;

function setup() {
  createCanvas(600, 550);
}

function draw() {
  background(0);
  vertices();

  for (var i = 0; i < marks.length; i++) {
    marks[i].display();
  }

  if (marks.length > 0) {
    marks[marks.length - 1].displayLast();
  }

  if (z.alpha > 0) {
    z.alpha -= 4;
  }
  z.display();
}
