import React from 'react';
import {useState} from 'react';
import axios from "axios";
import Table from 'react-bootstrap/Table';
import "../Forms.css";



export default class SearchExistingPapers extends React.Component {

  state = {
    members: []
};


componentDidMount() {
    this.getMembers();
}

getMembers =  async () => {
    var members = []
    let response = await axios.get('https://dukeappml.herokuapp.com/papers')
    this.setState({members: response.data}) 
    console.log("successsssss");     
    console.log(response);       

};

getJSX = () => {
  var array = [];
  array.push(
      <thead>
          <tr >
          <th>#</th>
          <th>Title</th>
          <th>Description</th>
          
          </tr>
      </thead>
  );
  if (this.state.members.length > 0){
  for(let i = 0;i<this.state.members.length;i++){
      array.push(
          
          <tr>
          <td>{i+1}</td>
          <td> {this.state.members[i].title} </td>
          <td>{this.state.members[i].authorLastName}</td>
          </tr>


      );
  }
}
  
  return(
      <div>{array}</div>
  );
 
};



render() {
return(
<div>
<h1>Search Existing Papers</h1>

<div className = "table-wrapper-scroll-y my-custom-scrollbar" >  
{/*beginning of table*/}
<Table striped bordered hover responsive >
  {/*header of table*/}

  {/*end of header of table*/}

  {/*body of table with content from axios*/}
  <tbody className = "tableb">
  <div>
    {this.getJSX()}
    </div>   
  </tbody>
  {/*end body of table with content from axios*/}
</Table>

  
</div>
</div>
);
}

}




