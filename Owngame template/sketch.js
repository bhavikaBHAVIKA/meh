// creates variables for  creating sprites .
var block1,block2,block3;
var block4,block5,block6;
var block7,block8,block9,block10 ;

var block11,block12,block13;
var block14,block15,block16;
var block17,block18,block19,block20;

var block21,block22,block23;
var block24,block25,block26;
var block27,block28,block29,block30;

var block31,block32,block33;
var block34,block35;

var blocks ;
var player ;
var nimbus2000; 
var broomdown,broomleft,broomright;

var q1 , q2 , q3 , q4 , q5 , q6 , q7 , q8 , q9 , q10 , q11 ;
var  deathlyhallows ;

function preload()
{
nimbus2000 = loadImage("images/nimbusup.png");
broomdown = loadImage("images/nimbusdown.png");
broomleft = loadImage("images/nimbusleft.png");
broomright = loadImage("images/nimbusright.png");
deathlyhallows = loadImage("images/deathly hallows sign.png");

}

function setup()
{
createCanvas (1400,600);
// creates sprites .

player = createSprite(600,530,20,20);
player.addImage(nimbus2000);
player.scale =  0.24;


q1 = createSprite(700,330,10,10);
q1.addImage(deathlyhallows);
q1.scale = 0.23 ;

q2 = createSprite(150,400,10,10);
q2.addImage(deathlyhallows);
q2.scale = 0.24; 

q3 = createSprite(30,520,10,10);
q3.addImage(deathlyhallows);
q3.scale = 0.24 ;

q4 = createSprite(900,50,10,10);
q4.addImage(deathlyhallows);
q4.scale = 0.24 ;

q5 = createSprite(850,500,10,10);
q5.addImage(deathlyhallows);
q5.scale = 0.24 ;

q6 = createSprite(1195,140,10,10);
q6.addImage(deathlyhallows);
q6.scale = 0.24 ;

q7 = createSprite(1250,450,10,10);
q7.addImage(deathlyhallows);
q7.scale = 0.24 ;

q8 = createSprite(640,260,10,10);
q8.addImage(deathlyhallows);
q8.scale = 0.24 ;

q9 = createSprite(400,50,10,10);
q9.addImage(deathlyhallows);
q9.scale = 0.24 ;

q10 = createSprite(350,520,10,10);
q10.addImage(deathlyhallows);
q10.scale = 0.24 ;

q11 = createSprite(1100,160,10,10);
q11.addImage(deathlyhallows);
q11.scale = 0.24 ;

blocks = createGroup();
block1 = createSprite(1100,590,700,10);

block2 = createSprite(100,590,750,10);

block3 = createSprite(1000,520,10,150);

block4 = createSprite(755,450,500,10);

block5 = createSprite(100,500,10,150);

block6 = createSprite(200,450,200,10);

block7 = createSprite(400,390,10,400);

block8 = createSprite(300,350,200,10);

block9 = createSprite(880,300,10,300);

block10 = createSprite(1300,410,200,10);

block11 = createSprite(1200,455,10,100);

block12 = createSprite(1150,500,100,10);

block13 = createSprite(100,400,10,500);

block14 = createSprite(200,250,200,10);

block15 = createSprite(650,380,10,150);

block16 = createSprite(650,300,200,10);

block17 = createSprite(555,250,10,100);

block18 = createSprite(1400,100,500,10);

block19 = createSprite(1155,200,10,200);

block20 = createSprite(1225,200,150,10);

block21 = createSprite(745,250,10,100);

block22 = createSprite(1100,200,100,10);

block23 = createSprite(1050,200,10,150);

block24 = createSprite(1000,130,100,10);

block25 = createSprite(1000,270,100,10);

block26 = createSprite(700,370,100,10);

block27 = createSprite(50,10,900,10);

block28 = createSprite(1400,10,1400,10);

block29 = createSprite(790,495,10,80);

block30 = createSprite(300,50,10,90);

block31 = createSprite(850,50,10,80);

block32 = createSprite(810,85,80,10);

block33 = createSprite(890,85,80,10);

blocks.add(block1);
blocks.add(block2);
blocks.add(block3);
blocks.add(block4);
blocks.add(block5);
blocks.add(block6);
blocks.add(block7);
blocks.add(block8);
blocks.add(block9);
blocks.add(block10);
blocks.add(block11);
blocks.add(block12);
blocks.add(block13);
blocks.add(block14);
blocks.add(block15);
blocks.add(block16);
blocks.add(block17);
blocks.add(block18);
blocks.add(block19);
blocks.add(block20);
blocks.add(block21);
blocks.add(block22);
blocks.add(block23);
blocks.add(block24);
blocks.add(block25);
blocks.add(block26);
blocks.add(block27);
blocks.add(block28);
blocks.add(block29);
blocks.add(block30);
blocks.add(block31);
blocks.add(block32);
blocks.add(block33);

blocks.setColorEach ("#359fe0");

}

function draw()
{
background(0);

if(keyDown(UP_ARROW))
{
    player.y  -= 5 ;
    player.addImage(nimbus2000);
    player.scale = 0.24 ;
    player.setCollider("rectangle",0,0,150,500);
}
if(keyDown(DOWN_ARROW))
{
    player.y  += 5 ;
    player.addImage(broomdown);
    player.scale = 0.24 ;
    player.setCollider("rectangle",0,0,150,500);
}

if(keyDown(LEFT_ARROW))
{
    player.x  -= 5 ;
    player.addImage(broomleft);
    player.scale = 0.24
    player.setCollider("rectangle",0,0,500,150);
}

if(keyDown(RIGHT_ARROW)) 
{
    player.x  += 5 ;
    player.addImage(broomright);
    player.scale = 0.24 ;
    player.setCollider("rectangle",0,0,500,150);
}



player.bounce(blocks);






drawSprites();
}





