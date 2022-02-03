"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = _default;

var _httpErrors = _interopRequireDefault(require("http-errors"));

var _expressValidation = require("express-validation");

function _default(error, req, res, next) {
  console.error(error);
  var status = error.httpStatus || 500;
  var httpError = (0, _httpErrors["default"])(status);

  if (error instanceof _expressValidation.ValidationError) {
    res.status(error.statusCode);
    res.json({
      status: error.statusCode,
      message: error.message,
      errorValidation: error.details
    });
    next();
    return;
  }

  var message;

  if (process.env.NODE_ENV !== 'production') {
    message = error.message || 'Unknown error';
  } else {
    message = httpError.message || 'Unknown error';
  }

  res.status(status);
  res.json({
    status: status,
    message: message
  });
  next();
}
//# sourceMappingURL=ErrorHandler.js.map