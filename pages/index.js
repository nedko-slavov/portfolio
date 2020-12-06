import "../styles.scss";
import LeadContainer from '../components/LeadContainer.js';
import Skills from '../components/Skills.js';
import EmploymentHistory from '../components/EmploymentHistory.js';
import Projects from '../components/Projects.js';

export default () => (
  <React.Fragment>
    <div className="notification spacing-top-lg">
      <h4>Under construction</h4>
    </div>

    <main className="main">
      <LeadContainer />

      <Skills />

      <Projects />
      
      <EmploymentHistory />
    </main>
  </React.Fragment>
);
