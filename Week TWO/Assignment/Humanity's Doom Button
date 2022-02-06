    https://editor.p5js.org/suedfood/sketches/KtTAtIPKy
    
    // press and keep holding the red button to doom humanity
    
    let xPos = 0;
    let yPos = 0;
    let eHealth = 1000;

    function setup() {
    createCanvas(800, 800);
    }

    function draw() {
    background(0); // black space

    // initial bombardment
    if (
    mouseIsPressed &&
    mouseX > 700 &&
    mouseX < 750 &&
    mouseY > 50 &&
    mouseY < 100 &&
    eHealth > 500
    ) {
    
    // stars
    fill(random(200, 255));
    ellipse(200, 470, random(3, 8), random(3, 8));
    ellipse(100, 300, random(3, 8), random(3, 8));
    ellipse(700, 300, random(3, 8), random(3, 8));
    ellipse(500, 400, random(3, 8), random(3, 8));
    ellipse(300, 250, random(3, 8), random(3, 8));
    ellipse(50, 700, random(3, 8), random(3, 8));
    ellipse(750, 650, random(3, 8), random(3, 8));

    // comets
    fill(random(200, 255));
    stroke(random(200, 255));
    strokeWeight(random(3, 10));
    line(-500 + xPos, -500 + yPos, -460 + xPos, -450 + yPos);

    //alien & saucer
    stroke(0);
    strokeWeight(1);
    fill(212, 249, 250); // light blue
    arc(400, 100, 100, 100, 0, PI * 2); // alien saucer top
    fill(230, 191, 108); // skin
    ellipse(400, 100, 50, 70); // alien head
    fill(255); // white
    ellipse(390, 85, 10, 20); // alien left eye
    fill(0); // black
    ellipse(390, 90, 5, 10); // alien left eyeball
    stroke(0);
    strokeWeight(1);
    fill(255); // white
    ellipse(410, 85, 10, 20); // alien right eye
    fill(0); // black
    ellipse(410, 90, 5, 10); // alien right eyeball
    arc(400, 100, 10, 5, 0, PI); // alien smile
    noStroke();
    fill(200); // gray
    arc(400, 130, 300, 50, 0, PI * 2); // alien saucer bottom

    // laser beam
    for (i = 155; i < height; i = i + 1) {
    fill(250, 50, 50);
    ellipse(width / 2, i, random(0, 100), random(0, 5)); }

    // shaking earth body
    fill(35, 78, 219);
    ellipse(random(380, 410), random(790, 800), 600, 600);

    // earth land
    fill(56, 135, 24);
    noStroke();
    quad(
    random(190, 210),
    700,
    random(190, 210),
    900,
    random(590, 610),
    800,
    random(290, 310),
    600
    );

    // earth ice
    fill(245);
    noStroke();
    quad(
    random(490, 510),
    530,
    random(390, 410),
    600,
    random(490, 510),
    620,
    random(540, 560),
    600
    );

    // earth explosions
    noStroke();
    fill(random(240, 255), random(100, 150), random(0, 100));
    ellipse(random(100, 800), random(500, 800), random(100, 200));
    ellipse(random(100, 800), random(500, 800), random(100, 200));
    ellipse(random(100, 800), random(500, 800), random(100, 200));

    // moon
    fill(220);
    ellipse(0, 0, 350, 350);

    // variable manipulation
    eHealth = eHealth - 2;
      
    }
  
    // cracked destroyed earth
      
    else if (
    mouseIsPressed &&
    mouseX > 700 &&
    mouseX < 750 &&
    mouseY > 50 &&
    mouseY < 100 &&
    eHealth <= 500 &&
    eHealth > 0
    ) {
    
    // stars
    fill(random(200, 255));
    ellipse(200, 470, random(3, 8), random(3, 8));
    ellipse(100, 300, random(3, 8), random(3, 8));
    ellipse(700, 300, random(3, 8), random(3, 8));
    ellipse(500, 400, random(3, 8), random(3, 8));
    ellipse(300, 250, random(3, 8), random(3, 8));
    ellipse(50, 700, random(3, 8), random(3, 8));
    ellipse(750, 650, random(3, 8), random(3, 8));

    // comets
    fill(random(200, 255));
    stroke(random(200, 255));
    strokeWeight(random(3, 10));
    line(-500 + xPos, -500 + yPos, -460 + xPos, -450 + yPos);

    // alien & saucer
    stroke(0);
    strokeWeight(1);
    fill(212, 249, 250); // light blue
    arc(400, 100, 100, 100, 0, PI * 2); // alien saucer top
    fill(230, 191, 108); // skin
    ellipse(400, 100, 50, 70); // alien head
    fill(255); // white
    ellipse(390, 85, 10, 20); // alien left eye
    fill(0); // black
    ellipse(390, 90, 5, 10); // alien left eyeball
    stroke(0);
    strokeWeight(1);
    fill(255); // white
    ellipse(410, 85, 10, 20); // alien right eye
    fill(0); // black
    ellipse(410, 90, 5, 10); // alien right eyeball
    arc(400, 100, 10, 5, 0, PI); // alien smile
    noStroke();
    fill(200); // gray
    arc(400, 130, 300, 50, 0, PI * 2); // alien saucer bottom

    // laser beam
    for (i = 155; i < height; i = i + 1) {
    fill(250, 50, 50);
    ellipse(width / 2, i, random(0, 100), random(0, 5));}

    // earth body
    fill(random(20, 60), random(20, 45), random(20, 40));
    ellipse(400, 800, 600, 600);

    // cracks
    stroke(214, random(60, 160), 41);
    strokeWeight(random(5, 10));
    line(300, 700, 400, 800);
    line(300, 700, 520, 600);
    line(520, 600, 400, 503);
    line(300, 700, 270, 534);
    line(300, 700, 150, 800);
    line(300, 700, 190, 650);
    line(190, 650, 130, 680);
    line(190, 650, 180, 600);
    line(520, 600, 650, 800);
    line(520, 600, 500, 800);
    line(520, 600, 560, 550);

    // ashes
    noStroke();
    fill(random(240, 255), random(100, 150), random(3, 5));
    ellipse(random(100, 800), random(500, 800), random(5, 10));
    ellipse(random(100, 800), random(500, 800), random(8, 15));
    ellipse(random(100, 800), random(500, 800), random(10, 20));

    // moon
    noStroke();
    fill(220);
    ellipse(0, 0, 350, 350);

    // variable manipulation
    eHealth = eHealth - 2;
      
    }
    
    // massive explosive disappearance

    else if (
    mouseIsPressed &&
    mouseX > 700 &&
    mouseX < 750 &&
    mouseY > 50 &&
    mouseY < 100 &&
    eHealth <= 0 &&
    eHealth >= -150
    ) {
    
    // stars
    fill(random(200, 255));
    ellipse(200, 470, random(3, 8), random(3, 8));
    ellipse(100, 300, random(3, 8), random(3, 8));
    ellipse(700, 300, random(3, 8), random(3, 8));
    ellipse(500, 400, random(3, 8), random(3, 8));
    ellipse(300, 250, random(3, 8), random(3, 8));
    ellipse(50, 700, random(3, 8), random(3, 8));
    ellipse(750, 650, random(3, 8), random(3, 8));

    // comets
    fill(random(200, 255));
    stroke(random(200, 255));
    strokeWeight(random(3, 10));
    line(-500 + xPos, -500 + yPos, -460 + xPos, -450 + yPos);

    // alien & saucer
    stroke(0);
    strokeWeight(1);
    fill(212, 249, 250); // light blue
    arc(400, 100, 100, 100, 0, PI * 2); // alien saucer top
    fill(230, 191, 108); // skin
    ellipse(400, 100, 50, 70); // alien head
    fill(255); // white
    ellipse(390, 85, 10, 20); // alien left eye
    fill(0); // black
    ellipse(390, 90, 5, 10); // alien left eyeball
    stroke(0);
    strokeWeight(1);
    fill(255); // white
    ellipse(410, 85, 10, 20); // alien right eye
    fill(0); // black
    ellipse(410, 90, 5, 10); // alien right eyeball
    arc(400, 100, 10, 5, 0, PI); // alien smile
    noStroke();
    fill(200); // gray
    arc(400, 130, 300, 50, 0, PI * 2); // alien saucer bottom

    // laser beam
    for (i = 155; i < height; i = i + 1) {
    fill(250, 50, 50);
    ellipse(width / 2, i, random(0, 100), random(0, 5)); }

    // moon
    noStroke();
    fill(220);
    ellipse(0, 0, 350, 350);

    // variable manipulation
    eHealth = eHealth - 2;

    // explosions
    noStroke();
    fill(214, random(60, 160), 41);
    ellipse(random(100, 800), random(500, 800), random(300, 800));
    ellipse(random(100, 800), random(500, 800), random(200, 600));
    ellipse(random(100, 800), random(500, 800), random(10, 100));
      
    } 
      
    // empty laser shooting
    
    else if (
    mouseIsPressed &&
    mouseX > 700 &&
    mouseX < 750 &&
    mouseY > 50 &&
    mouseY < 100 &&
    eHealth <= -150
    ) {
    
    // stars
    fill(random(200, 255));
    ellipse(200, 470, random(3, 8), random(3, 8));
    ellipse(100, 300, random(3, 8), random(3, 8));
    ellipse(700, 300, random(3, 8), random(3, 8));
    ellipse(500, 400, random(3, 8), random(3, 8));
    ellipse(300, 250, random(3, 8), random(3, 8));
    ellipse(50, 700, random(3, 8), random(3, 8));
    ellipse(750, 650, random(3, 8), random(3, 8));

    // comets
    fill(random(200, 255));
    stroke(random(200, 255));
    strokeWeight(random(3, 10));
    line(-500 + xPos, -500 + yPos, -460 + xPos, -450 + yPos);

    // alien & saucer
    stroke(0);
    strokeWeight(1);
    fill(212, 249, 250); // light blue
    arc(400, 100, 100, 100, 0, PI * 2); // alien saucer top
    fill(230, 191, 108); // skin
    ellipse(400, 100, 50, 70); // alien head
    fill(255); // white
    ellipse(390, 85, 10, 20); // alien left eye
    fill(0); // black
    ellipse(390, 90, 5, 10); // alien left eyeball
    stroke(0);
    strokeWeight(1);
    fill(255); // white
    ellipse(410, 85, 10, 20); // alien right eye
    fill(0); // black
    ellipse(410, 90, 5, 10); // alien right eyeball
    arc(400, 100, 10, 5, 0, PI); // alien smile
    noStroke();
    fill(200); // gray
    arc(400, 130, 300, 50, 0, PI * 2); // alien saucer bottom

    // laser beam
    for (i = 155; i < height; i = i + 1) {
      fill(250, 50, 50);
      ellipse(width / 2, i, random(0, 100), random(0, 5));
    }

    // moon
    noStroke();
    fill(220);
    ellipse(0, 0, 350, 350);
    
    } 
    
    // status quo
    
    else {
    
    // stars
    fill(random(200, 255));
    ellipse(200, 470, random(3, 8), random(3, 8));
    ellipse(100, 300, random(3, 8), random(3, 8));
    ellipse(700, 300, random(3, 8), random(3, 8));
    ellipse(500, 400, random(3, 8), random(3, 8));
    ellipse(300, 250, random(3, 8), random(3, 8));
    ellipse(50, 700, random(3, 8), random(3, 8));
    ellipse(750, 650, random(3, 8), random(3, 8));

    // comets
    fill(random(200, 255));
    stroke(random(200, 255));
    strokeWeight(random(3, 10));
    line(-500 + xPos, -500 + yPos, -460 + xPos, -450 + yPos);

    // alien & saucer
    stroke(0);
    strokeWeight(1);
    fill(212, 249, 250); // light blue
    arc(400, 100, 100, 100, 0, PI * 2); // alien saucer top
    fill(230, 191, 108); // skin
    ellipse(400, 100, 50, 70); // alien head
    fill(255); // white
    ellipse(390, 85, 10, 20); // alien left eye
    fill(0); // black
    ellipse(390, 90, 5, 10); // alien left eyeball
    stroke(0);
    strokeWeight(1);
    fill(255); // white
    ellipse(410, 85, 10, 20); // alien right eye
    fill(0); // black
    ellipse(410, 90, 5, 10); // alien right eyeball
    arc(400, 100, 10, 5, 0, PI); // alien smile
    noStroke();
    fill(200); // gray
    arc(400, 130, 300, 50, 0, PI * 2); // alien saucer bottom

    // earth body
    fill(35, 78, 219);
    ellipse(400, 800, 600, 600);

    // earth land
    fill(56, 135, 24);
    noStroke();
    quad(200, 700, 200, 900, 600, 800, 300, 600);

    // earth ice
    fill(245);
    noStroke();
    quad(500, 530, 400, 600, 500, 620, 550, 600);

    // moon
    noStroke();
    fill(220);
    ellipse(0, 0, 350, 350);
    }

    // button and supporting arrow
    fill(250, 50, 50);
    rect(700, 50, 50, 50);
    stroke(255);
    strokeWeight(5);
    fill(255);
    line(725, 130, 725, 220);
    triangle(710, 150, 725, 130, 740, 150);

    // variable manipulation
    xPos = xPos + random(3, 7);
    yPos = yPos + random(3, 7);
    }
