import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

import style from '../styles/global.module.css'

const NotFoundPage = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title

  return (
    <div className={style.container}>
    <Layout location={location} title={siteTitle}>
      {/* <SEO title="404: Not Found" /> */}
      <h1 style={{
        textAlign:`center`,
        paddingBottom: `30px`,
      }}>404 - Not Found</h1>
    </Layout>
    </div>
  )
}

export default NotFoundPage

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
