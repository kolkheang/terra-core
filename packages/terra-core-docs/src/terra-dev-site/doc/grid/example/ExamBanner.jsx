import React from 'react';
import Grid from 'terra-grid';
import Spacer from 'terra-spacer';
import Text from 'terra-text';

import './GridExample.module.scss';

const ExamBanner = () => (
  <Grid>
    <Grid.Row>
      <Grid.Column tiny={4}>
        <Text>Name of Procedure</Text>
      </Grid.Column>
      <Grid.Column tiny={4}>
        <Text>01-01-2020 00:00am</Text>
      </Grid.Column>
      <Grid.Column tiny={4}>
        <Text>CT-20-01</Text>
      </Grid.Column>
    </Grid.Row>
    <Grid.Row>
      <Grid.Column tiny={4}>
        <Text>Ordered By: Mock Physician</Text>
      </Grid.Column>
      <Grid.Column tiny={4}>
        <Text>Priority: STAT</Text>
      </Grid.Column>
      <Grid.Column tiny={4}>
        <Text>Report Status: Report Status</Text>
      </Grid.Column>
    </Grid.Row>
    <Grid.Row>
      <Grid.Column tiny={8}>
        <Text>Reason for Exam: A good reason</Text>
      </Grid.Column>
      <Grid.Column tiny={4}>
        <Text>Linked: --</Text>
      </Grid.Column>
    </Grid.Row>
  </Grid>
);

export default ExamBanner;
