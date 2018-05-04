import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import configureStore from './store/configureStore';
import { Grid, Row, Col } from 'react-bootstrap';
import Routes from './Routes';
import { I18n, Trans } from 'react-i18next';

const store = configureStore();

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <I18n ns="translations">
            {
              (t, { i18n }) => (
                <Grid>
                  <Row>
                    <Col md={12} className="header">
                      <h3>Intive - FDV Exercise</h3>
                    </Col>
                  </Row>
                  <Row>
                    <Col md={8} xs={12} className="content">
                      <Routes />
                    </Col>
                  </Row>
                  <Row>
                    <Col md={12} className="footer">
                      <Trans>Created by</Trans> Franco Charriol
              </Col>
                  </Row>
                </Grid>
              )
            }
          </I18n>
        </BrowserRouter>
      </Provider >
    );
  }
}

export default App;