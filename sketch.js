var r = 165;
var g = 204;
var b = 65;
var x = 300;
var y = 100;
var bRad = 2;
var gRad = 20;
var x1 = 300;
var x2 = 100;
var x3 = 500;
var y1 = 100;
var y2 = 100 + 200*Math.sqrt(3);
var y3 = 100 + 200*Math.sqrt(3);
var choose = Math.floor(Math.random() * 3);
var z;

function setup() {
  createCanvas(600, 550);
  background(0);
  noStroke();
  fill(r, g, b, 155)
  ellipse(x1, y1, gRad);
  ellipse(x2, y2, gRad);
  ellipse(x3, y3, gRad);
  fill(66, 232, 244);
}


function addDots(num) {
  for (var i = 0; i < num; i++) {
    noStroke();
    if (choose == 0) {
      x = (x+x1)/2;
      y = (y+y1)/2;
      ellipse(x, y, bRad);
    }

    if (choose == 1) {
      x = (x+x2)/2;
      y = (y+y2)/2;
      ellipse(x, y, bRad);
    }

    if (choose == 2) {
      x = (x+x3)/2;
      y = (y+y3)/2;
      ellipse(x, y, bRad);
    }

    choose = Math.floor(Math.random() * 3);
 }

 // stroke(66, 232, 244);
 // switch (choose) {
 //  case 0:
 //    z = new Line(x, y, x1, y1);
 //    z.display();
 //    break;
 //  case 1:
 //    z = new Line(x, y, x2, y2);
 //    z.display();
 //    break;
 //  case 2:
 //    z = new Line(x, y, x2, y2);
 //    z.display();
 //    break;
 // }

}
