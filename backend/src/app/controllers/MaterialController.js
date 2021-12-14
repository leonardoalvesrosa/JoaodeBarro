import * as Yup from 'yup';
import Material from '../models/Material';


class MaterialController {

  async index(req, res) {

    const materials = await Material.findAll({
      attributes: [
        'id_materials', 'title', 'description', 'image_path', 'url'
      ],
    });

    if (!materials) {
      return res.status(404).json({ error: "Material not found" })
    }

    return res.status(200).json(materials);

  }

  async list(req, res) {

    const id = req.params.id;

    const material = await Material.findByPk(id, {
      attributes: [
        'id_materials', 'title', 'description', 'image_path', 'url'
      ],
    });

    if (!material) {
      return res.status(404).json({ error: "Material not found" })
    }

    return res.status(200).json(material);

  }

  async store(req, res) {

    const schema = Yup.object().shape({
      title: Yup.string().required(),
      description: Yup.string().required()
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Validation fails' });
    }

    const data = {
      id_materials: req.body.id_materials,
      title: req.body.title,
      description: req.body.description,
      image_name: req.file.originalname,
      image_path: req.file.filename
    }

    // console.log(data);

    await Material.create(data);

    return res.status(200).json(data);
  }

  async update(req, res) {

    const id = req.params.id;

    const material = await Material.findByPk(id);

    if (!material) {
      return res.status(404).json({ error: "Material not found" });
    }

    const schema = Yup.object().shape({
      title: Yup.string(),
      description: Yup.string()
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Validation fails' });
    }

    let data = {
      title: req.body.title,
      description: req.body.description
    }

    if (req.file) {
      data = {
        title: req.body.title,
        description: req.body.description,
        image_name: req.file.originalname,
        image_path: req.file.filename
      }
    }


    await material.update(data);

    return res.json({ material });

  }

  async delete(req, res) {

    const id = req.params.id;

    const material = await Material.findByPk(id);

    if (!material) {
      return res.status(404).json({ error: "Material not found" });
    }

    await material.destroy();

    return res.status(200).json({ ok: true });
  }


}


export default new MaterialController();
