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
// Dependencies
import React, { Component } from "react";
import { Link } from "react-router-dom";
import DialogDelete from "../components/DialogDelete";

// Redux
import PropTypes from "prop-types";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

// Material UI
import Button from "@material-ui/core/Button";
// import Table from "@material-ui/core/Table";
// import TableBody from "@material-ui/core/TableBody";
// import TableCell from "@material-ui/core/TableCell";
// import TableHead from "@material-ui/core/TableHead";
// import TableRow from "@material-ui/core/TableRow";

// Table
import EnhancedTable from "../components/EnhancedTable";

// Custom Actions


// START IMPORT ACTIONS
import IdeaActions from "../redux/actions/IdeaActions";

// END IMPORT ACTIONS

/** APIs

* actionsIdea.delete
*	@description CRUD ACTION delete
*	@param ObjectId id - Id Idea
*
* actionsIdea.list
*	@description CRUD ACTION list
*	@returns ARRAY OF Idea
*
* actionsIdea.update
*	@description CRUD ACTION update
*	@param ObjectId id - Id Idea
*	@returns Idea
*

**/


class IdeaList extends Component {
  // Init component
  constructor(props) {
    super(props);
    this.state = {
      openDialogDelete: false
    };
  }

  // Load data on start
  componentWillMount() {
    this.props.actionsIdea.loadIdeaList();
  }

  // Delete data
  delete(id) {
    this.setState({ openDialogDelete: true, idDelete: id });
  }

  closeDialogDelete() {
    this.setState({ openDialogDelete: false, idDelete: null });
  }

  confirmDialogDelete(id) {
    this.props.actionsIdea.deleteIdea(this.state.idDelete).then(data => {
      this.props.actionsIdea.loadIdeaList();
      this.setState({ openDialogDelete: false, idDelete: null });
    });
  }

  // Show content
  render() {
    const columns = [ 
      {
        id: "IdeaDesc",
        type: "string",
        label: "IdeaDesc"
      }, 
      {
        id: "IdeaTitle",
        type: "string",
        label: "IdeaTitle"
      }, 
      {
        id: "IsDeleted",
        type: "boolean",
        label: "IsDeleted"
      }, 
      {
        id: "UserID",
        type: "integer",
        label: "UserID"
      }, 
      {
        id: "likeCount",
        type: "integer",
        label: "LikeCount"
      }, 
      {
        id: "unlikeCount",
        type: "integer",
        label: "UnlikeCount"
      },
    ];
    const link = "/Ideas/";

    return (
      <div>
        <h1>Idea List</h1>

        <EnhancedTable
          data={this.props.list}
          columns={columns}
          link={link}
          onDelete={this.delete.bind(this)}
        />

        <DialogDelete
          open={this.state.openDialogDelete}
          onClose={this.closeDialogDelete.bind(this)}
          onConfirm={this.confirmDialogDelete.bind(this)}
        />

        {/*
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell align="right">IdeaDesc</TableCell>
              <TableCell align="right">IdeaTitle</TableCell>
              <TableCell align="right">IsDeleted</TableCell>
              <TableCell align="right">UserID</TableCell>
              <TableCell align="right">LikeCount</TableCell>
              <TableCell align="right">UnlikeCount</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {this.props.list.map(row => (
              <TableRow key={row._id}>
                <TableCell component="th" scope="row">
                  <Link to={"/Ideas/" + row._id} key={row._id}>
                    {row._id}
                  </Link>
                </TableCell>
                <TableCell align="right">{ row.IdeaDesc }</TableCell>
                <TableCell align="right">{ row.IdeaTitle }</TableCell>
                <TableCell align="right">{ row.IsDeleted }</TableCell>
                <TableCell align="right">{ row.UserID }</TableCell>
                <TableCell align="right">{ row.likeCount }</TableCell>
                <TableCell align="right">{ row.unlikeCount }</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        */}

        <div className="footer-card">
          <Link to="/Ideas/new">
            <Button variant="contained" color="primary">
              Add
            </Button>
          </Link>
        </div>
      </div>
    );
  }
}

// Store actions
const mapDispatchToProps = function(dispatch) {
  return { 
    actionsIdea: bindActionCreators(IdeaActions, dispatch),
  };
};

// Validate types
IdeaList.propTypes = { 
  actionsIdea: PropTypes.object.isRequired,
};

// Get props from state
function mapStateToProps(state, ownProps) {
  return {
    list: state.IdeaListReducer.listIdea
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(IdeaList);