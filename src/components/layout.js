import React from "react"
import Header from "./header.js"
import Helmet from "react-helmet"
import useSiteMetadata from "../hooks/use-sitemetadata.js"

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
            <main className="w-11/12 max-w-6xl mx-auto mt-8 mb-16">
                {children}
            </main>
            <footer className="w-11/12 max-w-6xl mx-auto text-white">
                &copy; {new Date().getFullYear()} - Made by Ammar Naqvi,
                Designed by *placeholder*
            </footer>
        </>
    )
}

export default Layout
