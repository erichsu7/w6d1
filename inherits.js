Function.prototype.inherits = function(Baseclass) {
  function Surrogate() {};
  Surrogate.prototype = Baseclass.prototype;
  this.prototype = new Surrogate();

}
