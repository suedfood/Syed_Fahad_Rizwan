fullscreen game - https://editor.p5js.org/suedfood/full/8e4CWwhXO

p5js editor - https://editor.p5js.org/suedfood/sketches/8e4CWwhXO


// LT = left top
// LB = left bottom
// RT = right top
// RB = right bottom

// declaring global variables
let array = [];
let mode = 0;
let backStorySound = 0;
let scoreSound = 0;

// loading all assets
function preload() {
  maze = loadImage("Assets/maze_final.png");
  font = loadFont("Assets/Starjout.ttf");
  font2 = loadFont("Assets/Roboto-Medium.ttf");
  score = loadSound("Assets/score.mp3");
  instruction1 = loadImage("Assets/Instruction_1.png");
  instruction2 = loadImage("Assets/Instruction_2.png");
  instruction3 = loadImage("Assets/Final_Instructions.png");
  story1 = loadImage("Assets/Story 1.0.png");
  story2 = loadImage("Assets/Story 2.0.png");
  story3 = loadImage("Assets/Story 3.0.png");
  story4 = loadImage("Assets/Story 4.0.png");
  story5 = loadImage("Assets/Story 5.0.png");
  story6 = loadImage("Assets/Story 6.0 (1).png");
  story7 = loadImage("Assets/Story 7.0.png");
  story8 = loadImage("Assets/Story 8.0.png");
  story9 = loadImage("Assets/Story 9.0 (1).png");
  humanWin = loadImage("Assets/humanWinX.png");
  humanLost = loadImage("Assets/humanLose.png");
  backstory = loadSound("Assets/backstory.mp3");
}

// forming 1200 X 1200 canvas and callibrating settings
function setup() {
  createCanvas(1200, 1200);
  rectMode(CENTER);
  angleMode(DEGREES);
}

// displaying the backstory, instructions, and game
function draw() {
  clear();
  if (mode == 0) {
    image(story1, 0, 0, width, height);
  } else if (mode == 1) {
    image(story2, 0, 0, width, height);
  } else if (mode == 2) {
    image(story3, 0, 0, width, height);
  } else if (mode == 3) {
    image(story4, 0, 0, width, height);
  } else if (mode == 4) {
    image(story5, random(0, 10), random(0, 10), width, height);
  } else if (mode == 5) {
    image(story6, 0, 0, width, height);
  } else if (mode == 6) {
    image(story7, 0, 0, width, height);
  } else if (mode == 7) {
    image(story8, 0, 0, width, height);
  } else if (mode == 8) {
    image(story9, 0, random(0, 10), width, height);
  } else if (mode == 9) {
    fill(255);
    image(instruction1, 0, 0, width, height);
    rect(600, 415, 200, 200, 20);
    backstory.stop();
  } else if (mode == 10) {
    image(instruction2, 0, 0, width, height);
  } else if (mode == 11) {
    image(instruction3, 0, 0, width, height);
  } else {
    image(maze, 0, 0, width, height);
    // forming yellow rotating rectangular obstacles
    push();
    noStroke();
    fill(255, 255, 3);
    translate(width / 2, height / 2);
    rotate(frameCount / 3);
    rect(0, 0, 400, 40);
    fill(0);
    ellipse(0, 0, 20, 20);
    fill(255, 255, 3);
    rotate((sin(frameCount / 5) * frameCount) / 15);
    rect(-300, 0, 50, 40);
    pop();
    // prints on-screen text
    fill(255, 255, 255);
    textSize(50);
    textFont(font2);
    text("CLICK TO", 40, 50);
    text("START", 40, 100);
    fill(250, 250, 250);
    textFont(font);
    textSize(30 * 2);
    text("END", 415 * 2, 30 * 2);
    push();
    // yellow rotating elliptical obstacle
    translate(width, height / 2);
    rotate((sin(frameCount / 5) * frameCount) / 5);
    noStroke();
    fill(255, 255, 3);
    ellipse(random(-50, -100), 0, 30 * 2, 30 * 2);
    line(100, 0, -100, 0);
    pop();
    // health regenerative obstacle
    noStroke();
    fill(100, 250, 100);

    health_ellipse = ellipse(360 * 2, 560 * 2, 45 * 2, 45 * 2);
    // for loop to call all methods from class
    for (let i = 0; i < array.length % 2; i++) {
      array[i].drawShip();
      array[i].moveShip();
      array[i].detectWalls();
      array[i].increaseHealth();
      array[i].detectObstacles();
      array[i].detectWinLoss();
    }
  }
}

