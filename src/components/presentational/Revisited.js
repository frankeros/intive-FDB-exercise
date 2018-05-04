import React, { Component } from 'react';
import PropTypes from 'prop-types';
import List from '../container/ListContainer';
import Label from '../container/LabelContainer';
import { Row, Col } from 'react-bootstrap';
import { I18n, Trans } from 'react-i18next';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router-dom';

class Revisited extends Component {
  constructor(props,context){
    super(props,context)

    this.lng = this.props.match.params.lng || '';
  }
  render() {
    return (
      <I18n ns="translations">
        {
          (t, { i18n }) => (
            <Row >
              <Col md={12}>
                <List allUsers={true}/>
                <Label />
                <Link to={{ pathname: '/' + this.lng, search: this.props.location.search}}>
                  {t('Go back to Home')}
                </Link>
              </Col>
            </Row>
          )
        }
      </I18n>
    );
  }
}

export default withRouter(Revisited);