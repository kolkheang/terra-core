import React from 'react';
import Grid from 'terra-grid';
import Spacer from 'terra-spacer';
import ContentContainer from 'terra-content-container';
import IconError from 'terra-icon/lib/icon/IconError';

import './GridExample.module.scss';

const DuplicatePatientWarning = () => (
  <div className="duplicate-patient-modal-body">
    <ContentContainer className="headerPadding" id="WARNING_CONTENT">
      <Spacer margin="medium">
        <Grid>
          <Grid.Row>
            <Grid.Column tiny={6}>
              <div id="DUPLICATE_PATIENT_WARNING_HEADER" tabIndex="0">
                <IconError height="1em" width="1em" />
                <b>
                  {' '}
                  {'Patient is already added to session patient list'}
                </b>
                <Spacer paddingBottom="large" />
              </div>
            </Grid.Column>
          </Grid.Row>
          <Grid.Row>
            <Grid.Column tiny={6}>
              <div id="DUPLICATE_PATIENT_WARNING_TEXT" tabIndex="0">
                {' '}
                {'Try searching for a different patient or cancel to return to the group.'}
              </div>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Spacer>
    </ContentContainer>
  </div>
);

export default DuplicatePatientWarning;
