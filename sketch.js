var previousX;
var previousY;
var n = 400;
var x = 0;
var y = -n*Math.sqrt(3)/2;
var x1 = 0;
var x2 = n;
var x3 = -n
var y1 = -n*Math.sqrt(3)/2;
var y2 = n*Math.sqrt(3)/2;
var y3 = n*Math.sqrt(3)/2;
var choose = Math.floor(Math.random() * 3);
var z = new Line(x, y, x1, y1, 255);
var marks = [];
var nextDot;
var manual = true;
var gui_controls;
var gui;
var toggle_button;
var add_dot_button;
var timer;


function setup() {
  createCanvas(windowWidth, windowHeight);
  dom_init();
}

function draw() {
  background(0);
  translate(windowWidth/2, windowHeight/2);
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
