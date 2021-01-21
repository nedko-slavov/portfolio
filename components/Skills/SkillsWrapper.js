import React from 'react';
import PropTypes from 'prop-types';

const SkillsWrapper = ({ children }) => (
  <div className="skills-warpper skills-warpper-animation">
    {children}
  </div>
);

SkillsWrapper.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

export default SkillsWrapper;
