import React from 'react';
import Grid from 'terra-grid';
import Select from 'terra-form-select';
import Input from 'terra-form-input';

const GridFormFields = () => (
  <Grid>
    <Grid.Row>
      <Grid.Column tiny={12} small={2} medium={2} large={2}>
        <div><b>Enter your name:</b></div>
      </Grid.Column>
      <Grid.Column tiny={12} small={10} medium={10} large={10}>
        <Input name="name" id="name" ariaLabel="Name" />
      </Grid.Column>
    </Grid.Row>
    <Grid.Row>
      <Grid.Column tiny={12} small={2} medium={2} large={2}>
        <div><b>Favorite color(s):</b></div>
      </Grid.Column>
      <Grid.Column tiny={12} small={10} medium={10} large={10}>
        <Select placeholder="Select your favorite colors" variant="multiple">
          <Select.Option value="blue" display="Blue" />
          <Select.Option value="green" display="Green" />
          <Select.Option value="purple" display="Purple" />
          <Select.Option value="red" display="Red" />
          <Select.Option value="violet" display="Violet" />
        </Select>
      </Grid.Column>
    </Grid.Row>
  </Grid>
);

export default GridFormFields;
