import React, { useState } from 'react'
import useCategories from '../hooks/use-categories'
import { Link } from 'gatsby'

const fuzzy = function (name, s) {
    var hay = name.replace(' ', '').toLowerCase(),
        i = 0,
        n = -1,
        l
    s = s.replace(' ', '').toLowerCase()
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
            subcategories: category.subcategories,
        })
    })
    const [items, setItems] = useState([])
    const [d, setD] = useState([])
    const [showResults, setShowResults] = useState(false)
    return (
        <>
            <input
                name="search"
                placeholder="Category"
                autoComplete="off"
                className="z-10 h-10 pl-12 bg-transparent lg:w-112 focus:outline-none focus:placeholder-white"
                onKeyDown={(e) => {
                    if (e.key === 'Escape') {
                        setShowResults(false)
                        setItems([])
                        setD([])
                    }
                }}
                onChange={(e) => {
                    let s = []
                    setItems(s)
                    let x = []
                    setD(x)
                    if (e.target.value.length < 3) {
                        setShowResults(false)
                        return
                    }
                    allItems.forEach((item) => {
                        if (fuzzy(item.name, e.target.value)) {
                            s.push(item)
                        }
                        item.subcategories.forEach((subcategory) => {
                            if (fuzzy(subcategory.title, e.target.value)) {
                                x.push(subcategory)
                            }
                        })
                    })
                    setItems(s)
                    setD(x)
                    setShowResults(true)
                    console.log(items)
                }}
            />
            {showResults > 0 && (
                <>
                    <div className="absolute top-0 z-10 overflow-y-scroll mt-14 bg-primary max-h-112 w-112">
                        <h2 className="px-4 mt-2 text-sm font-medium uppercase text-te">
                            Categories
                        </h2>
                        {items.map((item) => (
                            <Link
                                to={item.link}
                                className="flex items-center h-12 pl-4 bg-transparent hover:text-sd"
                            >
                                {item.name}
                            </Link>
                        ))}
                        {d.length > 0 && (
                            <>
                                <h2 className="px-4 my-1 text-sm font-medium uppercase text-te">
                                    Subcategories
                                </h2>

                                {d.map((item) => (
                                    <a
                                        href={`https://www.netflix.com/browse/genre/${item.id}`}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center h-12 pl-4 bg-transparent hover:text-sd"
                                    >
                                        {item.title}
                                    </a>
                                ))}
                            </>
                        )}
                    </div>
                    <button
                        type="button"
                        onClick={() => {
                            setShowResults(false)
                            setItems([])
                            setD([])
                        }}
                        className="absolute inset-0 z-0 w-full h-full cursor-default"
                    />
                </>
            )}
        </>
    )
}
export default Search
