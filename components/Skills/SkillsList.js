import React from 'react';
import Skill from './Skill';
import skillsData from './skillsData';

const SkillsList = () => (
  <ul className="skills spacing-top-sm">
    {skillsData.map((skill) => (
      <Skill key={skill.id} skill={skill.name} />
    ))}
  </ul>
);

export default SkillsList;
