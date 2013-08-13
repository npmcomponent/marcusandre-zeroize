
# zeroize

  Prepend numbers with a leading-zero.

## Installation

  Install with [component(1)](http://component.io):

    $ component install marcusandre/zeroize

## API

  Prepend every number **smaller than 10** with a leading-zero:

  ```js
  var zeroize = require('zeroize');
  var collection = zeroize([2, 4, 8, 16, 32], 10);
  // [02, 04, 08, 16, 32]
  ```

## License

  MIT