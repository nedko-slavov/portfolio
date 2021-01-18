import React from 'react';
import '../styles.scss';
import LeadInfo from '../components/LeadInfo';
import Skills from '../components/Skills';
import EmploymentHistory from '../components/EmploymentHistory';
import Projects from '../components/Projects';

const Home = () => (
  <main className="main">
    <LeadInfo />

    <Skills />

    <Projects />

    <EmploymentHistory />
  </main>
);

export default Home;
