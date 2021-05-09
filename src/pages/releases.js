import * as React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import { HomepageHeading } from "../components/HomepageHeading"
import { ReleasesIndex } from "../components/releases"

const ReleasesPage = () => (
  <Layout Heading={HomepageHeading}>
    <Seo title="Releases" />
    <ReleasesIndex />
  </Layout>
)


export default ReleasesPage