class Game {
  constructor(){

  }

  getState(){
    var gameStateRef  = database.ref('gameState');
    gameStateRef.on("value",function(data){
       gameState = data.val();
    })

  }

  update(state){
    database.ref('/').update({
      gameState: state
    });
  }

  async start(){
    if(gameState === 0){
      player = new Player();
      var playerCountRef = await database.ref('playerCount').once("value");
      if(playerCountRef.exists()){
        playerCount = playerCountRef.val();
        player.getCount();
      }
      form = new Form()
      form.display();
    }

    car1 = createSprite(100,200);
    car1.addImage(carI1)
    car2 = createSprite(300,200);
    car2.addImage(carI2)
    car3 = createSprite(500,200);
    car3.addImage(carI3)
    car4 = createSprite(700,200);
    car4.addImage(carI4)
    cars = [car1, car2, car3, car4];

    pastFinished = false
  }

  play(){
    form.hide();

    Player.getPlayerInfo();
    
    if(allPlayers !== undefined){
      //var display_position = 100;
            background(rgb(198,135,103));
image(track, 0, -displayHeight*4, displayWidth, displayHeight*5)
      //index of the array
      var index = 0;

      //x and y position of the cars
      var x = 200;
      var y;

      for(var plr in allPlayers){
        //add 1 to the index for every loop
        index = index + 1 ;
        text(allPlayers[plr].name, cars[index - 1].x, cars[index - 1].y + 75);
        //position the cars a little away from each other in x direction
        x = 200 + (index*200) + allPlayers[plr].xpos
        //use data form the database to display the cars in y direction
        y = displayHeight - allPlayers[plr].distance;
        cars[index-1].x = x;
        cars[index-1].y = y;

        if (index === player.index){
          cars[index - 1].shapeColor = "red";
          camera.position.x = displayWidth/2;
          camera.position.y = cars[index-1].y
          if(cars[index-1].isTouching(obstacleGroup)){
            yVelocity-=0.6
            sound.play()
          }
        }
       
        //textSize(15);
        //text(allPlayers[plr].name + ": " + allPlayers[plr].distance, 120,display_position)
      }

    }

    if(player.xPos<-930|| player.xPos>-1080) { xVelocity=0 }

    if(player.distance<500){
    if(keyIsDown(38) && player.index !== null){
      yVelocity += 0.9
      if(keyIsDown(37)){
        xVelocity -= 0.2
      }
      if(keyIsDown(39)){
        xVelocity += 0.2
      }
    }
    else if(keyIsDown(38) && yVelocity>0 && player.index !== null){
      yVelocity -= 0.1
      xVelocity *= 0.9
    }
    else {yVelocity *= 0.9
    xVelocity *= 0.9}
    }
    else if(pastFinished === false){
      yVelocity *=0.6
      xVelocity *= 0.6
      Player.UpdateFinishedPlayers()
      player.place = finishedPlayers
      player.update()
      pastFinished = true
    }  else{ yVelocity *=0.6
      xVelocity *= 0.6}

player.distance += yVelocity
yVelocity *= 0.9
player.xpos += xVelocity
xVelocity *= 0.9
player.update()

    drawSprites();
  }

  end(){
  console.log("vkf")
  }

displayRank(){
  camera.position.x = 0
  camera.position.y = 0
  imageMode(CENTER)
  Player.getPlayerInfo()
  image(bronze, displayWidth/-4, displayHeight/10)
  image(silver, displayWidth/+4, displayHeight/10)
  image(gold, displayWidth/0, displayHeight/10)
  textSize(30)
  for (var plr in allPlayers){
    if(allPayers[plr].place === 1){
      text("1nd Place" + allPlayers[plr].name, displayWidth/0, displayHeight/10 + 100)
  }
 else if(allPlayers[plr].place === 2){
      text("2nd Place" + allPlayers[plr].name, displayWidth/4, displayHeight/10 + 100)
      }
      else if(allPlayers[plr].place === 3){
      text("3nd Place" + allPltextayers[plr].name, displayWidth/4, displayHeight/10 + 100)
        } else{text("Honourable Mention" + allPltextayers[plr].name, 0, 255)}
      
}

}
}
