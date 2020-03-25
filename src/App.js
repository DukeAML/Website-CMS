import React from 'react';

import LandingPage from './LandingPage';

import Header from './Header';
import Footer from './Footer';

import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';

import 'bootstrap/dist/css/bootstrap.min.css';
import {useState} from 'react';
import "./Forms.css";
import { Container, Row } from 'reactstrap';





import PassMembers from "./Members/PassMembers";
import PassPapers from "./Papers/PassPapers";
import PassProjects from './Projects/PassProjects';
import PassNews from './News/PassNews';

function App() {
  const [key, setKey] = useState('home');
  

  
 
  return (
  
    <div>
    <Container fluid >
      <header>
      <Row md = "1"><Header/></Row>
      </header>
      <Row md = "1">
      <main className="body">
      
      <Tabs  className = "tab" id="controlled-tabs" activeKey={key} onSelect={k => setKey(k)}>
        {/*Landing Page*/}
        <Tab className = "tab" style={{color: "red"}} eventKey="home" title="Home" >
        <LandingPage/> 
        </Tab>

        {/*Members Page*/}
        <Tab eventKey="members" title="Members">
        
        <PassMembers/>
        
        </Tab>

        {/*Projects Page*/}
        <Tab eventKey="projects" title="Projects">
        
        <PassProjects/>

        </Tab>
        
        {/*Papers Page*/}
        <Tab eventKey="papers" title="Papers">
        
          <PassPapers/>

        </Tab>

        {/*DAML News*/}
        <Tab eventKey="news" title="DAML News">
        
        <PassNews/>

        </Tab>

      </Tabs>

      </main>

      </Row>

      <Row md = "1">
      <footer>
        <Footer/>
      </footer>
      </Row>
    </Container>
    </div>
  );
}

export default App;



