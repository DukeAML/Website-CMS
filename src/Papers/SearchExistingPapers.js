import React from 'react';
import {useState} from 'react';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import Table from 'react-bootstrap/Table';
import "../Forms.css";


const SearchExistingPapers = (props) => {

  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggle = () => setDropdownOpen(prevState => !prevState);

  return (
    <div >
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
    <Table striped bordered hover responsive >
  
  <tbody className= "tableb">
    <tr>
      <td>1</td>
      <td>Wyatt</td>
      <td>Focht</td>
    </tr>
    <tr >
      <td>2</td>
      <td>Ryan</td>
      <td>Middlemiss</td>
     
    </tr>
    <tr >
      <td>3</td>
      <td >Yasa</td>
      <td>Truitt</td>
    </tr>
    <tr >
      <td>3</td>
      <td >Yasa</td>
      <td>Truitt</td>
    </tr><tr >
      <td>3</td>
      <td >Yasa</td>
      <td>Truitt</td>
    </tr><tr >
      <td>3</td>
      <td >Yasa</td>
      <td>Truitt</td>
    </tr><tr >
      <td>3</td>
      <td >Yasa</td>
      <td>Truitt</td>
    </tr><tr >
      <td>3</td>
      <td >Yasa</td>
      <td>Truitt</td>
    </tr><tr >
      <td>3</td>
      <td >Yasa</td>
      <td>Truitt</td>
    </tr><tr >
      <td>3</td>
      <td >Yasa</td>
      <td>Truitt</td>
    </tr><tr >
      <td>3</td>
      <td >Yasa</td>
      <td>Truitt</td>
    </tr><tr >
      <td>3</td>
      <td >Yasa</td>
      <td>Truitt</td>
    </tr><tr >
      <td>3</td>
      <td >Yasa</td>
      <td>Truitt</td>
    </tr><tr >
      <td>3</td>
      <td >Yasa</td>
      <td>Truitt</td>
    </tr><tr >
      <td>3</td>
      <td >Yasa</td>
      <td>Truitt</td>
    </tr><tr >
      <td>3</td>
      <td >Yasa</td>
      <td>Truitt</td>
    </tr><tr >
      <td>3</td>
      <td >Yasa</td>
      <td>Truitt</td>
    </tr><tr >
      <td>3</td>
      <td >Yasa</td>
      <td>Truitt</td>
    </tr><tr >
      <td>3</td>
      <td >Yasa</td>
      <td>Truitt</td>
    </tr><tr >
      <td>3</td>
      <td >Yasa</td>
      <td>Truitt</td>
    </tr><tr >
      <td>3</td>
      <td >Yasa</td>
      <td>Truitt</td>
    </tr><tr >
      <td>3</td>
      <td >Yasa</td>
      <td>Truitt</td>
    </tr><tr >
      <td>3</td>
      <td >Yasa</td>
      <td>Truitt</td>
    </tr><tr >
      <td>3</td>
      <td >Yasa</td>
      <td>Truitt</td>
    </tr><tr >
      <td>3</td>
      <td >Yasa</td>
      <td>Truitt</td>
    </tr><tr >
      <td>3</td>
      <td >Yasa</td>
      <td>Truitt</td>
    </tr><tr >
      <td>3</td>
      <td >Yasa</td>
      <td>Truitt</td>
    </tr><tr >
      <td>3</td>
      <td >Yasa</td>
      <td>Truitt</td>
    </tr><tr >
      <td>3</td>
      <td >Yasa</td>
      <td>Truitt</td>
    </tr><tr >
      <td>3</td>
      <td >Yasa</td>
      <td>Truitt</td>
    </tr><tr >
      <td>3</td>
      <td >Yasa</td>
      <td>Truitt</td>
    </tr><tr >
      <td>3</td>
      <td >Yasa</td>
      <td>Truitt</td>
    </tr><tr >
      <td>3</td>
      <td >Yasa</td>
      <td>Truitt</td>
    </tr><tr >
      <td>3</td>
      <td >Yasa</td>
      <td>Truitt</td>
    </tr><tr >
      <td>3</td>
      <td >Yasa</td>
      <td>Truitt</td>
    </tr><tr >
      <td>3</td>
      <td >Yasa</td>
      <td>Truitt</td>
    </tr><tr >
      <td>3</td>
      <td >Yasa</td>
      <td>Truitt</td>
    </tr><tr >
      <td>3</td>
      <td >Yasa</td>
      <td>Truitt</td>
    </tr><tr >
      <td>3</td>
      <td >Yasa</td>
      <td>Truitt</td>
    </tr><tr >
      <td>3</td>
      <td >Yasa</td>
      <td>Truitt</td>
    </tr><tr >
      <td>3</td>
      <td >Yasa</td>
      <td>Truitt</td>
    </tr><tr >
      <td>3</td>
      <td >Yasa</td>
      <td>Truitt</td>
    </tr><tr >
      <td>3</td>
      <td >Yasa</td>
      <td>Truitt</td>
    </tr><tr >
      <td>3</td>
      <td >Yasa</td>
      <td>Truitt</td>
    </tr><tr >
      <td>3</td>
      <td >Yasa</td>
      <td>Truitt</td>
    </tr><tr >
      <td>3</td>
      <td >Yasa</td>
      <td>Truitt</td>
    </tr><tr >
      <td>3</td>
      <td >Yasa</td>
      <td>Truitt</td>
    </tr><tr >
      <td>3</td>
      <td >Yasa</td>
      <td>Truitt</td>
    </tr><tr >
      <td>3</td>
      <td >Yasa</td>
      <td>Truitt</td>
    </tr><tr >
      <td>3</td>
      <td >Yasa</td>
      <td>Truitt</td>
    </tr><tr >
      <td>3</td>
      <td >Yasa</td>
      <td>Truitt</td>
    </tr><tr >
      <td>3</td>
      <td >Yasa</td>
      <td>Truitt</td>
    </tr><tr >
      <td>3</td>
      <td >Yasa</td>
      <td>Truitt</td>
    </tr><tr >
      <td>3</td>
      <td >Yasa</td>
      <td>Truitt</td>
    </tr><tr >
      <td>3</td>
      <td >Yasa</td>
      <td>Truitt</td>
    </tr><tr >
      <td>3</td>
      <td >Yasa</td>
      <td>Truitt</td>
    </tr><tr >
      <td>3</td>
      <td >Yasa</td>
      <td>Truitt</td>
    </tr><tr >
      <td>3</td>
      <td >Yasa</td>
      <td>Truitt</td>
    </tr><tr >
      <td>3</td>
      <td >Yasa</td>
      <td>Truitt</td>
    </tr>
  </tbody>
</Table>
</div>
    </div>
  );
}

export default SearchExistingPapers;



