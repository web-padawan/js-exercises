exports = (typeof window === 'undefined') ? global : window;

exports.countAnswers =  {
  count : function (start, end) {
    var c = start;
    console.log(c);

    var myTimer = setInterval(function() {
      c++;
      console.log(c);
      if (c == end) {
        clearInterval(myTimer);
      }
    }, 100);

    return {
      cancel : function() {
        clearInterval(myTimer);
      }
    }
  }
};
