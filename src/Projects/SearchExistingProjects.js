import React from 'react';
import {useState} from 'react';

import Table from 'react-bootstrap/Table';
import "../Forms.css";
import PaginateProjects from "./PaginateProjects";


const SearchExistingNews = (props) => {

  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggle = () => setDropdownOpen(prevState => !prevState);

  return (
    <div >
    <h1>Search Existing Projects</h1>
    
    <div className = "table-wrapper-scroll-y my-custom-scrollbar" >
    <Table striped bordered hover responsive className ="" >
    
  <tbody className= "tableb">
  
    <PaginateProjects/>
    {/* <tr>
      <td>1</td>
      <td>VR Sickness</td>
      <td>Predicting virtual reality sickness through the use of artificial intelligence.</td>
    </tr>
    <tr >
      <td>2</td>
      <td>fMRI</td>
      <td>Using modern image processing technology to better predict neurological illness.</td>
     
    </tr>
    <tr >
      <td>3</td>
      <td >Network Anomaly Detection</td>
      <td>Improved abnormality detection in networks using ML and data filtering.</td>
    </tr>
    <tr >
      <td>4</td>
      <td >Understanding Travel</td>
      <td>Predicting travel trends using cellular data.</td>
    </tr><tr >
      <td>5</td>
      <td >Entity Resolution of Clinical Analyte Results</td>
      <td>Matching tests across Hostpitals.</td>
    </tr><tr >
      <td>6</td>
      <td >Course Scheduling</td>
      <td>Automating and Optimizing Course Offerings.</td>
    </tr><tr >
      <td>7</td>
      <td >Radiology + Genomics</td>
      <td>Using radiology and genomics to determine susceptibility to different pathogens.</td>
    </tr><tr >
      <td>8</td>
      <td >Radio Frequency Classification</td>
      <td>In the battlefield, Radio Frequency communication is essential to the success of missions, so keeping RF comms up can be the difference between a successful and unsuccessful mission.</td>
    </tr><tr >
      <td>9</td>
      <td >Duke Health Safety Bot</td>
      <td>Duke Health System wants a better way to filter emergency messages from less urgent ones.</td>
    </tr> */}
  </tbody>
</Table>
</div>
    </div>
  );
}

export default SearchExistingNews;



