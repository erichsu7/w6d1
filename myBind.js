Function.prototype.myBind = function (newContext) {
  var oldFunction = this;
  var bindTimeArgs = Array.prototype.slice.call(arguments, 1);
  return function () {
    var callTimeArgs = Array.prototype.slice.call(arguments)
    return oldFunction.apply(newContext, bindTimeArgs.concat(callTimeArgs));
  }
}

var testFunction = function () {
  var args = Array.prototype.slice.call(arguments)
  console.log(args);
}

var boundFunction = testFunction.myBind({}, 1,2,3);
boundFunction(4,5,6);
