//let myColor = color(200, 50, 200);
let myColor;
let shape;
let shapes = [];
let redoArray = [];
let brushes = [];
let ellipseOn = false;
let rectOn = false;

function preload() {
  brushes[0] = loadImage("/img/b0.svg");
  brushes[1] = loadImage("/img/b1.svg");
  brushes[2] = loadImage("/img/b2.svg");
  brushes[3] = loadImage("/img/b3.svg");
  brushes[4] = loadImage("/img/b4.svg");
  brushes[5] = loadImage("/img/cross-b5.svg");
  brushes[6] = loadImage("/img/b6-tree-1.svg");
}

class myShape {

  constructor(x, y, size, shapeColor, state) {
    this.x = x;
    this.y = y;
    this.size = size;
    this.shapeColor = shapeColor;
    this.state = state;
  }

  display() {
    //noStroke();
    // fill(this.shapeColor);
    // ellipse(this.x, this.y, this.size, this.size);
    tint(this.shapeColor);
    imageMode(CENTER);
    image(brushes[6], this.x, this.y, this.size, this.size);

  }

}

function setup() {
  createCanvas(400, 400);

}

function draw() {
  myColor = document.getElementById('myColor').value;
  background(245);
  if (mouseIsPressed && mouseY > 0) {
    shape = new myShape(mouseX, mouseY, 50, myColor);
    shapes.push(shape);
  }
  if (shapes.length > 2 && shapes[shapes.length - 2].x === shapes[shapes.length - 1].x) {
    shapes.pop(shapes.length - 1);
  }
  console.log(shapes.length);
  for (let i = 0; i < shapes.length; i++) {
    shapes[i].display();
  }
}

function drawEllipse() {
  ellipseOn = true;
  rectOn = false;
}

function drawRect() {
  ellipseOn = false;
  rectOn = true;
}

function cancel() {
  redoArray.push(shapes[shapes.length - 1]);
  shapes.pop(shapes.length - 1);
  //console.log(redoArray);
}

function redo() {
  //console.log(redoArray);
  shapes.push(redoArray[redoArray.length - 1]);
  redoArray.pop(redoArray.length - 1);
  if (redoArray.length === 0) {
    redoArray[0] = shapes[shapes.length - 1]
  }
  //console.log(redoArray.length)
}