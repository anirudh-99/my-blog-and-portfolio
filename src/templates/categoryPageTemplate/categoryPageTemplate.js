import React from "react"
import { graphql } from "gatsby"
import Layout from "../../components/Layout/Layout";
import * as styles from "./categoryPageTemplate.module.scss";

export default function CategoryPageTemplate({
    data, // this prop will be injected by the GraphQL query below.
}) {
    const {html} = data.allMarkdownRemark.edges[0].node;

    return (
        <Layout>
            <div className={styles.categoryPageContainer}>
                <div
                    dangerouslySetInnerHTML={{ __html: html }}
                />
            </div>
        </Layout>
    )
}

export const pageQuery = graphql`
    query GetCategoryPage($category: String) {
        allMarkdownRemark(
            filter: {frontmatter: {categoryPage: {eq: true}, category: {eq: $category}}}
        ) {
            edges {
                node {
                    html
                    frontmatter {
                        category
                    }
                }
            }
        }
    }
`