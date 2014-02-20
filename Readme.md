*This repository is a mirror of the [component](http://component.io) module [marcusandre/zeroize](http://github.com/marcusandre/zeroize). It has been modified to work with NPM+Browserify. You can install it using the command `npm install npmcomponent/marcusandre-zeroize`. Please do not open issues or send pull requests against this repo. If you have issues with this repo, report it to [npmcomponent](https://github.com/airportyh/npmcomponent).*

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