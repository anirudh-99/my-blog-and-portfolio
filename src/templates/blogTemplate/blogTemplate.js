import React from "react"
import { graphql } from "gatsby"
import Layout from "../../components/Layout/Layout"
import * as styles from "./blogTemplate.module.scss";

export default function BlogTemplate({
  data, // this prop will be injected by the GraphQL query below.
}) {
  const { markdownRemark } = data // data.markdownRemark holds our post data
  const { frontmatter, html, timeToRead, tableOfContents } = markdownRemark
  return (
    <Layout>
      <div className={styles.blogPostContainer}>
        <div className="blog-post">
          <h1 className={styles.blogPostTitle}>{frontmatter.title}</h1>
          <p className={styles.CreationDateAndTimeToRead}>
            {(frontmatter.updatedDate != frontmatter.createdDate)
              ? `Updated on ${frontmatter.updatedDate}`
              : `Created on ${frontmatter.createdDate}`
            } - {timeToRead} min read
          </p>
          <h3 className={styles.blogPostTableOfContentsHeading}>Table of Contents:</h3>
          <div
            className={styles.blogPostTableOfContents}
            dangerouslySetInnerHTML={{ __html: tableOfContents }}
          />
          <div
            className={styles.blogPostContent}
            dangerouslySetInnerHTML={{ __html: html }}
          />
        </div>
      </div>
    </Layout>
  )
}

export const pageQuery = graphql`
  query BlogPageQuery($slug: String) {
    markdownRemark(frontmatter: {slug: {eq: $slug}}) {
      html
      frontmatter {
        category
        createdDate(formatString: "MMMM DD, YYYY")
        updatedDate(formatString: "MMMM DD, YYYY")
        slug
        sub_category
        title
      }
      tableOfContents
      timeToRead
    }
  }
`