import React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/layout'
import SEO from '../components/seo'
import { heading, list, stack, links, listCategories, image, contentWrapper, textDescription, link, firstLink, secondLink, headline, subheading } from '../styles/lansinghelp.module.css'
import { StaticImage } from 'gatsby-plugin-image'

const LansingHelp = () => {
    return (
        <Layout>
            <SEO title="Lansing Help Guide"/>
            <div className={contentWrapper}>
                <h1 className={heading}>Lansing Help Guide</h1>
                <p className={textDescription}><i className={headline}>"Lansing Help Guide provides a quick starting point 
                    for Lansing newcomers in accessing help in times of need."</i>
                </p>
                <p className={textDescription}>Lansing Help Guide is a React progressive web application, which was built using
                    the GraphQL-powered Gatsby.js static site generator, Tailwind CSS, and Material UI 
                    styled components.
                </p>
            </div>
            <div className={contentWrapper}>
                <div className={image}>
                    <StaticImage
                    src="../images/mobilehomescreen.png"
                    alt="mobile version of application's home screen"
                    placeholder="blurred"
                    layout="constrained"
                    maxWidth={800}
                    maxHeight={800} />
                </div>
                <div className={listCategories}>
                    <div className={stack}>
                        <h4>Stack</h4>
                        <ul className={list}>
                            <li>React</li>
                            <li>GraphQl</li>
                            <li>Gatsby.js</li>
                            <li>Tailwind CSS</li>
                            <li>Material UI</li>
                            <li>Netlify</li>
                        </ul>
                    </div>
                    <div className={links}>
                        <h4>Links</h4>
                        <ul className={list}>
                            <li className={firstLink}><a href="https://lansinghelpguide.com" alt="Lansing Help Guide Website" target="_blank" rel="noreferrer">View site</a></li>
                            <li className={secondLink}><a href="https://github.com/rjschodowski/lansing-help-guide" alt="Lansing Help Guide GitHub repository" target="_blank" rel="noreferrer">Repository</a></li>
                        </ul>
                    </div>
                </div>
            </div>
            
            <div className={contentWrapper}>
                <h3 className={subheading}>Project Background and Purpose</h3>
                <p className={textDescription}>Lansing Help Guide’s inspiration came from having been working with young adult, refugee youth 
                    transitioning into independent living in Lansing, Michigan. After having spent many days with refugee 
                    youth moving to Lansing, it became clear that many were unfamiliar with the city’s community resources, 
                    and I decided to create an easy-to-use app for them (and other Lansing newcomers) to have handy in case of 
                    an urgent or emergent need. The goal was not to create an exhaustive list of all local organizations and 
                    businesses in the city, but rather a quick and accessible starter guide with well-known and trusted resources for people who
                    are just getting to know Lansing.                    </p>
                <p className={textDescription}>Technically speaking, this project allows users to quickly access listed content (community resources) 
                    items by phone, Google Maps, live chat (whenever available), and their respective websites. This project 
                    was built mobile-first due to the fact that the majority of users are more likely to be using mobile 
                    devices vs. laptop and desktop computers. The app is fully responsive and SEO-ready.
                </p>
                <p className={textDescription}>
                    The first version of this progressive web app is far from being the last - upcoming versions will include 
                    more assistance categories, a language selector for the content to translate to other common languages 
                    spoken among the various cultures in the greater Lansing area, and finally a rating system for users to be 
                    able to share their experiences and ratings with other users. This app will also soon be available on the 
                    Google Play Store.
                </p>
                <div className={image}>
                    <StaticImage
                        src="../images/desktopview.png"
                        alt="Desktop version view of application's screen"
                        placeholder="blurred"
                        layout="constrained"
                        maxWidth={800}
                        maxHeight={800} />
                </div>
            </div>

            <div className={contentWrapper}>
                <h3 className={subheading}>Web Stack</h3>
                <p className={textDescription}>
                    I chose to build my project with Gatsby.js since this static site generator is React-based, is powered 
                    with GraphQL, and enables developers to easily convert static sites into progressive web applications. 
                    With the installation of a few helpful plugins, I was able to add in Material UI components, easily style 
                    the application with Tailwind CSS, and convert the project into a downloadable progressive web app. Finally, 
                    I chose Netlify for web hosting and deployment.
                </p>
                <h3 className={subheading}>Problems Encountered</h3>
                <p className={textDescription}>
                    Of several problems I worked through, one particular technical challenge I faced was learning to style the 
                    Material UI button components. I had initially assumed I could easily style them using Tailwind CSS, but I 
                    rather quickly realized that this was not the case. This forced me to consult the Material UI button API 
                    documentation and the Net Ninja’s Material UI YouTube video series, and there I learned to customize and 
                    override default styles with CSS rules.
                </p>
                <p className={textDescription}>
                    Another problem I ran into was design-related. I knew during the ideation and design process that I wanted 
                    to include an emergency 911 button for users to easily access if needed. I initially thought to put the 
                    button at the top of the page under the header for visibility. I had a few colleagues test out the app for 
                    user experience feedback, and the feedback I received was that the button may be touched unintentionally 
                    since it is likely the first thing the user will see. This feedback helped me to move the button to the 
                    footer component, where it is still visible and easily accessible, but less likely to be unintentionally 
                    pressed.
                </p>

                <h3 className={subheading}>Lessons Learned</h3>
                <p className={textDescription}>
                This, being my first progressive web application dev project, was truly a tremendous and exciting learning 
                experience. I learned how to:
                </p>
                <ul className={list}>
                    <li>Refactor code to create, use, and reuse React components</li>
                    <li>Use props for component variations</li>
                    <li>Perform a GraphQL query and add the code into Gatsby to make site features dynamic</li>
                    <li>Install and configure plugins</li>
                    <li>Troubleshoot site rendering problems</li>
                    <li>Enable the project for SEO</li>
                    <li>Use and modify Material UI components</li>
                    <li>Convert it to a progressive web app</li>
                    <li>Deploy the project to Netlify</li>
                </ul>
                <p className={textDescription}>
                    Overall this project taught me to think more programmatically while maintaining a goal of providing a 
                    positive user experience. I also gained a lot of confidence in solving problems utilizing internet searches 
                    and consulting with other seasoned developers.
                </p>
                <p><Link to="/contact" className={link}>Want to work with me? Reach out</Link>.</p>
            </div>
        </Layout>
    )
}

export default LansingHelp