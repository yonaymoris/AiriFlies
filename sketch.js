const mySoundModelURl = 'https://storage.googleapis.com/tm-speech-commands/airilove/model.json';
let mySoundModel;

var myCanvas;

// labels, images & sprites
var bgImg;
var bgImg1, bgImg2, bgImg3;
var groundImg;
var lostLabel;
var rock;

var airi;
var airi_resting;
var airi_developed;
var airi_fly;

var scoreLabel;
var scoresLabel;

// positions
var y1 = 0;
var y2;
var z;

// positions for the rock

var y = [];
var x = [-250, -200, -100, -50];
var x_initial = [-250, -200, -100, -50];

var score = 0;
var topScore;
var level = 0;
var scrollSpeed = 1;

var isMouseClicked = false;
var newGame = true;
var lost = false;

var results = [];

function preload(){
  mySoundModel = ml5.soundClassifier(mySoundModelURl);
  bgImg1 = loadImage("assets/bgr1.png");
  bgImg2 = loadImage("assets/bgr2.png");
  bgImg3 = loadImage("assets/bgr3.png");
  groundImg = loadImage("assets/ground.png");
  rock = loadImage("assets/ghost.png");
}

function setup() { 
  mySoundModel.classify(gotResults);

  lostLabel = createDiv('YOU LOST');
  lostLabel.addClass('lost');

  scoreLabel = createDiv('...');
  scoreLabel.addClass('scores');
  scoreLabel.parent('#wrapper');

  scoresLabel = createDiv('SCORES: <br> <br> \n Human 3: 235 <br> <br> \n Human 2: 345 <br> <br> \n Human 1 &#x1f451;: 654 <br>');
  scoresLabel.addClass('leaderboard');
  scoresLabel.parent('#instruction');

  myCanvas = createCanvas(700, 790);
  myCanvas.parent('#wrapper');

  airi = createSprite(340, 434, 200, 200);
  // console.log(airi.position.x, airi.position.y);
  airi_resting = airi.addAnimation('resting', 'assets/airi_resting/frame1.png', 'assets/airi_resting/frame2.png', 'assets/airi_resting/frame3.png');
  airi_resting.offY = 440;
  airi_resting.offX = 340;

  airi_developed = airi.addAnimation('developed', 'assets/airi_developed/frame1.png', 'assets/airi_developed/frame2.png', 'assets/airi_developed/frame3.png');
  airi_developed.offY = 440;
  airi_developed.offX = 340;

  airi_fly = airi.addAnimation('fly', 'assets/airi_fly/frame1.png', 'assets/airi_fly/frame2.png', 'assets/airi_fly/frame3.png', 'assets/airi_fly/frame4.png', 'assets/airi_fly/frame5.png', 'assets/airi_fly/frame6.png');
  airi_fly.offY = 440;
  airi_fly.offX = 340;

  y2 = height;
  z = height;

  for (var i = 0; i < 4; i++) {
    y.push(Math.floor(Math.random()*height-height));
  }
} 

function gotResults(err, results) {
  if (err) console.log(err);
  if (results) {
    console.log(results);
    if (results[0].label === "Pew") {
      mouseClicked();
    }

    if (results[0].label === "Play" && (newGame || lost)) {
      newGame = false;
      lost = false;
      score = 0;
      y1 = 0;
      y2 = height;
      z = height;
      mouseClicked();
    }
  }
}

function draw() { 
  var i;

  if (Math.floor(score/100) < 50) {
    bgImg = bgImg1;
  } else if (Math.floor(score/100) >= 50 && Math.floor(score/100) < 120) {
    bgImg = bgImg2;
  } else {
    bgImg = bgImg3;
  }

  image(bgImg, 0, y1, width, height);
  image(bgImg, 0, y2, width, height);
  image(groundImg, 0, z-300, width, 300);

  for (i = 0; i < 4; i++) {
    image(rock, x[i], y[i], 90, 90);
  }

  lostLabel.style('display', 'none');

  if (newGame || lost) {
    // stay still if the game was lost or is new

    // label for a new game
    lostLabel.html(`SAY PLAY TO PLAY`);
    lostLabel.style('display', 'block');

    scrollSpeed = 0;
    y1 -= scrollSpeed;
    y2 -= scrollSpeed;
    z -= scrollSpeed;

    if (y1 < -height){
      y1 = height;
    }

    if (y2 < -height){
      y2 = height;
    }

    if (lost) {
      // use a different label is the game was lost
      lostLabel.html(`YOU LOST SAY PLAY TO START OVER`);
      lostLabel.style('display', 'block');
    }
  } else {
    if(level == 1) {
      airi.changeAnimation('developed');
    }

    if (isMouseClicked) {
      scrollSpeed = 10;
      y1 += scrollSpeed;
      y2 += scrollSpeed;
      z += scrollSpeed;

      for (i = 0; i < 4; i++) {
        y[i] += scrollSpeed;
      }
      
      if (y1 > height){
        y1 = -height;
      }
      if (y2 > height){
        y2 = -height;
      }
      score += 30;
      airi.changeAnimation('fly');
      level = 1;
      topScore = Math.floor(score/100);
    } else {

      // fall down if there is no action
      scrollSpeed = 1;
      y1 -= scrollSpeed;
      y2 -= scrollSpeed;
      z -= scrollSpeed;

      for (i = 0; i < 4; i++) {
        y[i] -= scrollSpeed;
      }
      
      if (y1 < -height){
        y1 = height;
      }
      if (y2 < -height){
        y2 = height;
      }
      score -= 3;
    }
  }

  for (i = 0; i < 4; i++) {
    if (x[i] >= width || y[i] >= height+200) {
      x[i] = x_initial[i];
      y[i] = Math.floor(Math.random()*height-height);
    }
  }

  for (i = 0; i < 4; i++) {
    x[i] += 3;
  }

  const ifLost = hitTheObject();
  if (topScore - Math.floor(score/100) >= 8 || ifLost) {
    if (!lost) {
      results.push(Math.floor(score/100))
    }
    lost = true;
    console.log("lost");
  }

  // top score label
  scoreLabel.html(`Score: ${Math.floor(score/100)}`);
  scoresOutput();
  drawSprites(airi);
}

function mouseClicked() {
  isMouseClicked = true;
  setTimeout(() => {
    isMouseClicked = false;
  }, 700);
}

function hitTheObject() {
  for (var i = 0; i < 4; i++) {
    if (x[i] > 260 && x[i] < 360 && y[i] < 450 && y[i] > 340) return true;
  }

  return false;
}

function scoresOutput() {
  var str = '&#x1f451; LEADERBOARD: &#x1f451; <br> <br>';
  var index;

  for (var j = 0; j < results.length; j++) {
    if (results[j] == Math.max(...results)) {
      index = j+1
      str += 'Human ' + index + ' &#x1f451;: ' + results[j] + '<br> <br> <br>';
    }
  }

  var limit = results.length;
  if (results.length > 11) limit = 11;
  for (var i = results.length-1; i >= results.length-limit; i--) {
    index = i+1;

    if (results[i] != Math.max(...results)) {
      str += 'Human ' + index + ': ' + results[i] + '<br> <br>';
    }
  }

  scoresLabel.html(`${str}`);
}
