import nipplejs from "nipplejs";

var _pressed = {};
var key = {};

key.LEFT = 37;
key.UP = 38;
key.RIGHT = 39;
key.DOWN = 40;
key.ENTER = 13;

key.isDown = function (keyCode) {
  return _pressed[keyCode];
};

key.onKeydown = function (event) {
  _pressed[event.keyCode] = true;
};

key.onKeyup = function (event) {
  _pressed[event.keyCode] = null;
};

window.addEventListener(
  "keyup",
  function (e) {
    key.onKeyup(e);
  },
  false,
);
window.addEventListener(
  "keydown",
  function (e) {
    key.onKeydown(e);
  },
  false,
);

// Touch support via nipplejs virtual joystick
var _directionKeys = [key.UP, key.RIGHT, key.DOWN, key.LEFT];
var _joystickStartTime = 0;
var _joystickMoved = false;

var joystick = nipplejs.create({
  zone: document.body,
  mode: "dynamic",
  color: "white",
  fadeTime: 150,
});

joystick.on("start", function () {
  _joystickStartTime = Date.now();
  _joystickMoved = false;
});

joystick.on("move", function (evt) {
  _joystickMoved = true;
  _directionKeys.forEach(function (k) {
    _pressed[k] = null;
  });
  if (evt.data && evt.data.direction) {
    var angle = evt.data.direction.angle;
    if (angle === "up") _pressed[key.UP] = true;
    else if (angle === "right") _pressed[key.RIGHT] = true;
    else if (angle === "down") _pressed[key.DOWN] = true;
    else if (angle === "left") _pressed[key.LEFT] = true;
  }
});

joystick.on("end", function () {
  _directionKeys.forEach(function (k) {
    _pressed[k] = null;
  });
  // Treat a short tap (no drag) as pressing Enter
  if (!_joystickMoved && Date.now() - _joystickStartTime < 250) {
    _pressed[key.ENTER] = true;
    setTimeout(function () {
      _pressed[key.ENTER] = null;
    }, 150);
  }
});

export default key;
