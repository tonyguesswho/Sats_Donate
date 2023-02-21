import { body } from 'express-validator';

const myWhitelist: string = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890_#@.';

export const validateCreateProject = [
  body('name')
    .not().isEmpty()
    .isString()
    .ltrim()
    .rtrim()
    .whitelist(myWhitelist)
    .escape()
    .withMessage('Send your project name'),

    body('description')
    .not().isEmpty()
    .isString()
    .ltrim()
    .rtrim()
    .whitelist(myWhitelist)
    .escape()
    .withMessage('Send your project description'),

]
