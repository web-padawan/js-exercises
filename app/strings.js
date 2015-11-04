exports = (typeof window === 'undefined') ? global : window;

exports.stringsAnswers = {
  reduceString: function(str, amount) {
    var len = str.length,
        arr = [str[0]];

    for (var i = 1; i < len; i++) {
      if (str[i] === str[i - 1]) {
        arr[arr.length - 1] = arr[arr.length - 1] + str[i];
      } else {
        arr.push(str[i]);
      }
    }

    var out = arr.map(function(elem) {
      return elem.substr(0, amount);
    });

    return out.join('');
  },
  wordWrap: function(str, cols) {

  },
  reverseString: function(str) {

  }
};
