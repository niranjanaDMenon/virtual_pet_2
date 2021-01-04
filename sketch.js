//Create variables here
var dog, happyDog, database, foodS, foodStock;
var count = 0;
var feedbutton,addfoodbutton;
var fedtime,lastfedtime;
var foodobj;

function preload()
{
  //load images here
  DogImg = loadImage("images/dogImg.png");
  happydogImg = loadImage("images/dogImg1.png");
}

function setup() {
  createCanvas(1000, 500);
  database = firebase.database();
  
  foodobj = new Food();
  foodobj.getfoodstock();
  foodobj.getfoodtime();

  feedbutton = createButton("Feed the Dog");
  feedbutton.position(500,100);
  feedbutton.size(120,25);

  addfoodbutton = createButton("Add food");
  addfoodbutton.position(650,100);
  addfoodbutton.size(100,25);

  dog = createSprite(800,400);
  dog.addImage("dogImg",DogImg);
  dog.addImage("dogImg1",happydogImg);
  dog.scale = 0.2;
}


function draw() {  
  background(46, 139, 87);
  drawSprites();
  
  textSize(20);
  fill("blue");
  text("Last Feed :  "+ lastfedtime+ " hrs",250,70);
  if(foodobj!== undefined){

    foodobj.display();
  }

  feedbutton.mousePressed(function() { 
    foodobj.foodstock--;
  
    foodobj.updatefoodstock(foodobj.foodstock)
    foodobj.updatefeedtime();
    dog.changeImage("dogImg1",happydogImg);
    count = 30;
   } )

   
  addfoodbutton.mousePressed(function() { 
    foodobj.foodstock++;
   
    foodobj.updatefoodstock(foodobj.foodstock)
   } )

  if(count >0){
    count--
  }
  //add styles here
  /*fill("white");
  stroke("blue");
  strokeWeight(5);
  textSize(20);
 text("Press UP arrow to feed Drago",100,50);
 text("Food Remaining: " + foodS, 200,300);
*/
 if (count <=0){
 dog.changeImage("dogImg",DogImg);
 }


}




