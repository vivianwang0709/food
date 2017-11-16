import React from 'react';
import { Form, FormGroup, Button, FormControl, ControlLabel } from 'react-bootstrap';

const ShareBox = (props) => {
  return (<div>
    <Form horizontal>
      <FormGroup
        controlId="formBasicText"
      >
        <ControlLabel>Enter the Name of Resaturant</ControlLabel>
        <FormControl
          type="text"
          placeholder="Enter text"
          defaultValue={props.name}
          onChange={props.onChangeNameInput}
        />
        <FormControl.Feedback />
      </FormGroup>
      <FormGroup
        controlId="formBasicText"
      >
        <ControlLabel>Enter the Description</ControlLabel>
        <FormControl 
          componentClass="textarea" 
          placeholder="textarea" 
          defaultValue={props.description}          
          onChange={props.onChangeDescriptionInput}
        />
        <FormControl.Feedback />
      </FormGroup>
      <FormGroup
        controlId="formBasicText"
      >
        <ControlLabel>Enter Food Image</ControlLabel>
        <FormControl
          type="text"
          placeholder="Enter text"
          defaultValue={props.imagePath}
          onChange={props.onChangeImageUrl}
        />
        <FormControl.Feedback />
      </FormGroup>
      <FormGroup
        controlId="formBasicText"
      >
        <ControlLabel>Enter the Loacion</ControlLabel>
        <FormControl
          type="text"
          placeholder="Enter text"
          defaultValue={props.location}
          onChange={props.onChangeLocation}
        />
        <FormControl.Feedback />
      </FormGroup>
      <Button 
        onClick={props.onRecipeSubmit} 
        bsStyle="success" 
        bsSize="large" 
        block
      >
        Submit
      </Button>
    </Form>
  </div>);
};

export default ShareBox;