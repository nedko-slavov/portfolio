import React from 'react';
import PropTypes from 'prop-types';
import TryItSVG from './TryItSVG';
import RocketSVG from './RocketSVG';

const Rocket = ({ isRocketLaunched, onRocketLaunch }) => (
  <div className="img-container img-container-animation">
    <div className="try-it-now try-it-now-animation">
      <TryItSVG />
    </div>

    <a href="/builder" onClick={onRocketLaunch}>
      <div className={`rocket rocket-animation ${isRocketLaunched ? 'rocket-lounch' : ''}`}>
        <RocketSVG />
      </div>
    </a>
  </div>
);

Rocket.propTypes = {
  isRocketLaunched: PropTypes.bool.isRequired,
  onRocketLaunch: PropTypes.func.isRequired,
};

export default Rocket;
