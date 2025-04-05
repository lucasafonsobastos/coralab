import { Router } from 'express';
import NotasController from '../controllers/NotasController';
import CoresController from '../controllers/CoresController';

const router = Router();

router.get('/notas', NotasController.getNotas);

router.get('/cores', CoresController.getCores);

export default router;
