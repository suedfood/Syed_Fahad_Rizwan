https://editor.p5js.org/suedfood/sketches/YdWR8avN-

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  
  //single loop
  for(let i =0; i<height; i=i+20) {
    strokeWeight(random(1,5));
    line(0,i,mouseX,i)
  } 
}
