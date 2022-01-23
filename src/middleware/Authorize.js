import TryCatch from '../decorators/TryCatchMiddlewareDecorator';
import HttpError from '../exeptions/HttpError';
import Session from '../models/Session';

class Authorize {
  @TryCatch
  static async check(req, res, next) {
    if (req.headers.authorization) {
      const token = req.headers.authorization.split(' ')[1];

      if (!token) {
        throw new HttpError('Access token not found in request', 400);
      }

      const sessionFound = await Session.findOne({ token });
      console.log(sessionFound);
      if (!sessionFound) {
        throw new HttpError('Unauthorized', 401);
      }

      const { userId } = sessionFound;

      req.userId = userId;
      return next();
    }
    throw new HttpError('Unauthorized', 401);
  }
}

export default Authorize;
