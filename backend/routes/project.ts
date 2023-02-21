import express, { Router } from 'express';
import ProjectController from "../controllers/projectControllers";
import {validateCreateProject} from "../utils/validator/project";


const router: Router = express.Router();

router.get('/', ProjectController.listProjects);
router.post('/', validateCreateProject, ProjectController.createProject);
router.get('/:project_id', ProjectController.listProjects);

export default router;