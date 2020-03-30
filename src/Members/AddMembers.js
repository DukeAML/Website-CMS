import React from 'react';
import { Button, Form, FormGroup, Label, Input} from 'reactstrap';
import axios from "axios";
import Table from 'react-bootstrap/Table';
import { Row, Col } from 'reactstrap';
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
    currentuid: "",
    currentbutton: "",
    currentfilename: "",
    buttontext: "Submit",
    fileuploaded: false
	
};

Uploaded = () => {
  if (this.state.fileuploaded){
    return (
      <div>
    <span >{this.state.currentfilename}</span><br/><br/>
    </div>
    )
  }
}


componentDidMount() {
    this.getMembers();
    
}


    
  getMembers =  async () => {
    
    let response = await axios.get('https://dukeappml.herokuapp.com//users');
    this.setState({members: response.data}) ;
           
    
};

imageUpload =  async (e) => {
   
  if(e.target[9].files[0] === undefined){ return "https://www.dukeaml.com/static/media/profile-placeholder.d371ccb1.svg"};
  const files = e.target[9].files
  const data = new FormData()
  data.append('file', files[0])
  data.append('upload_preset', 'damlImages')
  this.setState({loading: true});
  this.setState({currenturl: "Loading URL..."})
  const res = await fetch(
    'https://api.cloudinary.com/v1_1/dndwfzjzr/image/upload', 
    {
      method: 'POST',
      body: data
  }
  ) 
  const file = await res.json()
  //console.log(file);
  this.setState({currenturl: "https://res.cloudinary.com/dndwfzjzr/" + file.public_id});
  return ("https://res.cloudinary.com/dndwfzjzr/" + file.public_id);
  
}

postMembers =  async (event) => {
    event.preventDefault();
    event.persist();
    this.setState({buttontext: "Loading..."});
    let photoLink = await this.imageUpload(event);
    
    //console.log(photoLink);
   /*  console.log(event.target[0].value);
    console.log(event.target[1].value);
    console.log(event.target[2].value);
    console.log(event.target[3].value);
    console.log(event.target[4].value);
    console.log(event.target[5].value);
    console.log(event.target[6].value);
    console.log(event.target[7].value);
    console.log(event.target[8].value);
    console.log(event.target[9].value); */
    var mem = {
      firstName: event.target[0].value, 
      lastName: event.target[1].value, 
      netID: event.target[2].value,
      password: "",
      team: event.target[3].value,
      major: event.target[5].value,
      biography: event.target[8].value,
      graduationYear: "",
      school: event.target[4].value,
      githubLink: event.target[7].value,
      linkedIn: event.target[6].value,
      photoString: photoLink
    };
  //console.log(mem);
  let response = await axios.post('https://dukeappml.herokuapp.com//user/new', mem);
  console.log(response);
  

  //window.location.reload(false);
  this.setState({currentfirstName: ""});
  this.setState({currentlastName: ""});
  this.setState({currentteam: ""});
  this.setState({currentmajor: ""});
  this.setState({currentschool: ""});
  this.setState({currentgithublink: ""});
  this.setState({currentnetID: ""});
  this.setState({currentpassword: ""});
  //console.log("reached");
  this.setState({currentgraduationYear: ""});
  this.setState({currentphotoString: ""});
  this.setState({currentbiography: ""});
  this.setState({currentuid: ""});
  window.location.reload();
  
  
};

updateMembers =  async (event) => {
  event.preventDefault();
  event.persist();
  this.setState({buttontext: "Loading..."});
  let photoLink = this.state.currentphotoString;
  if(event.target[9].files[0] !== undefined){
    photoLink = await this.imageUpload(event);
  }
  
    
  
  var mem = {
    firstName: event.target[0].value, 
    lastName: event.target[1].value, 
    netID: event.target[2].value,
    password: "",
    team: event.target[3].value,
    major: event.target[5].value,
    biography: event.target[8].value,
    graduationYear: "",
    school: event.target[4].value,
    githubLink: event.target[7].value,
    linkedIn: event.target[6].value,
    photoString: photoLink
  };

let URL = 'https://dukeappml.herokuapp.com//user/' + this.state.currentuid;
let response = await axios.put(URL, mem);
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
console.log(response);
//console.log("successful update");

       
window.location.reload();

  
};

deleteMembers = async (event) => {
  event.preventDefault();
  this.setState({buttontext: "Loading..."});
 
  //console.log(this.state.currentuid);
  let URL = 'https://dukeappml.herokuapp.com//user/' + this.state.currentuid;
  let response = await axios.delete(URL);
  //console.log(response);
  //window.location.reload(false);
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
  console.log(response);
  

  window.location.reload();
}

