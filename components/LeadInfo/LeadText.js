import React from 'react';
import { Row, Column } from '../layout';
import Contacts from './Contacts';
import Education from './Education';
import Title from './Title';

const LeadText = () => (
  <div className="lead-text lead-text-animation">
    <Title title="Nedko Slavov" />

    <Row>
      <Column colWidth="4" className="education-col">
        <Education />
      </Column>

      <Column colWidth="4">
        <Contacts />
      </Column>
    </Row>
  </div>
);

export default LeadText;
