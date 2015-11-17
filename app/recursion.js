exports = (typeof window === 'undefined') ? global : window;

exports.recursionAnswers = {
  listFiles: function(data, dirName) {
    var result = result || [];

    for (var i = 0; i < data.files.length; i++) {
      if (typeof data.files[i] === 'string' && (data.dir === dirName || !dirName)) {
        result.push(data.files[i]);
      }
      else if (typeof data.files[i] === 'object') {
        result = result.concat(this.listFiles(data.files[i], (data.dir === dirName || !dirName) ? '' : dirName));
      }
    }

    return result;
  },

  permute: function(arr) {
    var result = [],
        stack = [];

    function doPerm() {
      if (arr.length == 0) {
        result.push(stack.slice());
      }
      for (var i = 0; i < arr.length; i++) {
        var x = arr.splice(i, 1);
        stack.push(x.toString());
        doPerm();
        stack.pop();
        arr.splice(i, 0, x);
      }
    }

    doPerm();
    return result;
  },

  fibonacci: function(n) {

  },

  validParentheses: function(n) {

  }
};
