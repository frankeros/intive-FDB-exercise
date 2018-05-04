import React, { Component } from "react";
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import * as usersActions from '../../actions/usersActions';
import List from "../presentational/List";
import { Trans } from 'react-i18next';
import { withRouter } from 'react-router-dom';

// map state from store to props
const mapStateToProps = (state) => {
  return {
    mappedUsersState: state.usersState
  }
}

// map actions to props
const mapDispatchToProps = (dispatch) => {
  return {
    mappedSelectUser: user => dispatch(usersActions.selectUser(user)),
    mappedGetAllUsers: () => dispatch(usersActions.fectchAllUsers())
  }
}

class ListContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
    };

    this.handleSelect = this.handleSelect.bind(this);
  }

  componentDidMount(){
    if(this.props.allUsers){
      this.props.mappedGetAllUsers();
    }
  }
  
  handleSelect(user) {
    this.props.mappedSelectUser(user);
  }

  render() {
    const usersState = this.props.mappedUsersState;
    const users = this.props.allUsers ? usersState.allUsers : usersState.newUsers;
    let index = 0;
    users.forEach(function(e) { e.fullName = e.name + ' ' + e.surename, e.id = index++});

    return (
      <List
        users={users}
        onSelect={this.handleSelect}
      />
    );
  }
}

ListContainer.propTypes={
  allUsers: PropTypes.bool.isRequired
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ListContainer));
