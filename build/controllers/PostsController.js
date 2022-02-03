"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _applyDecoratedDescriptor2 = _interopRequireDefault(require("@babel/runtime/helpers/applyDecoratedDescriptor"));

var _Post = _interopRequireDefault(require("../models/Post"));

var _TryCatchMiddlewareDecorator = _interopRequireDefault(require("../decorators/TryCatchMiddlewareDecorator"));

var _HttpError = _interopRequireDefault(require("../exeptions/HttpError"));

var _class;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

var PostsController = (_class = /*#__PURE__*/function () {
  function PostsController() {
    (0, _classCallCheck2["default"])(this, PostsController);
  }

  (0, _createClass2["default"])(PostsController, null, [{
    key: "read",
    value: function () {
      var _read = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req, res) {
        var post;
        return _regenerator["default"].wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return PostsController.getPostById(req.params.id);

              case 2:
                post = _context.sent;
                res.json(post);

              case 4:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      function read(_x, _x2) {
        return _read.apply(this, arguments);
      }

      return read;
    }()
  }, {
    key: "list",
    value: function () {
      var _list = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(req, res) {
        var posts;
        return _regenerator["default"].wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return _Post["default"].find();

              case 2:
                posts = _context2.sent;
                res.json(posts);

              case 4:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }));

      function list(_x3, _x4) {
        return _list.apply(this, arguments);
      }

      return list;
    }()
  }, {
    key: "create",
    value: function () {
      var _create = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(req, res) {
        var model, post;
        return _regenerator["default"].wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                model = new _Post["default"](_objectSpread(_objectSpread({}, req.body), {}, {
                  authorId: req.userId
                }));
                _context3.next = 3;
                return model.save();

              case 3:
                post = _context3.sent;
                res.json({
                  status: true,
                  post: post
                });

              case 5:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3);
      }));

      function create(_x5, _x6) {
        return _create.apply(this, arguments);
      }

      return create;
    }()
  }, {
    key: "update",
    value: function () {
      var _update = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee4(req, res) {
        var post;
        return _regenerator["default"].wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                _context4.next = 2;
                return PostsController.getPostById(req.params.id);

              case 2:
                post = _context4.sent;

                if (!(req.userId !== post.authorId)) {
                  _context4.next = 5;
                  break;
                }

                throw new _HttpError["default"]('Access in closed', 403);

              case 5:
                post.header = req.body.header;
                post.content = req.body.content;
                _context4.next = 9;
                return post.save();

              case 9:
                res.json({
                  status: true,
                  post: post
                });

              case 10:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4);
      }));

      function update(_x7, _x8) {
        return _update.apply(this, arguments);
      }

      return update;
    }()
  }, {
    key: "delete",
    value: function () {
      var _delete2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee5(req, res) {
        var post;
        return _regenerator["default"].wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                _context5.next = 2;
                return PostsController.getPostById(req.params.id);

              case 2:
                post = _context5.sent;

                if (!(req.userId !== post.authorId)) {
                  _context5.next = 5;
                  break;
                }

                throw new _HttpError["default"]('Access in closed', 403);

              case 5:
                _context5.next = 7;
                return post["delete"]();

              case 7:
                res.status(204).end();

              case 8:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5);
      }));

      function _delete(_x9, _x10) {
        return _delete2.apply(this, arguments);
      }

      return _delete;
    }()
  }, {
    key: "getPostById",
    value: function () {
      var _getPostById = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee6(id) {
        var post;
        return _regenerator["default"].wrap(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                _context6.next = 2;
                return _Post["default"].findById(id);

              case 2:
                post = _context6.sent;

                if (post) {
                  _context6.next = 5;
                  break;
                }

                throw new _HttpError["default"]('Post not found', 404);

              case 5:
                return _context6.abrupt("return", post);

              case 6:
              case "end":
                return _context6.stop();
            }
          }
        }, _callee6);
      }));

      function getPostById(_x11) {
        return _getPostById.apply(this, arguments);
      }

      return getPostById;
    }()
  }]);
  return PostsController;
}(), ((0, _applyDecoratedDescriptor2["default"])(_class, "read", [_TryCatchMiddlewareDecorator["default"]], Object.getOwnPropertyDescriptor(_class, "read"), _class), (0, _applyDecoratedDescriptor2["default"])(_class, "list", [_TryCatchMiddlewareDecorator["default"]], Object.getOwnPropertyDescriptor(_class, "list"), _class), (0, _applyDecoratedDescriptor2["default"])(_class, "create", [_TryCatchMiddlewareDecorator["default"]], Object.getOwnPropertyDescriptor(_class, "create"), _class), (0, _applyDecoratedDescriptor2["default"])(_class, "update", [_TryCatchMiddlewareDecorator["default"]], Object.getOwnPropertyDescriptor(_class, "update"), _class), (0, _applyDecoratedDescriptor2["default"])(_class, "delete", [_TryCatchMiddlewareDecorator["default"]], Object.getOwnPropertyDescriptor(_class, "delete"), _class)), _class);
var _default = PostsController;
exports["default"] = _default;
//# sourceMappingURL=PostsController.js.map