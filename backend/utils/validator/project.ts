import { body } from 'express-validator';

export const validateCreateProject = [
  body('name')
    .not().isEmpty()
    .isString()
    .escape()
    .withMessage('Send your project name'),

    body('description')
    .not().isEmpty()
    .isString()
    .escape()
    .withMessage('Send your project description'),

]
