import React from "react"

const Category = ({ category }) => (
    <article className="w-64 p-5 mt-8 bg-white">
        <h3>{category.title}</h3>
        <a
            target="_blank"
            rel="noopener noreferrer"
            href={`http://www.netflix.com/browse/genre/${category.id}`}
        >
            View on Netflix &rarr;
        </a>
    </article>
)

export default Category
