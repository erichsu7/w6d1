(function() {

  var Ship = Asteroids.Ship = function (options) {

    var shipOptions = {
      pos: [options.game.DIM_X/2, options.game.DIM_Y/2 ],
      game: options.game,
      radius: Ship.RADIUS,
      color: Ship.COLOR,
      vel: [0,0]
    }
    Asteroids.MovingObject.call(this, shipOptions);
  };

  Asteroids.Util.inherits(Ship, Asteroids.MovingObject);

  Ship.RADIUS = 30;
  Ship.COLOR = 'blue';

})();
