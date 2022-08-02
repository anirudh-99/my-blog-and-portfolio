exports.createPages = async ({ actions, graphql }) => {
    const { createPage } = actions

    const blogPostTemplate = require.resolve(`./src/templates/blogTemplate/blogTemplate.js`);
    const categoryPageTemplate = require.resolve('./src/templates/categoryPageTemplate/categoryPageTemplate');

    const resultSlugs = await graphql(`
      {
        allMarkdownRemark {
          edges {
            node {
              frontmatter {
                slug
              }
            }
          }
        }
      }
    `);
    if (resultSlugs.errors) {
        return Promise.reject(resultSlugs.errors)
    }

    resultSlugs.data.allMarkdownRemark.edges.forEach(({ node }) => {
        createPage({
            path: `blogs/${node.frontmatter.slug}`,
            component: blogPostTemplate,
            context: {
                // additional data can be passed via context
                slug: node.frontmatter.slug,
            },
        })
    });

    const categories = await graphql(`
        query CategoriesQuery {
                allMarkdownRemark(sort: {order: ASC, fields: frontmatter___title}) {
                categories: distinct(field: frontmatter___category)
            }
        }
    `);

    categories.data.allMarkdownRemark.categories.forEach(category => {
        createPage({
            path: `category/${category}`,
            component: categoryPageTemplate,
            context: {
                category
            }
        });
    })
    

}
