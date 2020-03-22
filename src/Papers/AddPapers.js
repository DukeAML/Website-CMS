import React from 'react';
import { Button, Form, FormGroup, Label, Input} from 'reactstrap';
import axios from "axios";
import Table from 'react-bootstrap/Table';
import { Container, Row, Col } from 'reactstrap';
import "../Forms.css";


export default class AddPapers extends React.Component {
  

  state = {
    members: [],
    currenttitle: "",
    currentabstract: "",
    currentauthorFirstName: "",
    currentauthorLastName: "",
    currentpublicationDate: "",
    currentdoi: "",
    currenturl: "",
    
    currentuid: "",
    currentbutton: ""
	
};


componentDidMount() {
    this.getPapers();
    
}


    
  getPapers =  async () => {
    
    let response = await axios.get('https://dukeappml.herokuapp.com/papers');
    this.setState({members: response.data}) ;
           
    
};

postPapers =  async (event) => {
    event.preventDefault();
    var pap = {
      title: event.target[0].value, 
      abstract: event.target[1].value, 
      authorFirstName: event.target[2].value,
      authorLastName: event.target[3].value,
      publicationDate: event.target[4].value,
      doi: event.target[5].value,
      url: event.target[6].value
    };
  //console.log(mem);
  let response = await axios.post('https://dukeappml.herokuapp.com//paper/new', pap);
  console.log(response);

  //window.location.reload(false);
  this.setState({currentabstract: ""});
  this.setState({currenttitle: ""});
  this.setState({currentauthorLastName: ""});
  this.setState({currentauthorFirstName: ""});
  this.setState({currentpublicationDate: ""});
  this.setState({currentgithublink: ""});
  this.setState({currentdoi: ""});
  this.setState({currenturl: ""});
  this.setState({currentuid: ""});

  
  
};

updatePapers =  async (event) => {
  event.preventDefault();
  var pap = {
      title: event.target[0].value, 
      abstract: event.target[1].value, 
      authorFirstName: event.target[2].value,
      authorLastName: event.target[3].value,
      publicationDate: event.target[4].value,
      doi: event.target[5].value,
      url: event.target[6].value
  };

let URL = 'https://dukeappml.herokuapp.com//paper/' + this.state.currentuid;
let response = await axios.put(URL, pap);
  this.setState({currentabstract: ""});
  this.setState({currenttitle: ""});
  this.setState({currentauthorLastName: ""});
  this.setState({currentauthorFirstName: ""});
  this.setState({currentpublicationDate: ""});
  this.setState({currentgithublink: ""});
  this.setState({currentdoi: ""});
  this.setState({currenturl: ""});
  this.setState({currentuid: ""});

       
  

  //window.location.reload(false);
};

deletePapers = async (event) => {
  event.preventDefault();
 
  //console.log(this.state.currentuid);
  let URL = 'https://dukeappml.herokuapp.com//paper/' + this.state.currentuid;
   let response = await axios.delete(URL);
  //console.log(response);
  //window.location.reload(false);
  this.setState({currentabstract: ""});
  this.setState({currenttitle: ""});
  this.setState({currentauthorLastName: ""});
  this.setState({currentauthorFirstName: ""});
  this.setState({currentpublicationDate: ""});
  this.setState({currentgithublink: ""});
  this.setState({currentdoi: ""});
  this.setState({currenturl: ""});
  this.setState({currentuid: ""});
}

updateDefaultValues = (i) => {
  //console.log("clicked");
  
  this.setState({currenttitle: this.state.members[i].title});
  this.setState({currentabstract: this.state.members[i].abstract});
  this.setState({currentauthorFirstName: this.state.members[i].authorFirstName});
  this.setState({currentauthorLastName: this.state.members[i].authorLastName});
  this.setState({currentpublicationDate: this.state.members[i].publicationDate});
  this.setState({currentdoi: this.state.members[i].doi});
  this.setState({currenturl: this.state.members[i].url});
  this.setState({currentuid: this.state.members[i].uid});
  



  this.forceUpdate();
  };

getJSX = () => {
  var array = [];
  array.push(
      <thead>
          <tr >
          <th>#</th>
          <th>Title</th>
          <th>Abstract</th>
          
          </tr>
      </thead>
  );
  if (this.state.members.length > 0){
  for(let i = 0;i<this.state.members.length;i++){
      array.push(
          
          <tr onClick = {() => this.updateDefaultValues(i)}>
          <td>{i+1}</td>
          <td> {this.state.members[i].title} </td>
          <td>{this.state.members[i].abstract}</td>
          </tr>


      );
  }
}
  
  return(
      <div>{array}</div>
  );

};


