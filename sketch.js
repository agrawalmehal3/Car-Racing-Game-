
var database;
var gameState= 0;
var playerCount;
var form,game,player;
var allPlayers;
var car1;
var car2;
var car3; 
var car4;
var cars;
var carImg1, carImg2, carImg3, carImg4, trackImg, groundImg;
var finishline;

function preload(){
    carImg1= loadImage("../images/car1.png");
    carImg2= loadImage("../images/car2.png");
    carImg3= loadImage("../images/car3.png");
    carImg4= loadImage("../images/car4.png");
    groundImg= loadImage("../images/ground.png");
    trackImg= loadImage("../images/track.jpg");
    finishline= loadImage("../images/CarImage.jpg");

}
function setup(){
    createCanvas(displayWidth-20, displayHeight-20);
    database = firebase.database();
    game= new Game();
    game.getState();
    game.start();
}

function draw(){
   if(playerCount==4 && player.rank!==4){
       game.update(1);
   }
   if(gameState==1){
       clear();
       game.play();

   }
   if(gameState==2){
    game.update(2);
       game.end();
   }
}

