import * as Yup from 'yup';
import User from '../models/User';

class UserController {

  async index(req, res) {

    const users = await User.findAll({
      attributes: ['id', 'name', 'createdAt']
    });

    return res.json({
      users
    });
  }

  async store(req, res) {

    const schema = Yup.object().shape({
      name: Yup.string().required(),
      email: Yup.string().email().required(),
      phone: Yup.string(),
      password: Yup.string().required().min(6),
    })

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Validation fails' });
    }

    // Check if user exists
    const userExists = await User.findOne({ where: { email: req.body.email } });

    if (userExists) {
      return res.status(400).json({ error: "User already exists" });
    }

    const { id, name, email, phone } = await User.create(req.body);

    return res.json({
      id,
      name,
      email,
      phone
    })
  }

  async update(req, res) {

    const schema = Yup.object().shape({
      name: Yup.string(),
      email: Yup.string().email(),
      phone: Yup.string(),
      oldPassword: Yup.string().min(6),
      password: Yup.string()
        .min(6)
        .when('oldPassword', (oldPassword, field) =>
          oldPassword ? field.required() : field
        ),
      confirmPassword: Yup.string().when('password', (password, field) =>
        password ? field.required().oneOf([Yup.ref('password')]) : field
      ),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Validation fails' });
    }

    const { email, oldPassword } = req.body;

    console.log(req.body);

    const user = await User.findByPk(req.userId);

    if (email !== user.email) {
      const userExists = await User.findOne({ where: { email } });

      if (userExists) {
        return res.status(400).json({ error: 'User already exits' });
      }
    }

    if (oldPassword && !(await user.checkPassword(oldPassword))) {
      return res.status(401).json({ error: 'Password does not match' });
    }

    const { id, name, phone } = await user.update(req.body);

    return res.json({
      id,
      name,
      email,
      phone
    });
  }

}


export default new UserController();
