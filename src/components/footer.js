import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import { navItem, copyright } from './footer.module.css'
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';

const Footer = () => {
    const data = useStaticQuery(graphql`
    query {
        site {
            siteMetadata {
                author
            }
        }
    }
  `)

    return (
        <nav className="flex justify-between items-baseline mt-12">
            <p className={copyright}>&#169; 2022 {data.site.siteMetadata.author}</p>
            <ul className="flex m-0 p-0">
                <li className={navItem}>
                    <a href="https://www.linkedin.com/in/rjschodowski/" alt="R.J. Schodowski LinkedIn profile" target="_blank" rel="noreferrer">
                        <span>
                            <LinkedInIcon />
                        </span>   
                    </a>
                </li>
                <li className={navItem}>
                    <a href="https://github.com/rjschodowski" alt="R.J. Schodowski GitHub profile" target="_blank" rel="noreferrer">
                        <span>
                            <GitHubIcon />
                        </span>
                    </a>
                </li>
            </ul>

        </nav>
    )
}

export default Footer