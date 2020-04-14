import { graphql, useStaticQuery } from 'gatsby'

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
                    mdxAST
                }
            }
        }
    `)
    return data.allMdx.nodes.map((category) => {
        category.mdxAST.children
            .filter((child) => child.type == 'jsx')
            .map((child) => {
                let arr = child.value.split('"')
                return { title: arr[1], id: arr[3] }
            })
        return {
            title: category.frontmatter.title,
            slug: category.frontmatter.slug,
            id: category.frontmatter.id,
            subcategories: category.mdxAST.children
                .filter((child) => child.type == 'jsx')
                .map((child) => {
                    let arr = child.value.split('"')
                    return { title: arr[1], id: arr[3] }
                }),
        }
    })
}

export default useCategories
