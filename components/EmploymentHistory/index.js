import React, { useState } from 'react';
import { Container, Row, Column } from '../layout';
import Slot from './Slot';
import SectionTitle from '../shared/SectionTitle';
import employersData from './employersData';
import Employer from './Employer';
import CompanyInfo from './CompanyInfo';

const EmploymentHistory = () => {
  const [employerInfo, setEmployerInfo] = useState({ company: 'raketa', animationClass: '' });

  const handleClose = () => setEmployerInfo({ company: '', animationClass: 'slide-hide' });

  return (
    <div className="employment-history">
      <Slot />

      <Container className="employment-history-cnt">
        <div className="section-title-wrapper">
          <SectionTitle title="Employment History" />
        </div>

        <CompanyInfo
          employerInfo={employerInfo}
          onClose={handleClose}
        />

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
