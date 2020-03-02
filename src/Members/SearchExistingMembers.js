import React from 'react';
import {useState} from 'react';

import Table from 'react-bootstrap/Table';
import "../Forms.css";
import PaginateMembers from "./PaginateMembers.js";

const SearchExistingMembers = (props) => {

  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggle = () => setDropdownOpen(prevState => !prevState);

  return (
    <div >
    <h1>Search Existing Members</h1>
    
    <div className = "table-wrapper-scroll-y my-custom-scrollbar" >  
    
    <Table striped bordered hover responsive >
    <thead>
    <tr >
      <th>#</th>
      <th>First Name</th>
      <th>Last Name</th>
    </tr>
  </thead>
      <tbody className = "tableb">
        <PaginateMembers/>    
      </tbody>
    </Table>
  
      
</div>
    </div>
  );
}

export default SearchExistingMembers;



