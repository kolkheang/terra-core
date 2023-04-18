import React from 'react';
import Grid from 'terra-grid';
import Spacer from 'terra-spacer';
import ContentContainer from 'terra-content-container';
import SectionHeader from 'terra-section-header';
import Text from 'terra-text';
import './GridExample.module.scss';

const PatientOverview = () => (
  <Grid>
    <Grid.Row>
      <Grid.Column medium={2}>
        <Text><div tabindex="0">Blood Group</div></Text>
      </Grid.Column>
      <Grid.Column medium={10}>
        <Text><div tabindex="0">O NEG</div></Text>
      </Grid.Column>
    </Grid.Row>
    <Grid.Row>
      <Grid.Column medium={2}>
        <Text><div tabindex="0">Antibodies</div></Text>
      </Grid.Column>
      <Grid.Column medium={10}>
        <Text><div tabindex="0">Anti-K; Anti-K; Anti-S; Anti-S</div></Text>
      </Grid.Column>
    </Grid.Row>
    <Grid.Row>
      <Grid.Column medium={2}>
        <Text><div tabindex="0">Antigens</div></Text>
      </Grid.Column>
      <Grid.Column medium={10}>
        <Text><div tabindex="0">E-; c-; C+</div></Text>
      </Grid.Column>
    </Grid.Row>
    <Grid.Row>
      <Grid.Column medium={2}>
        <Text><div tabindex="0">Specimen Availability</div></Text>
      </Grid.Column>
      <Grid.Column medium={10}>
        <Text><div tabindex="0">No current specimens available.</div></Text>
      </Grid.Column>
    </Grid.Row>
    <Grid.Row>
      <Grid.Column medium={2}>
        <Text><div tabindex="0">Transfusion Requirements</div></Text>
      </Grid.Column>
      <Grid.Column medium={10}>
        <Text><div tabindex="0">Use Leukoreduced; Use Hgb S Negative</div></Text>
      </Grid.Column>
    </Grid.Row>
  </Grid>
);

export default PatientOverview;
