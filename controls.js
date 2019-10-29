function stopDrawing() {
  noLoop();
  setTimeout(add10000, 20);
}

function startDrawing() {
  marks = [];
  z.alpha = 0;
  loop();
}

function add10000() {
  background(0);
  vertices();
  dotFunction();
}
