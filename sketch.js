function setup() {
  createCanvas(windowWidth, windowHeight)
  mic = new p5.AudioIn()
  mic.start();
}


function draw() {
  micLevel = mic.getLevel();
  adjustedMicLevel = micLevel * 1597;
  adjustedMicLevel2 = micLevel * 6713;
  adjustedMicLevel3 = micLevel * 7317;
  adjustedMicLevel4 = micLevel * 6263;
  adjustedMicLevel5 = micLevel * 9461;
  adjustedMicLevel6 = micLevel * 318;
  adjustedMicLevel7 = micLevel * 4297;
 // background(adjustedMicLevel6, adjustedMicLevel5, adjustedMicLevel4)
  fill(0);
  strokeWeight(adjustedMicLevel6)
  stroke(adjustedMicLevel7, adjustedMicLevel3, adjustedMicLevel5);
  fill(adjustedMicLevel3, adjustedMicLevel, adjustedMicLevel2);
  rect(60, 300, adjustedMicLevel3, adjustedMicLevel);
  fill(adjustedMicLevel6, adjustedMicLevel4, adjustedMicLevel, adjustedMicLevel2)
  ellipse(60, 100, adjustedMicLevel3, adjustedMicLevel5)
}
function windowResized() {
  resizeCanvas(windowWidth, windowHeight)
}