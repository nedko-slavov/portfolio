import React, { useState } from 'react';
import Employer from './Employer';
import CompanyInfo from './CompanyInfo';
import employersData from './employersData';
import { Container, Row, Column } from '../layout';

const EmploymentHistory = () => {
  const [employerInfo, setEmployerInfo] = useState({ company: 'raketa', animationClass: '' });

  return (
    <div className="employment-history">
      <div className="slot-wrapper" />
      <div className="slot-shadow" />

      <Container className="employment-history-cnt">
        <div className="section-title-wrapper">
          <h4 className="section-title">Employment History</h4>
        </div>

        <div className={`employer-info ${employerInfo.animationClass}`}>
          <button
            type="button"
            className="close close-icon"
            aria-label="close"
            onClick={() => setEmployerInfo({ company: '', animationClass: 'slide-hide' })}
          />

          {employersData.map((employer) => (
            employerInfo.company === employer.id && (
              <CompanyInfo
                key={employer.id}
                employer={employer}
              />
            )
          ))}
        </div>

        <Row className="spacing-top-sm employers">
          {employersData.map((employer) => (
            <Column key={employer.id} colWidth="4">
              <Employer
                employerName={employer.name}
                period={employer.period}
                position={employer.position}
                isClickable={employer.isClickable}
                handleClick={() => setEmployerInfo({ company: employer.id, animationClass: 'slide-show' })}
              />
            </Column>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default EmploymentHistory;
