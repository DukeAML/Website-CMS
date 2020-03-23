import React from 'react';
import { Button, Form, FormGroup, Label, Input} from 'reactstrap';
import axios from "axios";
import Table from 'react-bootstrap/Table';
import { Container, Row, Col } from 'reactstrap';
import "../Forms.css";


export default class AddProjects extends React.Component {
  

  state = {
    members: [],
    currenttitle: "",
    currentdescription: "",
    currentsubmitter: "",
    currentsubmitterEmail: "",
    currentimageLink: "",
    currentabstract: "",
    currentuid: "",
    currentbutton: ""
	
};


componentDidMount() {
    this.getProjects();
    
}


    
  getProjects =  async () => {
    
    let response = await axios.get('https://dukeappml.herokuapp.com//projects');
    this.setState({members: response.data}) ;
           
    
};

postProjects =  async (event) => {
    event.preventDefault();
    var pro = {
      title: event.target[0].value, 
      description: event.target[1].value, 
      submitter: event.target[2].value,
      submitterEmail: "",
      imageLink: event.target[4].value,
      abstract: event.target[3].value
    };
  //console.log(mem);
  let response = await axios.post('https://dukeappml.herokuapp.com//project/new', pro);
  console.log(response);
  

  //window.location.reload(false);
  this.setState({currenttitle: ""});
  this.setState({currentdescription: ""});
  this.setState({currentsubmitter: ""});
  this.setState({currentsubmitterEmail: ""});
  this.setState({currentimageLink: ""});
  this.setState({currentabstract: ""});
  this.setState({currentuid: ""});

  window.location.reload();
  
};

updateProjects =  async (event) => {
  event.preventDefault();
  var pro = {
    title: event.target[0].value, 
      description: event.target[1].value, 
      submitter: event.target[2].value,
      submitterEmail: "",
      imageLink: event.target[4].value,
      abstract: event.target[3].value
  };

let URL = 'https://dukeappml.herokuapp.com//project/' + this.state.currentuid;
let response = await axios.put(URL, pro);
  this.setState({currenttitle: ""});
  this.setState({currentdescription: ""});
  this.setState({currentsubmitter: ""});
  this.setState({currentsubmitterEmail: ""});
  this.setState({currentimageLink: ""});
  this.setState({currentabstract: ""});
  this.setState({currentuid: ""});
//console.log(response);
//console.log("posted");

       
window.location.reload();

  //window.location.reload(false);
};

deleteProjects = async (event) => {
  event.preventDefault();
 
  //console.log(this.state.currentuid);
  let URL = 'https://dukeappml.herokuapp.com//project/' + this.state.currentuid;
   await axios.delete(URL);
  //console.log(response);
  //window.location.reload(false);
  this.setState({currenttitle: ""});
  this.setState({currentdescription: ""});
  this.setState({currentsubmitter: ""});
  this.setState({currentsubmitterEmail: ""});
  this.setState({currentimageLink: ""});
  this.setState({currentabstract: ""});
  this.setState({currentuid: ""});

  window.location.reload();
}

updateDefaultValues = (i) => {
  //console.log("clicked");
  
  this.setState({currenttitle: this.state.members[i].title});
  this.setState({currentdescription: this.state.members[i].description});
  this.setState({currentsubmitter: this.state.members[i].submitter});
  this.setState({currentsubmitterEmail: this.state.members[i].submitterEmail});
  this.setState({currentimageLink: this.state.members[i].imageLink});
  this.setState({currentabstract: this.state.members[i].abstract});
  this.setState({currentuid: this.state.members[i].uid});
  



  this.forceUpdate();
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
          
          <tr onClick = {() => this.updateDefaultValues(i)} >
          
          <td>{i+1}</td>
          <td> {this.state.members[i].title} </td>
          <td>{this.state.members[i].description}</td>
          </tr>


      );
  }
}
  
  return(
      <Table  >{array}</Table>
  );

};



 correctSubmitMethod = (event) => {
  
    event.preventDefault();
    //console.log("correctsubmit");
    let type = this.state.currentbutton;
    if (type === "post"){
      this.postProjects(event);
    }
    else if (type === "put"){
      this.updateProjects(event);
    }
    else if (type === "deleted"){
      this.deleteProjects(event);
    }

    this.setState({currentbutton: ""});
    this.getProjects();



} 

  handleOptionChange = (event) => { 
    this.setState({currentbutton: event.target.value});
    if (event.target.value === "clear"){
      this.setState({currenttitle: ""});
      this.setState({currentdescription: ""});
      this.setState({currentsubmitter: ""});
      this.setState({currentsubmitterEmail: ""});
      this.setState({currentimageLink: ""});
      this.setState({currentabstract: ""});
      this.setState({currentuid: ""});


    }
  }



  /* remove some above stuff once prop thing is fixed*/




  render () {
  return (
    
    <div>
        <Row>
        <Col  md = {6} className = "left">
        <div className = "projects">
    <h1>Add New Project </h1>
    <Form onSubmit = {this.correctSubmitMethod}>
            {/*Text input for Project Title*/}
      <FormGroup>
        <Label for="ProjectTitle">Project Title </Label>
        <Input type="text" name="ProjectTitle" id="ProjectTitle" placeholder="ex. fMRI Disease Detection" defaultValue = {this.state.currenttitle}  />
      </FormGroup>
            {/*Textarea input for Project Description*/}
      <FormGroup>
        <Label for="ProjectDescription">Short Project Description </Label>
        <Input type="textarea" name="ProjectDescription" id="ProjectDescription" placeholder="ex. Using modern image processing technology to better predict neurological illness." defaultValue = {this.state.currentdescription} />
      </FormGroup>
            {/*Text input for Team Member Names*/}
      <FormGroup>
        <Label for="TeamMembers">Team Members (First Last, First Last, ...)</Label>
        <Input type="text" name="TeamMembers" id="TeamMembers" placeholder="ex. Yasa Baig, Luke Truitt" defaultValue = {this.state.currentsubmitter} />
      </FormGroup>
            {/*Textarea input for Abstract*/}
      <FormGroup>
        <Label for="Abstract">Abstract </Label>
        <Input type="textarea" name="Abstract" id="Abstract" placeholder="You don't need an example." defaultValue = {this.state.currentabstract}  />
      </FormGroup>
         {/*File input for relevant image*/}
      <FormGroup>
        <Label for="RelevantImage">Image Relevant to Project </Label>
        <Input type="text" name="RelevantImage" id="RelevantImage" placeholder="photo.com" defaultValue = {this.state.currentimageLink} />
      </FormGroup>

           {/*Form Submit Button*/}
      <Row>
        <Col>
        <Button className = "button">Submit</Button>
      </Col>

      </Row>
      </Form>
           
            
    </div>
    </Col>


    <Col md = {6} className = "right">
    <div>
    <h1>Search Existing Projects</h1>

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


    <legend>Add, Edit, or Delete a Project</legend>
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


