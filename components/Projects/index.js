import React, { useState, useEffect, useRef } from 'react';
import { Container, Row, Column } from '../layout';
import SectionTitle from '../shared/SectionTitle';
import Rocket from './Rocket';
import ProjectDescription from './ProjectDescription';
import rocketLauncher from './rocketLauncher';

const Projects = () => {
  const [isRocketLaunched, setRoketLaunch] = useState(false);

  const initialRender = useRef(true);

  useEffect(() => {
    if (initialRender.current) {
      initialRender.current = false;
    } else {
      rocketLauncher(isRocketLaunched);
    }
  }, [isRocketLaunched]);

  const handleRocketLaunch = (e) => {
    e.preventDefault();
    setRoketLaunch(!isRocketLaunched);
  };

  return (
    <div className="projects">
      <Container>
        <div className="spacing-bottom-sm">
          <SectionTitle title="Projects" className="section-title-animation" />
        </div>

        <Row>
          <Column colWidth="6">
            <Rocket
              isRocketLaunched={isRocketLaunched}
              onRocketLaunch={handleRocketLaunch}
            />
          </Column>

          <Column colWidth="6" className="project-desc-animation">
            <ProjectDescription />
          </Column>
        </Row>
      </Container>
    </div>
  );
};

export default Projects;
