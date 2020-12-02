import "../styles.scss";
import LeadContainer from '../components/LeadContainer.js';
import Skills from '../components/Skills.js';
import EmploymentHistory from '../components/EmploymentHistory.js';

export default () => (
  <React.Fragment>
    <LeadContainer />

    <Skills />
    
    <EmploymentHistory />
  </React.Fragment>
);
