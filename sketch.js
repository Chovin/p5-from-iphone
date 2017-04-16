function setup() {
 createCanvas(500,500)
 t=0
}

function draw() {
  t+=.015
  clear()
  ellipse(50, 50, 80, 80);
  text("gam gam from iPhone",50+sin(t)*5,50)
 
}