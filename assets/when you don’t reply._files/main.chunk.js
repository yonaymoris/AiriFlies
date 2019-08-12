(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/static/styles.css":
/*!**********************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!./node_modules/postcss-loader/src??postcss!./src/static/styles.css ***!
  \**********************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, "/*! normalize.css v9.0.1 | MIT License | github.com/csstools/normalize.css */\n\n/* Document\n * ========================================================================== */\n\n/**\n * 1. Correct the line height in all browsers.\n * 2. Prevent adjustments of font size after orientation changes in\n *    IE on Windows Phone and in iOS.\n */\n\nhtml {\n  line-height: 1.15; /* 1 */\n}\n\n/* Sections\n * ========================================================================== */\n\n/**\n * Correct the font size and margin on `h1` elements within `section` and\n * `article` contexts in Chrome, Firefox, and Safari.\n */\n\nh1 {\n  font-size: 2em;\n  margin: 0.67em 0;\n}\n\n/* Grouping content\n * ========================================================================== */\n\n/**\n * 1. Add the correct box sizing in Firefox.\n * 2. Show the overflow in Edge and IE.\n */\n\nhr {\n  box-sizing: content-box; /* 1 */\n  height: 0; /* 1 */\n}\n\n/**\n * 1. Correct the inheritance and scaling of font size in all browsers.\n * 2. Correct the odd `em` font sizing in all browsers.\n */\n\npre {\n  font-family: monospace, monospace; /* 1 */\n  font-size: 1em; /* 2 */\n}\n\n/* Text-level semantics\n * ========================================================================== */\n\n/**\n * Add the correct text decoration in Edge, IE, Opera, and Safari.\n */\n\nabbr[title] {\n  text-decoration: underline;\n  text-decoration: underline dotted;\n}\n\n/**\n * Add the correct font weight in Chrome, Edge, and Safari.\n */\n\nb,\nstrong {\n  font-weight: bolder;\n}\n\n/**\n * 1. Correct the inheritance and scaling of font size in all browsers.\n * 2. Correct the odd `em` font sizing in all browsers.\n */\n\ncode,\nkbd,\nsamp {\n  font-family: monospace, monospace; /* 1 */\n  font-size: 1em; /* 2 */\n}\n\n/**\n * Add the correct font size in all browsers.\n */\n\nsmall {\n  font-size: 80%;\n}\n\n/* Embedded content\n * ========================================================================== */\n\n/* Forms\n * ========================================================================== */\n\n/**\n * Remove the margin in Safari.\n */\n\nbutton,\ninput,\nselect {\n  margin: 0;\n}\n\n/**\n * 1. Show the overflow in IE.\n * 2. Remove the inheritance of text transform in Edge, Firefox, and IE.\n */\n\nbutton {\n  text-transform: none; /* 2 */\n}\n\n/**\n * Correct the inability to style clickable types in iOS and Safari.\n */\n\nbutton,\n[type=\"button\"],\n[type=\"reset\"],\n[type=\"submit\"] {\n  -webkit-appearance: button;\n}\n\n/**\n * Correct the padding in Firefox.\n */\n\nfieldset {\n  padding: 0.35em 0.75em 0.625em;\n}\n\n/**\n * 1. Add the correct display in Edge and IE.\n * 2. Add the correct vertical alignment in Chrome, Firefox, and Opera.\n */\n\nprogress {\n  vertical-align: baseline; /* 2 */\n}\n\n/**\n * Remove the inheritance of text transform in Firefox.\n */\n\nselect {\n  text-transform: none;\n}\n\n/**\n * 1. Remove the margin in Firefox and Safari.\n * 2. Remove the default vertical scrollbar in IE.\n */\n\ntextarea {\n  margin: 0; /* 1 */\n}\n\n/**\n * 1. Correct the odd appearance in Chrome and Safari.\n * 2. Correct the outline style in Safari.\n */\n\n[type=\"search\"] {\n  -webkit-appearance: textfield; /* 1 */\n  outline-offset: -2px; /* 2 */\n}\n\n/**\n * Correct the cursor style of increment and decrement buttons in Safari.\n */\n\n::-webkit-inner-spin-button,\n::-webkit-outer-spin-button {\n  height: auto;\n}\n\n/**\n * Correct the text style of placeholders in Chrome, Edge, and Safari.\n */\n\n::-webkit-input-placeholder {\n  color: inherit;\n  opacity: 0.54;\n}\n\n/**\n * Remove the inner padding in Chrome and Safari on macOS.\n */\n\n::-webkit-search-decoration {\n  -webkit-appearance: none;\n}\n\n/**\n * 1. Correct the inability to style clickable types in iOS and Safari.\n * 2. Change font properties to `inherit` in Safari.\n */\n\n::-webkit-file-upload-button {\n  -webkit-appearance: button; /* 1 */\n  font: inherit; /* 2 */\n}\n\n/**\n * Remove the inner border and padding of focus outlines in Firefox.\n */\n\n::-moz-focus-inner {\n  border-style: none;\n  padding: 0;\n}\n\n/**\n * Restore the focus outline styles unset by the previous rule in Firefox.\n */\n\n:-moz-focusring {\n  outline: 1px dotted ButtonText;\n}\n\n/* Interactive\n * ========================================================================== */\n\n/*\n * Add the correct display in Edge and IE.\n */\n\ndetails {\n  display: block;\n}\n\n/*\n * Add the correct styles in Edge, IE, and Safari.\n */\n\ndialog {\n  background-color: white;\n  border: solid;\n  color: black;\n  display: block;\n  height: -moz-fit-content;\n  height: -webkit-fit-content;\n  height: fit-content;\n  left: 0;\n  margin: auto;\n  padding: 1em;\n  position: absolute;\n  right: 0;\n  width: -moz-fit-content;\n  width: -webkit-fit-content;\n  width: fit-content;\n}\n\ndialog:not([open]) {\n  display: none;\n}\n\n/*\n * Add the correct display in all browsers.\n */\n\nsummary {\n  display: list-item;\n}\n\n/* Scripting\n * ========================================================================== */\n\n/* User interaction\n * ========================================================================== */\n\n:root {\n    --messageBorderRadius: 1em;\n}\n\n*, *:before, *:after {\n    box-sizing: border-box;\n    margin: 0;\n    padding: 0;\n}\n\n/* Some elements must have their font explicitly defined */\nhtml, body, button, input, textarea, textfield, select {\n    font-family: BlinkMacSystemFont, -apple-system, \"Segoe UI\", \"Oxygen\", \"Ubuntu\", \"Cantarell\", \"Fira Sans\", \"Droid Sans\", \"Helvetica Neue\", \"Helvetica\", \"Arial\", sans-serif;\n}\n\n.container {\n    display: grid;\n    grid-template-columns: 1fr minmax(0px, 1024px) 1fr;\n    grid-template-rows: 100vh;\n    grid-template-areas: \n        \". content .\";\n}\n\n.content {\n    grid-area: content;\n    padding: 1em;\n}\n\n.chat {\n    height: 100%;\n    width: 100%;\n    display: grid;\n    grid-template-rows: 1fr auto;\n}\n\n.chat > .log {\n    border: 1px solid black;\n    padding: 1em;\n    overflow-y: scroll;\n}\n\n.chat > .log > .start-message {\n    text-align: center;\n    opacity: 0.5;\n    padding: 1em;\n}\n\n.chat > .log > .message {\n    margin: 0.2em;\n    display: flex;\n}\n\n.chat > .log > .message.current-user {\n    flex-direction: row-reverse;\n}\n\n.chat > .log > .message > span {\n    padding: 0.7em 1em;\n    border-radius: var(--messageBorderRadius);\n    border-bottom-left-radius: 0;\n    background-color: lightpink;\n}\n\n.chat > .log > .message.current-user > span {\n    border-radius: var(--messageBorderRadius);\n    border-bottom-right-radius: 0;\n    background-color: lightblue;\n}\n\n.chat > .input {\n    display: grid;\n    grid-template-columns: 9fr auto;\n    padding: 1em 0;\n}\n\n.chat > .input input[type=\"text\"] {\n    \n}\n\n.chat > .input input[type=\"button\"] {\n    \n}", ""]);



