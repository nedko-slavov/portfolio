import React from 'react';
import GithubSVG from './GithubSVG';

const ProjectDescription = () => (
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
);

export default ProjectDescription;
