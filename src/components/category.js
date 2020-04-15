import React from 'react'
import { Link } from 'gatsby'

const Category = ({ category }) => (
    <Link
        to={`/category/${category.slug}`}
        activeClassName="bg-secondary"
        className="flex items-center w-full h-10 px-5 text-sm text-white bg-transparent hover:text-sd"
    >
        {category.title}
    </Link>
)

export default Category
