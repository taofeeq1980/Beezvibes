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
import RoleApiGenerated from "./generated/RoleApiGenerated";

// Dependencies
//import axios from "axios";
//import { properties } from "../config/properties";

class RoleApi extends RoleApiGenerated {
  // You can customize the base actions overriding the object "actionsFunction" as shown in the example below:
  /** 
  // EXAMPLE:
 
  // Get Role List
  static getRoleList() {
    console.log("This is my custom API");

    return fetch("http://localhost:3000/api/roles")
      .then(response => {
        return response.json();
      })
      .catch(error => {
        throw error;
      });
  }
  */

}

export default RoleApi;