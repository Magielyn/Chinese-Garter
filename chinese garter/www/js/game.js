var w = 800, h = 600;
var platform, platform2;
var player, player2, metre, b1, line, line2, b2;
var keyboard, platform2, button_play, button_pause;
var a=0, l=1, buttongo,front, chineseGarter, menumusic,start, menuText, start;
var match, star, scoreText, retrieveBest, scoreText2, lifeText, lifeText2;
var game = new Phaser.Game(w, h, Phaser.CANVAS, '');
var chineseGarter = function(){};
    

game.state.add("BootGame",BootGame);
game.state.add("preloadGame",preloadGame);
game.state.add("menuGame",menuGame);
game.state.add("playGame",playGame);
game.state.add("winGame",winGame);
game.state.add("loseGame",loseGame);
game.state.start("BootGame");
