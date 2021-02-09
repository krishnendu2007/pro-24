const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1;

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;
    ground = new Ground(600,height,1200,20)
    rubber = new Rubber(700,320,70,70);
    stone = new Stone(810,260,300,PI/2);
    Hammer = new Hammer(400,300);
}

function draw(){
    background(0);
    Engine.update(engine);
    console.log(box1.body.position.x);
    console.log(box1.body.position.y);
    console.log(box1.body.angle);
    rubber.display();
    ground.display();
    stone.display();
    hammer.display();

}
