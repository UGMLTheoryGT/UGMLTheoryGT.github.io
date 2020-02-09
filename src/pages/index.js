import React from "react"
import { Link, graphql } from "gatsby"

import Bio from "../components/bio"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { rhythm } from "../utils/typography"
import Nav from "../components/nav.js"
import 'bootstrap/dist/css/bootstrap.css';
import './index.css'

const BlogIndex = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title
  const posts = data.allMarkdownRemark.edges

  return (
    <div>
      <Nav />
      <div class="wrapper">
        <h1 id="blog">Blog</h1>
        <p>Here are digest posts of what we've been reading, and what we're up to!</p>
        {/* <Layout location={location} title={siteTitle}> */}
          <SEO title="All posts" />
          {/* <Bio /> */}

          {posts.map(({ node }) => {
            const title = node.frontmatter.title || node.fields.slug
            return (
              <div>
                <table id = "blogRow" class="table">
                  <tbody>
                    <tr>
                      <th scope="row"></th>
                      <td><Link style={{ boxShadow: `none`, text_decoration: "none", color: "#000"}} to={node.fields.slug}>
                        {title}
                      </Link></td>
                      <td id="blogDate">{node.frontmatter.date}</td>
                    </tr>
                  </tbody>
                </table>

                {/* <article key={node.fields.slug}>
                  <header>
                    <h3
                      style={{
                        marginBottom: rhythm(1 / 4),
                      }}
                    >
                      <Link style={{ boxShadow: `none` }} to={node.fields.slug}>
                        {title}
                      </Link>
                    </h3>
                    <small>{node.frontmatter.date}</small>
                  </header>
                  <section>
                    <p
                      dangerouslySetInnerHTML={{
                        __html: node.frontmatter.description || node.excerpt,
                      }}
                    />
                  </section>
                </article> */}
              </div>
              
            )
          })}  
      </div>
      
      {/* </Layout> */}
    </div>
  )
}

export default BlogIndex

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            description
          }
        }
      }
    }
  }
`
