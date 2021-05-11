import React from 'react';
import { Segment, Grid, Header, Icon, Image, Message } from "semantic-ui-react"

export const Hiring = () => {

    console.log(`
      ...
  .,ok000Oxc.     'oxo,  .'
,kWMMMMMMMMXo;. ;KMWMX: lK,
,0MMMMMMMMMMMWNd'xMMMMMO;xWl
lWMMMMMMMMMMMMM0lOMMMMMKoOMo
cNMMMMMMMMMMMMMk:OMMMMM0lkWl
.dNMMMMMMMMMMKx; lWMMMWd.dN:
  ;kXWMMMMWKd'   .oXWXx. ;o.
    .;ccc:,.       .,.
    `)
    console.log(`this message: We're hiring! https://medium.com/jobs-at-medium/work-at-medium-959d1a85284e`);
    return (
      <>
        <Segment style={{ padding: "0em" }} vertical>
          <Grid celled="internally" columns="equal" stackable>
            <Grid.Row textAlign="center">
              <Grid.Column style={{ paddingBottom: "5em", paddingTop: "5em" }}>
                <Message positive>

                  <Header as="h2" icon textAlign="center">
                    <Icon name="users" circular />
                    <Header.Content>Status:</Header.Content>
                  </Header>
                  <p style={{ fontSize: "1.33em" }}>#OPENTOWORK</p>
                  <p>If you are a person from <strong>Medium</strong>, i want you to know that the inspiration for this page is thanks to the hiring link in the javascript console</p>
                  <p>I <i class="icon heart"></i> that kind of details <i class="icon terminal"></i> ;)</p>

                </Message>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Segment>
      </>
    )
};
