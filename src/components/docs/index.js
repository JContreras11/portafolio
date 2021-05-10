import React, { useState } from 'react';
import { Segment, Grid, Header, Container, Button, Card } from "semantic-ui-react"
import { StaticImage } from "gatsby-plugin-image"
import { SoftSkills } from "./softSkills"
import { TabsContainer } from './tabs';

export const DocsIndex = () => {

    const [selected, toggleSelected] = useState('')
    return (
      <>
        {!!selected ? (
          <TabsContainer />
        ) : (
          <Segment style={{ padding: "8em 0em" }} vertical>
            <Grid container stackable verticalAlign="middle">
              <Grid.Row>
                <Grid.Column textAlign="center" width={8}>
                  <Container
                    className="cursor shadow"
                    onClick={() => toggleSelected("phone")}
                  >
                    <StaticImage
                      src={"../../images/phone.webp"}
                      quality={95}
                      height={420}
                      formats={["AUTO", "WEBP", "AVIF"]}
                      alt="Mobile Apps"
                      style={{ marginBottom: `1.45rem` }}
                    />
                    <Header as="h3">Mobile Apps</Header>
                  </Container>
                </Grid.Column>
                <Grid.Column textAlign="center" floated="right" width={8}>
                  <Container
                    className="cursor shadow"
                    onClick={() => toggleSelected("desktop")}
                  >
                    <StaticImage
                      src="../../images/laptop.png"
                      quality={95}
                      height={500}
                      formats={["AUTO", "WEBP", "AVIF"]}
                      alt="Web Applications"
                      style={{ marginBottom: `1.45rem`, marginTop: "6.45rem" }}
                    />
                    <Header as="h3">Web Applications</Header>
                  </Container>
                </Grid.Column>
              </Grid.Row>
              <Grid.Row className="pt-4">
                <Grid.Column textAlign="center">
                  <Button size="huge">Check Them Out</Button>
                </Grid.Column>
              </Grid.Row>
            </Grid>
          </Segment>
        )}

        <SoftSkills />
      </>
    )
};