updateDefaultValues = (i) => {
  //console.log("clicked");
  
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
  this.setState({currentlinkedIn: this.state.members[i].linkedIn});
  this.setState({currentuid: this.state.members[i].uid});
  



  this.forceUpdate();
  };

getJSX = () => {
  var array = [];
  array.push(
    <thead key = {"theadmembers"}>
    <tr >
<th >#</th>
<th >First Name</th>
<th >Last Name</th>
</tr>
</thead>
  );
  if (this.state.members.length > 0){
  for(let i = 0;i<this.state.members.length;i++){
      array.push(
          
          <tr  onClick = {() => this.updateDefaultValues(i)} >
          
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

/* correctSubmitButton(){
  if (this.state.currentuid === ""){
  return(
    
      <Button onClick = {this.setState({currentbutton: "post"})}>Add Member</Button>
      
  );}
  else
    return(
      <Row>
        <Col>
      <Button onClick = {this.setState({currentbutton: "put"})}>Edit Member</Button>
        </Col>
        
        <Col>
      <Button onClick = {this.setState({currentbutton: "deleted"})}>Delete Member</Button>
        </Col>
      </Row>
    );
} */

 correctSubmitMethod = (event) => {
  
event.preventDefault();
//console.log("correctsubmit");
let type = this.state.currentbutton;
if (type === "post"){
  this.postMembers(event);
}
else if (type === "put"){
  this.updateMembers(event);
}
else if (type === "deleted"){
  this.deleteMembers(event);
}

this.setState({currentbutton: ""});
this.getMembers();




} 

  handleOptionChange = (event) => { 
    this.setState({currentbutton: event.target.value});
    if (event.target.value === "clear"){
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
      this.setState({currentfilename: ""});
      this.setState({fileuploaded: false});
  }
}

handleFile = (event) => { 
  this.setState({currentfilename: event.target.value});
  this.setState({fileuploaded: true});
  
  
}

handleTeamChange = (event) => { 
  this.setState({currentteam: event.target.value});
  
}



  /* remove some above stuff once prop thing is fixed*/




  render () {
  return (
    
    <div>
        <Row>
        <Col  md = {6} className = "left">
    <div className = "members">
      
    <h1  >Add New Member </h1>
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
        <Label for="teamname">Team</Label>
        <Input type="select" name="select" id="teamname" value = {this.state.currentteam} onChange = {this.handleTeamChange}>
          <option value = "DS">DS</option>
          <option value = "PS">PS</option>
          <option value = "CRM">CRM</option>
        </Input>
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
        <Label for="CoverPhoto">Short Biography </Label>
        <Input type="textarea" name="bioM" id="shortbio" placeholder = "Yasa Baig is..." defaultValue = {this.state.currentbiography}/>
      </FormGroup>
                  {/*File input for Cover Photo*/}
      <FormGroup>
        <Label for="CoverPhoto">Cover Photo </Label>
        <Input onChange = {this.handleFile} type="file" name="coverphotoM" id="CoverPhoto" placeholder = "instagram.com/wyfocht/hotBeachPicture" defaultValue = {this.state.currentphotoString}/>
      </FormGroup>
      {this.Uploaded()}
       
      
      
                  {/*Form Submit Button*/}
      <Row>
        <Col>
        <Button className="button">{this.state.buttontext}</Button>
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


    <legend>Add, Edit, or Delete a Member</legend>
                 {/*File input for Type of Action*/}
        <FormGroup>
        <Label for="CoverPhoto">
        <Input type="radio" name="typeM" id="AddUpdateDelete" value = "post" onChange = {this.handleOptionChange} />
          Add 
        </Label>
        
      </FormGroup>
      {/*File input for Type of Action*/}
      <FormGroup>
      <Label for="CoverPhoto">
      <Input type="radio" name="typeM" id="AddUpdateDelete" value = "put" onChange = {this.handleOptionChange} />
        Edit 
      </Label>
      
    </FormGroup>
        {/*File input for Type of Action*/}
        <FormGroup>
        <Label for="CoverPhoto">
        <Input type="radio" name="typeM" id="AddUpdateDelete" value = "deleted" onChange = {this.handleOptionChange} />
          Delete 
          </Label>
        
      </FormGroup>

       {/*File input for Type of Action*/}
       <FormGroup>
        <Label for="CoverPhoto">
        <Input type="radio" name="typeM" id="AddUpdateDelete" value = "clear" onChange = {this.handleOptionChange} />
          Clear Entries 
          </Label>
        
      </FormGroup>
    </Col>
    </Row>


    </div>
    
  );
}
}


