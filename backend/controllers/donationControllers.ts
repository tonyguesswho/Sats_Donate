import { Request, Response } from "express";
import { validationResult } from 'express-validator';
const Donation = require('../models').Donation;
import {node} from '../helpers/node';


/**
   * @export
   * @class ProjectController
   *  @description Performs project operations
   */
class NodeController {
  /**
  * @description -This method create a donation
  * @param {object} req - The request payload
  * @param {object} res - The response payload sent back from the method
  * @returns {object} - project
  */

  static async createDonation(req: Request, res:Response) {
    try {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
          return res.status(400).json({ error: errors.array() });
      }
      const {amount, projectId}= req.body
      const newDonation = await Donation.create({amount, projectId})
      const invoice = await node.addInvoice({
        memo: `Donation #${projectId}${newDonation.id}`,
        value: amount,
        expiry: '12000', // 2 minutes
      });
      return res.status(200).json({
        message: "Project created",
        data: {donation: newDonation, paymentRequest:invoice.paymentRequest}
      });
    } catch (error) {
      res.status(500).json({ error: 'Internal Server Error' });
    }
  }

}

export default NodeController;
