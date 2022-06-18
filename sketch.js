var previousX;
var previousY;
var n = 250;
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
var vert1 = new Vertex(x1, y1);
var vert2 = new Vertex(x2, y2);
var vert3 = new Vertex(x3, y3);
var verts = [vert1, vert2, vert3];

function setup() {
  createCanvas(windowWidth, windowHeight);
  dom_init();
}

function draw() {
  background(0);
  translate(windowWidth/2, windowHeight/2);

  vert1.show();
  vert2.show();
  vert3.show();

  if (vert1.ring == true) {
    vert1.glow();
  }

  if (vert2.ring == true) {
    vert2.glow();
  }

  if (vert3.ring == true) {
    vert3.glow();
  }

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
