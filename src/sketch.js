import { testThing } from "./test";

function setup() {
  createCanvas(400, 400);

  const x = 50
  x = 20 // should throw an error
}

function draw() {
  background(220); 
  testThing()

  circle(200,200,50) // good circle

  circel(200,200,50) // typo in function name
  circle(200,200) // missing radius
}

window.setup = setup;
window.draw = draw;