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
  vertices();
  timer = setInterval(dotFunction, 5);
}

function add100000() {
  for (var i = 0; i < 100000; i++) {
    dotfunction();
  }
}

function dom_init() {

  // Implement GUI controls
  gui_controls = new Controls();
  gui = new dat.GUI();

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
