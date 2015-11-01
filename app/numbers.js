exports = (typeof window === 'undefined') ? global : window;

exports.numbersAnswers = {
  valueAtBit: function(num, bit) {
    var s = num.toString(2);

    return parseInt(s[s.length - bit]);
  },

  base10: function(str) {
    var result = 0,
        len = str.length - 1;

    for (var i = 0; i < len; i++) {
      if (str[i] === '1') {
        result += Math.pow(2, len - i);
      }
    }

    return result;
  },

  convertToBinary: function(num) {
    var str = num.toString(2);

    while (str.length < 8) {
      str = "0" + str;
    }

    return str;
  },

  multiply: function(a, b) {
    var n1 = a.toString().split('.'),
        n2 = b.toString().split('.'),
        n = (n1.length >= n2.length) ? n1 : n2,
        m = (n.length < 2) ? 1 : n[1].length,
        result = a * b;

    return parseFloat(result.toPrecision(m));
  }
};
