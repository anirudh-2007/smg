var PLAY=1;
var END=0;
var gameState=1;

var boy,boy_running,boy_runing,boy_Image;
var aboutGame,About_Image;
var control,control_Image;
var ground,gg,grounda;
var bg;
var blak;
var fruit1,fruit_Image;
var f1,fa,f2,f3,fb;
var vegetableshop,vegetable_Image;
var va,vb,vva,v1,v2;
var toyshop,toy_Image;
var toy1,ta,tta,toy2,tb;
var rice_shop,rice_Image;
var br,brice,wr,wrice,bbr;
var medical_shop,medical_Image;
var ha,h1,sa,s1,ssa;

var score=0;
var roof1,roof2,roof3,roof4,roof5;
var invisible_ground;
var list1,l1,list2,l2;
var pep,p1;
var t1,t2,t3,t4,t5,tick_image;
var robber,robber1,robber3,robber4,robber5,robber_running;
var bg_sound;
var g,gbh;
var y,yui;
var green1;



function preload(){
boy_dancing=loadAnimation("r1.png","r2.png","r3.png","r4.png","r5.png","r6.png");
boy_running=loadAnimation("z1.png","z2.png","z3.png","z4.png","z5.png","z6.png");
robber_running=loadAnimation("t1.png","t2.png","t3.png","t4.png","t5.png","t6.png");
About_Image=loadImage("ABOUTGAME.JPG");
control_Image=loadImage("CONTROL.JPG");
boy_Image=loadImage("r1.png");
fruit_Image=loadImage("fruit12.png");
fa=loadImage("apple.jpg");
fb=loadImage("banana.jpg");
vegetable_Image=loadImage("vg.png");
v1=loadImage("potato.JPG");
v2=loadImage("onion.JPG");
toy_Image=loadImage("Toy_Shop.png");
toy1=loadImage("helicopter..JPG");
toy2=loadImage("car.JPG");
rice_Image=loadImage("rrs.png");
brice=loadImage("brown rice.JPG");
wrice=loadImage("white rice.JPG");
medical_Image=loadImage("MedicalShop.JPG");
h1=loadImage("headache tablet.jpg");
s1=loadImage("Savlon Liquid.JPG");
gg=loadImage("gg2.JPG");
l1=loadImage("List-1.JPG");
l2=loadImage("List2.JPG");
p1=loadImage("PEP.JPG");
bg=loadImage("bg.jpg");
tick_image=loadImage("tick.png");
bg_sound=loadSound("You are robbed.m4a");
gbh=loadImage("g.jpg");
yui=loadImage("y.JPG");
}
function setup() {
  createCanvas(1220,600);




  ground = createSprite(330,585);
  ground.addImage(gg);
 
  grounda = createSprite(750,585);
  grounda.addImage(gg);
  
  fruit1 = createSprite(600,430);
  fruit1.addImage(fruit_Image);
  fruit1.scale=0.65;

  f1 = createSprite(550,330);
  f1.addImage(fa);
  f1.scale=0.3;
  f1.visible=false;

  f2 = createSprite(550,480);
  f2.addImage(fb);
  f2.scale=0.07;
  f2.visible=false;

  vegetableshop = createSprite(90,430);
  vegetableshop.addImage(vegetable_Image);
  vegetableshop.scale=0.6;

  va = createSprite(0,330);
  va.addImage(v1);
  va.scale=0.15;
  va.visible=false;

  vb = createSprite(0,480);
  vb.addImage(v2);
  vb.scale=0.15;
  vb.visible=false;

  toyshop = createSprite(-550,440);
  toyshop.addImage(toy_Image);
  toyshop.scale=0.9;

  ta = createSprite(0,330);
  ta.addImage(toy1);
  ta.scale=0.19;
  ta.visible=false;

  tb = createSprite(0,480);
  tb.addImage(toy2);
  tb.scale=0.19;
  tb.visible=false;

  rice_shop = createSprite(-1250,410);
  rice_shop.addImage(rice_Image);
  rice_shop.scale=0.9;

  br = createSprite(0,330);
  br.addImage(brice);
  br.scale=0.35;
  br.visible=false;

  wr = createSprite(0,480);
  wr.addImage(wrice);
  wr.scale=0.35;
  wr.visible=false;

  medical_shop = createSprite(-1860,420);
  medical_shop.addImage(medical_Image);
  medical_shop.scale=0.38;

  ha = createSprite(0,330);
  ha.addImage(h1);
  ha.scale=0.09;
  ha.visible=false;

 
  sa = createSprite(0,480);
  sa.addImage(s1);
  sa.scale=0.2;
  sa.visible=false;

  roof1 = createSprite(300,400,200,15);
  roof1.shapeColor="brown";

  roof2 = createSprite(-150,400,200,15);
  roof2.shapeColor="brown";

  roof3 = createSprite(-900,400,200,15);
  roof3.shapeColor="brown";

  roof4 = createSprite(-1580,400,200,15);
  roof4.shapeColor="brown";

  roof5 = createSprite(-2190,400,30,30);
  roof5.shapeColor="green";


  boy = createSprite(1000,505);
  
  boy.addAnimation("dancing",boy_dancing);

  boy.addAnimation("running",boy_running);


invisible_ground = createSprite(1000,590,600,10);
invisible_ground.visible=false;









  robber = createSprite(-1200,505);
  robber.addAnimation("running", robber_running);
 robber.velocityX=5;

  robber1 = createSprite(-2700,505);
  robber1.addAnimation("running", robber_running);
  robber1.velocityX=5;

  robber3 = createSprite(-4200,505);
  robber3.addAnimation("running", robber_running);
  robber3.velocityX=5;

  robber4 = createSprite(-5700,505);
  robber4.addAnimation("running", robber_running);
  robber4.velocityX=5;

  robber5 = createSprite(-7200,505);
  robber5.addAnimation("running", robber_running);
  robber5.velocityX=5;



  













 

  
  
control = createSprite(610,300,0,0);
control.addImage(control_Image);
control.scale=1.15;
control.visible=false;

list1 = createSprite(330,300);
list1.addImage(l1);
list1.scale=0.9;
list1.visible=false;

list2 = createSprite(930,300);
list2.addImage(l2);
list2.scale=0.9;
list2.visible=false;

pep = createSprite(610,550);
pep.addImage(p1);
pep.scale=0.9;
pep.visible=false;

bbr = createSprite(100,80);
bbr.addImage(brice);
bbr.scale=0.25;
bbr.visible=false;

t1 = createSprite(180,80);
t1.addImage(tick_image);
t1.scale=0.2;
t1.visible=false;

f3 = createSprite(260,80);
f3.addImage(fa);
f3.scale=0.2;
f3.visible=false;


t2 = createSprite(340,80);
t2.addImage(tick_image);
t2.scale=0.2;
t2.visible=false;


ssa = createSprite(420,80);
ssa.addImage(s1);
ssa.scale=0.13;
ssa.visible=false;


t3 = createSprite(500,80);
t3.addImage(tick_image);
t3.scale=0.2;
t3.visible=false;


tta = createSprite(580,80);
tta.addImage(toy1);
tta.scale=0.11;
tta.visible=false;

t4 = createSprite(660,80);
t4.addImage(tick_image);
t4.scale=0.2;
t4.visible=false;


vva = createSprite(740,80);
vva.addImage(v1);
vva.scale=0.095;
vva.visible=false;


t5 = createSprite(820,80);
t5.addImage(tick_image);
t5.scale=0.2;
t5.visible=false;


y = createSprite(610,300);
y.addImage(yui);
y.visible=false;
y.scale=2.5;

g = createSprite(610,300);
g.addImage(gbh);
g.visible=false;
g.scale=1.65


}

