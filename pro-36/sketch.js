var dog,sadDog,happyDog, database;
var foodS,foodStock;
var addFood;
var foodObj,lastFed
var d,s
//create feed and lastFed variable here


function preload(){
sadDog=loadImage("Dog.png");
happyDog=loadImage("happy dog.png");
}

function setup() {
  database=firebase.database();
  createCanvas(1000,400);

  foodObj = new Food();

  foodStock=database.ref('Food');
  foodStock.on("value",readStock);
  
  dog=createSprite(800,200,150,150);
  dog.addImage(sadDog);
  dog.scale=0.25;


  feed=createButton("feed");
  feed.position(900,95);
 feed.mousePressed(feedDog);

  addFood=createButton("Add Food");
  addFood.position(800,95);
  addFood.mousePressed(addFoods);
database.ref("FeedTime").on("value",function(data){
  s=data.val()
})
}

function draw() {
  background("#20e8e4");
  textSize(30)
  fill("black")
  text("twilight",750,320)
  foodObj.display();
console.log(foodS)
database.ref("FeedTime").on("value",function(data){
  lastFed=data.val()
})
  
 if(d!=undefined)
   s= d.getDate()+"/"+d.getMonth()+"/"+d.getFullYear()+" "+d.getHours()+":"+d.getMinutes()+":"+d.getSeconds()
  textSize(30)
  fill("black")
   text("Lastfed:" + lastFed ,50,50)
  drawSprites();
}


function readStock(data){
  foodS=data.val();
  foodObj.updateFoodStock(foodS);
}


function feedDog(){
  dog.addImage(happyDog);
  if(foodS>0){ 
  foodS--;
  d=new Date()
  s= d.getDate()+"/"+d.getMonth()+"/"+d.getFullYear()+" "+d.getHours()+":"+d.getMinutes()+":"+d.getSeconds()
  database.ref('/').update({
    Food:foodS,
    FeedTime : s
  })}
  if(foodS==0){
    alert("buy milk first")
  }
 
/*var food_stock_val= foodObj.getFoodStock()
if(food_stock_val <= 0){
  foodObj.updateFoodStock(food_stock_val *0)
}else{
  console.log(food_stock_val -1)
  foodObj.updateFoodStock(food_stock_val -1) */
  
 
}




function addFoods(){
  foodS++;
  database.ref('/').update({
    Food:foodS
  })
}

  

