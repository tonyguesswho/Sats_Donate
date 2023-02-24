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
}

export default NodeController;
