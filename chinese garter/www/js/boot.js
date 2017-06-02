BootGame={
	create:function () {
		console.log("x");
		game.physics.startSystem(Phaser.Physics.ARCADE);
		game.stage.backgroundColor = "#ccc";
		keyboard = game.input.keyboard.createCursorKeys();
		game.state.start("preloadGame");

	},
}