/***/ }),

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

/***/ }),

/***/ "./src/bot/messages.js":
/*!*****************************!*\
  !*** ./src/bot/messages.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  good: ['That\'s so funny!', 'Oh, I see.', 'OK', 'Very interesting.', 'Tell me more.'],
  bad: ['Are you busy?', 'Did I say something wrong?', 'Why aren\'t you replying?', 'I\'ve been waiting for you all this time.', 'Did I do something wrong?', 'Am I bothering you?', 'I want to know you more...', 'You\'ve been online recently but haven\'t said anything. Are we still cool?', 'Am I thinking of you too much?']
});

/***/ }),

/***/ "./src/components/App.js":
/*!*******************************!*\
  !*** ./src/components/App.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Users_yonaymoris_Library_Mobile_Documents_com_apple_CloudDocs_School_of_Ma_waiting_bot_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var bot__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! bot */ "./src/bot/index.js");

var _jsxFileName = "/Users/yonaymoris/Library/Mobile Documents/com~apple~CloudDocs/School of Ma/waiting-bot/src/components/App.js";


const userName = 'You';
const botName = 'yona';
const botMessageDelay = 2000;

function messagesReducer(state, action) {
  if (action.content) {
    const newMsg = {
      timestamp: Date.now(),
      author: action.author,
      content: action.content
    };
    return state.concat([newMsg]);
  }

  return state;
}