// ship formation upon pressing mouse
function mousePressed() {
  scoreSound = scoreSound + 1;
  if (scoreSound == 9) {
    score.loop();
  }
  if (backStorySound == 0) {
    backStorySound = backStorySound + 1;
    backstory.loop();
  }
  if (mode < 12) {
    mode = mode + 1;
  } else if (mode == 12) {
    let ship = new spaceship(215 * 2, 25 * 2, this.color, 40 * 2);
    array.push(ship);
    mode = mode + 1;
  }
}

// resets game
function resetGame() {
  array = [];
  mode = 12;
  backStorySound = 1;
  scoreSound = 8;
  for (let i = 0; i < array.length % 2; i++) {
    array[i].reset();
  }
}

function keyPressed() {
  if (keyCode == ENTER) {
    resetGame();
  }
}

// spacepod formation class
class spaceship {
  constructor(xPos, yPos, color, width) {
    this.x = xPos;
    this.y = yPos;
    this.color = color;
    this.width = width;
  }

  // draws ship and initiates gravity
  drawShip() {
    noStroke();
    fill(255);
    this.color = rect(this.x, this.y, this.width, this.width, 10);
    this.y = this.y + 1;
  }

  // controls the ship
  moveShip() {
    if (keyCode == UP_ARROW) {
      this.y = this.y - 2.5;
    } else if (keyCode == DOWN_ARROW) {
      this.y = this.y + 2;
    } else if (keyCode == LEFT_ARROW) {
      this.x = this.x - 2;
    } else if (keyCode == RIGHT_ARROW) {
      this.x = this.x + 2;
    }
  }

  // detects walls using pixel value and decreases health
  detectWalls() {
    if (this.width >= 0) {
      this.width = this.width - 0.025 * 2;
    }
    let pixValShipRT = this.color.get(
      this.x + this.width / 2,
      this.y - this.width / 2
    );
    let pixValShipRB = this.color.get(
      this.x + this.width / 2,
      this.y + this.width / 2
    );
    let pixValShipLT = this.color.get(
      this.x - this.width / 2,
      this.y - this.width / 2
    );
    let pixValShipLB = this.color.get(
      this.x - this.width / 2,
      this.y + this.width / 2
    );
    let pixValShipL = this.color.get(this.x - this.width / 2, this.y);
    let pixValShipR = this.color.get(this.x + this.width / 2, this.y);
    let pixValShipB = this.color.get(this.x, this.y + this.width / 2);
    let pixValShipT = this.color.get(this.x, this.y - this.width / 2);
    let pixValWalls = maze.get(20, 20);

    if (pixValShipRT[0] === pixValWalls[0]) {
      if (this.width >= 0) {
        this.width = this.width - 1;
      }
    } else if (pixValShipRB[0] === pixValWalls[0]) {
      if (this.width >= 0) {
        this.width = this.width - 1;
      }
    } else if (pixValShipLT[0] === pixValWalls[0]) {
      if (this.width >= 0) {
        this.width = this.width - 1;
      }
    } else if (pixValShipLB[0] === pixValWalls[0]) {
      if (this.width >= 0) {
        this.width = this.width - 1;
      }
    } else if (pixValShipB[0] === pixValWalls[0]) {
      if (this.width >= 0) {
        this.width = this.width - 1;
      }
    } else if (pixValShipT[0] === pixValWalls[0]) {
      if (this.width >= 0) {
        this.width = this.width - 1;
      }
    } else if (pixValShipL[0] === pixValWalls[0]) {
      if (this.width >= 0) {
        this.width = this.width - 1;
      }
    } else if (pixValShipR[0] === pixValWalls[0]) {
      if (this.width >= 0) {
        this.width = this.width - 1;
      }
    }
  }
  // detects healing pod using pixel value and increases health
  increaseHealth() {
    let pixValShipCENTER = this.color.get(this.x, this.y);
    let pixValShipRT = this.color.get(
      this.x + this.width / 2,
      this.y - this.width / 2
    );
    let pixValShipRB = this.color.get(
      this.x + this.width / 2,
      this.y + this.width / 2
    );
    let pixValShipLT = this.color.get(
      this.x - this.width / 2,
      this.y - this.width / 2
    );
    let pixValShipLB = this.color.get(
      this.x - this.width / 2,
      this.y + this.width / 2
    );
    let pixValShipL = this.color.get(this.x - this.width / 2, this.y);
    let pixValShipR = this.color.get(this.x + this.width / 2, this.y);
    let pixValShipB = this.color.get(this.x, this.y + this.width / 2);
    let pixValShipT = this.color.get(this.x, this.y - this.width / 2);
    let healthPixValue = health_ellipse.get(360 * 2, 560 * 2);

    if (pixValShipRT[0] === healthPixValue[0]) {
      this.width = this.width + 1;
    } else if (pixValShipRB[0] === healthPixValue[0]) {
      this.width = this.width + 1;
    } else if (pixValShipLT[0] === healthPixValue[0]) {
      this.width = this.width + 1;
    } else if (pixValShipLB[0] === healthPixValue[0]) {
      this.width = this.width + 1;
    } else if (pixValShipCENTER[0] === healthPixValue[0]) {
      this.width = this.width + 1;
    } else if (pixValShipL[0] === healthPixValue[0]) {
      this.width = this.width + 1;
    } else if (pixValShipR[0] === healthPixValue[0]) {
      this.width = this.width + 1;
    } else if (pixValShipB[0] === healthPixValue[0]) {
      this.width = this.width + 1;
    } else if (pixValShipT[0] === healthPixValue[0]) {
      this.width = this.width + 1;
    }
  }

