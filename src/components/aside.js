import React from 'react'
import Category from './category'
import useCategories from '../hooks/use-categories'

const Aside = () => {
    const categories = useCategories()

    return (
        <aside className="relative w-88 bg-primary">
            <h2 className="px-5 my-4 text-sm font-medium uppercase text-te">
                Categories
            </h2>
            {categories.map((category) => (
                <Category key={category.id} category={category} />
            ))}
            <footer className="absolute bottom-0 mx-5 text-sm text-footer bg-primary">
                &copy; Made by Ammar, Designed by Ashir
            </footer>
        </aside>
    )
}
export default Aside
