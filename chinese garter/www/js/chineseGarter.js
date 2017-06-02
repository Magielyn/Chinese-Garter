var chineseGarter = function(){
    "use strict";
    return {
		 collectStar:function(player,star){
			a = a+ 10;
			if(star.kill()){
		scoreText.text = "Score: "+a;
		button = game.add.button(345,245,'btnleft',chineseGarter.btnleft1);
		player.animations.stop('walk');
            }
		},
		btnleft1:function(){
    game.input.onTap.addOnce(chineseGarter.restart,this);
        button.destroy();
            if(a==0){
           	   match.revive();
           	   match.reset(350,300);
           	   match.scale.y=0.05;
           	   match.scale.x=0.34;
                button.destroy();
            }
            else if(a==10){
           	   match.revive();
           	   match.reset(322,400);
           	   match.scale.y = 0.47;
           	   match.scale.x = 0.6;
                button.destroy();
            }
            else if(a==20){
				match.revive();
				match.reset(320,480);
				match.scale.y = 0.6;
				match.scale.x = 0.6;
                button.destroy();
            }
            else if(a==30){
				match.revive();
				match.reset(320,405);
				match.scale.y = 0.72;
				match.scale.x = 0.6;
                button.destroy();
            }
            else if(a==40){
				match.revive();
				match.reset(317,360);
				match.scale.y = 0.88;
				match.scale.x = 0.58;
                button.destroy();
            }
            else if(a==50){
				match.revive();
				match.reset(318,331);
				match.scale.y= 1;
				match.scale.x=0.57;
                button.destroy();
            }
            else if(a==60){
				match.revive();
				match.reset(323,331);
				match.scale.y= 1.2;
				match.scale.x=0.54;
                button.destroy();
            }
				
			else if(a==70){
				
		scoreText = game.add.text(160,200,'Congrats you have finished the game',{ fontSize: '32px', fill: 'blue' });
		scoreText = game.add.text(320,255,'Score: '+a,{ fontSize: '40px', fill: 'white' }); 
		buttongo = game.add.button(360,320,'gameover', chineseGarter.overgame);}
	},
		killPlayer:function(player,line2){
			if(player.kill()){
			l = l - 1;
		player.animations.stop('walk');
            if(chineseGarter.retrieveBest() <= a){
            localStorage.setItem("gameStorage",a);
            }
      }
		button = game.add.button(350,250,'btnleft',chineseGarter.btnleft1);
			if(l==0){
				button.destroy();
		scoreText = game.add.text(320,250,'Score: '+a,{ fontSize: '40px', fill: 'white' });
		scoreText = game.add.text(215,190,'GAME OVER!',{ fontSize: '60px', fill: 'blue' });  
		buttongo = game.add.button(360,300,'gameover', chineseGarter.overgame);
			match.destroy();
			star.destroy();
      }
    },
		killMatch:function(player,match){
			if(player.kill()){
			l = l - 1;
		player.animations.stop('walk');
    }
		button = game.add.button(350,250,'btnleft',chineseGarter.btnleft1);
			if(l==0){
				button.destroy();
    scoreText = game.add.text(320,250,'Score: '+a,{ fontSize: '40px', fill: 'white' });
    scoreText = game.add.text(215,190,'GAME OVER!',{ fontSize: '60px', fill: 'blue' });
        
		buttongo = game.add.button(360,300,'gameover', chineseGarter.overgame);
			match.destroy();
			star.destroy();
    }
},
		
			restart:function () {
			player.revive();
			player.reset(200,410)
			star.revive();
			star.reset(650,500)
			platform2.reset(0,0)
},


	pushJump2:function(){
        platform2.body.velocity.y=0;
            if(platform2.body.y>=200){
			player.animations.play('walk');
			if(player.body.touching.down){
			player.body.velocity.y = -175;
			player.body.velocity.x = 300;

    }
}
		if(platform2.body.y==100 || platform2.body.y<=200){
			player.animations.play('walk');
		if(player.body.touching.down){
			if(a==0){
			player.body.velocity.y = -475;
			player.body.velocity.x = 300;
    }
    else if(a==10){
		player.body.velocity.y = -525;
        player.body.velocity.x = 300;
    }
    else if(a==20){
		player.body.velocity.y = -550;
        player.body.velocity.x = 250;
    }
    else if(a==30){
		player.body.velocity.y = -600;
        player.body.velocity.x = 230;
    }
    else if(a==40){
		player.body.velocity.y = -625;
        player.body.velocity.x = 230;
    }
    else if(a==50){
		player.body.velocity.y = -650;
        player.body.velocity.x = 235;
    }
	else if(a==60){
		player.body.velocity.y = -675;
        player.body.velocity.x = 235;
    }
    }
            }
    if(platform2.body.y<=100){
        player.animations.play('walk');
		
	if(player.body.touching.down){
        player.body.velocity.y = -1075;
        player.body.velocity.x = 300;
      
		}
    }
},
        
        overgame:function(){
        	window.location.href=window.location.href;
 },
       retrieveBest:function(){
            return ((localStorage.getItem("gameStorage") != null) || (localStorage.getItem("gameStorage") != ""))?localStorage.getItem("gameStorage"):0;
 },
       btn2:function(){
          platform2.body.velocity.y=500;
			if(a==10){
          platform2.body.velocity.y=800;
  }
    else if(a==20){
            platform2.body.velocity.y=1150;
          }
    else if(a==30){
            platform2.body.velocity.y=1400;
          }
    else if(a==40){
            platform2.body.velocity.y=1600;
          }
	
	else if(a==50){
            platform2.body.velocity.y=1800;
          }
        }
    }
}();

