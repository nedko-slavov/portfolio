import React from 'react';
import { Container } from '../layout';
import Avatar from './Avatar';
import LeadText from './LeadText';

const LeadInfo = () => (
  <div className="lead-info">
    <Container>
      <Avatar />

      <LeadText />
    </Container>
  </div>
);

export default LeadInfo;
