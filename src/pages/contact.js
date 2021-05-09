import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"
import { HomepageHeading } from "../components/HomepageHeading"
import { ContactIndex } from "../components/contact"

const Docs = () => (
  <Layout Heading={HomepageHeading}>
    <Seo title="Contact" />
    <ContactIndex />
  </Layout>
)

export default Docs
