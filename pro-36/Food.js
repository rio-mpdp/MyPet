class Food {
    constructor(){
    this.foodStock=0;
    this.lastFed;
    this.image=loadImage('m.png');
    }

   updateFoodStock(foodStock){
    this.foodStock=foodStock;
   }

   getFedTime(lastFed){
     this.lastFed=lastFed;
   }

   deductFood(){
     if(this.foodStock>0){
      this.foodStock=this.foodStock-1;
     }
    }

    getFoodStock(){
      return this.foodStock;
    }

    display(){
      var x=80,y=100;
      foodObj.foodStock=foodS
      imageMode(CENTER);
      image(this.image,700,250,100,50);
      
      if(this.foodStock!=0){
        for(var i=0;i<this.foodStock;i++){
          if(i%5==0){
            x=50;
            
            y=y+60;
          }
          image(this.image,x,y,100,50);
          x=x+100;
        }
      }
    }
}
