import { graphql, useStaticQuery } from "gatsby"

const useCategories = () => {
    const data = useStaticQuery(graphql`
        {
            allMdx {
                nodes {
                    frontmatter {
                        title
                        slug
                        id
                    }
                    excerpt
                }
            }
        }
    `)
    return data.allMdx.nodes.map((category) => ({
        title: category.frontmatter.title,
        slug: category.frontmatter.slug,
        id: category.frontmatter.id,
        excerpt: category.excerpt,
    }))
}

export default useCategories
