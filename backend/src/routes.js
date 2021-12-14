import { Router } from 'express';
import multer from 'multer';
import { posterConfig, campaignConfig, materialConfig } from './config/multer';

// Controllers
import UserController from './app/controllers/UserController';
import SessionController from './app/controllers/SessionController';
import FileController from './app/controllers/FileController';
import PosterController from './app/controllers/PosterController';
import CampaignController from './app/controllers/CampaignController';
import MaterialController from './app/controllers/MaterialController';


import authMiddleware from './app/middlewares/auth';


const routes = new Router();
const uploadPoster = multer(posterConfig);
const uploadCampaign = multer(campaignConfig);
const uploadMaterial = multer(materialConfig);
const maxCount = 5;

// users
routes.post('/users', UserController.store);

// session
routes.post('/session', SessionController.store);
routes.post('/session/verify', SessionController.index);




// files
routes.get('/posters/files/:id', FileController.list);
routes.get('/posters/files', FileController.index);
routes.get('/postersWhere/files', FileController.indexWhere);
//routes.post('/files', upload.single('file'), FileController.store);
routes.post('/files', uploadPoster.array('file', maxCount), FileController.store);

// posters
routes.get('/posters/:id', PosterController.list);
routes.get('/posters', PosterController.index);
routes.post('/posters', uploadPoster.array('file', maxCount), PosterController.store);
routes.put('/posters/:id', PosterController.update);
routes.delete('/posters/:id', PosterController.delete);

// campaigns
routes.get('/campaigns/:id', CampaignController.list);
routes.get('/campaigns', CampaignController.index);
routes.post('/campaigns', uploadCampaign.single('file'), CampaignController.store);
routes.put('/campaigns/:id', uploadCampaign.single('file'), CampaignController.update);
routes.delete('/campaigns/:id', CampaignController.delete);

// materials
routes.get('/materials/:id', MaterialController.list);
routes.get('/materials', MaterialController.index);
routes.post('/materials', uploadMaterial.single('file'), MaterialController.store);
routes.put('/materials/:id', uploadMaterial.single('file'), MaterialController.update);
routes.delete('/materials/:id', MaterialController.delete);

// middleware
routes.use(authMiddleware);

// users
routes.get('/users', UserController.index);
routes.put('/users', UserController.update);


// routes.post('/files', upload.single('file'), (req, res) => {
//   res.json(req.file)
// });

// routes.get('/', (req, res) => {
//   return res.json({ message: "Hello World" })
// })

export default routes;
