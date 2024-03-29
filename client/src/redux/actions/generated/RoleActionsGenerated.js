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
 *  TO CUSTOMIZE FUNCTIONS IN RoleActionsGenerated.js PLEASE EDIT ../RoleActions.js
 *
 *  -- THIS FILE WILL BE OVERWRITTEN ON THE NEXT SKAFFOLDER'S CODE GENERATION --
 *
 */

import * as types from "../../actionTypes";
import RoleApi from "../../../api/RoleApi";

let actionsFunction = {

  //CRUD METHODS

  // Create role
  createRole: function(role) {
    return function(dispatch) {
      return RoleApi
        .createRole(role)
        .then(role => {
          dispatch(actionsFunction.createRoleSuccess(role));
        })
        .catch(error => {
          throw error;
        });
    };
  },

  createRoleSuccess: function(role) {
    return { type: types.CREATE_ROLE_SUCCESS, payload: role };
  },


  // Delete role
  deleteRole: function(id) {
    return function(dispatch) {
      return RoleApi
        .deleteRole(id)
        .then(role => {
          dispatch(actionsFunction.deleteRoleSuccess(role));
        })
        .catch(error => {
          throw error;
        });
    };
  },

  deleteRoleSuccess: function(role) {
    return { type: types.DELETE_ROLE_SUCCESS, payload: role };
  },


  // Get role
  loadRole: function(id) {
    return function(dispatch) {
      return RoleApi
        .getOneRole(id)
        .then(role => {
          dispatch(actionsFunction.loadRoleSuccess(role));
        })
        .catch(error => {
          throw error;
        });
    };
  },

  loadRoleSuccess: function(role) {
    return { type: types.GET_ROLE_SUCCESS, payload: role };
  },

  // Load  list
  loadRoleList: function() {
    return function(dispatch) {
      return RoleApi
        .getRoleList()
        .then(list => {
          dispatch(actionsFunction.loadRoleListSuccess(list));
        })
        .catch(error => {
          throw error;
        });
    };
  },

  loadRoleListSuccess: function(list) {
    return { type: types.LIST_ROLE_SUCCESS, payload: list };
  },

	
  // Save role
  saveRole: function(role) {
    return function(dispatch) {
      return RoleApi
        .saveRole(role)
        .then(role => {
          dispatch(actionsFunction.saveRoleSuccess(role));
        })
        .catch(error => {
          throw error;
        });
    };
  },

  saveRoleSuccess: function(role) {
    return { type: types.UPDATE_ROLE_SUCCESS, payload: role };
  },


};

export default actionsFunction;
