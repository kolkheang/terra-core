import React from 'react';
import Grid from 'terra-grid';
import Text from 'terra-text';
import './GridExample.module.scss';

const PatientOverview = () => (
  <Grid>
    <Grid.Row>
      <Grid.Column medium={2}>
        <Text><div>Blood Group</div></Text>
      </Grid.Column>
      <Grid.Column medium={10}>
        <Text><div>O NEG</div></Text>
      </Grid.Column>
    </Grid.Row>
    <Grid.Row>
      <Grid.Column medium={2}>
        <Text><div>Antibodies</div></Text>
      </Grid.Column>
      <Grid.Column medium={10}>
        <Text><div>Anti-K; Anti-K; Anti-S; Anti-S</div></Text>
      </Grid.Column>
    </Grid.Row>
    <Grid.Row>
      <Grid.Column medium={2}>
        <Text><div>Antigens</div></Text>
      </Grid.Column>
      <Grid.Column medium={10}>
        <Text><div>E-; c-; C+</div></Text>
      </Grid.Column>
    </Grid.Row>
    <Grid.Row>
      <Grid.Column medium={2}>
        <Text><div>Specimen Availability</div></Text>
      </Grid.Column>
      <Grid.Column medium={10}>
        <Text><div>No current specimens available.</div></Text>
      </Grid.Column>
    </Grid.Row>
    <Grid.Row>
      <Grid.Column medium={2}>
        <Text><div>Transfusion Requirements</div></Text>
      </Grid.Column>
      <Grid.Column medium={10}>
        <Text><div>Use Leukoreduced; Use Hgb S Negative</div></Text>
      </Grid.Column>
    </Grid.Row>
  </Grid>
);

export default PatientOverview;
