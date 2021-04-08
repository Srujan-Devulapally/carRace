var canvas, backgroundImage;

var gameState = 0;
var playerCount;
var allPlayers;
var distance = 0;
var database;

var form, player, game;

var cars, car1, car2, car3, car4;

var carI1, carI2, carI3, carI4, track

var xVelocity, yVelocity

var obstacle, obstacleImage, obstacleGroup

var sound

var gold, silver, bronze

var finishedPlayers = 0, pastFinished

function preload(){
carI1 = loadImage("images/car1.png")
carI2 = loadImage("images/car2.png")
carI3 = loadImage("images/car3.png")
carI4 = loadImage("images/car4.png")
track = loadImage("images/track.jpg ")
obstacleImage = loadImage("images/obstacle.png")
sound = loadSound("images/sound_sliding.mp3")
gold = loadImage("images/gold.png")
silver = loadImage("images/silver.png")
bronze = loadImage("images/bronze (1).png")
}

function setup(){
  canvas = createCanvas(displayWidth - 20, displayHeight-30);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
  xVelocity = 0
  yVelocity = 0
  obstacleGroup = createGroup()
  for(var i = 0;i<6;i++){
  var x = random(400, 1200)
  var y = random(800, -3500)
  obstacle = createSprite(x, y)
  obstacle.addImage(obstacleImage)
  obstacleGroup.add(obstacle)
  }
}


function draw(){
  if(playerCount === 4){
    game.update(1);
  }
  if(gameState === 1){
    clear();
    game.play();
  }

if(finishedPlayers === 4){
  game.update(2)
}

if(gameState === 2 && finishedPlayers === 4){
  game.displayRank()
}

if(gameState === 2){
 // game.update(2)
  game.end()
}

}
