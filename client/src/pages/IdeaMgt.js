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
import React, { Component } from "react";
import { Link } from "react-router-dom";

// Redux
import PropTypes from "prop-types";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

// Custom Actions
import UserActions from '../redux/actions/UserActions';

// START IMPORT ACTIONS
import IdeaActions from "../redux/actions/IdeaActions";

// END IMPORT ACTIONS

/** APIs

* actionsIdea.findByUserID
*	@description CRUD ACTION findByUserID
*	@param Objectid key - Id of the resource UserID to search
*
* actionsIdea.get
*	@description CRUD ACTION get
*	@param ObjectId id - Id Idea
*	@returns Idea
*
* actionsIdea.list
*	@description CRUD ACTION list
*	@returns ARRAY OF Idea
*

**/

class IdeaMgt extends Component {
  render() {
    return (
      <div>
        <h1>IdeaMgt</h1>
                    
        <div>
          <Link to="/home">Link to Home</Link>
        </div>
        
            
      </div>
    );
  }
}

// Store actions
const mapDispatchToProps = function(dispatch) {
  return { 
    actionsUser: bindActionCreators(UserActions, dispatch),
    actionsIdea: bindActionCreators(IdeaActions, dispatch)
  };
};

// Validate types
IdeaMgt.propTypes = {
  actionsUser: PropTypes.object.isRequired,
  actionsIdea: PropTypes.object.isRequired
};

// Get props from state
function mapStateToProps(state, ownProps) {
  return {
    user: state.LoginReducer.user
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(IdeaMgt);
