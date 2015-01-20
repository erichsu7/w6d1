var sum = function () {
  var args = Array.prototype.slice.call(arguments, 0);
  sum = 0
  args.forEach(function(arg) {
    sum += arg;
  })
  return sum;
}

console.log(sum(1,2,3,4));
