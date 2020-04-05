import React from "react"
import Layout from "../components/layout"
import useCategories from "../hooks/use-categories"
import Category from "../components/category"

export default () => {
    const categories = useCategories()
    return (
        <Layout>
            <h1 className="text-white">Hello!</h1>
            <div className="text-white">
                Welcome to Netflix hidden categories
            </div>
            <div className="flex flex-wrap justify-between">
                {categories.map((category) => (
                    <Category key={category.id} category={category} />
                ))}
            </div>
        </Layout>
    )
}
