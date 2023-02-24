import express, { Router } from 'express';
import NodeController from '../controllers/nodeControllers';


const router: Router = express.Router();

router.get('/info', NodeController.getInfo);
export default router;