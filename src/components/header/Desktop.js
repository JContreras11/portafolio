import React from "react"
import PropTypes from "prop-types"
import {
  Visibility,
  Segment,
  Menu,
  Container,
  Button,
} from "semantic-ui-react"
import { Media } from "../layout"

/* Heads up!
 * Neither Semantic UI nor Semantic UI React offer a responsive navbar, however, it can be implemented easily.
 * It can be more complicated, but you can create really flexible markup.
 */


export class DesktopContainer extends React.Component {
  state = {}

  hideFixedMenu = () => this.setState({ fixed: false })
  showFixedMenu = () => this.setState({ fixed: true })

  render() {
    const { children, Heading } = this.props
    const { fixed } = this.state

    return (
      <Media greaterThan="mobile">
        <Visibility
          once={false}
          onBottomPassed={this.showFixedMenu}
          onBottomPassedReverse={this.hideFixedMenu}
        >
          <Segment
            inverted
            textAlign="center"
            style={{ minHeight: 700, padding: "1em 0em" }}
            vertical
          >
            <Menu
              fixed={fixed ? "top" : null}
              inverted={!fixed}
              pointing={!fixed}
              secondary={!fixed}
              size="large"
            >
              <Container>
                <Menu.Item as="a" href="/" active>
                  Home
                </Menu.Item>
                <Menu.Item as="a" href="/docs">Docs</Menu.Item>
                <Menu.Item as="a" href="/api">API</Menu.Item>
                <Menu.Item as="a" href="/features">Features</Menu.Item>
                <Menu.Item as="a" href="/releases">Releases</Menu.Item>
                <Menu.Item position="right">
                  <Button
                    as="a"
                    href="/contact"
                    inverted={!fixed}
                    primary={fixed}
                    style={{ marginLeft: "0.5em" }}
                  >
                    Contact
                  </Button>
                </Menu.Item>
              </Container>
            </Menu>
            <Heading/>
          </Segment>
        </Visibility>

        {children}
      </Media>
    )
  }
}

DesktopContainer.propTypes = {
  children: PropTypes.node,
  Heading: PropTypes.node,
}
