import React from 'react';
import AddMembers from './AddMembers';
import AddPapers from './AddPapers';
import AddProjects from './AddProjects';
import LandingPage from './LandingPage';
import SearchExisting from './SearchExisting';
import Header from './Header';
import Footer from './Footer';
import AddDnews from './AddDnews';
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';

import 'bootstrap/dist/css/bootstrap.min.css';
import {useState} from 'react';
import "./Forms.css";
import { Container, Row, Col } from 'reactstrap';

function App() {
  const [key, setKey] = useState('home');
 
  return (
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
        <Row>
        <Col md = {6} className = "left"><AddMembers/></Col>
        <Col md = {6} className = "right"><SearchExisting/></Col>
        </Row>
        </Tab>

        {/*Projects Page*/}
        <Tab eventKey="projects" title="Projects">
        <Row>
        <Col md = {6} className = "left"><AddProjects/></Col>
        <Col md = {6} className = "right"><SearchExisting/></Col>
        </Row>
        </Tab>
        
        {/*Papers Page*/}
        <Tab eventKey="papers" title="Papers">
        <Row>
        <Col md = {6} className = "left"><AddPapers/></Col>
        <Col md = {6} className = "right" ><SearchExisting/></Col>
        </Row>
        </Tab>

        {/*DAML News*/}
        <Tab eventKey="news" title="DAML News">
        <Row>
        <Col md = {6} className = "left"><AddDnews/></Col>
        <Col md = {6} className = "right" ><SearchExisting/></Col>
        </Row>
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
  );
}

export default App;