 correctSubmitMethod = (event) => {
  
    event.preventDefault();
    //console.log("correctsubmit");
    let type = this.state.currentbutton;
    if (type === "post"){
      this.postPapers(event);
    }
    else if (type === "put"){
      this.updatePapers(event);
    }
    else if (type === "deleted"){
      this.deletePapers(event);
    }

    this.setState({currentbutton: ""});
    this.getPapers();



} 

  handleOptionChange = (event) => { 
    this.setState({currentbutton: event.target.value});
  }



  /* remove some above stuff once prop thing is fixed*/




  render () {
  return (
    
    <div>
        <Row>
        <Col  md = {6} className = "left">
        <div className = "papers">
    <h1>Add New Paper </h1>
    <Form onSubmit = {this.correctSubmitMethod}>
       {/*Text input for Title*/}
       <FormGroup>
        <Label for="title">Title </Label>
        <Input type="text" name="title" id="title" placeholder="ex. A Qualitative Study on Why Yasa Baig has No Girlfriend" defaultValue = {this.state.currenttitle}/>
      </FormGroup>
            {/*Text input for Authors*/}
      <FormGroup>
        <Label for="Authorsf">Author First Name </Label>
        <Input type="text" name="Authorsf" id="Authorsf" placeholder="ex. Yasa" defaultValue = {this.state.currentauthorFirstName}/>
      </FormGroup>
      <FormGroup>
        <Label for="Authorsf">Author Last Name</Label>
        <Input type="text" name="Authorsl" id="Authorsl" placeholder="ex.Truit" defaultValue = {this.state.currentauthorLastName}/>
      </FormGroup>
            {/*Textarea input for Abstracts*/}
      <FormGroup>
        <Label for="Abstracts">Abstracts </Label>
        <Input type="textarea" name="Abstracts" id="Abstracts" placeholder="You don't need an example." defaultValue = {this.state.currentabstract} />
      </FormGroup>
            {/*Text input for DOI*/} 
      <FormGroup>
        <Label for="DOI">Digitial Object Identifier (DOI) </Label>
        <Input type="text" name="DOI" id="DOI" placeholder="ex. 10.1080/01972240490951890" defaultValue = {this.state.currentdoi}/>
      </FormGroup>
            {/*Date input for Publication Date*/}
            <FormGroup>
        <Label for="PublicationDate">Publication Date</Label>
        <Input
          type="text"
          name="date"
          id="exampleDate"
          placeholder="ex. Jan 3, 2000"
          defaultValue = {this.state.currentpublicationDate}
        />
      </FormGroup>
            {/*Textarea input for Link To Full Text*/}
      <FormGroup>
        <Label for="FullLink">Link To Full Text </Label>
        <Input type="text" name="FullLink" id="FullLink" placeholder="ex. http://www.machinelearning.ru/wiki/images/0/07/Langley00crafting.pdf" defaultValue = {this.state.currenturl}/>
      </FormGroup>

      {/*Form Submit Button*/}
      <Row>
        <Col>
        <Button>Submit</Button>
      </Col>

      </Row>
      </Form>
     
       

    </div>
       </Col>


    <Col md = {6} className = "right">
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


    <legend>Add, Edit, or Delete a Paper</legend>
                 {/*File input for Type of Action*/}
        <FormGroup>
        <Label for="post">
        <Input type="radio" name="typeM" id="AddUpdateDelete" value = "post" onChange = {this.handleOptionChange} />
          Add 
        </Label>
        
      </FormGroup>
      {/*File input for Type of Action*/}
      <FormGroup>
      <Label for="put">
      <Input type="radio" name="typeM" id="AddUpdateDelete" value = "put" onChange = {this.handleOptionChange} />
        Edit 
      </Label>
      
    </FormGroup>
        {/*File input for Type of Action*/}
        <FormGroup>
        <Label for="deleted">
        <Input type="radio" name="typeM" id="AddUpdateDelete" value = "deleted" onChange = {this.handleOptionChange} />
          Delete 
          </Label>
        
      </FormGroup>
    </Col>
    </Row>


    </div>
    
  );
}
}


