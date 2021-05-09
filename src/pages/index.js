/* eslint-disable max-classes-per-file */
/* eslint-disable react/no-multi-comp */

import * as React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import PropTypes from 'prop-types'
import {
  Button,
  Container,
  Divider,
  Grid,
  Header,
  Icon,
  Image,
  List,
  Menu,
  Segment,
  Sidebar,
  Visibility,
} from 'semantic-ui-react'
import { HomepageHeading } from "../components/HomepageHeading"
import { DocsIndex } from "../components/docs"
import { ReleasesIndex } from "../components/releases"
import { Hiring } from "../components/hiring"
import { ContactIndex } from "../components/contact"



const IndexPage = () => (
  <Layout Heading={HomepageHeading}>
    <DocsIndex />
    <ReleasesIndex />
    <Hiring />
    <ContactIndex />
  </Layout>
)



export default IndexPage
