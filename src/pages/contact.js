import React from 'react';
import { navigate } from 'gatsby-link';
import Layout from '../components/layout';
import SEO from '../components/seo';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import { heading, contactContainer, contactLayout, contactText, contactSocial, socialItem, socialText, socialIcon, contactForm } from '../styles/contact.module.css'

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '100%',
      marginLeft: 0,
    },
  },
}));

function encode(data) {
  return Object.keys(data)
    .map((key) => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
    .join('&')
}

export default function Contact() {
  const classes = useStyles();

  const [state, setState] = React.useState({})

  const handleChange = (e) => {
    setState({ ...state, [e.target.name]: e.target.value })
  }
 
  const handleSubmit = (e) => {
    e.preventDefault()
    const form = e.target
    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({
        'form-name': form.getAttribute('name'),
        ...state,
      }),
    })
      .then(() => navigate(form.getAttribute('action')))
      .catch((error) => alert(error))
  }

  return (
    <Layout>
      <SEO title="Contact" />
      <div className={contactContainer}>
        <h1 className={heading}>Contact Me</h1>
        <div className={contactLayout}>
          <div className={contactSocial}>
            <div className={contactText}>
              <p>Want to get in touch with me? Feel free to connect with me on social media or via the contact form. I look forward to hearing from you!</p>
            </div>
            <div className={socialItem}>
              <a href="https://www.linkedin.com/in/rjschodowski/" alt="R.J. Schodowski LinkedIn profile" target="_blank" rel="noreferrer">
                <span className={socialIcon}>
                  <LinkedInIcon />
                </span>
                <span className={socialText}>linkedin</span>
              </a>
            </div>
            <div className={socialItem}>
              <a href="https://github.com/rjschodowski" alt="R.J. Schodowski GitHub profile" target="_blank" rel="noreferrer">
                <span className={socialIcon}>
                  <GitHubIcon />
                </span>
                <span className={socialText}>github</span>
              </a>
            </div>
          </div>
          <div className={contactForm}>
            <form
              name="contact"
              method="post"
              action="/thanks/"
              data-netlify="true"
              data-netlify-honeypot="bot-field"
              onSubmit={handleSubmit}
              className={classes.root}
              >
                
              <input type="hidden" name="form-name" value="contact" />
              <p hidden>
              <label>
                Don’t fill this out: <input name="bot-field" onChange={handleChange} />
              </label>
              </p>
              <TextField
                id="standard"
                label="Name"
                type="text"
                name="name"
                onChange={handleChange} />
              <TextField
                id="standard"
                label="Subject"
                type="text"
                name="subject"
                onChange={handleChange} />
              <TextField
                id="standard"
                label="Email"
                type="email"
                name="email"
                onChange={handleChange} />
              <TextField
                id="standard-multiline-static"
                label="Message"
                name="message"
                multiline
                rows={5}
                onChange={handleChange}
              />
              <Button variant="contained" color="primary" type="submit">Submit</Button>
            </form>
          </div>
        </div>
      </div>
    </Layout>
  )
}

