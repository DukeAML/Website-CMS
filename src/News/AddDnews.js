import React from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';

const AddDnews = (props) => {
  return (
    <div className = "papers">
    <h1>Add DAML News </h1>
    <Form>
            {/*Text input for Title*/}
      <FormGroup>
        <Label for="Title">Title</Label>
        <Input type="text" name="Title" id="Title" placeholder />
      </FormGroup>
            {/*Text input for Subtitle*/}
      <FormGroup>
        <Label for="Subtitle">Subtitle </Label>
        <Input type="text" name="Subtitle" id="Subtitle" placeholder />
      </FormGroup>
       {/*Textarea input for Description*/}
       <FormGroup>
        <Label for="description">Description </Label>
        <Input type="textarea" name="descripton" id="description" placeholder/>
      </FormGroup>
            
      {/*Date input for Publication Date*/}
            <FormGroup>
        <Label for="PublicationDate"> Date  </Label>
        <Input
          type="date"
          name="date"
          id="exampleDate"
          placeholder="date placeholder"
        />
      </FormGroup>
      {/*File input for Picture*/}
      <FormGroup>
        <Label for="relimage">Relevant Image </Label>
        <Input type="file" name="relimage" id="relimage" />
      </FormGroup>
      </Form>
     
            {/*Form Submit Button*/}
      <Button>Add DAML News</Button>

    </div>
  );
}

export default AddDnews;