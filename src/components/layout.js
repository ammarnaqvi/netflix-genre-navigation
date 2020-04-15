import React from 'react'
import Header from './header.js'
import Helmet from 'react-helmet'
import useSiteMetadata from '../hooks/use-sitemetadata.js'
import Aside from './aside.js'

const Layout = ({ children }) => {
    const { title, description } = useSiteMetadata()
    return (
        <>
            <Helmet>
                <html lang="en" />
                <title> {title} </title>
                <meta name="description" content={description} />
                <link
                    href="https://fonts.googleapis.com/css2?family=Heebo&display=swap"
                    rel="stylesheet"
                />
            </Helmet>
            <Header />
            <div className="flex">
                <Aside />
                <main className="w-full px-6 py-10 text-white bg-main">
                    {children}
                </main>
            </div>
        </>
    )
}

export default Layout
