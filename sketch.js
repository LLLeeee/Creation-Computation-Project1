let value = 0;
let img = [];
let randImage = 0;
let randomImage = false
let randColour
let threshold = 60;
let h = 1920;
let w = 1080;
let scaleFactor = 0.9;


function preload() {
  // for (let i = 0; i < 9; i++) {
  // img[i] = loadImage('abc/' + i + '.jpg')

  img[0] = loadImage('abc/0.png');
  img[1] = loadImage('abc/1.png');
  img[2] = loadImage('abc/2.png');
  img[3] = loadImage('abc/3.png');
  img[4] = loadImage('abc/4.png');
  img[5] = loadImage('abc/5.png');
  img[6] = loadImage('abc/5.png');
  img[7] = loadImage('abc/7.png');
  img[8] = loadImage('abc/8.png');
  img[9] = loadImage('abc/9.png');
  img[10] = loadImage('abc/10.png');
  img[11] = loadImage('abc/11.png');
  img[12] = loadImage('abc/12.png');
  img[13] = loadImage('abc/13.png');
  img[14] = loadImage('abc/14.png');
  img[15] = loadImage('abc/15.png');
  img[16] = loadImage('abc/16.png');
  img[17] = loadImage('abc/17.png');
  img[18] = loadImage('abc/18.png');

}

function setup() {
  createCanvas(windowWidth, windowHeight);
  frameRate(10);
  background('#e9af28');
  imageMode(CENTER)
  textSize(60);
  setShakeThreshold(threshold);
}

function draw() {
  let colours = ['#e9af28', '#101627', '#fb5444', '#ab987d'];
  let colour = random(colours);
  if (randomImage) {
    randImage = int(random(1, 18));
    background(colour);
  }
  image(img[randImage], width / 2, height / 2, w * scaleFactor, h * scaleFactor);
  // text(randImage, width / 2, 100);
  // fill(value);
  // rect(25, 25, 50, 50);
}

function touchStarted() {
  randomImage = !randomImage
}

// function deviceShaken() {
//   randomImage = !randomImage
//   value = value + 5;
//   if (value > 255) {
//     value = 0;
//   }
//   setShakeThreshold(threshold);
// }

// function keyPressed() {
//   randomImage = !randomImage
//   // randImage = int(random(1, 3));
//   // if (keyCode === LEFT_ARROW) {
//   //   randImage = 0;
//   // } else if (keyCode === RIGHT_ARROW) {
//   //   randImage = 1;
//   // }
// }