import {React, useState} from 'react';
import AddMembers from './AddMembers';
import AddPapers from './AddPapers';
import AddProjects from './AddProjects';
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';



function App() {
  const [key, setKey] = useState('members');

  return (
    <Tabs id="controlled-tabs" activeKey={key} onSelect={k => setKey(k)}>
      <Tab eventKey="members" title="Members">
        <AddMembers/>
      </Tab>
      <Tab eventKey="papers" title="Papers">
        <AddPapers />
      </Tab>
      <Tab eventKey="projects" title="Projects">
        <AddProjects />
      </Tab>
    </Tabs>
  );
}

export default App;
