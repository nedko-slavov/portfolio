import React from 'react';
import PropTypes from 'prop-types';
import EmployerContent from './EmployerContent';

const Employer = ({
  employerName,
  period,
  position,
  handleClick,
}) => {
  const isClickable = !(employerName === 'HiEnd Publishing' || employerName === '“Tema” magazine' || employerName === 'Lambadjiev Standart');

  return (
    <div className="card short-info">
      {isClickable ? (
        <button type="button" onClick={handleClick}>
          <EmployerContent
            employerName={employerName}
            period={period}
            position={position}
          />
          <span className="show-projects">Show Projects</span>
        </button>

      ) : (
        <EmployerContent
          employerName={employerName}
          period={period}
          position={position}
        />
      )}
    </div>
  );
};

Employer.defaultProps = {
  handleClick: () => {},
};

Employer.propTypes = {
  employerName: PropTypes.string.isRequired,
  period: PropTypes.string.isRequired,
  position: PropTypes.string.isRequired,
  handleClick: PropTypes.func,
};

export default Employer;
