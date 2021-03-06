import * as Yup from 'yup';
import jwt from 'jsonwebtoken';
import { promisify } from 'util';

import authConfig from '../../config/auth';

import User from '../models/User';
import authConfig from '../../config/auth';

class SessionController {

  async index(req, res) {
    const { token } = req.body;

    try {
      const decoded = await promisify(jwt.verify)(token, authConfig.secret);
      return res.status(200).json({ decoded });
    } catch (e) {
      return res.status(401).json({ error: "Token invalid" });
    }

  }

  async store(req, res) {

    const schema = Yup.object().shape({
      email: Yup.string().email().required(),
      password: Yup.string().required().min(6),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Validation fails' });
    }

    const { email, password } = req.body;

    const user = await User.findOne({ where: { email } });

    if (!user) {
      return res.status(401).json({ error: 'User not found' });
    }

    if (!(await user.checkPassword(password))) {
      return res.status(401).json({ error: 'Password does not match' });
    }

    const { id, name } = user;

    return res.json({
      user: {
        id,
        name,
        email,
      },
      token: jwt.sign({ id }, authConfig.secret, {
        expiresIn: authConfig.expiresIn,
      }),
    });
  }
}

export default new SessionController();
