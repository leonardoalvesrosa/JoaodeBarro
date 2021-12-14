import * as Yup from 'yup';
import Campaign from '../models/Campaign';


class CampaignController {

  async index(req, res) {

    const campaigns = await Campaign.findAll({
      attributes: [
        'id_campaigns', 'title', 'description', 'image_path', 'url'
      ],
    });

    if (!campaigns) {
      return res.status(404).json({ error: "Campaign not found" })
    }

    return res.status(200).json(campaigns);

  }

  async list(req, res) {

    const id = req.params.id;

    const campaign = await Campaign.findByPk(id, {
      attributes: [
        'id_campaigns', 'title', 'description', 'image_path', 'url'
      ],
    });

    if (!campaign) {
      return res.status(404).json({ error: "Campaign not found" })
    }

    return res.status(200).json(campaign);

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
      id_campaigns: req.body.id_campaigns,
      title: req.body.title,
      description: req.body.description,
      image_name: req.file.originalname,
      image_path: req.file.filename
    }

    // console.log(data);

    await Campaign.create(data);

    return res.status(200).json(data);
  }

  async update(req, res) {

    const id = req.params.id;

    const campaign = await Campaign.findByPk(id);

    if (!campaign) {
      return res.status(404).json({ error: "Campaign not found" });
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


    await campaign.update(data);

    return res.json({ campaign });

  }

  async delete(req, res) {

    const id = req.params.id;

    const campaign = await Campaign.findByPk(id);

    if (!campaign) {
      return res.status(404).json({ error: "Campaign not found" });
    }

    await campaign.destroy();

    return res.status(200).json({ ok: true });
  }

}


export default new CampaignController();
