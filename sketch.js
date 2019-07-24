const mySoundModelURl = 'https://storage.googleapis.com/tm-speech-commands/airilove/model.json';
let mySoundModel;

var bgImg;
var groundImg;
var lostLabel;
var airi;
var y1 = 0;
var y2;
var z;
var myCanvas;
var scoreLabel;
var scoresLabel;
var score = 0;
var topScore;
var level = 0;

var airi_resting;
var airi_developed;
var airi_fly;

var scrollSpeed = 1;
var isMouseClicked = false;
var newGame = true;
var lost = false;

var results = [];

function preload(){
  mySoundModel = ml5.soundClassifier(mySoundModelURl);
  bgImg = loadImage("assets/bgr.png");
  groundImg = loadImage("assets/ground.png");
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
  image(bgImg, 0, y1, width, height);
  image(bgImg, 0, y2, width, height);
  image(groundImg, 0, z-300, width, 300);

  lostLabel.style('display', 'none');

  if (newGame || lost) {
    lostLabel.html(`SAY PLAY <br> TO PLAY`);
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
      lostLabel.html(`YOU LOST <br> SAY PLAY TO START OVER`);
      lostLabel.style('display', 'block');
    }
  } else {
    if(level == 1) {
      airi.changeAnimation('developed');
    }
    // if (mouseIsPressed) {
    // console.log('isMouseClicked: ', isMouseClicked)

    if (isMouseClicked) {
      scrollSpeed = 10;
      y1 += scrollSpeed;
      y2 += scrollSpeed;
      z += scrollSpeed;
      
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
      scrollSpeed = 1;
      y1 -= scrollSpeed;
      y2 -= scrollSpeed;
      
      if (y1 < -height){
        y1 = height;
      }
      if (y2 < -height){
        y2 = height;
      }
      score -= 3;
    }
  }

  if (topScore - Math.floor(score/100) >= 8) {
    if (!lost) {
      results.push(Math.floor(score/100))
    }
    lost = true;
    console.log("lost");
  }

  scoreLabel.html(`Score: ${Math.floor(score/100)}`);
  scoresOutput();
  drawSprites(airi);
}

function mouseClicked() {

  // if (lost || newGame) {
    // newGame = false;
    // lost = false
    // score = 0;
    // y1 = 0;
    // y2 = height;
    // z = height;
  // }
  isMouseClicked = true;
  setTimeout(() => {
    isMouseClicked = false;
  }, 700);
}

function scoresOutput() {
  var str = '&#x1f451; LEADERBOARD: &#x1f451; <br> <br>';

  for (var i = results.length-1; i >= 0; i--) {
    let index = i+1;
    if (results[i] == Math.max(...results)) {
      str += 'Human ' + index + ' &#x1f451;: ' + results[i] + '<br> <br>';
    } else {
      str += 'Human ' + index + ': ' + results[i] + '<br> <br>';
    }
  }

  scoresLabel.html(`${str}`);
}
