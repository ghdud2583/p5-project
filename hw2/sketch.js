function setup() {
  createCanvas(600, 400);
  background(255);
}

function draw() {
  background(255);

  // 얼굴
  fill(255, 220, 180);
  ellipse(300, 200, 200, 250);

  // 머리카락 (층 1)
  fill(0);
  noStroke();
  for (let x = 190; x <= 410; x += 30) {
    ellipse(x, 120, 60, 60);
  }

  // 머리카락 (층 2)
  for (let x = 210; x <= 390; x += 30) {
    ellipse(x, 90, 60, 60);
  }

  // 안경
  noFill();
  stroke(0);
  strokeWeight(6);
  rectMode(CENTER);
  rect(260, 180, 70, 50, 8);
  rect(340, 180
