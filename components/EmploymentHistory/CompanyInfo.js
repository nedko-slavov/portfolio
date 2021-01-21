import React from 'react';
import PropTypes from 'prop-types';
import employersData from './employersData';
import CompanyInfoContent from './CompanyInfoContent';

const CompanyInfo = ({ employerInfo, onClose }) => (
  <div className={`employer-info ${employerInfo.animationClass}`}>
    <button
      type="button"
      className="close close-icon"
      aria-label="close"
      onClick={onClose}
    />

    {employersData.map((employer) => (
      employerInfo.company === employer.id && (
        <CompanyInfoContent
          key={employer.id}
          employer={employer}
        />
      )
    ))}
  </div>
);

CompanyInfo.propTypes = {
  employerInfo: PropTypes.oneOfType([PropTypes.object]).isRequired,
  onClose: PropTypes.func.isRequired,
};

export default CompanyInfo;
