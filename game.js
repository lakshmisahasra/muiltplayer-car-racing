class Game{
constructor(){

}
getState(){
    var gameStateref=database.ref("gameState");
    gameStateref.on('value',function (data){
        gameState=data.val();
    })
}
update(state){
    database.ref("/").update({gameState:state})
}
async start(){
    if(gameState===0){
        player=new Player();
        var playerCountref=await database.ref("playerCount").once("value");
        if (playerCountref.exists()) {
            playerCount=playerCountref.val()
            player.getCount();
        }
        form=new Form ();
        form.display();
    }
}
play() {
    form.hide();
    text("game start",120,100);
    Player.getplayerinfo();
    if (allPlayer!==undefined) {
        var display_position=130;
        console.log(allPlayer);
        for (var plr in allPlayer) {
            if (plr==='player'+player.index) {
                fill("red");
            }
            else{
                fill("black");
            }
        display_position+=20;
        textSize(15);
        text(allPlayer[plr].name + ": "+ allPlayer[plr].distance,120,display_position);
    }
}
    if(keyIsDown(UP_ARROW)&& player.index!==null) {
        player.distance+=50;
        player.update();
    }
}
}