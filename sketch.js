var car1,wall;
 function setup() {
    createCanvas(600, 400);
     speed=random(55,90)
      weight=random(400,1500)
       car1 =new car(weight,speed);
        wall=createSprite(500,200, 60, height/2)
         wall.shapeColor=color(80,80,80) } 
         function draw() { 
           background(0); 
           car1.sprite.collide(wall,calculateDeformation) 
           drawSprites(); }
            function calculateDeformation() {
               var deformation=0.5 * car1.weight * car1.speed* car1.speed/22509;
                if(deformation>180) { car1.sprite.shapeColor=color(255,0,0); }
                 if(deformation<180 && deformation>100) { car1.sprite.shapeColor=color(230,230,0); }
                 if(deformation<100) { car1.sprite.shapeColor=color(0,255,0); } }