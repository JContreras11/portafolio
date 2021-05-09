import React from 'react';
import { Segment, Grid, Header, Image, Button } from "semantic-ui-react"

export const ReleasesIndex = () => {
    return (
      <>
        <Segment style={{ padding: "8em 0em" }} vertical>
          <Grid container stackable verticalAlign="middle">
            <Grid.Row>
              <Grid.Column width={12}>
                <Header as="h3" style={{ fontSize: "2em" }}>
                  Releases Index
                </Header>
                <p style={{ fontSize: "1.33em" }}>
                  We can give your company superpowers to do things that they
                  never thought possible. Let us delight your customers and
                  empower your needs... through pure data analytics.
                </p>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Segment>

      </>
    )
};
