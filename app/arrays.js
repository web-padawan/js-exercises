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

  },

  insert : function(arr, item, index) {

  },

  count : function(arr, item) {

  },

  duplicates : function(arr) {

  },

  square : function(arr) {

  },

  findAllOccurrences : function(arr, target) {

  }
};
