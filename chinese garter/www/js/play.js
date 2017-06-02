playGame={

	create:function () {
			bgMusic = game.add.audio("bgMusic");
			bgMusic.play();	
			tagEffect = game.add.audio("tagEffect");
			tagEffect.play();	
			//chineseGarter.loopAudio(3000);	
			bgMusic.loop = true;
			game.add.image(0,0,'bg');
			h1 = game.add.sprite(315,417,'h1');
			h1.scale.x = 0.25;
			h1.scale.y = 0.46;
			h2 = game.add.sprite(380,425,'h2');
			h2.scale.x = 0.3;
			h2.scale.y = 0.47;
			b1 = game.add.sprite(7,0,'b1');
			b1.scale.x = 0.7;
			b1.scale.y = 0.9;
			line = game.add.sprite(15,290,'line');
			line.scale.x = 0.54;
			line2 = game.add.sprite(315,30,'line2');
			line2.scale.x = 0.5;
			line2.scale.y = 0.5;
			platform = game.add.sprite(0,568,'platform');
			platform.scale.x=2;
			platform2 = game.add.sprite(0,0,'platform2');
			platform2.scale.x = 0.4;
			platform2.scale.y = 0.7;
			button = game.add.button(5,310,'b2',chineseGarter.btn2);
			button.scale.x = 0.5;
			button.scale.y = 0.8;
			Leftbutton = game.add.button(10,400,'left',chineseGarter.pushJump2);
			Leftbutton.scale.x = 0.8;
			Leftbutton.scale.y = 0.9;
			player = game.add.sprite(200,425,'player');
			player.scale.x = 0.5;
			player.scale.y = 0.7;
		
			match = game.add.sprite(323,300,'match');
			match.scale.y=0.4;
			match.scale.x=0.6;
			star = game.add.sprite(650,500,'star');

			game.physics.arcade.enable(player);
			game.physics.arcade.enable(b1);
			game.physics.arcade.enable(line);
			game.physics.arcade.enable(line2);
			game.physics.arcade.enable(platform2);
			game.physics.arcade.enable(platform);
			game.physics.arcade.enable(match);
			game.physics.arcade.enable(star);
		
			platform.body.immovable = true;
			match.body.immovable = true;
			line.body.immovable = true;
			line2.body.immovable = true;
			platform2.body.collideWorldBounds = true;
			platform2.body.bounce.y=1;
			player.body.collideWorldBounds = true;
			player.body.gravity.y=1000;
			match.body.collideWorldBounds = true;
			match.body.gravity.y=1000;
			player.animations.add('walk',[0,1,2,3,4],14,true);
			scoreText = game.add.text(550,20,'Score: 0',{ fontSize: '30px', fill: 'blue' });
			bestScore = game.add.text(550,50,'HI: '+chineseGarter.retrieveBest(),{fill:"blue"});
			button_pause = game.add.button(670,510, 'button_pause');
			button_pause.scale.x = 0.7;
			button_pause.scale.y = 0.6;
			button_pause.inputEnabled = true;
			button_pause.events.onInputUp.add(function (){
			game.paused = true;
			 menu = game.add.sprite(w/2,h-320,'button_play');
			 menu.anchor.setTo(0.5,0.5);
			 choiseLabel = game.add.text (w/2,h-400, 'Click the button to continue the game',{ fontSize: '35px', fill: 'black' });
			 choiseLabel.anchor.setTo(0.5,0.5);
			 });
			game.input.onDown.add(unpause,self);
			function unpause(event){
				if(game.paused){
				menu.destroy();
				choiseLabel.destroy();
				game.paused = false;
		}
	}
			
},
	
	update:function(){
		
		game.physics.arcade.collide(player,platform);
		game.physics.arcade.collide(platform,match);
		game.physics.arcade.collide(platform2,line);
		game.physics.arcade.overlap(player,star,chineseGarter.collectStar);
		game.physics.arcade.overlap(player,match,chineseGarter.killMatch);
		game.physics.arcade.overlap(player,line2,chineseGarter.killPlayer);
		
	},
}