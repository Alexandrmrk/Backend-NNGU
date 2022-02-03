"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = require("express");

var _expressValidation = require("express-validation");

var _AuthController = _interopRequireDefault(require("../controllers/AuthController"));

var _validations = _interopRequireDefault(require("../validations"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var router = (0, _express.Router)();
router.post('/signin', (0, _expressValidation.validate)(_validations["default"].auth.signinValidation, {}, {}), _AuthController["default"].signin);
router.post('/signup', (0, _expressValidation.validate)(_validations["default"].auth.signupValidation, {}, {}), _AuthController["default"].signup);
var _default = router;
exports["default"] = _default;
//# sourceMappingURL=auth.js.map