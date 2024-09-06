import React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/layout'
import SEO from '../components/seo'
import { link } from '../styles/404.module.css'

const NotFound = () => {
    return (
        <Layout>
            <SEO title="404"/>
            <h1>404 - Page not found</h1>
            <p><Link to="/" className={link}>Head home</Link></p>
        </Layout>
    )
}

export default NotFound