import React from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import axios from "axios";
import Table from 'react-bootstrap/Table';
import { Container, Row, Col } from 'reactstrap';
import "../Forms.css";


export default class AddMembers extends React.Component {
  

  state = {
    members: this.props.members,
    currentfirstName: "",
    currentlastName: "",
    currentnetID: "",
    currentpassword: "",
    currentteam: "",
    currentmajor: "",
    currentgraduationYear: "",
    currentschool: "",
    currentgithubLink: "",
    currentphotoString: "",
    currentlinkedIn: "",
    currentbiography: "",
    currentuid: ""
	
};


componentDidMount() {
    this.getMembers();
    this.correctSubmitButton();
}


    
  getMembers =  async () => {
    
    let response = await axios.get('https://dukeappml.herokuapp.com//users');
    this.setState({members: response.data}) ;
           
    
};

postMembers =  async (event) => {
    event.preventDefault();
    var mem = {
      firstName: event.target[0].value, 
      lastName: event.target[1].value, 
      netID: event.target[2].value,
      password: "",
      team: event.target[3].value,
      major: event.target[5].value,
      biography: "",
      graduationYear: "",
      school: event.target[4].value,
      githubLink: event.target[7].value,
      linkedIn: event.target[6].value,
      photoString: event.target[8].value
    };
  //console.log(mem);
  let response = await axios.post('https://dukeappml.herokuapp.com//user/new', mem);
  console.log(response);
  //console.log("posted");

         
  this.forceUpdate();
};

updateMembers =  async (event) => {
  event.preventDefault();
  var mem = {
    firstName: event.target[0].value, 
    lastName: event.target[1].value, 
    netID: "",
    password: "",
    team: event.target[2].value,
    major: event.target[4].value,
    biography: "",
    graduationYear: "",
    school: event.target[3].value,
    githubLink: event.target[6].value,
    linkedIn: event.target[5].value,
    photoString: event.target[7].value
  };

let URL = 'https://dukeappml.herokuapp.com//user/' + this.state.currentuid;
let response = await axios.put(URL, mem);
//console.log(response);
//console.log("posted");

       
  this.setState({currentfirstName: ""});
  this.setState({currentlastName: ""});
  this.setState({currentteam: ""});
  this.setState({currentmajor: ""});
  this.setState({currentschool: ""});
  this.setState({currentgithublink: ""});
  this.setState({currentnetID: ""});
  this.setState({currentpassword: ""});
  this.setState({currentgraduationYear: ""});
  this.setState({currentphotoString: ""});
  this.setState({currentbiography: ""});
  this.setState({currentuid: ""});
};

deleteMembers = async (event) => {
  event.preventDefault();
 
  console.log(this.state.currentuid);
  let URL = 'https://dukeappml.herokuapp.com//user/' + this.state.currentuid;
   await axios.delete(URL);
  //console.log(response);
}

updateDefaultValues = (i) => {
  console.log("clicked");
  
  this.setState({currentfirstName: this.state.members[i].firstName});
  this.setState({currentlastName: this.state.members[i].lastName});
  this.setState({currentteam: this.state.members[i].team});
  this.setState({currentmajor: this.state.members[i].major});
  this.setState({currentschool: this.state.members[i].school});
  this.setState({currentgithublink: this.state.members[i].githublink});
  this.setState({currentnetID: this.state.members[i].netID});
  this.setState({currentpassword: this.state.members[i].password});
  this.setState({currentgraduationYear: this.state.members[i].graduationYear});
  this.setState({currentphotoString: this.state.members[i].photoString});
  this.setState({currentbiography: this.state.members[i].biography});
  this.setState({currentuid: this.state.members[i].uid});
  



  this.forceUpdate();
  };

getJSX = () => {
  var array = [];
  array.push(
    <thead>
    <tr>
<th>#</th>
<th>First Name</th>
<th>Last Name</th>
</tr>
</thead>
  );
  if (this.state.members.length > 0){
  for(let i = 0;i<this.state.members.length;i++){
      array.push(
          
          <tr onClick = {() => this.updateDefaultValues(i)} >
          
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

correctSubmitButton(){
  if (this.state.currentuid === ""){
  return(
    
      <Button onClick = {this.postMembers}>Add Member</Button>
      
  );}
  else
    return(
      <Row>
        <Col>
      <Button >Edit Member</Button>
        </Col>
        
        <Col>
      <Button onClick = {this.deleteMembers}>Delete Member</Button>
        </Col>
      </Row>
    );
}

correctSubmitMethod(event){
  
event.preventDefault();


  console.log("happened");
  let post = "this.postMembers";
  let update = "{this.updateMembers}";
  let deleted = "this.postMembers";
 
  if ("" === ""){
  return(
    
      update
      
  );}
  else
    return(
      update
    );
}



  /* remove some above stuff once prop thing is fixed*/




  render () {
  return (
    
    <div>
        <Row>
        <Col  md = {6} className = "left">
    <div className = "members">
      
    <h1>Add New Member </h1>
    <Form id = "form" onSubmit = {this.correctSubmitMethod}>
            {/*Text input for First Name*/}
      <FormGroup>
        <Label for="TeamName">First Name </Label>
        <Input type="text" name="firstM" id="FirstName" placeholder="ex. Yasa" defaultValue = {this.state.currentfirstName}  />
      </FormGroup>
            {/*Text input for Last Name*/}
            <FormGroup>
        <Label for="TeamName">Last Name </Label>
        <Input type="text" name="LastM" id="LastName" placeholder="ex. Baig" defaultValue = {this.state.currentlastName}  />
      </FormGroup>
      {/*Text input for NetID*/}
      <FormGroup>
        <Label for="TeamName">NetID </Label>
        <Input type="text" name="NetM" id="NetID" placeholder="ex. ola69" defaultValue = {this.state.currentnetID}  />
      </FormGroup>
            {/*Text input for Team Name*/}
      <FormGroup>
        <Label for="TeamName">Team </Label>
        <Input type="text" name="teamM" id="TeamName" placeholder="ex. Software" defaultValue = {this.state.currentteam}  />
      </FormGroup>
            {/*Text input for School Name*/}
      <FormGroup>
        <Label for="SchoolName">School </Label>
        <Input type="text" name="schoolM" id="SchoolName" placeholder="ex. Undergraduate" defaultValue = {this.state.currentschool}/>
      </FormGroup>
            {/*Text input for Major Names*/}
      <FormGroup>
        <Label for="StudyingMajors">Studying (if multiple use format: Major 1, Major 2, ...)</Label>
        <Input type="text" name="studyingM" id="StudyingMajors" placeholder="ex. Computer Science" defaultValue = {this.state.currentmajor} />
      </FormGroup>
            {/*Text input for LinkedIn Link*/}
      <FormGroup>
        <Label for="LinkedIn">Personal LinkedIn Link </Label>
        <Input type="text" name="linkedinM" id="LinkedIn" placeholder="ex. website.com"  defaultValue = {this.state.currentlinkedIn}/>
      </FormGroup>
            {/*Text input for Github Link*/}
      <FormGroup>
        <Label for="Github">Personal Github Link </Label>
        <Input type="text" name="githubM" id="Github" placeholder="ex. website.com" defaultValue = {this.state.currentgithubLink}/>
      </FormGroup>
                  {/*File input for Cover Photo*/}
      <FormGroup>
        <Label for="CoverPhoto">Cover Photo </Label>
        <Input type="text" name="coverphotoM" id="CoverPhoto" defaultValue = {this.state.currentphotoString}/>
      </FormGroup>
                  {/*Form Submit Button*/}
      <Row>
        <Col>
        {this.correctSubmitButton()}
      </Col>

      </Row>
      

    </Form>
    </div>
    </Col>


    <Col md = {6} className = "right">
    <div>
    <h1>Search Existing Members</h1>

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
    </Col>
    </Row>


    </div>
    
  );
}
}


