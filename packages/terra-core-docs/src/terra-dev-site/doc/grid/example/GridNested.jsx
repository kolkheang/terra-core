import React from 'react';
import Grid from 'terra-grid';
import './GridExample.module.scss';

const GridNested = () => (
  <Grid>
    <Grid.Row>
      <Grid.Column tiny={4}>
        <div className="terra-grid-example" tabindex="0">4 Columns</div>
      </Grid.Column>
      <Grid.Column tiny={8}>
        <div className="terra-grid-example" tabindex="0">8 Columns</div>
        <Grid.Row>
          <Grid.Column tiny={5}>
            <div className="terra-grid-example" tabindex="0">5 Nested Columns</div>
          </Grid.Column>
          <Grid.Column tiny={7}>
            <div className="terra-grid-example" tabindex="0">7 Nested Columns</div>
          </Grid.Column>
        </Grid.Row>
      </Grid.Column>
    </Grid.Row>
  </Grid>
);

export default GridNested;
