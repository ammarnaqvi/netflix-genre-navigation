import React from 'react'
import { Link } from 'gatsby'

const Category = ({ category }) => (
    <Link
        to={`/category/${category.slug}`}
        className="flex items-center w-full h-10 px-5 text-sm text-white bg-transparent hover:bg-secondary"
    >
        {category.title}
    </Link>
)

export default Category
