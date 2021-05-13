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

  activeStatus = href => window.location.pathname === href || false

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
            <Menu.Item as="a" href="/" active={this.activeStatus("/")}>
              Home
            </Menu.Item>
            <Menu.Item as="a" href="/docs" active={this.activeStatus("/docs")}>
              Docs
            </Menu.Item>
            <Menu.Item
              as="a"
              href="/releases"
              active={this.activeStatus("/releases")}
            >
              Releases
            </Menu.Item>
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
                  <Menu.Item
                    position="right"
                    active={this.activeStatus("/contact")}
                  >
                    <Button
                      href="/contact"
                      as="a"
                      inverted
                      style={{ marginLeft: "0.5em" }}
                    >
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
