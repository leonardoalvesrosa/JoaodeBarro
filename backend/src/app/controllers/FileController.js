import File from '../models/File';
import Poster from '../models/Poster';

class FileController {

  async index(req, res) {

    let data = {};
    let postArray = [];

    const posters = await Poster.findAll({
      order: [['situation', 'ASC']]
    });


    if (!posters.length) {
      return res.status(404).json({ error: "Poster not found" });
    }

    for (let i = 0; i < posters.length; i++) {
      data = await File.findAll({
        attributes: [
          'path', 'url'
        ],
        limit: 1,
        include: [{
          model: Poster,
          as: 'poster',
        }],
        where: { poster_id: posters[i].id },
      })
      postArray.push(data);
    }

    return res.status(200).json(postArray);

  }

  /////////////
  async indexWhere(req, res) {

    let data = {};
    let postArray = [];

    const posters = await Poster.findAll({
      where: {situation: "disponivel"}
    });


    if (!posters.length) {
      return res.status(404).json({ error: "Poster not found" });
    }

    for (let i = 0; i < posters.length; i++) {
      data = await File.findAll({
        attributes: [
          'path', 'url'
        ],
        limit: 1,
        include: [{
          model: Poster,
          as: 'poster',
        }],
        where: { poster_id: posters[i].id },
      })
      postArray.push(data);
    }

    return res.status(200).json(postArray);

  }
  //////////////


  async list(req, res) {

    const idPoster = req.params.id;
    console.log(idPoster);

    const posters = await Poster.findAll({
      where: { id: idPoster }
    })

    console.log(posters.length)

    if (!posters.length) {
      return res.status(404).json({ error: "Poster not found" });
    }

    const images = await File.findAll({
      attributes: [
        'id', 'poster_id', 'path', 'url'
      ],
      where: { poster_id: idPoster },
    })

    return res.status(200).json(
      images
    );

  }


  async store(req, res) {

    const files = req.files;

    files.map(async file => {
      const { originalname: name, filename: path, url } = file;
      await File.create({
        name,
        path,
        url,
      })
    });

    return res.json({ ok: true })
  }
}

export default new FileController();
