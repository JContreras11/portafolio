import * as React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"

import { HomepageHeading } from "../components/HomepageHeading"
import { DocsIndex } from "../components/docs"


const Docs = () => (
  <Layout Heading={HomepageHeading}>
    <Seo title="Docs" />
    <DocsIndex />
  </Layout>
)

export default Docs
