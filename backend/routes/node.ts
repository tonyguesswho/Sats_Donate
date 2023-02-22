import express, { Router } from 'express';
import NodeController from '../controllers/nodeControllers';


const router: Router = express.Router();

router.get('/info', NodeController.getInfo);
router.get('/invoice', NodeController.generateInvoice);
router.get('/check/:invoice', NodeController.checkInvoice)

export default router;