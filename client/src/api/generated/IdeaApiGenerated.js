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
 *  TO CUSTOMIZE APIS IN IdeaApiGenerated.js PLEASE EDIT ../IdeaApi.js
 *
 *  -- THIS FILE WILL BE OVERWRITTEN ON THE NEXT SKAFFOLDER'S CODE GENERATION --
 *
 */
 
// Dependencies
import axios from "axios";
import { properties } from "../../config/properties";

class IdeaApiGenerated {

  static contextUrl = properties.endpoint + "/idea";

  // CRUD METHODS

  /**
  * IdeaService.create
  *   @description CRUD ACTION create
  *   @param Idea obj Object to insert
  *
  */
  static createIdea(idea) {
    return axios.post(IdeaApiGenerated.contextUrl, idea )
      .then(response => {
        return response.data;
      })
      .catch(error => {
        throw error;
      });
  }

  /**
  * IdeaService.delete
  *   @description CRUD ACTION delete
  *   @param ObjectId id Id Idea
  *
  */
  static deleteIdea(id) {
    return axios.delete(IdeaApiGenerated.contextUrl + "/" + id)
      .then(response => {
        return response.data;
      })
      .catch(error => {
        throw error;
      });
  }

  /**
  * IdeaService.findByUserID
  *   @description CRUD ACTION findByUserID
  *   @param Objectid key Id of the resource UserID to search
  *
  */
  static findByUserID(id) {
    return axios.get(IdeaApiGenerated.contextUrl + "/findByUserID/" + id )
      .then(response => {
        return response.data;
      })
      .catch(error => {
        throw error;
      });
  }

  /**
  * IdeaService.get
  *   @description CRUD ACTION get
  *   @param ObjectId id Id Idea
  *   @returns Idea
  *
  */
  static getOneIdea(id) {
    return axios.get(IdeaApiGenerated.contextUrl + "/" + id)
      .then(response => {
        return response.data;
      })
      .catch(error => {
        throw error;
      });
  }

  /**
  * IdeaService.list
  *   @description CRUD ACTION list
  *   @returns ARRAY OF Idea
  *
  */
  static getIdeaList() {
    return axios.get(IdeaApiGenerated.contextUrl)
      .then(response => {
        return response.data;
      })
      .catch(error => {
        throw error;
      });
  }

  /**
  * IdeaService.update
  *   @description CRUD ACTION update
  *   @param ObjectId id Id Idea
  *   @returns Idea
  *
  */
  static saveIdea(idea) {
    return axios.post(IdeaApiGenerated.contextUrl + "/" + idea._id, idea )
      .then(response => {
        return response.data;
      })
      .catch(error => {
        throw error;
      });
  }



    // Custom APIs
  /**
  * IdeaService.searchIdea
  *
  */
  static searchIdea(...params) {
    return axios.get(IdeaApiGenerated.contextUrl + '/search/{param}' )
      .then(response => {
        return response.data;
      })
      .catch(error => {
        throw error;
      });
  }

}

export default IdeaApiGenerated;