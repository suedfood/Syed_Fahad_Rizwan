https://editor.p5js.org/suedfood/sketches/msylX0qEG

let array = []; // array containing the sphere spaceship

function preload() {
  maze = loadImage("Assets/spacemaze.png"); // loads maze
}

function setup() {
  createCanvas(600, 600); // creates canvas
}

// draws maze and calls ship functions
function draw() {
  image(maze, 0, 0, width, height);
  for (let i = 0; i < array.length % 2; i++) {
    array[i].drawShip();
    array[i].moveShip();
    array[i].detectWalls();
  }
}

// spaceship appears upon pressing mouse
function mousePressed() {
  let ship = new spaceship(215, 25, this.color);
  array.push(ship);
}

// class with spaceship attributes and methods
class spaceship {
  constructor(xPos, yPos, color) {
    this.x = xPos; // xPos of center of circle
    this.y = yPos; // yPos of center of circle
    this.color = color; // to gain pixel value at xPos,yPos
  }
  // makes circular ship
  drawShip() {
    noStroke();
    fill(255);
    this.color = ellipse(this.x, this.y, 20, 20);
    this.y = this.y + 0.5;
  }
  // moves ship upon pressing keys
  moveShip() {
    if (keyCode == UP_ARROW) {
      this.y = this.y - 1;
    } else if (keyCode == DOWN_ARROW) {
      this.y = this.y + 1;
    } else if (keyCode == LEFT_ARROW) {
      this.x = this.x - 1;
    } else if (keyCode == RIGHT_ARROW) {
      this.x = this.x + 1;
    }
  }
  // detects walls via pixel values
  detectWalls() {
    let pixValEllipseRT = this.color.get(this.x + 20, this.y - 20);
    print(pixValEllipseRT);
    let pixValEllipseRB = this.color.get(this.x + 20, this.y + 20);
    print(pixValEllipseRB);
    let pixValEllipseLT = this.color.get(this.x - 20, this.y - 20);
    print(pixValEllipseLT);
    let pixValEllipseLB = this.color.get(this.x - 20, this.y + 20);
    print(pixValEllipseLB);
    let pixValWalls = maze.get(20, 20);
    print(pixValWalls);
    
    // print statements to test if it works
    if (pixValEllipseRT === pixValWalls) {
      print("success RT");
    } else if (pixValEllipseRB === pixValWalls) {
      print("success RB");
    } else if (pixValEllipseLT === pixValWalls) {
      print("success LT");
    } else if (pixValEllipseLB === pixValWalls) {
      print("success LB");
    }
  }
}
