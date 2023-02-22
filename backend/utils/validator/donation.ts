import { body } from 'express-validator';

const myWhitelist: string = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890_#@.';

export const validateCreateDonation = [
  body('amount')
    .not().isEmpty()
    .isInt()
    .ltrim()
    .rtrim()
    .escape()
    .withMessage('Send your donation amount'),

    body('projectId')
    .not().isEmpty()
    .isInt()
    .ltrim()
    .rtrim()
    .escape()
    .withMessage('Specify project Id'),

]
