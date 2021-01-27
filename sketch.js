var canvas;
var music;

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);

    //create 4 different surfaces

surface1=createSprite(100,580,195,20)
surface2=createSprite(300,580,195,20)
surface3=createSprite(500,580,195,20)
surface4=createSprite(700,580,195,20)

surface1.shapeColor="blue";
surface2.shapeColor="orange";
surface3.shapeColor="red";
surface4.shapeColor="green";

    //create box sprite and give velocity
box=createSprite(random(20,750),100,20,20);
box.shapeColor="white";
box.velocityX=2;
box.velocityY=5

}

function draw() {
    background(rgb(0,169,169));
    //create edgeSprite
    edges=createEdgeSprites();
    box.bounceOff(edges[0])
    box.bounceOff(edges[1])
    box.bounceOff(edges[2])
   
    // box.bounceOff(surface2)
    // box.bounceOff(surface3)
    // box.bounceOff(surface4)

    if(box.isTouching(surface1)){
        
        box.shapeColor="blue";        
        box.bounceOff(surface1);
       
    }else if(box.isTouching(surface2)){
        box.shapeColor="orange";
        // box.bounceOff(surface2)
        box.velocityX=0;
        music.stop();
        box.collide(surface2);
        
    }else if(box.isTouching(surface3)){
        music.play();
        box.shapeColor="red";
        box.bounceOff(surface3)
    }else if(box.isTouching(surface4)){
        box.shapeColor="green";
        box.bounceOff(surface4)
    }


    //add condition to check if box touching surface and make it box
    drawSprites();
}
