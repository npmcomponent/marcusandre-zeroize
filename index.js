
/**
 * Module dependencies.
 */

var each = require('component-each');

/**
 * Prepend numbers with a leading-zero.
 * @param {Array} numbers
 * @param {Number} breakpoint
 * @return {Array}
 */

module.exports = function(numbers, breakpoint) {
  var arr = [];

  each(numbers, function(val) {
    if (val < breakpoint) val = Number('0' + val);
    arr.push(val);
  });

  return arr;
};
