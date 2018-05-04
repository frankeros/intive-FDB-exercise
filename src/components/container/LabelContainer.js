import React, { Component } from "react";
import { connect } from 'react-redux';
import * as usersActions from '../../actions/usersActions';
import Label from "../presentational/Label";
import { Trans } from 'react-i18next';
import moment from 'moment';
import { withRouter } from 'react-router-dom';

// map state from store to props
const mapStateToProps = (state) => {
  return {
    mappedUsersState: state.usersState
  }
}

class LabelContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedUser: null,
      years: null
    };

  }

  componentWillReceiveProps(nextProps) {
    const usersState = nextProps.mappedUsersState;
    const selectedUser = usersState.selectedUser;
    if (selectedUser) {
      const birthday = moment(selectedUser.birthday);
      const now = moment();
      let nextBirthday = moment().year(now.year());

      //get years of user at now
      let years = nextBirthday.diff(birthday, 'years') + 1;

      //if this year's birthday has already happened, add another year
      if (nextBirthday.diff(now) < 0) {
        years += 1
      }

      this.setState({
        selectedUser,
        years
      })
    }else{
      this.setState({
        selectedUser: null,
        years: null
      });
    }
  }

  render() {
    return (
      <Label
        user={this.state.selectedUser}
        years={this.state.years}
      />
    );
  }
}

export default withRouter(connect(mapStateToProps)(LabelContainer));
