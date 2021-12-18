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

function mousePressed() {
  clicks++;
  console.log(clicks);
  let randomx = random(75);
  let randomy = random(75);
  //   let randomf = random(windowWidth / 4, (windowWidth / 4) * 3);
  //   let randomfy = random(150);
  if (clicks >= screenshots.length) {
    let f = screenshots[24];
    let final = new Screenshot(randomx, randomy, f);
    console.log(final.x, final.y);
    scrimgs.push(final);
  } else {
    let a = screenshots[clicks];

    let b = new Screenshot(randomx, randomy, a);
    scrimgs.push(b);
  }
  for (let i = 0; i < scrimgs.length; i++) {
    scrimgs[i].show();
  }
}

function setup() {
  sketchWidth = document.getElementById("sketch-holder").offsetWidth;

  console.log("sketch width " + sketchWidth);
  let renderer = createCanvas(sketchWidth, windowHeight);
  renderer.parent("sketch-holder");
  renderer.style("display", "block");
  background("black");

  console.log("renderer width " + renderer.width);
}

function draw() {
  sketchWidth = document.getElementById("sketch-holder").offsetWidth;

  let renderer = createCanvas(sketchWidth, windowHeight);
  renderer.parent("sketch-holder");
  renderer.style("display", "block");

  background("black");

  translate(renderer.width / 2, renderer.height / 2.5);
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
