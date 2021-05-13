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
  Image
} from "semantic-ui-react"
import { createMedia } from "@artsy/fresnel"

import logo_inverted from '../images/me_invert.png'


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
          <Segment inverted vertical style={{ padding: "1em 0em" }}>
            <Container>
              <Grid inverted>
                <Grid.Row>
                  <Grid.Column width={16} textAlign="center">
                    <p style={{ display: "inline-flex" }}>
                      Made with <i className="icon react mh-1 rotate" style={{width: "auto", height: "auto"}}></i> and{" "}
                      <i className="icon heart mh-1 "></i> by{" "}
                      <Image
                        className="mh-1"
                        src={logo_inverted}
                        style={{ width: "20px" }}
                      />
                    </p>
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
