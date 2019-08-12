webpackHotUpdate("main",{

/***/ "./src/bot/index.js":
/*!**************************!*\
  !*** ./src/bot/index.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _messages__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./messages */ "./src/bot/messages.js");


class Bot {
  constructor(name) {
    this.name = name;
    this.timer = null;
    this.useBadMessage = false;
    this.prevMessage = '';
  }
  /**
   * Start a timer that executes the specified callback. The previous timer is
   * cleared whenever you call this function.
   * @param {*} callback - The function to execute when the timer completes.
   * @param {number} delay - 
   */


  startTimer(callback, delay = 10000) {
    clearTimeout(this.timer);
    const id = setInterval(callback, delay);
    this.timer = id;
  }
  /**
   * Get a random message. If the useBadMessage instance variable is true, this
   * function will return a 'bad' message. Otherwise, it will return a 'good'
   * message.
   */


  getMessage() {
    const validMessages = this.useBadMessage ? _messages__WEBPACK_IMPORTED_MODULE_0__["default"].bad : _messages__WEBPACK_IMPORTED_MODULE_0__["default"].good;
    let random = Math.floor(Math.random() * validMessages.length); // Prevent bot from using same message twice

    while (validMessages[random] === this.prevMessage) {
      random = Math.floor(Math.random() * validMessages.length);
    }

    const msg = validMessages[random];
    this.prevMessage = msg;
    return msg;
  }

}

/* harmony default export */ __webpack_exports__["default"] = (Bot);

/***/ })

})
//# sourceMappingURL=main.2d799077cfb90b7da41d.hot-update.js.map