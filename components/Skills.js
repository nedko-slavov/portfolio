import React from 'react';

const skills = [
  { id: 'sad', name: 'CSS3' },
  { id: 'das', name: 'SASS' },
  { id: 'vff', name: 'HTML5' },
  { id: 'vdfb', name: 'Javascript' },
  { id: 'vdf', name: 'React' },
  { id: 'csd', name: 'Typescript' },
  { id: 'ntyny', name: 'React Native' },
  { id: 'sdvbs', name: 'Styled components' },
  { id: 'dsvvs', name: 'Nextjs' },
  { id: 'cwecw', name: 'Graphql' },
  { id: 'cwecwe', name: 'Webpack' },
  { id: 'cwegwe', name: 'Ruby on Rails (basics)' },
  { id: 'cwevwe', name: 'Git' },
  { id: 'vewvwe', name: 'Sketch' },
];

const Skills = () => (
  <div className="skills-warpper skills-warpper-animation">
    <div className="container">
      <h4 className="section-title skills-title-animation">Skills and Tools</h4>
      <ul className="skills spacing-top-sm">
        {skills.map((skill) => (
          <li key={skill.id} className="skill skill-animation">{skill.name}</li>
        ))}
      </ul>
    </div>
  </div>
);

export default Skills;
