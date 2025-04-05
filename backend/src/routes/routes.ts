import { Router } from 'express';
import NotasController from '../controllers/NotasController';
import CoresController from '../controllers/CoresController';

const router = Router();

router.get('/notas', NotasController.getNotas);
router.post('/create', NotasController.createNota);

router.get('/cores', CoresController.getCores);

export default router;
