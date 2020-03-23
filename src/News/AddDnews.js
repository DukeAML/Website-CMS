import React from 'react';
import { Button, Form, FormGroup, Label, Input} from 'reactstrap';
import axios from "axios";
import Table from 'react-bootstrap/Table';
import { Container, Row, Col } from 'reactstrap';
import "../Forms.css";


export default class AddDnews extends React.Component {
  

  state = {
    members: this.props.members,
    currenttitle: "",
    currentdescription: "",
    currentsubtitle: "",
    currentauthorFirstName: "",
    currentauthorLastName: "",
    currentpublicationDate: "",
    currentbody: "",
    currentimageLink: "",
    currentuid: "",
    currentbutton: ""
	
};


componentDidMount() {
    this.getNews();
    
}


    
  getNews =  async () => {
    
    let response = await axios.get('https://dukeappml.herokuapp.com//newsentries');
    this.setState({members: response.data}) ;
           
    
};

postNews =  async (event) => {
    event.preventDefault();
    var news = {
      title: event.target[0].value, 
      description: event.target[1].value, 
      subtitle: event.target[2].value,
      authorFirstName: event.target[3].value,
      authorLastName: event.target[4].value,
      publicationDate: event.target[5].value,
      body: event.target[6].value,
      imageLink: event.target[7].value
    };
  //console.log(mem);
  let response = await axios.post('https://dukeappml.herokuapp.com//newsentry/new', news);
  //console.log(response);

  //window.location.reload(false);
  this.setState({currenttitle: ""});
  this.setState({currentdescription: ""});
  this.setState({currentsubtitle: ""});
  this.setState({currentauthorFirstName: ""});
  this.setState({currentauthorLastName: ""});
  this.setState({currentpublicationDate: ""});
  this.setState({currentbody: ""});
  this.setState({currentimageLink: ""});
  this.setState({currentuid: ""});
  window.location.reload();
  
  
};

updateNews =  async (event) => {
  event.preventDefault();
  var news = {
    title: event.target[0].value, 
    description: event.target[1].value, 
    subtitle: event.target[2].value,
    authorFirstName: event.target[3].value,
    authorLastName: event.target[4].value,
    publicationDate: event.target[5].value,
    body: event.target[6].value,
    imageLink: event.target[7].value
  };

let URL = 'https://dukeappml.herokuapp.com//newsentry/' + this.state.currentuid;
let response = await axios.put(URL, news);
//console.log(response);
  this.setState({currenttitle: ""});
  this.setState({currentdescription: ""});
  this.setState({currentsubtitle: ""});
  this.setState({currentauthorFirstName: ""});
  this.setState({currentauthorLastName: ""});
  this.setState({currentpublicationDate: ""});
  this.setState({currentbody: ""});
  this.setState({currentimageLink: ""});
  this.setState({currentuid: ""});
//console.log(response);
//console.log("posted");

window.location.reload();
  

  //window.location.reload(false);
};

deleteNews = async (event) => {
  event.preventDefault();
 
  //console.log(this.state.currentuid);
  let URL = 'https://dukeappml.herokuapp.com//newsentry/' + this.state.currentuid;
  let response = await axios.delete(URL);
  console.log(response);
  //console.log(response);
  //window.location.reload(false);
  this.setState({currenttitle: ""});
  this.setState({currentdescription: ""});
  this.setState({currentsubtitle: ""});
  this.setState({currentauthorFirstName: ""});
  this.setState({currentauthorLastName: ""});
  this.setState({currentpublicationDate: ""});
  this.setState({currentbody: ""});
  this.setState({currentimageLink: ""});
  this.setState({currentuid: ""});

  window.location.reload();
}

updateDefaultValues = (i) => {
  //console.log("clicked");
  
  this.setState({currenttitle: this.state.members[i].title});
  this.setState({currentdescription: this.state.members[i].description});
  this.setState({currentsubtitle: this.state.members[i].subtitle});
  this.setState({currentauthorFirstName: this.state.members[i].authorFirstName});
  this.setState({currentauthorLastName: this.state.members[i].authorLastName});
  this.setState({currentpublicationDate: this.state.members[i].publicationDate});
  this.setState({currentbody: this.state.members[i].body});
  this.setState({currentimageLink: this.state.members[i].imageLink});
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
      <Table>{array}</Table>
  );

};


 correctSubmitMethod = (event) => {
  
    event.preventDefault();
    //console.log("correctsubmit");
    let type = this.state.currentbutton;
    if (type === "post"){
      this.postNews(event);
    }
    else if (type === "put"){
      this.updateNews(event);
    }
    else if (type === "deleted"){
      this.deleteNews(event);
    }

    this.setState({currentbutton: ""});
    this.getNews();



} 

  handleOptionChange = (event) => { 
    this.setState({currentbutton: event.target.value});
    if (event.target.value === "clear"){
      this.setState({currenttitle: ""});
      this.setState({currentdescription: ""});
      this.setState({currentsubtitle: ""});
      this.setState({currentauthorFirstName: ""});
      this.setState({currentauthorLastName: ""});
      this.setState({currentpublicationDate: ""});
      this.setState({currentbody: ""});
      this.setState({currentimageLink: ""});
      this.setState({currentuid: ""});
    }
  }



  /* remove some above stuff once prop thing is fixed*/




  render () {
  return (
    
    <div>
        <Row>
            <Col  md = {6} className = "left">
     
            <div className = "papers">
    <h1>Add DAML News </h1>
    <Form onSubmit = {this.correctSubmitMethod}>
            {/*Text input for Title*/}
      <FormGroup>
        <Label for="Title">Title</Label>
        <Input type="text" name="Title" id="Title" placeholder = "News Entry 1" defaultValue = {this.state.currenttitle}/>
      </FormGroup>
      {/*Text input for Description*/}
      <FormGroup>
        <Label for="Description">Description </Label>
        <Input type="textarea" name="Description" id="Description" placeholder = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum." defaultValue = {this.state.currentdescription}/>
      </FormGroup>
            {/*Text input for Subtitle*/}
      <FormGroup>
        <Label for="Subtitle">Subtitle </Label>
        <Input type="text" name="Subtitle" id="Subtitle" placeholder = "A new news entry." defaultValue = {this.state.currentsubtitle}/>
      </FormGroup>
       {/*Text input for authorFirstName*/}
       <FormGroup>
        <Label for="description">Author First Name </Label>
        <Input type="text" name="firstname" id="firstnameN" placeholder = "Truitt" defaultValue = {this.state.currentauthorFirstName}/>
      </FormGroup>
      {/*Text input for authorLastName*/}
      <FormGroup>
        <Label for="description">Author Last Name </Label>
        <Input type="text" name="lastname" id="lastnameN" placeholder = "Baig" defaultValue = {this.state.currentauthorLastName}/>
      </FormGroup>
            
      {/*Date input for Publication Date*/}
            <FormGroup>
        <Label for="PublicationDate">Publication Date  </Label>
        <Input
          type="text"
          name="date"
          id="exampleDate"
          placeholder="ex. Jan 3, 2000"
          defaultValue = {this.state.currentpublicationDate}
        />
      </FormGroup>
      {/*Textarea input for body*/}
      <FormGroup>
        <Label for="description">Body </Label>
        <Input type="text" name="firstname" id="firstnameN" placeholder = "ex. DAML is a revolutionary organization that was founded by a small man with a big dream to..." defaultValue = {this.state.currentbody}/>
      </FormGroup>

      {/*File input for Picture*/}
      <FormGroup>
        <Label for="relimage">Image Link </Label>
        <Input type="text" name="relimage" id="relimage" placeholder = "www.instagram.com/wyfocht/attractivepicture" defaultValue = {this.state.currentimageLink}/>
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


    <legend>Add, Edit, or Delete News</legend>
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


