describe('zeroize', function () {

  var assert = require('assert');
  var zeroize = require('zeroize');

  it('should prepend numbers with zeros', function () {
    var arr = [2, 4, 8, 16, 32];
    var breakpoint = 10;
    var ret = zeroize(arr, breakpoint);
    assert(ret[0] == 02);
    assert(ret[1] == 04);
    assert(ret[2] == 08);
    assert(ret[3] == 16);
    assert(ret[4] == 32);
    console.log(ret);
  });

});
