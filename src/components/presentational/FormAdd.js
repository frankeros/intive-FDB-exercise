import React from "react";
import PropTypes from "prop-types";
import { I18n, Trans } from 'react-i18next';
import { Form, FormGroup, ControlLabel, FormControl, Button, Col, Alert } from 'react-bootstrap';
import { withRouter } from 'react-router-dom';

const FormAdd = ({ user, countries, onChange, onSaveForm, error }) => (
  <I18n ns="translations">
    {
      (t, { i18n }) => (
        <Form horizontal id="addUserForm">

          <FormGroup >
            <Col sm={4}>
              <ControlLabel><Trans>Name</Trans>:</ControlLabel>
            </Col>
            <Col sm={8}>
              <FormControl
                name='name'
                type='text'
                value={user.name || ''}
                placeholder={t('name here')}
                onChange={onChange}
                required
              />
            </Col>
          </FormGroup >

          <FormGroup >
            <Col sm={4}>
              <ControlLabel><Trans>Surename</Trans>:</ControlLabel>
            </Col>
            <Col sm={8}>
              <FormControl
                name='surename'
                type='text'
                value={user.surename || ''}
                placeholder={t('name here')}
                onChange={onChange}
                required
              />
            </Col>
          </FormGroup >

          <FormGroup >
            <Col sm={4}>
              <ControlLabel ><Trans>Surename</Trans>:</ControlLabel>
            </Col>
            <Col sm={8}>
              <FormControl
                name='country'
                componentClass="select"
                placeholder={t('select a country')}
                onChange={onChange}
                required
                defaultValue={-1}
              >
                <option disabled value={-1}><Trans>select a country</Trans></option>
                {countries.map((country, i) => {
                  return (
                    <option key={`country_${i}`} value={country.name}>{country.name}</option>
                  );
                })}
              </FormControl>
            </Col>
          </FormGroup >

          <FormGroup >
            <Col sm={4}>
              <ControlLabel><Trans>Birthday</Trans>:</ControlLabel>
            </Col>
            <Col sm={8}>
              <FormControl
                name='birthday'
                type='date'
                value={user.birthday || ''}
                onChange={onChange}
                required
              />
            </Col>
          </FormGroup >

          {error &&
            <FormGroup >
              <Col smOffset={4} sm={8} className="error">
                <Alert bsStyle="danger">{error}</Alert>
              </Col>
            </FormGroup >
          }

          <FormGroup >
            <Col smOffset={4} sm={8} className="button-container">
              <Button onClick={onSaveForm} ><Trans>Save</Trans></Button>
            </Col>
          </FormGroup >

        </Form>
      )
    }
  </I18n>
);

FormAdd.propTypes = {
  user: PropTypes.object,
  countries: PropTypes.array.isRequired,
  onChange: PropTypes.func.isRequired,
  onSaveForm: PropTypes.func.isRequired,
  error: PropTypes.node,
};

export default withRouter(FormAdd);