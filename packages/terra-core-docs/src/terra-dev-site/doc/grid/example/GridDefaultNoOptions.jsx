import React from 'react';
import Grid from 'terra-grid';
import './GridExample.module.scss';

const GridDefaultNoOptions = () => (
  <Grid>
    <Grid.Row>
      <Grid.Column>
        <div className="terra-grid-example" tabindex="0">Span all columnn content</div>
      </Grid.Column>
    </Grid.Row>
  </Grid>
);

export default GridDefaultNoOptions;
