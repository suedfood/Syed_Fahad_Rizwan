// declaring global variables

//set for each person
let baseheight = 0;

// coordinates and lengths
let xpos = 0;
let ypos = 100;
let baloonx = 0;
let baloony = 0;
let x = 400;
let y = 0;

// speeds and accelerations
let airspeed;
let xspeed = 0;
let yspeed = 0;
let xbirdspeed = 2;
let ybirdspeed = 2;
let xacc = 0;
let yacc = 0;

// arduino data
let serial;
let dataString;
let splitString = [0, 0, 1, 0];

// gravity and noise
let air = 0.0;
let g = 1;
let n;

// sprites and backgrounds
let rows = 3;
let col = 8;
let birds = [];
let sprites = [];
let imagePart;
let sky = [];
let bgcount = 0;

// birds
let leftbird = [];
let rightbird = [];
let birdleft;
let birdright;
let birdcount = 0;
let w, h;
let numbird;

// health
let health = 100;

// yelp review counters
let yelpCounterPos = 0;
let yelpCounterBird = 0;
let yelpCounterTime = 0;

// yelp review scenario text
let timetext;
let birdtext;
let boundstext;
let raintext;

// rain
let r;
let rain;
let rains = [];
let raincount = 0;

let pixelFont;

// loading assets
function preload() {
  pixelBal = loadImage("Assets/balloon.png");
  pixelBalFire = loadImage("Assets/fireballoon.png");
  pixelStart = loadImage("Assets/startpage.png");
  sprite = loadImage("Assets/birdsprite.png");
  timeOut = loadImage("Assets/Belp.png");
  outBound = loadImage("Assets/outBound.png");
  birdleft = loadImage("Assets/bird-left.png");
  birdright = loadImage("Assets/bird-right.png");
  pixelFont = loadFont("Assets/pixelmix.ttf");

  // background transition
  for (i = 0; i <= 19; i++) {
    sky[i] = loadImage("Assets/background" + i + ".png");
  }
  for (i = 0; i < 3; i++) {
    rains[i] = loadImage("Assets/rain" + i + ".png");
  }
}

// setup function
function setup() {
  // canvas creation
  createCanvas(800, 720);
  imageMode(CENTER);
  rectMode(CENTER);

  // declaring width and height for bird spritesheet
  w = birdleft.width;
  h = birdleft.height / 5;

  // loop through the spritesheet and upload images into the sprites array
  for (let i = 0; i < 1; i++) {
    for (let j = 0; j < 5; j++) {
      let spriteSmall = birdleft.get(i * w, j * h, w, h);
      leftbird.push(spriteSmall);
      let sprite2Small = birdright.get(i * w, j * h, w, h);
      rightbird.push(sprite2Small);
    }
  }

  //rain
  rain = floor(random(0, 2));
  if (rain == 0) {
    r = 0;
  } else if (rain == 1) {
    r = r - 1;
  }

  // birds creation
  numbird = floor(random(2, 5));
  for (let i = 0; i < numbird; i++) {
    birds[i] = new bird();
  }
}

