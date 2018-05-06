var array = [];
var i;

function forLoop(array) {
  for (let i = 0; i < 25; i++) {
    if (i === 1) {
      array.push("I am 1 strange loop.");
    } else {
      array.push("I am ${i} strange loops.");
    }
  }
  return array
}

function whileLoop(number) {
  while (number > 0) {
    console.log(--number)
  }
  return "done"
}

<<<<<<< HEAD
function maybeTrue() {
  return Math.random() >= 0.5
}

function doWhileLoop(array) {
  do {
    array.pop()
  } while (array.length > 0 && maybeTrue());
  return array
=======


function doWhileLoop(array) {
  function maybeTrue() {
  return Math.random() >= 0.5
}
  do {
    array.shift()
  } while (array.length > 0 && maybeTrue());
>>>>>>> abecb487fcd3132beea5353a6964c379d099d432
}