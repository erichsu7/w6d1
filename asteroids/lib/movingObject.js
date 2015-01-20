(function () {
  if (typeof Asteroids === "undefined") {
    window.Asteroids = {};
  }

  var MovingObject = Asteroids.MovingObject = function (options) {
    this.pos = options.pos;
    this.vel = options.vel;
    this.radius = options.radius;
    this.color = options.color;
    this.game = options.game;
  };

  MovingObject.prototype.draw = function (ctx) {
    ctx.fillStyle = this.color;
    ctx.beginPath();

    ctx.arc(
      this.pos[0],
      this.pos[1],
      this.radius,
      0,
      2 * Math.PI,
      false
    );

    ctx.fill();
  };

  MovingObject.prototype.isCollidedWith = function (otherObject) {
    var x1 = this.pos[0];
    var x2 = otherObject.pos[0];
    var y1 = this.pos[1];
    var y2 = otherObject.pos[1];

    var dist = Math.sqrt((Math.pow((x2 - x1),2) + Math.pow((y2 - y1),2)))

    return (dist < (this.radius + otherObject.radius)) // Is there a collision?
  };

  MovingObject.prototype.collideWith = function (otherObject) {
    this.game.remove(this);
    this.game.remove(otherObject);
  }

  MovingObject.prototype.move = function () {
    var tempX = this.pos[0] + this.vel[0];
    var tempY = this.pos[1] + this.vel[1];
    this.pos = this.game.wrap([tempX, tempY]);
  };
})();
