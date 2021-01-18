import React from 'react';
import PropTypes from 'prop-types';
import EmployerContent from './EmployerContent';

const Employer = ({
  employerName,
  period,
  position,
  handleClick,
  isClickable,
}) => (
  <>
    {isClickable ? (
      <button type="button" className="clickable" onClick={handleClick}>
        <EmployerContent
          employerName={employerName}
          period={period}
          position={position}
        />
        <span className="show-projects">Show Projects</span>
      </button>

    ) : (
      <div className="card short-info">
        <EmployerContent
          employerName={employerName}
          period={period}
          position={position}
        />
      </div>
    )}
  </>
);

Employer.defaultProps = {
  handleClick: () => {},
};

Employer.propTypes = {
  employerName: PropTypes.string.isRequired,
  period: PropTypes.string.isRequired,
  position: PropTypes.string.isRequired,
  handleClick: PropTypes.func,
  isClickable: PropTypes.bool.isRequired,
};

export default Employer;
