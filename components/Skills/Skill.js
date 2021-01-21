import React from 'react';
import PropTypes from 'prop-types';

const Skill = ({ skill }) => (
  <li className="skill skill-animation">{skill}</li>
);

Skill.propTypes = {
  skill: PropTypes.string.isRequired,
};

export default Skill;
