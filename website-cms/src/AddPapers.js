import React from 'react';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

const AddPapers = (props) => {
  return (
    <div>
    <h1>Add New Paper </h1>
    <Form>
            {/*Text input for Authors*/}
      <FormGroup>
        <Label for="Authors">Author(s) (First Last, First Last, ...)</Label>
        <Input type="text" name="Authors" id="Authors" placeholder="ex. Yasa Baig, Luke Truitt" />
      </FormGroup>
            {/*Textarea input for Abstracts*/}
      <FormGroup>
        <Label for="Abstracts">Abstracts </Label>
        <Input type="textarea" name="Abstracts" id="Abstracts" placeholder="You don't need an example." />
      </FormGroup>
            {/*Text input for DOI*/} 
      <FormGroup>
        <Label for="DOI">Digitial Object Identifier (DOI) </Label>
        <Input type="text" name="DOI" id="DOI" placeholder="ex. 10.1080/01972240490951890" />
      </FormGroup>
            {/*Date input for Publication Date*/}
            <FormGroup>
        <Label for="PublicationDate">Publication Date</Label>
        <Input
          type="date"
          name="date"
          id="exampleDate"
          placeholder="date placeholder"
        />
      </FormGroup>
            {/*Textarea input for Link To Full Text*/}
      <FormGroup>
        <Label for="FullLink">Link To Full Text </Label>
        <Input type="text" name="FullLink" id="FullLink" placeholder="ex. http://www.machinelearning.ru/wiki/images/0/07/Langley00crafting.pdf" />
      </FormGroup>
      </Form>
     
            {/*Form Submit Button*/}
      <Button>Add Paper</Button>
      <br></br>
      <br></br>
      <Button>Edit Paper</Button>

    </div>
  );
}

export default AddPapers;