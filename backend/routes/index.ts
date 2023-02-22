import express, {Router} from 'express';
import project from './project';
import node from './node';
import donation from './donation';

const router: Router = express.Router();

router.use('/project', project);
router.use('/node', node);
router.use('/donation', donation);

export default router;