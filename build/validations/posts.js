"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.updateValidation = exports.createValidation = void 0;

var _expressValidation = require("express-validation");

var createValidation = {
  body: _expressValidation.Joi.object({
    header: _expressValidation.Joi.string().min(4).required(),
    content: _expressValidation.Joi.string().min(4).required()
  })
};
exports.createValidation = createValidation;
var updateValidation = {
  body: _expressValidation.Joi.object({
    header: _expressValidation.Joi.string().min(4).required(),
    content: _expressValidation.Joi.string().min(4).required()
  })
};
exports.updateValidation = updateValidation;
//# sourceMappingURL=posts.js.map