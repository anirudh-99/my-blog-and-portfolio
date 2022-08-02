import React from "react"
import {graphql} from "gatsby";
import CategoryCard from "../components/CategoryCard/CategoryCard";
import Layout from "../components/Layout/Layout"
import * as styles from "../pageStyles/index.module.scss";

export default function Home({data}) {
  const categories = data.allMarkdownRemark.group;
  return (
    <Layout>
      <h1 className={styles.categories_heading}>Categories</h1>
      <div className={styles.wrapper}>
        {
          categories.map(category => {
            return <CategoryCard 
            key={category.categoryName}
            name={category.categoryName} 
            count={category.totalCount-1} //deduct one for category page
            link={`/category/${category.categoryName}`} />
          })
        }
      </div>
    </Layout>);
}

export const query = graphql`
  query CategoriesPageQuery {
    allMarkdownRemark {
      group(field: frontmatter___category) {
        totalCount
        categoryName: fieldValue
      }
    }
  }
`;
