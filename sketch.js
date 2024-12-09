// Array to hold all circle objects
let circles = [];
const numCircles = 15;

function setup() {
  createCanvas(400, 400);
  noStroke();

  // Initialize multiple circle objects
  for (let i = 0; i < numCircles; i++) {
    let newCircle = {
      x: random(width),
      y: random(height),
      dx: random(-2, 2),
      dy: random(-2, 2),
      size: random(10, 30),
      r: random(255),
      g: random(255),
      b: random(255)
    };
    circles.push(newCircle);
  }
}

function draw() {
  background(30);

  // Loop through each circle to update and display
  for (let i = 0; i < circles.length; i++) {
    let c = circles[i];

    // Draw the circle
    fill(c.r, c.g, c.b);
    circle(c.x, c.y, c.size);

    // Update the circle's position
    c.x += c.dx;
    c.y += c.dy;

    // Conditional statement: change direction and color when hitting canvas edges
    if (c.x - c.size / 2 < 0 || c.x + c.size / 2 > width) {
      c.dx *= -1;
      c.r = random(255);
      c.g = random(255);
      c.b = random(255);
    }

    if (c.y - c.size / 2 < 0 || c.y + c.size / 2 > height) {
      c.dy *= -1;
      c.r = random(255);
      c.g = random(255);
      c.b = random(255);
    }

    // Gradually shrink the size
    c.size *= 0.99;

    // Remove circles if they become too small
    if (c.size < 5) {
      circles.splice(i, 1);
      i--; // Adjust index to account for removed circle
    }
  }

  // Display remaining circles count
  fill(255);
  textSize(16);
  text(`Circles left: ${circles.length}`, 10, height - 10);

  // If all circles are gone, display a message
  if (circles.length === 0) {
    noLoop(); // Stop the draw loop
    fill(255);
    textSize(32);
    textAlign(CENTER, CENTER);
    text("All circles are gone!", width / 2, height / 2);
  }
}
