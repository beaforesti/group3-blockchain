let screenshots = [];
let scrimgs = [];
let scrNumber = 0;
var clicks = 0;
let messages = [];
let renderer;
var sketchWidth;
let myFont;

function preload() {
  for (let i = 0; i < 25; i++) {
    screenshots[i] = loadImage(
      "./assets/screenshots/Screenshot (" + i + ").png"
    );
  }
  console.log(screenshots.length + "items");
  myFont = loadFont('font/ReadexPro-Regular.ttf');
}

function setup() {
  sketchWidth = document.getElementById("sketch-holder").offsetWidth;

  let renderer = createCanvas(sketchWidth, windowHeight);
  renderer.parent("sketch-holder");
  renderer.style("display", "block");
  background('#01f293');

  backButton = createButton("back");
  backButton.position(200, 3700);
  backButton.mousePressed(spliceScr);
  backButton.style('font-size', '18px');
  backButton.style('font', 'myFont');
  backButton.style('background-color', '#01f293');
  renderer.mousePressed(canvasClicked);
}
function spliceScr() {
  clicks--;
  let i = scrimgs.length - 1;
  scrimgs.splice(i, 1);
  console.log("i " + i);
}

function canvasClicked() {
  clicks++;
  let randomx = random(75);
  let randomy = random(75);
  //   let randomf = random(windowWidth / 4, (windowWidth / 4) * 3);
  //   let randomfy = random(150);
  if (clicks >= screenshots.length) {
    let f = screenshots[24];
    let final = new Screenshot(randomx, randomy, f);
    scrimgs.push(final);
  } else {
    let a = screenshots[clicks];

    let b = new Screenshot(randomx, randomy, a);
    scrimgs.push(b);
  }
  for (let i = 0; i < scrimgs.length; i++) {
    scrimgs[i].show();
  }
  console.log("scrimgs " + scrimgs.length);
}

function draw() {
  sketchWidth = document.getElementById("sketch-holder").offsetWidth;

  let renderer = createCanvas(sketchWidth, windowHeight);
  renderer.parent("sketch-holder");
  renderer.style("display", "block");

  background("black");

  translate(renderer.width / 2, renderer.height / 2.5);
  fill("white");
  textSize(35);
  textFont(myFont);
  textAlign(CENTER, CENTER);
  text("Click to see where 'sustainable' appears", 0, 0);
  imageMode(CENTER);

  for (let i = 0; i < scrimgs.length; i++) {
    scrimgs[i].show();
  }
}

class Screenshot {
  constructor(x, y, img) {
    this.x = x;
    this.y = y;
    this.screenshot = img;
  }

  show() {
    image(
      this.screenshot,
      this.x,
      this.y,
      this.screenshot.width / 2,
      this.screenshot.height / 2
    );
  }
}

class Message {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }
  show() {
    fill("red");
    ellipse(this.x, this.y, 200, 200);
  }
}

function myFunction() {
  console.log("ehi");
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
