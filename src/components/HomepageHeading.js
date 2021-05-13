import React from "react";
import { Container, Header, Button, Icon, Reveal, Image } from "semantic-ui-react"
import PropTypes from "prop-types"
import { StaticImage } from "gatsby-plugin-image";

/* Heads up!
 * HomepageHeading uses inline styling, however it's not the best practice. Use CSS or styled
 * components for such things.
 */
export const HomepageHeading = ({ mobile }) => (
  <Container text>
    <Reveal animated="move left">
      <Reveal.Content visible>
        <StaticImage
          src="../images/me_invert.png"
          quality={95}
          height={420}
          formats={["AUTO", "WEBP", "AVIF"]}
          alt="Mobile Apps"
          style={{ marginBottom: `1.45rem` }}
        />
      </Reveal.Content>
      <Reveal.Content hidden>
        <StaticImage
          src="../images/me.png"
          quality={95}
          height={420}
          formats={["AUTO", "WEBP", "AVIF"]}
          alt="Mobile Apps"
          style={{ marginBottom: `1.45rem` }}
        />
      </Reveal.Content>
    </Reveal>
    <Header
      as="h1"
      content="<JC/>"
      inverted
      style={{
        fontSize: mobile ? "2em" : "4em",
        fontWeight: "normal",
        marginBottom: 0,
      }}
    />
    <Header
      as="h2"
      inverted
      style={{
        fontSize: mobile ? "1.5em" : "1.7em",
        fontWeight: "normal",
        textTransform: 'uppercase',
      }}
    >
      a guy who can transforms <Icon className="mh-1" size="tiny" name="coffee" />{" "}
      into <Icon className="mh-1" size="tiny" name="code" />
    </Header>
    <Button className="mv-2" primary inverted size="huge">
      <Icon name="chevron left" />
      Meet me
      <strong>/</strong>
      <Icon name="chevron right" />
    </Button>
  </Container>
)

HomepageHeading.propTypes = {
  mobile: PropTypes.bool,
}
