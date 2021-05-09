import React from 'react';
import { Segment, Grid, Header, Image } from "semantic-ui-react"

export const Hiring = () => {
    return (
      <>
        <Segment style={{ padding: "0em" }} vertical>
          <Grid celled="internally" columns="equal" stackable>
            <Grid.Row textAlign="center">
              <Grid.Column style={{ paddingBottom: "5em", paddingTop: "5em" }}>
                <Header as="h3" style={{ fontSize: "2em" }}>
                  current status: hire me
                </Header>
                <p style={{ fontSize: "1.33em" }}>
                  "Please"
                </p>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Segment>
      </>
    )
};
