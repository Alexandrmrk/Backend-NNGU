"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _applyDecoratedDescriptor2 = _interopRequireDefault(require("@babel/runtime/helpers/applyDecoratedDescriptor"));

var _TryCatchMiddlewareDecorator = _interopRequireDefault(require("../decorators/TryCatchMiddlewareDecorator"));

var _HttpError = _interopRequireDefault(require("../exeptions/HttpError"));

var _Session = _interopRequireDefault(require("../models/Session"));

var _class;

var Authorize = (_class = /*#__PURE__*/function () {
  function Authorize() {
    (0, _classCallCheck2["default"])(this, Authorize);
  }

  (0, _createClass2["default"])(Authorize, null, [{
    key: "check",
    value: function () {
      var _check = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req, res, next) {
        var token, sessionFound, userId;
        return _regenerator["default"].wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                if (!req.headers.authorization) {
                  _context.next = 13;
                  break;
                }

                token = req.headers.authorization.split(' ')[1];

                if (token) {
                  _context.next = 4;
                  break;
                }

                throw new _HttpError["default"]('Access token not found in request', 400);

              case 4:
                _context.next = 6;
                return _Session["default"].findOne({
                  token: token
                });

              case 6:
                sessionFound = _context.sent;
                console.log(sessionFound);

                if (sessionFound) {
                  _context.next = 10;
                  break;
                }

                throw new _HttpError["default"]('Unauthorized', 401);

              case 10:
                userId = sessionFound.userId;
                req.userId = userId;
                return _context.abrupt("return", next());

              case 13:
                throw new _HttpError["default"]('Unauthorized', 401);

              case 14:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      function check(_x, _x2, _x3) {
        return _check.apply(this, arguments);
      }

      return check;
    }()
  }]);
  return Authorize;
}(), ((0, _applyDecoratedDescriptor2["default"])(_class, "check", [_TryCatchMiddlewareDecorator["default"]], Object.getOwnPropertyDescriptor(_class, "check"), _class)), _class);
var _default = Authorize;
exports["default"] = _default;
//# sourceMappingURL=Authorize.js.map