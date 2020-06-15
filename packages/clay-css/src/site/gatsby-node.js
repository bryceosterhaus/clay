const path = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`)
const fm = require('html-frontmatter')
const visit = require('unist-util-visit')

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  const Page = path.resolve(`./src/templates/page.tsx`)

  const result = await graphql(
    `
      {
        allHtmlRehype {
          edges {
            node {
              fields {
                slug
                section
                title
              }
            }
          }
        }
      }
    `
  )

  if (result.errors) {
    throw result.errors
  }

  const posts = result.data.allHtmlRehype.edges

  posts.forEach((post, index) => {
    const previous = index === posts.length - 1 ? null : posts[index + 1].node
    const next = index === 0 ? null : posts[index - 1].node

    createPage({
      path: post.node.fields.title === 'Home' ? '/' : post.node.fields.slug,
      component: Page,
      context: {
        slug: post.node.fields.slug,
        previous,
        next,
      },
    })
  })
}


exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions

  if (node.internal.type === `HtmlRehype`) {
    const slug = createFilePath({ node, getNode })

    createNodeField({
      name: `slug`,
      node,
      value: slug,
    });

    const frontmatter = fm(node.internal.content)

    if (frontmatter) {
      createNodeField({
        name: `title`,
        node,
        value: frontmatter.title,
      });

      createNodeField({
        name: `section`,
        node,
        value: frontmatter.section,
      });
    }
  }
}
