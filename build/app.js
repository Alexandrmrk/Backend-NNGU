"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));

var _express = _interopRequireDefault(require("express"));

var _dotenv = _interopRequireDefault(require("dotenv"));

var _path = _interopRequireDefault(require("path"));

var _cors = _interopRequireDefault(require("cors"));

var _bodyParser = _interopRequireDefault(require("body-parser"));

var _mongoose = _interopRequireDefault(require("mongoose"));

var _routes = _interopRequireDefault(require("./routes"));

var _ErrorHandler = _interopRequireDefault(require("./middleware/ErrorHandler"));

var root = _path["default"].join.bind(void 0, __dirname, '../');

_dotenv["default"].config({
  path: root('.env')
}); // console.log(process.env.MONGO_URI);


_mongoose["default"].connect('mongodb+srv://developer:developer@cluster0.nz0pw.mongodb.net/todos', {
  useNewUrlParser: true
})["catch"](function (e) {
  return console.log(e);
});

var app = (0, _express["default"])();
app.use((0, _cors["default"])());
app.use(_bodyParser["default"].json());
app.use.apply(app, ['/api'].concat((0, _toConsumableArray2["default"])(_routes["default"])));
app.use('*', function (request, response) {
  response.status(404).send('Endpoint not found on server!');
});
app.use(_ErrorHandler["default"]);
app.listen(3000, function () {
  console.log('Express server run http://localhost:3000/');
});
//# sourceMappingURL=app.js.map