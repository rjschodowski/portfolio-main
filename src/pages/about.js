import React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/layout'
import SEO from '../components/seo'
import { StaticImage } from 'gatsby-plugin-image'
import { heading, contentContainer, contentText, contentImage, link } from '../styles/about.module.css'

const About = () => {
    return (
        <Layout>
            <SEO title="About"/>
            <h1 className={heading}>My Story</h1>
            <div className={contentContainer}>
                <div className={contentImage}>
                    <StaticImage
                    src="../images/profilephoto-removebg.png"
                    alt="profile photo of R.J. Schodowski"
                    placeholder="blurred"
                    layout="constrained"
                    maxWidth={800}
                    maxHeight={800} />
                </div>
                <div className={contentText}>
                    <p>It was my curiosity of computer programming and software paired with my drive to help people in need that led me to software design and development. 
                        From my first line of code to my first constructed web page, I began to unearth a new mission: building innovative technology 
                        with the purpose of improving and enhancing people’s lives.</p>
                    <p>I have learned over the past two years that what I find most fulfilling about software and web development is building 
                        applications and websites that are useful, cleverly designed, and make life a little easier for users, all while 
                        learning and improving on new skills and technologies. I have also learned from other experienced developers to 
                        challenge myself to go beyond doing what is comfortable and trying out new technologies that I normally would not 
                        otherwise consider using. Lastly, I have learned of the importance of collaborating with stakeholders, developers, 
                        designers, and users to ensure projects are technically solid and designed with the user’s experience always in mind.</p>
                    <p>I have been working with React, GraphQL, Material UI, and Tailwind CSS, and more recently with C and C++ in embedded 
                        systems to create web applications and software in vehicles with clean code and clean UX. As I have been working on various personal and 
                        professional projects, I have grown in confidence as a developer, and am more eager to work on more collaborative 
                        projects that will positively impact humanity in the greatest of ways. You can see my latest work with some of these 
                        technologies here: <a className={link} href="https://lansinghelpguide.com" alt="Lansing Help Guide Website" target="_blank" rel="noreferrer">Lansing Help Guide</a>.</p>
                    <p>If you are looking for a highly-motivated, teachable, and socially-conscious developer, let's chat. </p>
                    <p><Link to="/contact" className={link}>Want to work with me? Reach out</Link>.</p>
                </div>
            </div>
        </Layout>
    )
}

export default About
