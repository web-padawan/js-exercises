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

  },

  fibonacci: function(n) {

  },

  validParentheses: function(n) {

  }
};
