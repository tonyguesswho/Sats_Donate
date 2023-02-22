import { Request, Response } from "express";
import { validationResult } from 'express-validator';
import {node} from '../helpers/node';


/**
   * @export
   * @class ProjectController
   *  @description Performs project operations
   */
class NodeController {
  /**
    * @description -This method gets inode nfo
    * @param {object} req - The request payload
    * @param {object} res - The response payload sent back from the method
    * @returns {object} - project
    */
  static async getInfo(req: Request, res:Response) {
    try {
      const info = await node.getInfo();
      return res.status(200).json({
        message: "Node info retrieved susscessfully",
        data: info
      });
    } catch (error) {
      res.status(500).json({ error: 'Internal Server Error' });
    }
  }

  /**
    * @description -This method gets inode nfo
    * @param {object} req - The request payload
    * @param {object} res - The response payload sent back from the method
    * @returns {object} - project
    */
  static async generateInvoice(req: Request, res:Response) {
    try {
      const invoice = await node.addInvoice({
        memo: "Lightning donation",
        value: "100",
        expiry: '12000', // 2 minutes
      });
      return res.status(200).json({
        message: "Payment Invoice generated",
        paymentRequest: invoice.paymentRequest
      });
    } catch (error) {
      res.status(500).json({ error: 'Internal Server Error' });
    }
  }


    /**
    * @description -This method gets inode nfo
    * @param {object} req - The request payload
    * @param {object} res - The response payload sent back from the method
    * @returns {object} - project
    */
    static async checkInvoice(req: Request, res:Response) {
      try {
        // const {invoice}= req.param
        let dataReturn = {}
        let stream = node.subscribeInvoices({})
        stream.on('data', (data) => {
          console.log("### DATA")
          console.log(data)
          //console.log(data.settled)

          //This check for the correct invoice is important. If not doen all connected users will be marked as setteled
          if (data.settled === true && data.paymentRequest === invoice) {
            dataReturn = data
            stream.destroy()
          }
        });
        stream.on('close', () =>  {
          console.log("### CLOSE")
          return res.status(200).json({
            message: "Payment Info",
            data: dataReturn
          });
        });

      } catch (error) {
        res.status(500).json({ error: 'Internal Server Error' });
      }
    }


}

export default NodeController;
