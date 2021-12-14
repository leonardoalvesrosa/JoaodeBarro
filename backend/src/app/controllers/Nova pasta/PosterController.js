import * as Yup from 'yup';
import Poster from '../models/Poster';
import File from '../models/File';

class PosterController {

  async index(req, res) {

    const posters = await Poster.findAll({
      attributes: [
        'id',
        'type_post',
        'mode_post',
        'poster_name',
        'advertiser_name',
        'email',
        'phone',
        'description',
        'product',
        'service',
        'situation',
        'url'
      ],
    }
    );

    return res.json(
      posters
    );
  }

  // async indexWhere(req, res) {

  //   const posters = await Poster.findAll({
      
  //     where: {situation: "analisar"}
  //   });

  //   return res.json(
  //     posters
  //   );
  // }

  async list(req, res) {

    const id = req.params.id;

    const material = await Poster.findByPk(id, {
      attributes: [
        'id',
        'type_post',
        'mode_post',
        'poster_name',
        'advertiser_name',
        'email',
        'phone',
        'description',
        'product',
        'service',
        'quantity',
        'unities',
        'situation'
      ],
    });

    if (!material) {
      return res.status(404).json({ error: "Material not found" })
    }

    return res.status(200).json(material);

  }

  

  async store(req, res) {

    const schema = Yup.object().shape({
      type_post: Yup.string().required(),
      mode_post: Yup.string().required(),
      poster_name: Yup.string().required(),
      advertiser_name: Yup.string().required(),
      email: Yup.string().email().required(),
      // phone: Yup.string(),
      description: Yup.string().required(),
      product: Yup.string(),
      quantity: Yup.string(),
      unities: Yup.string(),
      service: Yup.string(),
      situation: Yup.string(),
      file: Yup.array()
    })

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Validation fails' });
    }

    const { poster_name } = req.body;
    const files = req.files;

    console.log(files);
    // console.log(req.body.files);
    // console.log(files);

    // return res.json({ ok: true })

    const {
      id,
      description,
      type_post,
      mode_post,
      advertiser_name,
      // image_id
    } = await Poster.create(req.body);

    // id do poster
    const poster_id = id;

    files.map(async file => {
      const { originalname: name, filename: path, url } = file;
      await File.create({
        poster_id,
        name,
        path,
        url,
      })
    });

    return res.json({ ok: true });


    // return res.json({
    //   id,
    //   poster_name,
    //   description,
    //   type_post,
    //   mode_post,
    //   advertiser_name,
    // })

  }

  async update(req, res) {

    const id = req.params.id;

    const poster = await Poster.findByPk(id);

    if (!poster) {
      return res.status(404).json({ error: "Poster not found" });
    }else{
      const posterUpdate = await poster.update(req.body);
  
      return res.status(200).json({ ok: "ok" });
    }

    

  }

  async delete(req, res) {

    const id = req.params.id;

    const poster = await Poster.findByPk(id);

    if (!poster) {
      return res.status(404).json({ error: "Poster not found" });
    }

    await poster.destroy();

    return res.status(200).json({ ok: true });
  }

}


export default new PosterController();