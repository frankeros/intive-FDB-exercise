import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Alert } from 'react-bootstrap';
import { I18n, Trans } from 'react-i18next';
import { withRouter } from 'react-router-dom';
import { Link } from 'react-router-dom';

class Home extends Component {
  constructor(props, context) {
    super(props, context)

    this.lng = this.props.match.params.lng || '';
  }
  render() {
    return (
      <I18n ns="translations">
        {
          (t, { i18n }) => (
            <Alert bsStyle="danger">
              {t('Unauthorized, go back to') + ' '} <Link to={{ pathname: '/' + this.lng, search: this.props.location.search }}>HOME</Link>
            </Alert>
          )
        }
      </I18n>
    );
  }
}

export default withRouter(Home);