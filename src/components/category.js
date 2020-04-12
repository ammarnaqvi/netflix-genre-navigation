import React from 'react'

const Category = ({ category }) => (
    <h3 className="flex items-center w-full h-10 px-5 text-sm text-white bg-transparent hover:bg-secondary">
        {category.title}
    </h3>
)

export default Category
