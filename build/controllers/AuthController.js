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

var _uuid = require("uuid");

var _User = _interopRequireDefault(require("../models/User"));

var _Session = _interopRequireDefault(require("../models/Session"));

var _TryCatchMiddlewareDecorator = _interopRequireDefault(require("../decorators/TryCatchMiddlewareDecorator"));

var _HttpError = _interopRequireDefault(require("../exeptions/HttpError"));

var _password = require("../helpers/password");

var _class;

var AuthController = (_class = /*#__PURE__*/function () {
  function AuthController() {
    (0, _classCallCheck2["default"])(this, AuthController);
  }

  (0, _createClass2["default"])(AuthController, null, [{
    key: "signin",
    value: function () {
      var _signin = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req, res) {
        var _req$body, email, password, user, authToken, session;

        return _regenerator["default"].wrap(function _callee$(_context) {
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
      var _signup = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(req, res) {
        var model, user;
        return _regenerator["default"].wrap(function _callee2$(_context2) {
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
}(), ((0, _applyDecoratedDescriptor2["default"])(_class, "signin", [_TryCatchMiddlewareDecorator["default"]], Object.getOwnPropertyDescriptor(_class, "signin"), _class), (0, _applyDecoratedDescriptor2["default"])(_class, "signup", [_TryCatchMiddlewareDecorator["default"]], Object.getOwnPropertyDescriptor(_class, "signup"), _class)), _class);
var _default = AuthController;
exports["default"] = _default;
//# sourceMappingURL=AuthController.js.map