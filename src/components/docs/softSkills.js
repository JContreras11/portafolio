import React, { useState } from 'react';
import {
  Segment,
  Grid,
  Header,
  Card,
  Icon,
  Dimmer,
  Image,
  Popup,
} from "semantic-ui-react"

import { StaticImage } from "gatsby-plugin-image"

const users = [
  {
    name: 'Elliot Fu',
    bio: 'Elliot has been a member since July 2012',
    avatar: '/images/avatar/small/elliot.jpg',
  },
  {
    name: 'Stevie Feliciano',
    bio: 'Stevie has been a member since August 2013',
    avatar: '/images/avatar/small/stevie.jpg',
  },
  {
    name: 'Matt',
    bio: 'Matt has been a member since July 2014',
    avatar: '/images/avatar/small/matt.jpg',
  },
  {
    name: 'Elliot Fu',
    bio: 'Elliot has been a member since July 2012',
    avatar: '/images/avatar/small/elliot.jpg',
  },
  {
    name: 'Stevie Feliciano',
    bio: 'Stevie has been a member since August 2013',
    avatar: '/images/avatar/small/stevie.jpg',
  },
  {
    name: 'Matt',
    bio: 'Matt has been a member since July 2014',
    avatar: '/images/avatar/small/matt.jpg',
  },
  {
    name: 'Elliot Fu',
    bio: 'Elliot has been a member since July 2012',
    avatar: '/images/avatar/small/elliot.jpg',
  },
  {
    name: 'Stevie Feliciano',
    bio: 'Stevie has been a member since August 2013',
    avatar: '/images/avatar/small/stevie.jpg',
  },
  {
    name: 'Matt',
    bio: 'Matt has been a member since July 2014',
    avatar: '/images/avatar/small/matt.jpg',
  },
  {
    name: 'Elliot Fu',
    bio: 'Elliot has been a member since July 2012',
    avatar: '/images/avatar/small/elliot.jpg',
  },
  {
    name: 'Stevie Feliciano',
    bio: 'Stevie has been a member since August 2013',
    avatar: '/images/avatar/small/stevie.jpg',
  },
  {
    name: 'Matt',
    bio: 'Matt has been a member since July 2014',
    avatar: '/images/avatar/small/matt.jpg',
  },
]


export const SoftSkills = () => {

    const [active, toggleActive] = useState(false)
    return (
      <>
        <Dimmer.Dimmable
          as={Segment}
          dimmed={active}
          className="sixteen"
          style={{ padding: "6em 0em" }}
          vertical
        >
          <Grid container stackable verticalAlign="middle">
            <Grid.Row>
              <Grid.Column textAlign="center" className="mv-2" width={16}>
                <Header as="h3" style={{ fontSize: "2em" }}>
                  Soft Skills
                </Header>
              </Grid.Column>
              <Grid.Column textAlign="center" width={8} className="mv-1">
                <Card
                  fluid
                  className="text-center"
                  href="javascript:void(0)"
                  onClick={() => toggleActive(true)}
                >
                  <Card.Content>
                    <Icon
                      name="code"
                      size="massive"
                      className="grey-light mb-2"
                    />
                    <Card.Header className="grey">Dev</Card.Header>
                  </Card.Content>
                </Card>
              </Grid.Column>
              <Grid.Column textAlign="center" width={8} className="mv-1">
                <Card
                  fluid
                  className="text-center"
                  href="javascript:void(0)"
                  onClick={() => toggleActive(true)}
                >
                  <Card.Content>
                    <Icon
                      name="paint brush"
                      size="massive"
                      className="grey-light mb-2"
                    />
                    <Card.Header className="grey">Design</Card.Header>
                  </Card.Content>
                </Card>
              </Grid.Column>
              <Grid.Column textAlign="center" width={8} className="mv-1">
                <Card
                  fluid
                  className="text-center"
                  href="javascript:void(0)"
                  onClick={() => toggleActive(true)}
                >
                  <Card.Content>
                    <Icon
                      name="bullhorn"
                      size="massive"
                      className="grey-light mb-2"
                    />
                    <Card.Header className="grey">Marketing</Card.Header>
                  </Card.Content>
                </Card>
              </Grid.Column>
              <Grid.Column textAlign="center" width={8} className="mv-1">
                <Card
                  fluid
                  className="text-center"
                  href="javascript:void(0)"
                  onClick={() => toggleActive(true)}
                >
                  <Card.Content>
                    <Icon
                      name="user secret"
                      size="massive"
                      className="grey-light mb-2"
                    />
                    <Card.Header className="grey">Others</Card.Header>
                  </Card.Content>
                </Card>
              </Grid.Column>
            </Grid.Row>
          </Grid>
          <Dimmer active={active} onClickOutside={() => toggleActive(false)}>
            <Grid columns={3} mobile={16} divided doubling>
              <Grid.Row>
                {users.map((user,key) => (
                  <Popup
                    content={user.bio}
                    key={`${user.name}_${key}`}
                    header={user.name}
                    trigger={
                      <Grid.Column className="mv-1" textAlign="center">
                        <StaticImage
                          src="https://react.semantic-ui.com/images/wireframe/square-image.png"
                          quality={95}
                          height={420}
                          formats={["AUTO", "WEBP", "AVIF"]}
                          alt="Mobile Apps"
                          style={{ marginBottom: `1.45rem`, maxWidth: 80, maxHeight: 80, borderRadius: 100, }}
                        />
                      </Grid.Column>
                    }
                  />
                ))}
              </Grid.Row>
            </Grid>
          </Dimmer>
        </Dimmer.Dimmable>
      </>
    )
};
