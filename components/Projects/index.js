import React, { useState, useEffect, useRef } from 'react';
import TryItSVG from './TryItSVG';
import RocketSVG from './RocketSVG';
import GithubSVG from './GithubSVG';
import { Container, Row, Column } from '../layout';

const redirect = () => {
  window.location.href = '/builder';
};

const rocketLauncher = (isRocketLaunched) => {
  setTimeout(() => {
    try {
      if (!isRocketLaunched) throw new Error('something went wrong');
    } catch (error) {
      console.log(error.message);
    } finally {
      redirect();
    }
  }, 1500);
};

const Projects = () => {
  const [isRocketLaunched, setRoketLounch] = useState(false);

  const initialRender = useRef(true);

  useEffect(() => {
    if (initialRender.current) {
      initialRender.current = false;
    } else {
      rocketLauncher(isRocketLaunched);
    }
  }, [isRocketLaunched]);

  return (
    <div className="projects">
      <Container>
        <div className="spacing-bottom-sm">
          <h4 className="section-title section-title-animation">Projects</h4>
        </div>

        <Row>
          <Column colWidth="6">
            <div className="img-container img-container-animation">
              <div className="try-it-now try-it-now-animation">
                <TryItSVG />
              </div>

              <a href="/builder" onClick={(e) => { e.preventDefault(); setRoketLounch(!isRocketLaunched); }}>
                <div className={`rocket rocket-animation ${isRocketLaunched ? 'rocket-lounch' : ''}`}>
                  <RocketSVG />
                </div>
              </a>
            </div>
          </Column>

          <Column colWidth="6" className="roject project-desc-animation">
            <div className="project-description">
              <div className="description-inner">
                <h5>Raketa CMS</h5>
                <p>
                  Contributor to Raketa CMS
                  <br />
                  project made in &nbsp;
                  <a
                    href="https://raketadesign.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Studio Raketa
                  </a>
                </p>

                <a
                  href="https://github.com/studioraketa/raketa-cms"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="github-link"
                >
                  <GithubSVG />
                </a>
              </div>
            </div>
          </Column>
        </Row>
      </Container>
    </div>
  );
};

export default Projects;
