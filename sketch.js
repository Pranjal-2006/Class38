var gameState = 0;
var database, game, canvas;
var form,  playerCount;
var allPlayers, distance = 0;
var player, car1, car2, car3, car4, cars;

function setup(){
    canvas = createCanvas(displayWidth-20, displayHeight-30);
    database = firebase.database();
    game = new Game();
    game.getState();
    game.start();
    }

 function draw(){
    if(playerCount === 4){
        game.update(1);
      }
      if(gameState === 1){
        clear();
        game.play();
      }
 }   