import React from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import axios from 'axios';

const AddMembers = (props) => {
  function logsomething() {
    console.log(document.getElementById("form"));
}

/* const testing = axios.get('https://dukeappml.herokuapp.com//users') 
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  }); */

  
  return (
    <div className = "members">
    <h1>Add New Member </h1>
    <Form id = "form">
            {/*Text input for Team Name*/}
      <FormGroup>
        <Label for="TeamName">Team </Label>
        <Input type="text" name="Team" id="TeamName" placeholder="ex. Software" defaultValue = "wyatt" />
      </FormGroup>
            {/*Text input for School Name*/}
      <FormGroup>
        <Label for="SchoolName">School </Label>
        <Input type="text" name="school" id="SchoolName" placeholder="ex. Undergraduate" />
      </FormGroup>
            {/*Text input for Major Names*/}
      <FormGroup>
        <Label for="StudyingMajors">Studying (if multiple use format: Major 1, Major 2, ...)</Label>
        <Input type="text" name="studying" id="StudyingMajors" placeholder="ex. Computer Science" />
      </FormGroup>
            {/*Text input for LinkedIn Link*/}
      <FormGroup>
        <Label for="LinkedIn">Personal LinkedIn Link </Label>
        <Input type="text" name="linkedin" id="LinkedIn" placeholder="ex. website.com" />
      </FormGroup>
            {/*Text input for Github Link*/}
      <FormGroup>
        <Label for="Github">Personal Github Link </Label>
        <Input type="text" name="github" id="Github" placeholder="ex. website.com" />
      </FormGroup>
                  {/*File input for Cover Photo*/}
      <FormGroup>
        <Label for="CoverPhoto">Cover Photo </Label>
        <Input type="file" name="CoverPhoto" id="CoverPhoto" />
      </FormGroup>
                  {/*Form Submit Button*/}
      <Button  onSubmit>Add Member</Button>

    </Form>
    </div>
  );
}

export default AddMembers;