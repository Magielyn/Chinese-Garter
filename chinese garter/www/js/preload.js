preloadGame={
	preload:function () {
		
	 	game.load.audio("bgMusic", "sounds/opening.ogg");
		game.load.audio("tagEffect", "sounds/BonusLife.ogg");
		game.load.image('bg',"img/bgay.png");
		game.load.image('start',"img/menubg2.png");
		game.load.image('about2',"img/abt.png");
		game.load.image('ins',"img/ins.png");
		game.load.image('menu2',"img/back.png");
		game.load.image('buttonplay',"img/button_play.png");
		game.load.image('button_Play',"img/start_button.png");
		game.load.image('intruct',"img/instruction.png");
		game.load.image('About',"img/abou.png");
		game.load.image('button_pause',"img/button_pause.png");
		game.load.image('platform',"img/platform.png");
		game.load.image('platform2',"img/arrow4.png");
		game.load.image('b1','img/meter2.png');
		game.load.image('metre','img/right.png');
		game.load.image('h1','img/holder1.png');
		game.load.image('h2','img/holders2.png');
		game.load.spritesheet('player','img/samm.png',95,200);
		game.load.image('match','img/red.png');
		game.load.image('btnleft','img/NET.png');
		game.load.image('star','img/1.png');
		game.load.image('sky2','img/p2.png');
		game.load.image('gameover','img/restart.png');
		game.load.image('gameover1','img/restart.png');
		game.load.image('line','img/line.png');
		game.load.image('line2','img/cloud2.png');
		game.load.image('b2','img/arrow4.png');
		game.load.spritesheet('left', 'img/button-up.png');
	   
	  
	},

	create:function () {
		game.state.start("playGame");
		game.state.start("menuGame");

	},
}