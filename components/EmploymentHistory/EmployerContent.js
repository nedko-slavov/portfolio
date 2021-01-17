import React from 'react';
import PropTypes from 'prop-types';

const EmployerContent = ({ employerName, period, position }) => (
  <>
    <strong>Employer: </strong>
    {employerName}
    <br />

    <strong>Period: </strong>
    {period}
    <br />

    <strong>Position: </strong>
    {position}
    <br />
  </>
);

EmployerContent.propTypes = {
  employerName: PropTypes.string.isRequired,
  period: PropTypes.string.isRequired,
  position: PropTypes.string.isRequired,
};

export default EmployerContent;
