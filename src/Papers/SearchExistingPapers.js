import React from 'react';
import {useState} from 'react';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import Table from 'react-bootstrap/Table';
import "../Forms.css";
import PaginatePapers from "./PaginatePapers.js";


const SearchExistingPapers = (props) => {

  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggle = () => setDropdownOpen(prevState => !prevState);

  return (
    <div>
    <h1>Search Existing Papers</h1>
    <Table striped bordered hover responsive>
    <thead>
    <tr >
      <th>#</th>
      <th>Title</th>
      <th>Description</th>
     
    </tr>
  </thead>

  
  </Table>
    <div className = "table-wrapper-scroll-y my-custom-scrollbar" >  
    
    <Table className = "tableb">
      <tbody>
        <PaginatePapers/>    
      </tbody>
    </Table>
  
      
</div>
    </div>
  );
}


export default SearchExistingPapers;

