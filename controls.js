function stopDrawing() {
  noLoop();
  setTimeout(add100000, 10);
}

function startDrawing() {
  marks = [];
  z.alpha = 0;
  loop();
}

function add100000() {
  background(0);
  vertices();
  dotFunction();
}

function dom_init() {

  // Implement GUI controls
  gui_controls = new Controls();
  gui = new dat.GUI();

  toggle_button = gui.add(gui_controls, 'AutoManualToggle').name('100000 dots');
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
      toggle_button = gui.add(gui_controls, 'AutoManualToggle').name('100000 dots');
      add_dot_button = gui.add(gui_controls, 'addThatDot').name('Add Dot');
  	}
  }
}
