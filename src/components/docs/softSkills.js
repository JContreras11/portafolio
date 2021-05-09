import React from 'react';
import { Segment, Grid, Header, Image, Button } from "semantic-ui-react"


export const SoftSkills = () => {
    return (
      <>
        <Segment style={{ padding: "8em 0em" }} vertical>
          <Grid container stackable verticalAlign="middle">
            <Grid.Row>
              <Grid.Column textAlign="center">
                <Header as="h3" style={{ fontSize: "2em" }}>
                  Soft Skills
                </Header>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Segment>
      </>
    )
};
