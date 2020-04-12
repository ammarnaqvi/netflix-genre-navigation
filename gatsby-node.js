exports.createPages = async ({ actions, graphql, reporter }) => {
    const result = await graphql(`
        query {
            allMdx {
                nodes {
                    frontmatter {
                        slug
                    }
                }
            }
        }
    `)

    if (result.errors) {
        reporter.panic('failed to create page', result.errors)
    }

    const categories = result.data.allMdx.nodes

    categories.forEach((category) => {
        actions.createPage({
            path: `/category/${category.frontmatter.slug}`,
            component: require.resolve('./src/templates/category.js'),
            context: {
                slug: category.frontmatter.slug,
            },
        })
    })
}
