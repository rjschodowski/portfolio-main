import React from 'react'
import Header from './header'
import Footer from './footer'
import '../styles/global.css'
import { container, content } from './layout.module.css'

const Layout = (props) => {
    return (
        <div className={container}>
            <Header />
            <div className={content}>
                {props.children}  
            </div>
            <Footer />
        </div>
    )
}

export default Layout