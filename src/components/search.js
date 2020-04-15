import React, { useState } from 'react'
import useCategories from '../hooks/use-categories'
import { Link } from 'gatsby'

const fuzzy = function (name, s) {
    var hay = name.toLowerCase(),
        i = 0,
        n = -1,
        l
    s = s.toLowerCase()
    for (; (l = s[i++]); ) if (!~(n = hay.indexOf(l, n + 1))) return false
    return true
}

const Search = () => {
    const categories = useCategories()
    const allItems = []
    categories.forEach((category) => {
        allItems.push({
            name: category.title,
            link: `/category/${category.slug}`,
        })
    })
    const [items, setItems] = useState([])
    return (
        <>
            <input
                name="search"
                placeholder="Category"
                autoComplete="off"
                className="h-10 pl-12 bg-transparent w-112 focus:outline-none focus:placeholder-white"
                onChange={(e) => {
                    let s = []
                    setItems(s)
                    if (e.target.value.length < 3) return
                    allItems.forEach((item) => {
                        if (fuzzy(item.name, e.target.value)) {
                            s.push(item)
                        }
                    })
                    setItems(s)
                    console.log(items)
                }}
            />
            <div className="absolute top-0 mt-10 bg-primary">
                {items.map((item) => (
                    <Link
                        to={item.link}
                        className="flex items-center h-12 pl-4 bg-transparent w-112 hover:text-sd"
                    >
                        {item.name}
                    </Link>
                ))}
            </div>
        </>
    )
}
export default Search
