import React from "react"

const Category = ({ category }) => (
    <article className="relative w-64 p-5 mt-8 bg-white">
        <h3 className="mb-8 text-lg font-semibold text-gray-700">
            {category.title}
        </h3>
        <a
            className="absolute bottom-0 right-0 m-2 text-sm text-gray-800"
            target="_blank"
            rel="noopener noreferrer"
            href={`http://www.netflix.com/browse/genre/${category.id}`}
        >
            View on Netflix &rarr;
        </a>
    </article>
)

export default Category