function draw() {
  background(bg);
 
if(gameState===PLAY){
  robber.setCollider("rectangle",0,0,70,160);
  robber.debug=true;


 
 
  boy.collide(invisible_ground);
  
  //robber.collide(ground);
 
  boy.collide(roof1);
  boy.collide(roof2);
  boy.collide(roof3);
  boy.collide(roof4);
  boy.collide(roof5);

  if(robber.isTouching(boy)||robber1.isTouching(boy)||robber3.isTouching(boy)||robber4.isTouching(boy)||robber5.isTouching(boy)){
    gameState=END;
    bg_sound.play();
  }

  if(roof5.isTouching(boy)){
    y.visible=true;
  }
  /*if(mousePressedOver(f1)&&mousePressedOver(va)&&mousePressedOver(ta)&&mousePressedOver(br)&&mousePressedOver(sa)){
    y.visible=true;
  }*/
  
  if(mousePressedOver(fruit1)){
    f1.visible=true;
    f2.visible=true;
   
  }

  if(mousePressedOver(vegetableshop)){
    va.visible=true;
    vb.visible=true;
   
  }

  if(mousePressedOver(toyshop)){
    ta.visible=true;
    tb.visible=true;
   
  }

  if(mousePressedOver(rice_shop)){
    br.visible=true;
    wr.visible=true;
  }

  if(mousePressedOver(medical_shop)){
    ha.visible=true;
    sa.visible=true;
  }

  

  vva.visible=true;
  ssa.visible=true;
  bbr.visible=true;
  f3.visible=true;
  tta.visible=true;

  
 
  
  if(keyDown(LEFT_ARROW)){
    boy.changeAnimation("dancing",boy_dancing);







   /* robber.x=robber.x+20;
    robber1.x=robber1.x+20;







*/









    ground.x=ground.x+10;
    fruit1.x=fruit1.x+10;
    vegetableshop.x=vegetableshop.x+10;
    toyshop.x=toyshop.x+10;
    rice_shop.x=rice_shop.x+10;
    medical_shop.x=medical_shop.x+10;
    ground.x=ground.x+10;
    ground.x=ground.x+10;
    roof1.x=roof1.x+10;
    roof2.x=roof2.x+10;
    roof3.x=roof3.x+10;
    roof4.x=roof4.x+10;
    roof5.x=roof5.x+10;
    f1.visible=false;
    f2.visible=false;
    va.visible=false;
    vb.visible=false;
    ta.visible=false;
    tb.visible=false;
    br.visible=false;
    wr.visible=false;
    ha.visible=false;
    sa.visible=false;
  }
 

  if(keyDown(RIGHT_ARROW)){
    boy.changeAnimation("running",boy_running);
    ground.x=ground.x-10;
    fruit1.x=fruit1.x-10;
    roof1.x=roof1.x-10;
    roof2.x=roof2.x-10;
    roof3.x=roof3.x-10;
    roof4.x=roof4.x-10;
    roof5.x=roof5.x-10;
    vegetableshop.x=vegetableshop.x-10;
    toyshop.x=toyshop.x-10;
    rice_shop.x=rice_shop.x-10;
    medical_shop.x=medical_shop.x-10;
    ground.x=ground.x-10;
    ground.x=ground.x-10;
    f1.visible=false;
    f2.visible=false;
    va.visible=false;
    vb.visible=false;
    ta.visible=false;
    tb.visible=false;
    br.visible=false;
    wr.visible=false;
    ha.visible=false;
    sa.visible=false;
   }

  

  if(keyDown(UP_ARROW)){
boy.velocityY=-20;
  }
  boy.velocityY=boy.velocityY+10;
  
  f1.x = fruit1.x;
  f2.x = fruit1.x;
  
  va.x= vegetableshop.x;
  vb.x= vegetableshop.x;

  ta.x=toyshop.x;
  tb.x=toyshop.x;

  br.x=rice_shop.x;
  wr.x=rice_shop.x;

  ha.x=medical_shop.x;
  sa.x=medical_shop.x
 

  





















  if(mousePressedOver(f1)){
  
    t2.visible=true;
}

if(mousePressedOver(f2)){
 gameState=END;
}

if(mousePressedOver(va)){
  t5.visible=true;
}

if(mousePressedOver(vb)){
  gameState=END;
}

if(mousePressedOver(ta)){
  t4.visible=true;
}

if(mousePressedOver(tb)){
  gameState=END;
}

if(mousePressedOver(br)){
  t1.visible=true;
}

if(mousePressedOver(wr)){
  gameState=END;
}

if(mousePressedOver(ha)){
  gameState=END;
}

if(mousePressedOver(sa)){
  t3.visible=true;

}

if(keyDown("space")){

}







} else if(gameState==END){
  g.visible=true;
 }


drawSprites();


}

