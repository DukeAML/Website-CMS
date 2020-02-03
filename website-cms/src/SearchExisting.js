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
        
        <DropdownItem><div style={{color: "blue"}} onClick={toggle}>Item 1</div></DropdownItem>
        <DropdownItem><div style={{color: "blue"}} onClick={toggle}>Item 2</div></DropdownItem>
        <DropdownItem><div style={{color: "blue"}} onClick={toggle}>Item 3</div></DropdownItem>
        <DropdownItem><div style={{color: "blue"}} onClick={toggle}>Item 4</div></DropdownItem>
      </DropdownMenu>
    </Dropdown>
    </div>
  );
}

export default SearchExisting;