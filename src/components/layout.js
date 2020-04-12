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
            </Helmet>
            <Header />
            <div className="flex">
                <Aside />
                <main className="w-11/12 max-w-6xl mt-8 mb-16">{children}</main>
            </div>
        </>
    )
}

export default Layout
