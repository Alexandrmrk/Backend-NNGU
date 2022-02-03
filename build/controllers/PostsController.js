"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _Post = _interopRequireDefault(require("../models/Post"));

var _TryCatchMiddlewareDecorator = _interopRequireDefault(require("../decorators/TryCatchMiddlewareDecorator"));

var _HttpError = _interopRequireDefault(require("../exeptions/HttpError"));

var _class;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

var PostsController = (_class = /*#__PURE__*/function () {
  function PostsController() {
    _classCallCheck(this, PostsController);
  }

  _createClass(PostsController, null, [{
    key: "read",
    value: function () {
      var _read = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(req, res) {
        var post;
        return regeneratorRuntime.wrap(function _callee$(_context) {
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
      var _list = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(req, res) {
        var posts;
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
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
      var _create = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(req, res) {
        var model, post;
        return regeneratorRuntime.wrap(function _callee3$(_context3) {
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
      var _update = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(req, res) {
        var post;
        return regeneratorRuntime.wrap(function _callee4$(_context4) {
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
      var _delete2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5(req, res) {
        var post;
        return regeneratorRuntime.wrap(function _callee5$(_context5) {
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
      var _getPostById = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee6(id) {
        var post;
        return regeneratorRuntime.wrap(function _callee6$(_context6) {
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
}(), (_applyDecoratedDescriptor(_class, "read", [_TryCatchMiddlewareDecorator["default"]], Object.getOwnPropertyDescriptor(_class, "read"), _class), _applyDecoratedDescriptor(_class, "list", [_TryCatchMiddlewareDecorator["default"]], Object.getOwnPropertyDescriptor(_class, "list"), _class), _applyDecoratedDescriptor(_class, "create", [_TryCatchMiddlewareDecorator["default"]], Object.getOwnPropertyDescriptor(_class, "create"), _class), _applyDecoratedDescriptor(_class, "update", [_TryCatchMiddlewareDecorator["default"]], Object.getOwnPropertyDescriptor(_class, "update"), _class), _applyDecoratedDescriptor(_class, "delete", [_TryCatchMiddlewareDecorator["default"]], Object.getOwnPropertyDescriptor(_class, "delete"), _class)), _class);
var _default = PostsController;
exports["default"] = _default;
//# sourceMappingURL=PostsController.js.map