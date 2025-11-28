function setup() {
  createCanvas(800, 500);
  angleMode(DEGREES);
  colorMode(RGB);
}

function draw() {
  background(255, 210, 180);

  // 몸통
  fill(255, 0, 0);
  noStroke();
  ellipse(120, height / 2, 70, 260);

  // 윗 장식
  fill(255, 200, 0);
  push();
  translate(120, height / 2 - 150);
  rotate(45);
  rect(0, 0, 50, 50);
  pop();

  // 아래 장식
  push();
  translate(120, height / 2 + 150);
  rotate(45);
  rect(0, 0, 50, 50);
  pop();

  // 눈썹/눈줄
  fill(110, 70, 30);
  rect(350, 130, 250, 30);
  rect(350, 340, 250, 30);

  // 눈
  fill(255);
  ellipse(500, 200, 60, 60);
  ellipse(500, 300, 60, 60);

  // 동공
  fill(0);
  ellipse(500, 200, 20, 20);
  ellipse(500, 300, 20, 20);

  // 입
  fill(255, 200, 0);
  arc(600, 250, 150, 150, 300, 60, PIE);

  // 코
  fill(80);
  ellipse(400, 250, 50, 50);

  // 이름
  fill(0);
  textSize(20);
  text("황영호", 20, 40);
}
