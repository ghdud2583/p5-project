let hairWave = 0;
let glassesColor;
let smile = 0;
let recording = false;

function setup() {
  createCanvas(600, 400);
  glassesColor = color(0);

  recording = true;
  saveGif('caricature_interaction', 10);  // 10초 GIF 저장
}

function draw() {
  background(245);

  // 얼굴
  fill(255, 224, 189);
  ellipse(width / 2, height / 2, 150, 190);

  // 머리카락
  fill(0);
  for (let x = -60; x <= 60; x += 20) {
    let yOff = sin((x + hairWave) * 0.2) * 10;
    ellipse(width / 2 + x, heigh
