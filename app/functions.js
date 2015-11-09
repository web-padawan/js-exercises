exports = (typeof window === 'undefined') ? global : window;

exports.functionsAnswers = {
  argsAsArray : function(fn, arr) {
    return fn.apply(null, arr);
  },

  speak : function(fn, obj) {
    return fn.apply(obj, arguments);
  },

  functionFunction : function(str) {
    return function(str2) {
      return str + ', ' + str2;
    }
  },

  makeClosures : function(arr, fn) {
    var result = [];

    for (var i = 0; i < arr.length; i++) {
      result.push(fn.bind(null, arr[i]));
    }

    return result;
  },

  partial : function(fn, str1, str2) {
    return fn.bind(null, str1, str2);
  },

  useArguments : function() {
    var params = Array.prototype.slice.call(arguments);

    return params.reduce(function(prev, current) { return prev + current; });
  },

  callIt : function(fn) {
    var params = Array.prototype.slice.call(arguments, 1),
        len = arguments.length;
        fout = fn.bind(null);

    for (var i = 1; i < len; i++) {
      fout = fout.bind(null, arguments[i]);
    }

    return fout();
  },

  partialUsingArguments : function(fn) {
    var params = Array.prototype.slice.call(arguments, 1),
        len = arguments.length;
        fout = fn.bind(null),
        i = 1;

    while (i < len) {
      fout = fout.bind(null, arguments[i]);
      i++;
    }

    return fout;
  },

  curryIt : function(fn) {
    var args = (arguments.length > 1) ? Array.prototype.slice.call(arguments, 1) : [];

    function accumulator(args, expected) {
      return function(newargs) {
        args = args.concat(Array.prototype.slice.call(arguments));

        return (args.length >= expected) ? fn.apply(null, args) : accumulator(args, expected);
      };
    }

    return accumulator(args, fn.length);
  }

};
