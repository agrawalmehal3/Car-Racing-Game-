class Player{
    constructor(){
        this.name= null;
        this.distance= 0;
        this. index= null;
        this. rank= null; 
    }
    getCount(){
        database.ref('playerCount').on("value", function (data){
            playerCount= data.val();
        })
    }
    updateCount(count){
        database.ref('/',).update({
            'playerCount': count
        })
    }
     update(){
        var playerindex= "players/player" + this.index;
        database.ref(playerindex).set({
            'name': this.name, 
            'distance': this.distance
        })
     }
    static getPlayerInfo(){
        database.ref('players').on("value", (data)=>{
            allPlayers= data. val();
        })
    }
    getCarsAtEnd(){
        database.ref('carsAtEnd').on("value",(data)=>{
          this.rank= data.val();
        });
      }
      static updateCarsAtEnd(rank){
        database.ref('/').update({
          'carsAtEnd':rank 
        })
      }
}