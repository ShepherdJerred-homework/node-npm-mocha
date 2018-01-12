function repeat (stringToRepeat, timesToRepeat) {
  let s = '';
  for (let i = 0; i < timesToRepeat; i++) {
    s += stringToRepeat;
  }
  return s;
}

function runningSum (array) {
  let a = [];
  for (let i = 0; i < array.length; i++) {
    let prev = 0;
    if (i > 0) {
      prev = a[i - 1];
    }
    a[i] = array[i] + prev;
  }
  return a;
}

function slice (object, properties) {
  let o = {};
  properties.forEach(function (property) {
    if (object[property]) {
      o[property] = object[property];
    }
  });
  return o;
}

module.exports = {
  repeat: repeat,
  runningSum: runningSum,
  slice: slice
};
