class Game{
    constructor(){}
    getState(){
        var gs_ref = database.ref('gameState');
        gs_ref.on("value",function(data){
            gameState = data.val();
        })

    }

update(state){
    database.ref('/').update({
        gameState:state})
}
 async start(){
    if(gameState === 0){
        player = new Player();
        var playercount_ref = await database.ref('playerCount').once("value");
        if(playercount_ref.exists()){
 playerCount = playercount_ref.val();
 player.getCount();
        }

                form = new Form();
        form.display();
    }
    car1 = createSprite(100,200);
    car2 = createSprite(300,200);
    car3 = createSprite(500,200);
    car4 = createSprite(700,200);
    cars = [car1, car2, car3, car4]

}
play(){
    form.hide();
    //textSize(15);
    //text("Game Start", 120, 100);
    Player.getPlayerInfo();

if(allPlayers!==undefined){
    var index = 0;
    var x = 0;
    var y
   // var display_position = 130;
    for(var plr in allPlayers){
        index = index+1;
        x = x+200;
        y = displayHeight-allPlayers[plr].distance;
        cars[index-1].x = x;
        cars[index-1].y = y;
        if (index === player.index){
        cars[index-1].shapeColor = "red";
        camera.position.x = displayWidth/2;
        camera.position.y = cars[index-1].y;
    }
       

  //  display_position+= 20;
//textSize(15);
//text(allPlayers[plr].name + ": " + allPlayers[plr].distance, 120,display_position)

}
}
if(keyIsDown(UP_ARROW)&& player.index !==null){
    player.distance+=10;
    player.update();
}
drawSprites();
}
}