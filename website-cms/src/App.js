import React from 'react';
import AddMembers from './AddMembers';
import AddPapers from './AddPapers';
import AddProjects from './AddProjects';
import LandingPage from './LandingPage';
import SearchExisting from './SearchExisting';
import Header from './Header';
import Footer from './Footer';
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';
import 'bootstrap/dist/css/bootstrap.min.css';
import {useState} from 'react';
import "./Forms.css";

<<<<<<< HEAD
=======



>>>>>>> f3069f9043285b164dfc4ab2e50353542a6beb47
function App() {
  const [key, setKey] = useState('home');
 
  return (
    <div>
    <header>
    <Header/> 
    </header>
    <main className="body">
    <Tabs className = "tab" id="controlled-tabs" activeKey={key} onSelect={k => setKey(k)}>
      <Tab eventKey="home" title="Home">
      <LandingPage/> 
      </Tab>
      <Tab eventKey="members" title="Members">
      <AddMembers/><SearchExisting/>
      </Tab>
      <Tab eventKey="projects" title="Projects">
        <AddProjects />
      </Tab>
      <Tab eventKey="papers" title="Papers">
        <AddPapers />
      </Tab>
    </Tabs>
    </main>
    <footer>
      <Footer/>
    </footer>
    </div>
  );
}

export default App;



