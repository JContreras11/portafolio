import  React from "react";
import PropTypes from "prop-types"
import {
  Visibility,
  Segment,
  Menu,
  Container,
  Sidebar,
  Icon,
  Button,
} from "semantic-ui-react"
import { Media } from "../layout";

export class MobileContainer extends React.Component {
  state = {}

  handleSidebarHide = () => this.setState({ sidebarOpened: false })

  handleToggle = () => this.setState({ sidebarOpened: true })

  render() {
    const { children, Heading } = this.props
    const { sidebarOpened } = this.state

    return (
      <Media as={Sidebar.Pushable} at="mobile">
        <Sidebar.Pushable>
          <Sidebar
            as={Menu}
            animation="overlay"
            inverted
            onHide={this.handleSidebarHide}
            vertical
            visible={sidebarOpened}
          >
            <Menu.Item as="a" active href="/">
              Home
            </Menu.Item>
            <Menu.Item as="a" href="/docs">Docs</Menu.Item>
            <Menu.Item as="a" href="/api">API</Menu.Item>
            <Menu.Item as="a" href="/features">Features</Menu.Item>
            <Menu.Item as="a" href="/releases">Releases</Menu.Item>
          </Sidebar>

          <Sidebar.Pusher dimmed={sidebarOpened}>
            <Segment
              inverted
              textAlign="center"
              style={{ minHeight: 350, padding: "1em 0em" }}
              vertical
            >
              <Container>
                <Menu inverted pointing secondary size="large">
                  <Menu.Item onClick={this.handleToggle}>
                    <Icon name="sidebar" />
                  </Menu.Item>
                  <Menu.Item position="right">
                    <Button href="/contact" as="a" inverted style={{ marginLeft: "0.5em" }}>
                      Contact
                    </Button>
                  </Menu.Item>
                </Menu>
              </Container>
              <Heading mobile />
            </Segment>

            {children}
          </Sidebar.Pusher>
        </Sidebar.Pushable>
      </Media>
    )
  }
}

MobileContainer.propTypes = {
  children: PropTypes.node,
  Heading: PropTypes.node,
}
