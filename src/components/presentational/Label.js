import React from "react";
import PropTypes from "prop-types";
import { I18n, Trans } from 'react-i18next';
import { Panel } from 'react-bootstrap';
import { withRouter } from 'react-router-dom';
import  moment  from "moment";

const Label = ({ user, years }) => {
  const day = user && moment(user.birthday).date();
  const month = user && moment(user.birthday).format("MMMM");
  
  return (
  <I18n ns="translations">
    {
      (t, { i18n }) => (
        <div>
          {user && <Panel id="label-message">
            <Panel.Body>
              <Trans i18nKey='SelectedUserMessage' >
                Hello {user.name + ' ' + user.surename} from {user.country}. on {{day}} of {t(month)} you will have {{years}}.
              </Trans>
            </Panel.Body>
          </Panel>}
        </div>
      )
    }
  </I18n>
)};

Label.propTypes = {
  user: PropTypes.object,
  years: PropTypes.number,
};

export default withRouter(Label);