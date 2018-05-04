import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Form from '../container/FormContainer';
import List from '../container/ListContainer';
import Label from '../container/LabelContainer';
import { Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { I18n, Trans } from 'react-i18next';
import { withRouter } from 'react-router-dom';

class Home extends Component {
  constructor(props,context){
    super(props,context)

    this.lng = this.props.match.params.lng ? `/${this.props.match.params.lng}` : '';
  }
  render() {
    return (
      <I18n ns="translations">
        {
          (t, { i18n }) => (
            <Row >
              <Col md={6}>
                <Form />
                <Label />
              </Col>
              <Col md={6}>
                <List allUsers={false} />
                <Link to={{ pathname: this.lng + '/revisited', search: this.props.location.search}}>
                  {t('Go to old entries')}
                </Link>
              </Col>
            </Row>
          )
        }
      </I18n>
    );
  }
}

export default withRouter(Home);