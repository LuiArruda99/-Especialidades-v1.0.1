import { Router } from 'express';
import OrphanagesController from './controllers/OrphanagesController';
import UserController from './controllers/UsersController';
import AuthController from './controllers/AuthController';
import authMiddleware from './middlewares/authMiddleware';

import multer from 'multer';
import uploadConfig from './config/upload';

const routes = Router();
const upload = multer(uploadConfig);

routes.get('/orphanages', OrphanagesController.index);
routes.get('/orphanages/:id', OrphanagesController.show);
routes.post('/orphanages', upload.array('images'), OrphanagesController.create);
routes.post('/orphanages/update/:id', OrphanagesController.update);
routes.post('/orphanages/remove/:id', OrphanagesController.remove);

routes.post('/users', UserController.store);
routes.post('/auth', AuthController.authenticate);
routes.get('/users', authMiddleware, UserController.index);

export default routes;
