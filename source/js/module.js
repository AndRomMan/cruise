'use strict';

(function () {
  function print(text) {
    console.log(text);
  }
  window.module = {
    print: print,
  };
})();
