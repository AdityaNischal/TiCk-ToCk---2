var hourAngle;
var minuteAngle;
var secondAngle;
var end1,end2,end3;



function setup() {
  createCanvas(400,450);
  angleMode(DEGREES);

 

}

function draw() {
  background(0,0,0); 
  translate(200,200);
  

  
//clock
  hr = hour()%12;
  mn = minute();
  sc = second();


 let dy = day();
 let mon = month();
 let yr = year();

fill(255);
textSize(20)
textStyle(ITALIC);
text('Date : ' + dy + '/' + mon + '/' + yr , -85, 230);


rotate(-90);
textStyle(NORMAL)
textSize(15)
text('AdiTya NisChal',-100,200);

  strokeWeight(8);
  stroke(255,100,150);
  noFill();
  hourAngle = map(hr % 12,0,12,0,360);
  arc(0,0,300,300,0,hourAngle);

  push();
  rotate(hourAngle);
  stroke(255,100,150);
  line(0 , 0 , 100 , 0);
  pop();

  stroke(150,100,255);
  minuteAngle = map(mn,0,60,0,360);
  arc(0,0,280,280,0,minuteAngle);

  push();
  rotate(minuteAngle);
  stroke(150,100,255);
  line(0 , 0 , 90 , 0);
  pop();

  stroke(150,255,100);
  secondAngle = map(sc,0,60,0,360);
  arc(0,0,260,260,0,secondAngle);

  push();
  rotate(secondAngle);
  stroke(150,255,100);
  line(0 , 0 , 70 , 0);
  pop();

  stroke(255);
  point(0,0);

 


  drawSprites();
}

