import express, {Router} from 'express';
import project from './project';

const router: Router = express.Router();

router.use('/project', project);

export default router;