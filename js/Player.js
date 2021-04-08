class Player {
  constructor(){
    this.index = null;
    this.distance = 0;
    this.name = null;
    this.xpos = 123;
    this.place = 0;
  }

  getCount(){
    var playerCountRef = database.ref('playerCount');
    playerCountRef.on("value",(data)=>{
      playerCount = data.val();
    })
  }

  updateCount(count){
    database.ref('/').update({
      playerCount: count
    });
  }

  update(){
    var playerIndex = "players/player" + this.index;
    database.ref(playerIndex).set({
      name:this.name,
      distance:this.distance,
      xpos : this.xpos,
      place : this.place
    });
  }

  getFinishedPlayers(){
    var hi = database.ref('finishedPlayers')
    hi.on("value", (data)=>{
      finishedPlayers = data. val
    })
  }
  
  static UpdateFinishedPlayers(){
    database.ref('/').update({finishedPlayers : finishedPlayers + 1})
    this.place += 1
    pastFinished = false
    console.log(this.place + finishedPlayers)
  }

  static getPlayerInfo(){
    var playerInfoRef = database.ref('players');
    playerInfoRef.on("value",(data)=>{
      allPlayers = data.val();
    })
  }
}
