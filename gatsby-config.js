/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
    siteMetadata: {
        title: `Netflix Genre Navigation`,
        description: `Browse through Netflix's hidden categories`,
    },
    plugins: [
        "gatsby-plugin-postcss",
        "gatsby-plugin-react-helmet",
        {
            resolve: "gatsby-plugin-mdx",
            options: {
                defaultLayouts: {
                    default: require.resolve("./src/components/layout.js"),
                },
            },
        },
        {
            resolve: "gatsby-source-filesystem",
            options: {
                name: "categories",
                path: "categories",
            },
        },
    ],
}
