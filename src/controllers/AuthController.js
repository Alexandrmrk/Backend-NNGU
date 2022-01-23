import { v4 as uuidv4 } from 'uuid';
import User from '../models/User';
import Session from '../models/Session';
import TryCatch from '../decorators/TryCatchMiddlewareDecorator';
import HttpError from '../exeptions/HttpError';
import { hashPassword, checkPassword } from '../helpers/password';

class AuthController {
  @TryCatch
  static async signin(req, res) {
    const { email, password } = req.body;
    const user = await User.findOne({ email });

    if (!user || !(await checkPassword(password, user.password))) {
      throw new HttpError('Incorrect login or password', 401);
    }

    const authToken = uuidv4();
    const session = await Session.create({ userId: user.id, token: authToken });

    res.json({
      status: true,
      user: {
        // eslint-disable-next-line no-underscore-dangle
        id: user._id,
        name: user.name,
        email: user.email,
      },
      token: session.token,
    });
  }

  @TryCatch
  static async signup(req, res) {
    const model = new User({
      name: req.body.name,
      email: req.body.email,
      password: await hashPassword(req.body.password),
    });

    const user = await model.save();

    res.json({
      status: true,
      user: {
        // eslint-disable-next-line no-underscore-dangle
        id: user._id,
        name: user.name,
        email: user.email,
      },
    });
  }
}

export default AuthController;
