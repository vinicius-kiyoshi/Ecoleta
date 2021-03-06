import express, { response, request } from 'express';
import PointsController from './controllers/PointsController';
import ItemsController from './controllers/ItemsController';
import multer from 'multer';
import multerConfig from './config/multer';

const routes = express.Router();

const pointsController = new PointsController();
const itemsController = new ItemsController();

const upload = multer(multerConfig);

routes.get('/', (request, response) => {
    response.json({ message: "hello World !" });
});

routes.get('/items', itemsController.index);

routes.get('/points', pointsController.index);
routes.get('/points/:id', pointsController.show);



routes.post('/points', upload.single('image'), pointsController.create);

export default routes;