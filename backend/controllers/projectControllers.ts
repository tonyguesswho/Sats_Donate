import { Request, Response } from "express";
import { validationResult } from 'express-validator';
const Project = require('../models').Project;


/**
   * @export
   * @class ProjectController
   *  @description Performs project operations
   */
class ProjectController {
  /**
    * @description -This method lsits all projects
    * @param {object} req - The request payload
    * @param {object} res - The response payload sent back from the method
    * @returns {object} - project
    */
  static async listProjects(req: Request, res:Response) {
    try {

      const projects =  await Project.findAll();
      return res.status(200).json({
        message: "Projects retrieved susscessfully",
        data: projects
      });
    } catch (error) {
      res.status(500).json({ error: 'Internal Server Error' });
    }
  }


  /**
  * @description -This method create a project
  * @param {object} req - The request payload
  * @param {object} res - The response payload sent back from the method
  * @returns {object} - project
  */

  static async createProject(req: Request, res:Response) {
    try {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
          return res.status(400).json({ error: errors.array() });
      }
      const {name, description}= req.body
      const newProject = await Project.create({name, description})
      return res.status(200).json({
        message: "Project created",
        data: newProject
      });
    } catch (error) {
      res.status(500).json({ error: 'Internal Server Error' });
    }
  }

}

export default ProjectController;
