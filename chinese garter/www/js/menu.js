menuGame = {
		create: function(){
			
			start = game.add.image(0,0,"start");

			startButton = game.add.button(355,290, "button_Play",this.buttonPlay);
			startButton.scale.x = 0.6;
			startButton.scale.y = 0.6;
			
			menuText = game.add.text(350,225,"Menu",{"fill":"black"});
			menuText.scale.x = 1.4;
			menuText.scale.y = 1.4;
			
			aboutText = game.add.button(409,370,"About",this.about);
            aboutText.anchor.set(0.6);
			aboutText.scale.set(1);
			aboutText.scale.x = 0.6;
			aboutText.scale.y = 0.6;
			
			
			instruc = game.add.button(411,430,"intruct",this.ins);
			instruc.anchor.set(0.6);
			instruc.scale.set(1);
			instruc.scale.x = 0.6;
			instruc.scale.y = 0.6;
			
			game.scale.scaleMode = Phaser.ScaleManager.EXACT_FIT;
			game.scale.forcePortrait = false;
			game.scale.forceLandscape = true;
			game.scale.pageAlignHorizontally = true;
			game.scale.pageAlignVertically = true;;
			game.scale.setScreenSize = true;
			

		},
		
		lundag:function (){
        game.state.start("playGame");
		
   },

    about: function(){
            about=game.add.image(0,0,"about2");
  
		
			
            restartButton=game.add.button(30,500,"menu2",restartB,this);
			restartButton.scale.x = 0.6;
			restartButton.scale.y = 0.6;
            function restartB() {
           
            restartButton.destroy();
            game.state.start("menuGame");
            }

            },
    ins: function(){
            about=game.add.image(0,0,"ins");

            restartButton=game.add.button(30,500,"menu2",restartB,this);
			restartButton.scale.x = 0.6;
			restartButton.scale.y = 0.6;
            function restartB() {
            restartButton.destroy();

            game.state.start("menuGame");

            }

            },
   

		update: function(){
	},
		buttonPlay:function(){
				game.state.start("playGame");
				menumusic.stop();
		
			},
	}