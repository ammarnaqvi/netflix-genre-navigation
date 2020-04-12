import React from 'react'
import Layout from '../components/layout'
import { graphql } from 'gatsby'
import { MDXRenderer } from 'gatsby-plugin-mdx'

export const query = graphql`
    query($slug: String!) {
        mdx(frontmatter: { slug: { eq: $slug } }) {
            frontmatter {
                title
                slug
                id
            }
            body
        }
    }
`

const CategoryTemplate = ({ data: { mdx: category } }) => (
    <Layout>
        <section className="flex justify-between w-full max-w-4xl">
            <h2 className="text-2xl font-medium">
                {category.frontmatter.title}
            </h2>
            <a
                href={`https://www.netflix.com/browse/genre/${category.frontmatter.id}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-40 h-10 text-sm uppercase border border-devil hover:border-white"
            >
                View on Netflix
            </a>
        </section>
        <h3 className="w-full mt-8 text-sm font-medium uppercase text-te">
            Sub Categories
        </h3>
        <section className="flex grid flex-wrap w-full max-w-4xl grid-cols-2 gap-8 md:grid-cols-3 lg:grid-cols-4">
            <MDXRenderer>{category.body}</MDXRenderer>
        </section>
    </Layout>
)

export default CategoryTemplate
