import React from 'react';
import {
  Segment,
  Grid,
  Header,
  Image,
  Button,
  Item,
  Label,
  Feed,
  Icon
} from "semantic-ui-react"

export const ReleasesIndex = () => {
    return (
      <>
        <Segment style={{ padding: "8em 0em" }} vertical>
          <Grid
            container
            stackable
            verticalAlign="middle"
          >
            <Grid.Column textAlign="center" className="mv-2" width={16}>
              <Header as="h3" style={{ fontSize: "2em" }}>
                Work Experience
              </Header>
            </Grid.Column>
          </Grid>
          <Grid
            container
            stackable
            verticalAlign="middle"
            className="divided items"
          >
            <Item className="row ph-3">
              <Grid.Column width={2}>
                <Feed.Date className="date-releases">
                  <Icon name="calendar outline" size="small" style={{margin:0}} />
                  <br />
                  29/04/2019 – 27/03/2021
                </Feed.Date>
              </Grid.Column>
              <Grid.Column width={14}>
                <Item.Content>
                  <Header as="h2">FullStack Developer Lead</Header>
                  <Item.Description>
                    <Feed>
                      <Feed.Event>
                        <Feed.Label>
                          <img src="https://media-exp1.licdn.com/dms/image/C4E0BAQEQ-6f0Fxpfdg/company-logo_200_200/0/1575229792128?e=1628726400&v=beta&t=pZgkDC6x5G4PVTVjW8pf0EbaZM6Bs1Te1pH4w7OCeQ4" />
                        </Feed.Label>
                        <Feed.Content>
                          <Feed.Summary>
                            <Feed.User>Street Open Data Lab</Feed.User>
                            <Feed.Date>– Bogotá, Colombia</Feed.Date>
                          </Feed.Summary>
                        </Feed.Content>
                      </Feed.Event>
                    </Feed>
                    <p className="text-justify mv-2">
                      Street Open Data Lab Dev research and Consultancy is a
                      company specialized in the development of custom
                      technology, with the aim of providing solutions to
                      different business needs.
                    </p>
                  </Item.Description>
                  <Item.Extra>
                    <Label icon="react" content="React" />
                    <Label icon="react" content="React Native" />
                    <Label icon="diamond" content="Ruby on Rails" />
                    <Label icon="aws" content="AWS" />
                  </Item.Extra>
                </Item.Content>
              </Grid.Column>
            </Item>
          </Grid>
        </Segment>
      </>
    )
};
