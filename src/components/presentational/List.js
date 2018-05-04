import React from "react";
import PropTypes from "prop-types";
import { I18n, Trans } from 'react-i18next';
import { BootstrapTable, TableHeaderColumn}   from 'react-bootstrap-table';
import { withRouter } from 'react-router-dom';

const List = ({ users, onSelect }) => {   
  const usersItems = Object

  const selectRow = {
    mode: 'radio',
    clickToSelect: true,
    onSelect: (row, isSelected, e) => {    
      onSelect(row);
    },
    hideSelectColumn: true, 
    bgColor: '#00BFFF'    
  };

  return(
  <I18n ns="translations">
    {
      (t, { i18n }) => (
        <div className="list">
          <BootstrapTable data={users} responsive condensed hover height={240} scrollTop='Top' selectRow={selectRow}>
            <TableHeaderColumn dataField='id' isKey hidden>Id</TableHeaderColumn>
            <TableHeaderColumn dataField='fullName'><Trans>Name</Trans></TableHeaderColumn>
            <TableHeaderColumn dataField='country'><Trans>Country</Trans></TableHeaderColumn>
            <TableHeaderColumn dataField='birthday'><Trans>Birthday</Trans></TableHeaderColumn>
          </BootstrapTable>
        </div>
      )
    }
  </I18n>
)};

List.propTypes = {
  users: PropTypes.array.isRequired,
  onSelect: PropTypes.func.isRequired,
};

export default withRouter(List);