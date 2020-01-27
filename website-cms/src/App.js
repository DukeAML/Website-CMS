import React from 'react';
import AddMembers from './AddMembers';
import AddPapers from './AddPapers';
import AddProjects from './AddProjects';
import LandingPage from './LandingPage';
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';
import 'bootstrap/dist/css/bootstrap.min.css';
import {useState} from 'react';
import "./Forms.css";

function App() {
  const [key, setKey] = useState('members');
 
  return (
    <Tabs id="controlled-tabs" activeKey={key} onSelect={k => setKey(k)}>
      <Tab eventKey="home" title="Home">
      <LandingPage/>
      </Tab>
      <Tab eventKey="members" title="Members">
      <AddMembers/>
      </Tab>
      <Tab eventKey="projects" title="Projects">
        <AddProjects />
      </Tab>
      <Tab eventKey="papers" title="Papers">
        <AddPapers />
      </Tab>
    </Tabs>
    
  );
}

export default App;
