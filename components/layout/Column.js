import React from 'react';
import PropTypes from 'prop-types';

const Column = ({ children, colWidth, className }) => (
  <div className={`col-${colWidth} ${className}`}>
    {children}
  </div>
);

Column.defaultProps = {
  className: '',
};

Column.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
  className: PropTypes.string,
  colWidth: PropTypes.string.isRequired,
};

export default Column;
