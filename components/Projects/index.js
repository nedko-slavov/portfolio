import React, { useState, useEffect } from 'react';
import TryItSVG from './TryItSVG';
import RocketSVG from './RocketSVG';
import GithubSVG from './GithubSVG';

const redirectDelay = () => {
  setTimeout(() => {
    window.location.href = '/builder';
  }, 1500);
};

const Projects = () => {
  const [isRocketLounched, setRoketLounch] = useState(false);

  useEffect(() => {
    if (isRocketLounched) {
      redirectDelay();

      setTimeout(() => {
        setRoketLounch(false);
      }, 1510);
    }
  }, [isRocketLounched]);

  return (
    <div className="projects">
      <div className="container">
        <div className="spacing-bottom-sm">
          <h4 className="section-title">Projects</h4>
        </div>

        <div className="row">
          <div className="col-6">
            <div className="img-container">
              <div className="try-it-now">
                <TryItSVG />
              </div>

              <a
                href="/builder"
                onClick={(e) => { e.preventDefault(); setRoketLounch(!isRocketLounched); }}
                target="_blank"
              >
                <div className={`projects-rocket ${isRocketLounched ? 'rocket-lounch' : ''}`}>
                  <RocketSVG />
                </div>
              </a>
            </div>
          </div>

          <div className="col-6 project">
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
