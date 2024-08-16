import { testThing } from "./test.js";

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220); 
  testThing()
}

window.setup = setup;
window.draw = draw;