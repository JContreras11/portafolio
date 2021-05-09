/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import { DesktopContainer } from "./header/Desktop"
import { MobileContainer } from "./header/mobile"

// import "./scss/layout.scss"
import "semantic-ui-css/semantic.min.css"
import './scss/layout.scss'
import {
  Segment,
  Container,
  Grid,
  Header as HeaderFooter,
  List,
} from "semantic-ui-react"
import { createMedia } from "@artsy/fresnel"




const { MediaContextProvider, Media } = createMedia({
  breakpoints: {
    mobile: 0,
    tablet: 768,
    computer: 1024,
  },
})

export {Media};

const Layout = ({ children, Heading }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <MediaContextProvider>
        <DesktopContainer Heading={Heading}>{children}</DesktopContainer>
        <MobileContainer Heading={Heading}>{children}</MobileContainer>
        <footer>
          <Segment inverted vertical style={{ padding: "5em 0em" }}>
            <Container>
              <Grid divided inverted stackable>
                <Grid.Row>
                  <Grid.Column width={12}>
                    <HeaderFooter inverted as="h4" content="About" />
                    <List link inverted>
                      <List.Item as="a">Sitemap</List.Item>
                      <List.Item as="a">Contact Us</List.Item>
                      <List.Item as="a">Religious Ceremonies</List.Item>
                      <List.Item as="a">Gazebo Plans</List.Item>
                    </List>
                  </Grid.Column>
                </Grid.Row>
              </Grid>
            </Container>
          </Segment>
        </footer>
      </MediaContextProvider>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  Heading: PropTypes.node,
}

export default Layout