function App() {
  const _useReducer = Object(react__WEBPACK_IMPORTED_MODULE_1__["useReducer"])(messagesReducer, []),
        _useReducer2 = Object(_Users_yonaymoris_Library_Mobile_Documents_com_apple_CloudDocs_School_of_Ma_waiting_bot_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useReducer, 2),
        messages = _useReducer2[0],
        addMessage = _useReducer2[1];

  const _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(''),
        _useState2 = Object(_Users_yonaymoris_Library_Mobile_Documents_com_apple_CloudDocs_School_of_Ma_waiting_bot_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState, 2),
        text = _useState2[0],
        setText = _useState2[1];

  const chatBot = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(new bot__WEBPACK_IMPORTED_MODULE_2__["default"](botName))[0];
  const chatLog = Object(react__WEBPACK_IMPORTED_MODULE_1__["useRef"])(null);

  function onSubmit(e) {
    e.preventDefault();
    addMessage({
      author: userName,
      content: text
    });
    setText(''); // Reset bot's message timer

    chatBot.useBadMessage = false;
    chatBot.startTimer(() => {
      const msg = chatBot.getMessage();
      addMessage({
        author: chatBot.name,
        content: msg
      });
      chatBot.useBadMessage = true; // Ensure subsequent messages are 'bad'
    }, botMessageDelay);
  }

  function onChange(e) {
    setText(e.target.value);
  } // Scroll to bottom whenever a new message is added


  Object(react__WEBPACK_IMPORTED_MODULE_1__["useLayoutEffect"])(() => {
    chatLog.current.scrollTop = chatLog.current.scrollHeight;
  }, [messages]);
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("main", {
    className: "content",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "chat",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "log",
    ref: chatLog,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    className: "start-message",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62
    },
    __self: this
  }, "This is the start of your conversation with ", botName, "."), messages.map((msg, i) => react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    key: i,
    className: 'message' + (msg.author === userName ? ' current-user' : ''),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69
    },
    __self: this
  }, msg.content)))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("form", {
    className: "input",
    onSubmit: onSubmit,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", {
    type: "text",
    value: text,
    onChange: onChange,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", {
    type: "submit",
    value: "Send",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75
    },
    __self: this
  })))));
}

/* harmony default export */ __webpack_exports__["default"] = (App);

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var components_App__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! components/App */ "./src/components/App.js");
/* harmony import */ var static_styles_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! static/styles.css */ "./src/static/styles.css");
/* harmony import */ var static_styles_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(static_styles_css__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "/Users/yonaymoris/Library/Mobile Documents/com~apple~CloudDocs/School of Ma/waiting-bot/src/index.js";


 // eslint-disable-next-line no-unused-vars


react_dom__WEBPACK_IMPORTED_MODULE_1___default.a.render(react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_App__WEBPACK_IMPORTED_MODULE_2__["default"], {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 7
  },
  __self: undefined
}), document.getElementById('root'));

/***/ }),

/***/ "./src/static/styles.css":
/*!*******************************!*\
  !*** ./src/static/styles.css ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../../node_modules/postcss-loader/src??postcss!./styles.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/static/styles.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(true) {
	module.hot.accept(/*! !../../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../../node_modules/postcss-loader/src??postcss!./styles.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/static/styles.css", function() {
		var newContent = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../../node_modules/postcss-loader/src??postcss!./styles.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/static/styles.css");

		if(typeof newContent === 'string') newContent = [[module.i, newContent, '']];

		var locals = (function(a, b) {
			var key, idx = 0;

			for(key in a) {
				if(!b || a[key] !== b[key]) return false;
				idx++;
			}

			for(key in b) idx--;

			return idx === 0;
		}(content.locals, newContent.locals));

		if(!locals) throw new Error('Aborting CSS HMR due to changed css-modules locals.');

		update(newContent);
	});

	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 0:
/*!**********************************************************************************!*\
  !*** multi ./node_modules/react-dev-utils/webpackHotDevClient.js ./src/index.js ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! /Users/yonaymoris/Library/Mobile Documents/com~apple~CloudDocs/School of Ma/waiting-bot/node_modules/react-dev-utils/webpackHotDevClient.js */"./node_modules/react-dev-utils/webpackHotDevClient.js");
module.exports = __webpack_require__(/*! /Users/yonaymoris/Library/Mobile Documents/com~apple~CloudDocs/School of Ma/waiting-bot/src/index.js */"./src/index.js");


/***/ })

},[[0,"runtime~main",0]]]);
//# sourceMappingURL=main.chunk.js.map