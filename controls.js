function stopDrawing() {
  noLoop();
  setTimeout(addInterval, 30);
}

function startDrawing() {
  marks = [];
  z.alpha = 0;
  clearInterval(timer);
  loop();
}

function addInterval() {
  background(0);
  vert1.show();
  vert2.show();
  vert3.show();
  timer = setInterval(dotFunction, 1);
}

function addAllAtOnce() {
  for (var i = 0; i < 100000; i++) {
    dotfunction();
  }
}

function dom_init() {
  gui_controls = new Controls();
  gui = new dat.GUI();
  gui.width = 335;

  toggle_button = gui.add(gui_controls, 'AutoManualToggle').name('Switch to Auto Mode');
  add_dot_button = gui.add(gui_controls, 'addThatDot').name('Add Dot');
}

Controls = function() {
  this.addThatDot = function() {
    addDot();
  }

  this.AutoManualToggle = function() {
		if (manual == true) {
			manual = false;
      stopDrawing();
      gui.remove(add_dot_button);
      gui.remove(toggle_button);
      toggle_button = gui.add(gui_controls, 'AutoManualToggle').name('Manually Add Dots');
		} else if (manual == false) {
      manual = true;
      startDrawing();
      gui.remove(toggle_button);
      toggle_button = gui.add(gui_controls, 'AutoManualToggle').name('Switch to Auto Mode');
      add_dot_button = gui.add(gui_controls, 'addThatDot').name('Add Dot');
  	}
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
	background(0);
  vert1.show();
  vert2.show();
  vert3.show();
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
    verts[choose].alpha = 255;
    verts[choose].r = 20;
    verts[choose].ring = true;
    choose = Math.floor(Math.random() * 3);
    z = new Line(x, y, previousX, previousY, 255);
}
