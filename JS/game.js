class Game {
    constructor (){

    }
    getState(){
        var gamestateref= database.ref('gameState');
        gamestateref.on("value", function (data){
            gameState= data.val();
        })
    }
    update(state){
        database.ref('/').update({
            'gameState': state 
        });
    }
    async start(){
        if (gameState==0){
            player=new Player();
            var playercountref= await database.ref('playerCount').once("value");
            if(playercountref.exists()){
                playerCount= playercountref.val();
                player.getCount();
            }
            form= new Form ();
            form.display();
        }
        car1= createSprite(100,200);
        car1.addImage("car1", carImg1);
        car2=createSprite(300,200);
        car2.addImage("car2", carImg2);
        car3= createSprite(500,200);
        car3.addImage("car3", carImg3);
        car4= createSprite(700,200);
        car4.addImage("car4", carImg4);
        cars=[car1, car2, car3, car4];
    }
    play(){
        form.hide();
        textSize(30);
        text("Game Start",150, 100);
        Player.getPlayerInfo();
        player.getCarsAtEnd();
        if (allPlayers!== undefined){
           background(groundImg);
           image(trackImg, 0, -displayHeight*4, displayWidth, displayHeight*5);
            var index=0;
            var  x=175;
            var y;        
            for (var plr in allPlayers){
                index++;
                x+=225;
                y= displayHeight-allPlayers[plr].distance;
                cars[index-1].x=x;
                cars[index-1].y=y;
                if(plr=="player"+ player.index){
                    strokeWeight(3)
                    stroke("blue")
                    fill("red")
                    ellipse(x,y,60,60);
                    camera.position.x= displayWidth/2;
                    camera.position.y= cars[index-1].y;
                }
                else{
                    cars[index-1].shapeColor= "black";
                }
            }
        }
        if(keyIsDown(UP_ARROW)&&player.index!=null){
            player.distance += 50;
            player.update();
        }
        if(player.distance==4250){
            player.distance += 50;
            player.update();
            gameState= 2;
            player.rank++;
            Player.updateCarsAtEnd(player.rank);
            form.displayRank();
        }
        drawSprites();    
            
    }
    end(){
     // console.log("Game Over");
       // console.log(player.rank);
       
    }
}