  // detects obstacles using pixel value and destroys the pod
  detectObstacles() {
    let pixValShipRT = this.color.get(
      this.x + this.width / 2,
      this.y - this.width / 2
    );
    let pixValShipRB = this.color.get(
      this.x + this.width / 2,
      this.y + this.width / 2
    );
    let pixValShipLT = this.color.get(
      this.x - this.width / 2,
      this.y - this.width / 2
    );
    let pixValShipLB = this.color.get(
      this.x - this.width / 2,
      this.y + this.width / 2
    );
    let obstaclePixValue0 = 255;

    if (pixValShipRT[0] === obstaclePixValue0) {
      this.width = 0;
    } else if (pixValShipRB[0] === obstaclePixValue0) {
      this.width = 0;
    } else if (pixValShipLT[0] === obstaclePixValue0) {
      this.width = 0;
    } else if (pixValShipLB[0] === obstaclePixValue0) {
      this.width = 0;
    }
  }

  // detects win and loss and displays image upon successful detection
  detectWinLoss() {
    let pixValShipRT = this.color.get(
      this.x + this.width / 2,
      this.y - this.width / 2
    );
    let pixValShipRB = this.color.get(
      this.x + this.width / 2,
      this.y + this.width / 2
    );
    let pixValShipLT = this.color.get(
      this.x - this.width / 2,
      this.y - this.width / 2
    );
    let pixValShipLB = this.color.get(
      this.x - this.width / 2,
      this.y + this.width / 2
    );
    let winPixValue = 500;
    if (this.width <= 0) {
      fill(250, 250, 250);
      rect(0, 0, 2000, 2000);
      fill(0, 0, 0);
      image(humanLost, 0, 0, width, height);
      this.x = 580 * 2;
      this.y = 530 * 2;
      this.width = 0;
      score.stop();
    } else if (
      pixValShipRT[0] + pixValShipRT[1] == winPixValue &&
      this.width > 0
    ) {
      this.x = 440 * 2;
      this.y = 15 * 2;
      this.width = 20;
      fill(250, 250, 250);
      rect(0, 0, 20000, 20000);
      fill(0);
      image(humanWin, 0, 0, width, height);
      score.stop();
    } else if (
      pixValShipRB[0] + pixValShipRB[1] == winPixValue &&
      this.width > 0
    ) {
      this.x = 440 * 2;
      this.y = 15 * 2;
      this.width = 20;
      fill(250, 250, 250);
      rect(0, 0, 20000, 20000);
      fill(0);
      image(humanWin, 0, 0, width, height);
      score.stop();
    } else if (
      pixValShipLT[0] + pixValShipLT[1] == winPixValue &&
      this.width > 0
    ) {
      this.x = 440 * 2;
      this.y = 15 * 2;
      this.width = 20;
      fill(250, 250, 250);
      rect(0, 0, 20000, 20000);
      fill(0);
      image(humanWin, 0, 0, width, height);
      score.stop();
    } else if (
      pixValShipLB[0] + pixValShipLB[1] == winPixValue &&
      this.width > 0
    ) {
      this.x = 440 * 2;
      this.y = 15 * 2;
      this.width = 20;
      fill(250, 250, 250);
      rect(0, 0, 20000, 20000);
      fill(0);
      image(humanWin, 0, 0, width, height);
      score.stop();
    }
  }
  // resetting the constructors
  reset() {
    this.x = 430;
    this.y = 30;
    this.width = 80;
  }
}
