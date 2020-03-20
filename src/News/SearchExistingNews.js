import React from 'react';
import Table from 'react-bootstrap/Table';
import "../Forms.css";
import axios from "axios";


export default class SearchExistingNews extends React.Component {

  state = {
    members: []
};


componentDidMount() {
    this.getMembers();
}

getMembers =  async () => {
    var members = []
    let response = await axios.get('https://dukeappml.herokuapp.com//users')
    this.setState({members: response.data}) 
    console.log("successsssss");     
    console.log(response);       

};

getJSX = () => {
    var array = [];
    array.push(
      <thead>
      <tr>
  <th>#</th>
  <th>Title</th>
  <th>Description</th>
  </tr>
  </thead>
    );
    if (this.state.members.length > 0){
    for(let i = 0;i<this.state.members.length;i++){
        array.push(
            
            <tr onClick = {console.log("yeetyah")}>
            
            <td>{i+1}</td>
            <td> {this.state.members[i].firstName} </td>
            <td>{this.state.members[i].lastName}</td>
            </tr>


        );
    }
}
    
    return(
        <Table>{array}</Table>
    );
  
};



render() {
return(
<div>
<h1>Search Existing News</h1>

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



