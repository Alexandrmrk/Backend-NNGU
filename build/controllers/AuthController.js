"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _uuid = require("uuid");

var _User = _interopRequireDefault(require("../models/User"));

var _Session = _interopRequireDefault(require("../models/Session"));

var _TryCatchMiddlewareDecorator = _interopRequireDefault(require("../decorators/TryCatchMiddlewareDecorator"));

var _HttpError = _interopRequireDefault(require("../exeptions/HttpError"));

var _password = require("../helpers/password");

var _class;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

var AuthController = (_class = /*#__PURE__*/function () {
  function AuthController() {
    _classCallCheck(this, AuthController);
  }

  _createClass(AuthController, null, [{
    key: "signin",
    value: function () {
      var _signin = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(req, res) {
        var _req$body, email, password, user, authToken, session;

        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _req$body = req.body, email = _req$body.email, password = _req$body.password;
                _context.next = 3;
                return _User["default"].findOne({
                  email: email
                });

              case 3:
                user = _context.sent;
                _context.t0 = !user;

                if (_context.t0) {
                  _context.next = 9;
                  break;
                }

                _context.next = 8;
                return (0, _password.checkPassword)(password, user.password);

              case 8:
                _context.t0 = !_context.sent;

              case 9:
                if (!_context.t0) {
                  _context.next = 11;
                  break;
                }

                throw new _HttpError["default"]('Incorrect login or password', 401);

              case 11:
                authToken = (0, _uuid.v4)();
                _context.next = 14;
                return _Session["default"].create({
                  userId: user.id,
                  token: authToken
                });

              case 14:
                session = _context.sent;
                res.json({
                  status: true,
                  user: {
                    // eslint-disable-next-line no-underscore-dangle
                    id: user._id,
                    name: user.name,
                    email: user.email
                  },
                  token: session.token
                });

              case 16:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      function signin(_x, _x2) {
        return _signin.apply(this, arguments);
      }

      return signin;
    }()
  }, {
    key: "signup",
    value: function () {
      var _signup = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(req, res) {
        var model, user;
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.t0 = _User["default"];
                _context2.t1 = req.body.name;
                _context2.t2 = req.body.email;
                _context2.next = 5;
                return (0, _password.hashPassword)(req.body.password);

              case 5:
                _context2.t3 = _context2.sent;
                _context2.t4 = {
                  name: _context2.t1,
                  email: _context2.t2,
                  password: _context2.t3
                };
                model = new _context2.t0(_context2.t4);
                _context2.next = 10;
                return model.save();

              case 10:
                user = _context2.sent;
                res.json({
                  status: true,
                  user: {
                    // eslint-disable-next-line no-underscore-dangle
                    id: user._id,
                    name: user.name,
                    email: user.email
                  }
                });

              case 12:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }));

      function signup(_x3, _x4) {
        return _signup.apply(this, arguments);
      }

      return signup;
    }()
  }]);

  return AuthController;
}(), (_applyDecoratedDescriptor(_class, "signin", [_TryCatchMiddlewareDecorator["default"]], Object.getOwnPropertyDescriptor(_class, "signin"), _class), _applyDecoratedDescriptor(_class, "signup", [_TryCatchMiddlewareDecorator["default"]], Object.getOwnPropertyDescriptor(_class, "signup"), _class)), _class);
var _default = AuthController;
exports["default"] = _default;
//# sourceMappingURL=AuthController.js.map