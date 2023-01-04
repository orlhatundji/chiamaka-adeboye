import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"

const IndexPage = () => (
  <Layout>
    <div>
     <h1 className="bg-foreground text-grey text-center text-2xl">Powlanding</h1>
    </div>


  </Layout>
)

export const Head = () => <Seo title="Home" />

export default IndexPage
