"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.signupValidation = exports.signinValidation = void 0;

var _expressValidation = require("express-validation");

var signinValidation = {
  body: _expressValidation.Joi.object({
    email: _expressValidation.Joi.string().email().required(),
    password: _expressValidation.Joi.string().regex(/[a-zA-Z0-9]{8,30}/).required()
  })
};
exports.signinValidation = signinValidation;
var signupValidation = {
  body: _expressValidation.Joi.object({
    name: _expressValidation.Joi.string().min(2).required(),
    email: _expressValidation.Joi.string().email().required(),
    password: _expressValidation.Joi.string().regex(/[a-zA-Z0-9]{8,30}/).required()
  })
};
exports.signupValidation = signupValidation;
//# sourceMappingURL=auth.js.map