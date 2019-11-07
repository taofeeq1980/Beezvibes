/* 
* Generated by
* 
*      _____ _          __  __      _     _
*     / ____| |        / _|/ _|    | |   | |
*    | (___ | | ____ _| |_| |_ ___ | | __| | ___ _ __
*     \___ \| |/ / _` |  _|  _/ _ \| |/ _` |/ _ \ '__|
*     ____) |   < (_| | | | || (_) | | (_| |  __/ |
*    |_____/|_|\_\__,_|_| |_| \___/|_|\__,_|\___|_|
*
* The code generator that works in many programming languages
*
*			https://www.skaffolder.com
*
*
* You can generate the code from the command-line
*       https://npmjs.com/package/skaffolder-cli
*
*       npm install -g skaffodler-cli
*
*   *   *   *   *   *   *   *   *   *   *   *   *   *   *   *
*
* To remove this comment please upgrade your plan here: 
*      https://app.skaffolder.com/#!/upgrade
*
* Or get up to 70% discount sharing your unique link:
*       https://app.skaffolder.com/#!/register?friend=5dc416f1f1ef4518a537f625
*
* You will get 10% discount for each one of your friends
* 
*/
/**
 * 
 * 
  _____                      _              _ _ _     _   _     _        __ _ _      
 |  __ \                    | |            | (_) |   | | | |   (_)      / _(_) |     
 | |  | | ___    _ __   ___ | |_    ___  __| |_| |_  | |_| |__  _ ___  | |_ _| | ___ 
 | |  | |/ _ \  | '_ \ / _ \| __|  / _ \/ _` | | __| | __| '_ \| / __| |  _| | |/ _ \
 | |__| | (_) | | | | | (_) | |_  |  __/ (_| | | |_  | |_| | | | \__ \ | | | | |  __/
 |_____/ \___/  |_| |_|\___/ \__|  \___|\__,_|_|\__|  \__|_| |_|_|___/ |_| |_|_|\___|
 
 * DO NOT EDIT THIS FILE!! 
 * 
 *  TO CUSTOMIZE IdeaControllerGenerated.js PLEASE EDIT ../IdeaController.js
 * 
 *  -- THIS FILE WILL BE OVERWRITTEN ON THE NEXT SKAFFOLDER'S CODE GENERATION --
 * 
 */
import Properties from "../../../properties";
import IdeaModel from "../../../models/Beezvibes_db/IdeaModel";
import ErrorManager from "../../../classes/ErrorManager";
import { authorize } from "../../../security/SecurityManager";
import IdeaController from "../IdeaController";

const generatedControllers = {
  /**
   * Init routes
   */
  init: router => {
    const baseUrl = `${Properties.api}/idea`;
    router.post(baseUrl + "", authorize([]), IdeaController.create);
    router.delete(baseUrl + "/:id", authorize([]), IdeaController.delete);
    router.get(baseUrl + "/findByUserID/:key", authorize([]), IdeaController.findByUserID);
    router.get(baseUrl + "/:id", authorize([]), IdeaController.get);
    router.get(baseUrl + "", authorize([]), IdeaController.list);
    router.get(baseUrl + "/search/:param", authorize([]), IdeaController.searchIdea);
    router.post(baseUrl + "/:id", authorize([]), IdeaController.update);
  },


  // CRUD METHODS


  /**
  * IdeaModel.create
  *   @description CRUD ACTION create
  *   @param Idea obj Object to insert
  *
  */
  create: async (req, res) => {
    try {
      const result = await IdeaModel.create(req.body);
      res.json(result);
    } catch (err) {
      const safeErr = ErrorManager.getSafeError(err);
      res.status(safeErr.status).json(safeErr);
    }
  },
  
  /**
  * IdeaModel.delete
  *   @description CRUD ACTION delete
  *   @param ObjectId id Id Idea
  *
  */
  delete: async (req, res) => {
    try {
      const result = await IdeaModel.delete(req.params.id);
      res.json(result);
    } catch (err) {
      const safeErr = ErrorManager.getSafeError(err);
      res.status(safeErr.status).json(safeErr);
    }
  },
  
  /**
  * IdeaModel.findByUserID
  *   @description CRUD ACTION findByUserID
  *   @param Objectid key Id of the resource UserID to search
  *
  */
  findByUserID: async (req, res) => {
    try {
      const result = await IdeaModel.findByUserID(req.params.key);
      res.json(result);
    } catch (err) {
      const safeErr = ErrorManager.getSafeError(err);
      res.status(safeErr.status).json(safeErr);
    }
  },
  
  /**
  * IdeaModel.get
  *   @description CRUD ACTION get
  *   @param ObjectId id Id Idea
  *   @returns Idea
  *
  */
  get: async (req, res) => {
    try {
      const result = await IdeaModel.get(req.params.id);
      res.json(result);
    } catch (err) {
      const safeErr = ErrorManager.getSafeError(err);
      res.status(safeErr.status).json(safeErr);
    }
  },
  
  /**
  * IdeaModel.list
  *   @description CRUD ACTION list
  *   @returns ARRAY OF Idea
  *
  */
  list: async (req, res) => {
    try {
      const result = await IdeaModel.list();
      res.json(result);
    } catch (err) {
      const safeErr = ErrorManager.getSafeError(err);
      res.status(safeErr.status).json(safeErr);
    }
  },
  
    
  /**
  * IdeaModel.update
  *   @description CRUD ACTION update
  *   @param ObjectId id Id Idea
  *   @returns Idea
  *
  */
  update: async (req, res) => {
    try {
      const result = await IdeaModel.update(req.body);
      res.json(result);
    } catch (err) {
      const safeErr = ErrorManager.getSafeError(err);
      res.status(safeErr.status).json(safeErr);
    }
  },
  
  
  // Custom APIs

  /**
  * IdeaModel.searchIdea
  *
  */
  searchIdea: async (req, res) => {
    try {
      res.json({});
    } catch (err) {
      const safeErr = ErrorManager.getSafeError(err);
      res.status(safeErr.status).json(safeErr);
    }
  },

};

export default generatedControllers;