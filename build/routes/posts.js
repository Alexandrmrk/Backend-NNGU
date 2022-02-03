"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = require("express");

var _expressValidation = require("express-validation");

var _PostsController = _interopRequireDefault(require("../controllers/PostsController"));

var _Authorize = _interopRequireDefault(require("../middleware/Authorize"));

var _validations = _interopRequireDefault(require("../validations"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var router = (0, _express.Router)();
router.get('/post/:id', _PostsController["default"].read);
router.get('/posts', _Authorize["default"].check, _PostsController["default"].list);
router.post('/posts', _Authorize["default"].check, (0, _expressValidation.validate)(_validations["default"].posts.createValidation, {}, {}), _PostsController["default"].create);
router.put('/posts/:id', _Authorize["default"].check, (0, _expressValidation.validate)(_validations["default"].posts.updateValidation, {}, {}), _PostsController["default"].update);
router["delete"]('/posts/:id', _Authorize["default"].check, _PostsController["default"]["delete"]);
var _default = router;
exports["default"] = _default;
//# sourceMappingURL=posts.js.map