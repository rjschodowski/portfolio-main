import React from 'react'
import { Link } from 'gatsby'
import { StaticImage } from 'gatsby-plugin-image'
import Layout from '../components/layout'
import SEO from '../components/seo'
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { heading, projectsContainer, project, projectRow, introText, textDescription, projectImage, subheading } from '../styles/projects.module.css'

const useStyles = makeStyles((theme) => ({
    root: {
      '& > *': {
        margin: theme.spacing(1),
      },
    },
  }));

const Projects  = () => {
    const classes = useStyles();
    return (
        <Layout>
            <SEO title="Projects" />
            <h1 className={heading}>Projects</h1>
            <div className={projectsContainer}>
                <div className={textDescription}>
                    <p className={textDescription}>I am always looking for projects to design and build, 
                    whether my own or working collaboratively with others.
                        Here is what I have accomplished so far and what I am
                        currently working on:
                    </p>
                </div>
                <div className={projectRow}>
                    <div className={project}>
                        <Link to="/lansinghelp">
                            <div className={projectImage}>
                                <StaticImage
                                    src="../images/mobilehomescreen.png"
                                    alt="mobile version of application's home screen"
                                    placeholder="blurred"
                                    layout="constrained"
                                    maxWidth={800}
                                    maxHeight={800} />
                                </div>           
                            <h3 className={subheading}>Lansing Help Guide</h3>
                            <p className={textDescription}>A community resource progressive web app built with React, GraphQL, Material UI, 
                                and Tailwind CSS in Gatsby.js.
                            </p>
                            <Button variant="contained" color="primary">
                                VIEW PROJECT
                            </Button>
                        </Link>
                    </div>

                    <div className={project}>
                        <Link to="/404">
                            <div className={projectImage}>
                                <StaticImage
                                    src="../images/placeholder.svg"
                                    alt="temporary placeholder image"
                                    placeholder="blurred"
                                    layout="constrained"
                                    maxWidth={800}
                                    maxHeight={800} />
                            </div>
                            <h3 className={subheading}>Forget-Me-Shop</h3>
                            <p className={textDescription}>This project is my current work in progress. It is a grocery shopping app geared toward those
                            couples and families who need their shopping list updated in real-time. More to come soon!
                            </p>
                        </Link>
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default Projects