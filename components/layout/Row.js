import React from 'react';
import PropTypes from 'prop-types';

const Row = ({ children, className }) => (
  <div className={`row ${className}`}>
    {children}
  </div>
);

Row.defaultProps = {
  className: '',
};

Row.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
  className: PropTypes.string,
};

export default Row;
