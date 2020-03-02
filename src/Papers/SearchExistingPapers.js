import React from 'react';
import {useState} from 'react';

import Table from 'react-bootstrap/Table';
import "../Forms.css";
import PaginatePapers from "./PaginatePapers.js";


const SearchExistingPapers = (props) => {

  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggle = () => setDropdownOpen(prevState => !prevState);

  return (
    <div>
    <h1>Search Existing Papers</h1>
    
    <div className = "table-wrapper-scroll-y my-custom-scrollbar" >  
    
    <Table striped bordered hover responsive className = "">
      <tbody className="tableb">
        <PaginatePapers/>    
      </tbody>
    </Table>
  
      
</div>
    </div>
  );
}


export default SearchExistingPapers;

