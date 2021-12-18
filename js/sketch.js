let screenshots = [];
let scrimgs = [];
let scrNumber = 0;
var clicks = 0;
let messages = [];
let renderer;
var sketchWidth;

function preload() {
  for (let i = 0; i < 25; i++) {
    screenshots[i] = loadImage(
      "./assets/screenshots/Screenshot (" + i + ").png"
    );
  }
  console.log(screenshots.length + "items");
}

function setup() {
  sketchWidth = document.getElementById("sketch-holder").offsetWidth;

  // console.log("sketch width " + sketchWidth);
  let renderer = createCanvas(sketchWidth, windowHeight);
  renderer.parent("sketch-holder");
  renderer.style("display", "block");
  background("black");

  // console.log("renderer width " + renderer.width);
  renderer.mousePressed(canvasClicked);
  backButton = createButton("back");
  // backButton.style('background-color', 255);
  backButton.position(100, 2500);
  console.log("Button pos " + backButton.x);

  backButton.mousePressed(spliceScr);
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
  textSize(60);
  textAlign(CENTER, CENTER);
  text("Click to see", 0, 0);
  imageMode(CENTER);

  for (let i = 0; i < scrimgs.length; i++) {
    scrimgs[i].show();
  }
}

function spliceScr() {
  let i = scrimgs.length - 1;
  scrimgs.splice(i, 1);
  console.log("i " + i);
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
