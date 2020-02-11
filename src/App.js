import React from "react";
import AddMembers from "./AddMembers";
import AddPapers from "./AddPapers";
import AddProjects from "./AddProjects";
import LandingPage from "./LandingPage";
import SearchExisting from "./SearchExisting";
import Header from "./Header";
import Footer from "./Footer";
import AddDnews from "./AddDnews";
import Tabs from "react-bootstrap/Tabs";
import Tab from "react-bootstrap/Tab";
import Nav from "react-bootstrap/Nav";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import "./Forms.css";
import { Container, Row, Col } from "reactstrap";
import SearchExistingMembers from "./SearchExistingMembers";
import SearchExistingProjects from "./SearchExistingProjects";
import SearchExistingPapers from "./SearchExistingPapers";
import SearchExistingNews from "./SearchExistingNews";

function App() {
  const [key, setKey] = useState("home");

  const navLinks = [
    { key: "home", title: "Home" },
    { key: "members", title: "Members" },
    { key: "projects", title: "Projects" },
    { key: "papers", title: "Papers" },
    { key: "news", title: "DAML News" }
  ];

  return (
    <Container fluid>
      <header>
        <Row md="1">
          <Header />
        </Row>
      </header>
      <Row md="1">
        <main className="body">
          <Tab.Container onSelect={k => setKey(k)} defaultActiveKey="home">
            <Row>
              <Col sm={12} style={{ margin: "0.5rem" }}>
                <Nav variant="pills" className="flex-row">
                  {navLinks.map(({ key, title }, index) => (
                    <Nav.Item>
                      <Nav.Link
                        key={index}
                        eventKey={key}
                        style={{ color: "#fff", margin: "0.5rem" }}
                      >
                        {title}
                      </Nav.Link>
                    </Nav.Item>
                  ))}
                </Nav>
              </Col>
            </Row>
            {/*Landing Page*/}
            <Tab.Content>
              <Tab.Pane
                className="tab"
                style={{ color: "red" }}
                eventKey="home"
                title="Home"
              >
                <LandingPage />
              </Tab.Pane>

              {/*Members Page*/}
              <Tab.Pane eventKey="members" title="Members">
                <Row>
                  <Col md={6} className="left">
                    <AddMembers />
                  </Col>
                  <Col md={6} className="right">
                    <SearchExistingMembers />
                  </Col>
                </Row>
              </Tab.Pane>

              {/*Projects Page*/}
              <Tab.Pane eventKey="projects" title="Projects">
                <Row>
                  <Col md={6} className="left">
                    <AddProjects />
                  </Col>
                  <Col md={6} className="right">
                    <SearchExistingProjects />
                  </Col>
                </Row>
              </Tab.Pane>

              {/*Papers Page*/}
              <Tab.Pane eventKey="papers" title="Papers">
                <Row>
                  <Col md={6} className="left">
                    <AddPapers />
                  </Col>
                  <Col md={6} className="right">
                    <SearchExistingPapers />
                  </Col>
                </Row>
              </Tab.Pane>

              {/*DAML News*/}
              <Tab.Pane eventKey="news" title="DAML News">
                <Row>
                  <Col md={6} className="left">
                    <AddDnews />
                  </Col>
                  <Col md={6} className="right">
                    <SearchExistingNews />
                  </Col>
                </Row>
              </Tab.Pane>
            </Tab.Content>
          </Tab.Container>
        </main>
      </Row>

      <Row md="1">
        <footer>
          <Footer />
        </footer>
      </Row>
    </Container>
  );
}

export default App;
