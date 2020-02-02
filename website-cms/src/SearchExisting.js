import React from 'react';
import {useState} from 'react';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';


const SearchExisting = (props) => {

  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggle = () => setDropdownOpen(prevState => !prevState);

  return (
    <div className = "projects">
    <h1>Search Existing</h1>
    <Dropdown isOpen={dropdownOpen} toggle={toggle}>
      <DropdownToggle tag="span"
        data-toggle="dropdown"
        aria-expanded={dropdownOpen} caret>
        Existing
        </DropdownToggle>
      <DropdownMenu>
        
        <DropdownItem><div onClick={toggle}>Custom dropdown 1</div></DropdownItem>
        <div onClick={toggle}>Custom dropdown 2</div>
        <div onClick={toggle}>Custom dropdown 3</div>
        <div onClick={toggle}>Custom dropdown 4</div>
      </DropdownMenu>
    </Dropdown>
    </div>
  );
}

export default SearchExisting;