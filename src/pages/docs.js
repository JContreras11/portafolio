import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"



import { StaticImage } from "gatsby-plugin-image"
import { HomepageHeading } from "../components/HomepageHeading"


const Docs = () => (
  <Layout Heading={HomepageHeading}>
    <Seo title="Page two" />
    <h1>Hi from the second page</h1>
    <p>Welcome to page 2</p>
    <StaticImage
      src="../images/gatsby-astronaut.png"
      width={300}
      quality={95}
      formats={["AUTO", "WEBP", "AVIF"]}
      alt="A Gatsby astronaut"
      style={{ marginBottom: `1.45rem` }}
    />
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default Docs
