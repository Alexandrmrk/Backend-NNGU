"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _TryCatchMiddlewareDecorator = _interopRequireDefault(require("../decorators/TryCatchMiddlewareDecorator"));

var _HttpError = _interopRequireDefault(require("../exeptions/HttpError"));

var _Session = _interopRequireDefault(require("../models/Session"));

var _class;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

var Authorize = (_class = /*#__PURE__*/function () {
  function Authorize() {
    _classCallCheck(this, Authorize);
  }

  _createClass(Authorize, null, [{
    key: "check",
    value: function () {
      var _check = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(req, res, next) {
        var token, sessionFound, userId;
        return regeneratorRuntime.wrap(function _callee$(_context) {
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
}(), (_applyDecoratedDescriptor(_class, "check", [_TryCatchMiddlewareDecorator["default"]], Object.getOwnPropertyDescriptor(_class, "check"), _class)), _class);
var _default = Authorize;
exports["default"] = _default;
//# sourceMappingURL=Authorize.js.map