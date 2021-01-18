import React from 'react';
import { PropTypes } from 'prop-types';
import Image from 'next/image';

const Project = ({ url, image, clientName }) => (
  <div className="project">
    <a href={url} target="_blank" rel="noopener noreferrer">
      <Image
        src={image}
        alt="Picture of the author"
        width={440}
        height={250}
      />
    </a>

    <div className="project-desc">
      <h5>{clientName}</h5>
    </div>
  </div>
);

Project.propTypes = {
  url: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  clientName: PropTypes.string.isRequired,
};

export default Project;
