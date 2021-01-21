import React from 'react';
import PropTypes from 'prop-types';

const SectionTitle = ({ title, className }) => (
  <h4 className={`section-title ${className}`}>{title}</h4>
);

SectionTitle.defaultProps = {
  className: '',
};

SectionTitle.propTypes = {
  title: PropTypes.string.isRequired,
  className: PropTypes.string,
};

export default SectionTitle;
