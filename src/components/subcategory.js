import React from 'react'
import Styles from './subcategory.module.css'

const SubCategory = ({ title, id }) => (
    <a
        href={`https://www.netflix.com/browse/genre/${id}`}
        target="_blank"
        rel="noopener noreferrer"
        className={`flex flex-wrap items-center content-center justify-center h-32 px-5 mt-5 text-sm text-center text-white border border-te bg-te ${Styles.subcategory}`}
    >
        <div className="w-full">{title}</div>
        <div
            className={`text-sm font-medium uppercase text-secondary ${Styles.netflix}`}
        >
            View on Netflix
        </div>
    </a>
)

export default SubCategory
