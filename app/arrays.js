exports = (typeof window === 'undefined') ? global : window;

exports.arraysAnswers = {

  indexOf : function(arr, item) {
    var len = arr.length;

    for (var i = 0; i < len; i++) {
      if (arr[i] === item) {
        return i;
      }
    }

    return -1;
  },

  sum : function(arr) {
    var len = arr.length,
        sum = 0;

    for (var i = 0; i < len; i++) {
      if (typeof arr[i] === 'number') {
        sum += arr[i];
      }
    }

    return sum;
  },

  remove : function(arr, item) {
    var len = arr.length,
        result = [];

    for (var i = 0; i < len; i++) {
      if (arr[i] !== item) {
        result.push(arr[i]);
      }
    }

    return result;
  },

  removeWithoutCopy : function(arr, item) {
    var len = arr.length;

    for (var i = 0; i < len; i++) {
      if (arr[i] === item) {
        arr.splice(i, 1);
        i -= 1;
      }
    }

    return arr;
  },

  append : function(arr, item) {
    var len = arr.length;

    arr[len] = item;
    return arr;
  },

  truncate : function(arr) {
    var len = arr.length - 1;

    delete arr[len];
    arr.length = len;
    return arr;
  },

  prepend : function(arr, item) {
    var len = arr.length;

    for (var i = arr.length; i > 0; i--) {
      arr[i] = arr[i - 1];
    }
    arr[0] = item;
    return arr;
  },

  curtail : function(arr) {
    var len = arr.length - 1;

    for (var i = 0; i <= len; i++) {
      arr[i] = arr[i + 1];
    }
    delete arr[len];
    arr.length = len;
    return arr;
  },

  concat : function(arr1, arr2) {
    var out = [];

    for (var i = 0; i < arr1.length + arr2.length; i++) {
      out.push((i < arr1.length) ? arr1[i] : arr2[i - arr1.length]);
    }

    return out;
  },

  insert : function(arr, item, index) {
    var len = arr.length;

    for (var i = len; i > index; i--) {
      arr[i] = arr[i - 1];
    }
    arr[index] = item;

    return arr;
  },

  count : function(arr, item) {
    var test = function(value) {
      return value === item;
    };
    var matches = arr.filter(test) || [];

    return matches.length;
  },

  duplicates : function(arr) {
    var result = [];

    for (var i = 0; i < arr.length; i++){
      if (arr.indexOf(arr[i], i + 1) !== -1 && result[result.length - 1] !== arr[i]) {
        result.push(arr[i]);
      }
    }

    return result;
  },

  square : function(arr) {
    return arr.map(function(elem) {
      return elem * elem;
    });
  },

  findAllOccurrences : function(arr, target) {
    var result = [];

    for (var i = 0; i < arr.length; i++) {
      if (arr[i] === target) {
        result.push(i);
      }
    }

    return result;
  }
};
