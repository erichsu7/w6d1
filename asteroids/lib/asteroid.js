(function () {

  var Asteroid = Asteroids.Asteroid = function (options) {
    var asteroidOptions = {
      pos: options.pos,
      vel: Asteroids.Util.randomVec(Math.random() * 5),
      color: Asteroid.COLOR,
      radius: Asteroid.RADIUS,
      game: options.game
      };

    Asteroids.MovingObject.call(this, asteroidOptions);
  }

  Asteroids.Util.inherits(Asteroid, Asteroids.MovingObject);
  Asteroid.COLOR = "red";
  Asteroid.RADIUS = 25;
})();
