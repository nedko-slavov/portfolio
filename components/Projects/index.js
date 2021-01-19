import React, { useState, useEffect } from 'react';
import TryItSVG from './TryItSVG';
import RocketSVG from './RocketSVG';
import GithubSVG from './GithubSVG';

const redirect = () => {
  window.location.href = '/builder';
};

const rocketLauncher = (isRocketLounched) => {
  const rocketLaunch = new Promise((resolve) => {
    if (isRocketLounched) {
      setTimeout(() => {
        resolve();
      }, 1500);
    }
  });

  rocketLaunch.then(() => {
    redirect();
  });
};

const Projects = () => {
  const [isRocketLounched, setRoketLounch] = useState(false);

  useEffect(() => {
    rocketLauncher(isRocketLounched);
  }, [isRocketLounched]);

  return (
    <div className="projects">
      <div className="container">
        <div className="spacing-bottom-sm">
          <h4 className="section-title section-title-animation">Projects</h4>
        </div>

        <div className="row">
          <div className="col-6">
            <div className="img-container img-container-animation">
              <div className="try-it-now try-it-now-animation">
                <TryItSVG />
              </div>

              <a href="/builder" onClick={(e) => { e.preventDefault(); setRoketLounch(!isRocketLounched); }}>
                <div className={`rocket rocket-animation ${isRocketLounched ? 'rocket-lounch' : ''}`}>
                  <RocketSVG />
                </div>
              </a>
            </div>
          </div>

          <div className="col-6 project project-desc-animation">
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
