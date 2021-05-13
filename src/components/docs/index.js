import React, { useState } from 'react';
import {
  Segment,
  Grid,
  Header,
  Container,
  Button,
  Card,
  Transition,
  Image,
} from "semantic-ui-react"
import { StaticImage } from "gatsby-plugin-image"
import { SoftSkills } from "./softSkills"
import { TabsContainer } from './tabs';
import mobil_img from "../../images/phone.webp";
import laptop_img from "../../images/laptop.png";

const MOBIL = "mobil", DESKTOP = "desktop"
export const DocsIndex = () => {

    const [selected, toggleSelected] = useState(false)
    const [visibleMobil, toggleVisibleMobil] = useState(true)
    const [visibleDesktop, toggleVisibleDesktop] = useState(true)

    const  toggleVisibility = (name) => {
        if (name === MOBIL) {
          toggleVisibleMobil(!visibleMobil)
        } else {
          toggleVisibleDesktop(!visibleDesktop)
        }
    }


    return (
      <>
        {typeof selected === "number" ? (
          <TabsContainer selected={selected} toggleSelected={toggleSelected} />
        ) : (
          <Segment style={{ padding: "8em 0em" }} vertical>
            <Grid container stackable verticalAlign="middle">
              <Grid.Row>
                <Grid.Column textAlign="center" width={8}>
                  <Container
                    className="cursor"
                    onClick={() => toggleSelected(0)}
                    onMouseLeave={() => toggleVisibility(MOBIL)}
                    onMouseEnter={() => toggleVisibility(MOBIL)}
                  >
                    <Transition
                      animation={"pulse"}
                      duration={600}
                      visible={visibleMobil}
                    >
                      <Image centered size="medium" src={mobil_img} />
                    </Transition>
                    <Header as="h3">Mobile Apps</Header>
                  </Container>
                </Grid.Column>
                <Grid.Column textAlign="center" floated="right" width={8}>
                  <Container
                    className="cursor"
                    onClick={() => toggleSelected(1)}
                    onMouseLeave={() => toggleVisibility(DESKTOP)}
                    onMouseEnter={() => toggleVisibility(DESKTOP)}
                  >
                    <Transition
                      animation={"pulse"}
                      duration={600}
                      visible={visibleDesktop}
                    >
                      <Image centered size="massive" src={laptop_img} />
                    </Transition>
                    <Header as="h3">Web Applications</Header>
                  </Container>
                </Grid.Column>
              </Grid.Row>
            </Grid>
          </Segment>
        )}

        <SoftSkills />
      </>
    )
};
