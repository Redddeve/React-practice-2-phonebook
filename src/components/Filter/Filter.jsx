import React from 'react';
import PropTypes from 'prop-types';
import { StyleLabel } from './Filter.styled';

export const Filter = ({ updateFilter }) => {
  function onFilterInput(e) {
    const filter = e.target.value.trim();
    updateFilter(filter);
  }

  return (
    <div>
      <StyleLabel htmlFor="filter">Find contacts by name</StyleLabel>
      <input type="text" id="filter" onChange={onFilterInput} />
    </div>
  );
};

Filter.propTypes = {
  updateFilter: PropTypes.func.isRequired,
};

export default Filter;
