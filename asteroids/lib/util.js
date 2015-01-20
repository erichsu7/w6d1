(function () {
  var Util = Asteroids.Util = {};

  Asteroids.Util.inherits = function (ChildClass, ParentClass) {
    function Surrogate () {};
    Surrogate.prototype = ParentClass.prototype;
    ChildClass.prototype = new Surrogate();
  }

  Util.randomVec = function(length) {
    var randomPlusMinus = function () {
      var rand = (Math.random() * 2) - 1;
      return rand/Math.abs(rand);
    };


    x = Math.random() * length * randomPlusMinus();
    y = Math.sqrt(Math.pow(length, 2) - Math.pow(x, 2)) * randomPlusMinus();

    return [x, y];
  }


})();
