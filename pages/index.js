import React from 'react';
import '../styles.scss';
import LeadContainer from '../components/LeadContainer';
import Skills from '../components/Skills';
import EmploymentHistory from '../components/EmploymentHistory';
import Projects from '../components/Projects';

const Home = () => (
  <main className="main">
    <LeadContainer />

    <Skills />

    <Projects />
    <EmploymentHistory />
  </main>
);

export default Home;
