import React from 'react';
import { Container } from '../layout';
import SkillsWrapper from './SkillsWrapper';
import SkillsList from './SkillsList';
import SectionTitle from '../shared/SectionTitle';

const Skills = () => (
  <SkillsWrapper>
    <Container>
      <SectionTitle
        title="Skills and Tools"
        className="skills-title-animation"
      />

      <SkillsList />
    </Container>
  </SkillsWrapper>
);

export default Skills;
