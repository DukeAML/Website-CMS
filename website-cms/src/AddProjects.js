import React from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';

const AddProjects = (props) => {
  return (
    <div className = "projects">
    <h1>Add New Project </h1>
    <Form>
            {/*Text input for Project Title*/}
      <FormGroup>
        <Label for="ProjectTitle">Project Title </Label>
        <Input type="text" name="ProjectTitle" id="ProjectTitle" placeholder="ex. fMRI Disease Detection" />
      </FormGroup>
            {/*Textarea input for Project Description*/}
      <FormGroup>
        <Label for="ProjectDescription">Short Project Description </Label>
        <Input type="textarea" name="ProjectDescription" id="ProjectDescription" placeholder="ex. Using modern image processing technology to better predict neurological illness." />
      </FormGroup>
            {/*Text input for Team Member Names*/}
      <FormGroup>
        <Label for="TeamMembers">Team Members (First Last, First Last, ...)</Label>
        <Input type="text" name="TeamMembers" id="TeamMembers" placeholder="ex. Yasa Baig, Luke Truitt" />
      </FormGroup>
            {/*Textarea input for Abstract*/}
      <FormGroup>
        <Label for="Abstract">Abstract  </Label>
        <Input type="textarea" name="Abstract" id="Abstract" placeholder="You don't need an example." />
      </FormGroup>
      </Form>
            {/*File input for relevant image*/}
      <FormGroup>
        <Label for="RelevantImage">Image Relevant to Project </Label>
        <Input type="file" name="RelevantImage" id="RelevantImage" />
      </FormGroup>
            {/*Form Submit Button*/}
      <Button>Add Project</Button>
      <br></br>
      <br></br>
      <Button>Edit Project</Button>
    </div>
  );
}

export default AddProjects;