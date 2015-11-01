exports = (typeof window === 'undefined') ? global : window;

exports.flowControlAnswers = {
  fizzBuzz : function(num) {
    if (num === undefined || isNaN(num)) {
        return false;
    } else {
        var fizz = !(num % 3),
            buzz = !(num % 5);
        return (fizz || buzz) ? ((fizz) ? "fizz" : "") + ((buzz) ? "buzz" : "") : num;
    }
  }
};
