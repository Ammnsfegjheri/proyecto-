
var box1, box2
var ball;
var box3
var box4, box5, box6, box7

function setup() 
{
  createCanvas(700,700);
  box1= new Box(300,350,100,100,"lightcoral");
  box2= new Box(0,650,700,20,"cyan");
  box3= new Box(200,350,100,100,"lightcoral");
  box4= new Box(400,350,100,100,"lightcoral");
  box5= new Box(250,250,100,100,"pink");
  box6= new Box(350,250,100,100,"pink");
  box7= new Box(300,150,100,100,"lightcoral");


 //ball= new Ball(400,250,50,"red");
  
}

function draw() 
{
  background(200);
 box1.display();
 box2.display();
 box3.display();
 box4.display();
 box5.display();
 box6.display();
 box7.display();
  //ball.display();

}