function draw() {
  // start switch condition
  let mode = splitString[2];
  if (mode == 1) {
    image(pixelStart, width / 2, height / 2, width, height);
    textFont(pixelFont);
    textSize(25);
    fill(114, 96, 178)
    if (frameCount %50  <45 ){
      text("PRESS TO START",width/2-120,470)
    }
    baseheight = splitString[3];
    print(splitString[3]);

    // game begins
  } else {
    if (frameCount % 125 == 0) {
      bgcount++;
    }
    if (bgcount > 19) {
      belp();
    } else {
      image(sky[bgcount], 400, 360, width, height);
      if (frameCount % 10 == 0) {
        raincount = (raincount + 1) % 3;
      }

      if (rain == 1) {
        image(rains[raincount], 400, 360, width, height);
        startgame();
      }
      if (rain == 0) {
        startgame();
      }
    }
  }
}
function startgame() {
  // birds initialization
  for (let i = 0; i < numbird; i++) {
    birds[i].drawBird();
    birds[i].moveBird();
  }

  // bird collision detection
  for (let i = 0; i < numbird; i++) {
    distanceX = dist(baloonx, baloony, int(birds[i].x), int(birds[i].y));

    // health decrement upon collision
    if (distanceX < 100) {
      health = health - 2;
    }

    // balloon on fire
    if (health <= 0) {
      g = g - 0.5;

      // yelp bird counter update
      yelpCounterBird = 2;
      // yelp bird counter update
    } else if (health < 100) {
      yelpCounterBird = 1;
    }
  }

  // balloon control input
  xposr = map(splitString[1], 0, 550, 0, 10);
  xposl = map(splitString[0], 0, 550, 0, 10);

  // ultrasonic jump callibration
  if (splitString[3] > baseheight + 5) {
    y = y - 2;
  }
  if (splitString[3] > baseheight + 20) {
    y = y - 3;
  } else {
    y = y;
  }

  // gravity and noise
  g = g - 1;
  baloonx = x - n / 3;
  baloony = y - g / 2;
  xacc = xposr - xposl;
  xspeed = xspeed + xacc;
  x = 400 + xspeed;
  air = air + 0.02;
  n = noise(air) * width;

  // balloon and burning balloon condition
  if (health >= 0) {
    image(pixelBal, baloonx, baloony, 150, 180);
  } else {
    image(pixelBalFire, baloonx, baloony, 150, 180);
  }

  // for yelp review time counter
  if (bgcount < 5) {
    yelpCounterTime = 1;
  } else if (bgcount < 10) {
    yelpCounterTime = 2;
  } else {
    yelpCounterTime = 3;
  }

  // boundary detection

  // right
  if (baloonx > width + 75) {
    yelpCounterPos = 1;
    image(outBound, width - 100, height - 650, 150, 100);
  }
  // down
  if (baloony > height + 75) {
    belp();
  }
  // left
  if (baloonx < -75) {
    yelpCounterPos = 1;
    image(outBound, width - 100, height - 650, 150, 100);
  }
  // up
  if (baloony < -75) {
    yelpCounterPos = 1;
    image(outBound, width - 100, height - 650, 150, 100);
  }
}

function belp() {

  // raintext
  if (rain == 0) {
    raintext = "";
  } else {
    raintext =
      "It was raining the whole time we got completely soaked and my $1000 camera got destroyed.  ";
  }

  // birdtext
  if (yelpCounterBird == 0) {
    birdtext =
      "It was so beautiful and peaceful. We saw so many cute birds. Luckily, our main man was able to steer us away. ";
  } else if (yelpCounterBird == 1) {
    birdtext =
      "Dude, I loved it. Would be better if our guy kept us away from the birds. My kids were scared. ";
  } else {
    birdtext =
      "Bruh are you kidding me? The birds were horrific and kept bumping into us. Our balloon was on fire and I almost died. Wouldn’t recommend. ";
  }

  // timetext
  if (yelpCounterTime == 1) {
    timetext =
      " LOL it was too short. Waste of money. A bunch of scammers operating this balloon. ";
  } else if (yelpCounterTime == 2) {
    timetext =
      "Just the right length: not long and not short. Enjoyed that part quite a bunch. ";
  } else {
    timetext =
      "Wth? It went on forever. One of my kids pooped his pants. Poor time management by these inexperienced people. I thought I would die there. Will never go again. ";
  }

  // boundstext
  if (yelpCounterPos == 0) {
    boundstext = "We remained on the track. Quite fun! ";
  } else {
    boundstext =
      "OOF our dude kept on detracting. Beneath us was a fast flowing river. I thought I’d die. Deadly track. ";
  }
  
  // final belp review page
  image(timeOut, width / 2, height / 2, width, height);
  fill(114, 96, 178)
  textFont(pixelFont);
  textSize(20);
  textLeading(30);
  textWrap(WORD);
  textAlign(LEFT);
  text(timetext + birdtext + raintext + boundstext, 540, 465, 480, 450);
}

// class construction
class bird {
  constructor() {
    this.x = random(800);
    this.y = random(720);
    this.xspeed = random(-7, 7);
    this.yspeed = random(-7, 7);
    this.count = 0;
  }

  drawBird() {
    imageMode(CENTER);
    if (frameCount % 5 == 0) {
      this.count = (this.count + 1) % 5;
    }
    if (this.x < 800 / 2) {
      image(leftbird[this.count], this.x, this.y, 65, 60);
    } else if (this.x > 800 / 2) {
      image(rightbird[this.count], this.x, this.y, 65, 60);
    }
  }

  moveBird() {
    this.x = this.x + this.xspeed;
    this.y = this.y + this.yspeed;

    if (this.y > 720 || this.y < 0) {
      this.yspeed = -1 * this.yspeed;
    } else if (this.x > 800 || this.x < 0) {
      this.xspeed = -1 * this.xspeed;
    }
  }
}
