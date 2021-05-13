import React from "react";
import { Container, Header, Button, Icon, Reveal, Image } from "semantic-ui-react"
import PropTypes from "prop-types"
import { StaticImage } from "gatsby-plugin-image";
import me_invert from "../images/me_invert.png";
import me from "../images/me.png";

/* Heads up!
 * HomepageHeading uses inline styling, however it's not the best practice. Use CSS or styled
 * components for such things.
 */
export const HomepageHeading = ({ mobile }) => (
  <Container text textAlign="center">
    <Reveal
      animated="fade"
      instant
      style={{ maxWidth: "38vw", left: "29%" }}
    >
      <Reveal.Content visible>
        <Image
          src={me_invert}
          size="medium"
          style={{ marginBottom: `1.45rem` }}
        />
      </Reveal.Content>
      <Reveal.Content hidden>
        <Image src={me} size="medium" style={{ marginBottom: `1.45rem` }} />
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
      className="header-cus mb-3"
      style={{
        fontSize: mobile ? "1.5em" : "1.7em",
        fontWeight: "normal",
        textTransform: "uppercase",
      }}
    >
      a guy who can transforms{" "}
      <Icon className="mh-1" size="tiny" name="coffee" /> into{" "}
      <Icon className="mh-1" size="tiny" name="code" />
    </Header>
  </Container>
)

HomepageHeading.propTypes = {
  mobile: PropTypes.bool,
}
