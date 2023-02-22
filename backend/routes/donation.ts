import express, { Router } from 'express';
import DonationController from '../controllers/donationControllers';
import {validateCreateDonation} from "../utils/validator/donation";



const router: Router = express.Router();

router.post('/', validateCreateDonation, DonationController.createDonation);


export default router;