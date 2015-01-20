Function.prototype.curry = function(numArgs) {
  var fn = this;
  var args = [];
  var _curry = function(arg) {
    args.push(arg);
    if (args.length === numArgs) {
      return fn.apply(null, args);
    } else {
      return _curry;
    }
  }
  return _curry;
}

var sumThree = function (num1, num2, num3) {
  return num1 + num2 + num3;
}


var curriedSumThree = sumThree.curry(3);
var c1 = curriedSumThree(1);
var c2 = curriedSumThree(2);
var c3 = curriedSumThree(3);
