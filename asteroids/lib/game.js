(function () {
  var Game = Asteroids.Game = function () {
    this.DIM_X = 800;
    this.DIM_Y = 800;
    this.NUM_ASTEROIDS = 10;
    this.asteroids = this.addAsteroids();
    this.ship = new Asteroids.Ship({game: this});
    this.allObjects = this.asteroids.concat(this.ship);
  }

  Game.prototype.addAsteroids = function () {
    var asteroids = [];
    for (i = 0; i < this.NUM_ASTEROIDS; i++) {
      var options = {
          game: this,
          pos: this.randomPosition()
        };
      var asteroid = new Asteroids.Asteroid(options);
        asteroids.push(asteroid);
    }
    return asteroids;
  }

  Game.prototype.randomPosition = function () {
    var x = Math.random() * this.DIM_X;
    var y = Math.random() * this.DIM_Y;
    return [x,y];
  };

  Game.prototype.draw = function (ctx) {
    ctx.clearRect(0,0,this.DIM_X, this.DIM_Y);
    this.allObjects.forEach(function (object) {
      object.draw(ctx);
    })
  }

  Game.prototype.moveObjects = function (ctx) {
    this.allObjects.forEach(function (object) {
      object.move();
    })
  }

  Game.prototype.checkCollisions = function () {
    var objects = this.allObjects;
    for (i = 0; i < objects.length - 1; i++) {
      for (j = i + 1; j < objects.length; j++) {
        if (objects[i].isCollidedWith(objects[j])) {
          objects[i].collideWith(objects[j]);
        }
      }
    }
  }

  Game.prototype.wrap = function (pos) {
    if (pos[0] < 0) {
      pos[0] += this.DIM_X;
    }
    if (pos[0] > this.DIM_X) {
      pos[0] -= this.DIM_X;
    }
    if (pos[1] < 0) {
      pos[1] += this.DIM_Y;
    }
    if (pos[1] > this.DIM_Y) {
      pos[1] -= this.DIM_Y;
    }

    return pos;
  }

  Game.prototype.step = function (ctx) {
    this.moveObjects(ctx);
    this.checkCollisions();
  }

  Game.prototype.remove = function (object) {
    var index = this.allObjects.indexOf(object);
    if (index > -1) {
      this.allObjects.splice(index, 1);
    }
  }
})();
