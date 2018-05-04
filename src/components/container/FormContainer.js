import React, { Component } from "react";
import { connect } from 'react-redux';
import * as countriesActions from '../../actions/countriesActions';
import * as usersActions from '../../actions/usersActions';
import FormAdd from "../presentational/FormAdd";
import { Trans } from 'react-i18next';
import { withRouter } from 'react-router-dom';
import  moment  from 'moment';

// map state from store to props
const mapStateToProps = (state) => {
  return {
    mappedCountriesState: state.countriesState
  }
}

// map actions to props
const mapDispatchToProps = (dispatch) => {
  return {
    mappedFetchCountries: () => dispatch(countriesActions.fetchCountries()),
    mappedAddUser: user => dispatch(usersActions.addUser(user))
  }
}

class FormContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      user: {
        name: '',
        surename: '',
        country: '',
        birthday: '',
      },
      error: null,
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSaveForm = this.handleSaveForm.bind(this);
  }

  componentWillMount() {
    this.props.mappedFetchCountries()
  }

  handleChange(event) {
    const user = this.state.user;
    user[event.target.name] = event.target.value;
    this.setState({ user });
  }

  handleSaveForm() {
    const user = this.state.user;

    if (user.name !== '' && user.surename !== '' && user.country !== '' && user.birthday) {

      if (!moment(user.birthday).isValid()) {
        this.setState({
          error: <Trans>You must set a valid birthday</Trans>
        })
        return;
      }

      this.props.mappedAddUser(user);

      this.setState({
        user: {
          name: '',
          surename: '',
          country: '',
          birthday: '',
        },
        error: null,
      })

      return;
    } else {
      this.setState({
        error: <Trans>You must complete all form</Trans>
      })
      return;
    }
  }

  render() {
    const countriesSate = this.props.mappedCountriesState;
    const countries = countriesSate.countries;

    return (
      <FormAdd
        user={this.state.user}
        countries={countries}
        onChange={this.handleChange}
        onSaveForm={this.handleSaveForm}
        error={this.state.error}
      />
    );
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(FormContainer));
