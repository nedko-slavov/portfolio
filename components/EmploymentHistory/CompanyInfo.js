import React from 'react';
import PropTypes from 'prop-types';
import Project from './Project';
import { Row, Column } from '../layout';

const CompanyInfo = ({ employer }) => {
  const { projects, name, description } = employer;

  return (
    <div className="spacing-top">
      <div className="projects-wrapper">
        <div className="spacing-bottom-sm">
          <h4 className="company-name">
            {name}
            &nbsp;
            Projects
          </h4>

          {description && <p>All projects below are builded with Raketa CMS</p>}
        </div>

        <Row className="projects-row">
          {projects.map((project) => (
            <Column key={project.id} colWidth="6">
              <Project
                url={project.url}
                image={project.image}
                clientName={project.clientName}
              />
            </Column>
          ))}
        </Row>
      </div>
    </div>
  );
};

CompanyInfo.defaultProps = {
  description: '',
};

CompanyInfo.propTypes = {
  employer: PropTypes.oneOfType([PropTypes.object]).isRequired,
  description: PropTypes.string,
};

export default CompanyInfo;
