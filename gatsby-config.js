module.exports = {
  
  siteMetadata: {
    url: 'https://www.rjscodes.com',
    title: 'R.J. Schodowski',
    description: 'R.J. Schodowski Portfolio Website',
    author: 'R.J. Schodowski'
  },

  flags: {
    PRESERVE_WEBPACK_CACHE: true
  },

  plugins: [
    `gatsby-plugin-material-ui`,
    'gatsby-plugin-postcss',
    'gatsby-transformer-sharp',
    'gatsby-plugin-image',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sass',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `R.J. Schodowski`,
        short_name: `RJS Codes`,
        start_url: `/`,
        background_color: `#f7f0eb`,
        theme_color: `#3f51b6`,
        display: `standalone`,
        icon: `src/images/fav-icon.svg`,
        include_favicon: true,
      },
    },
    `gatsby-plugin-offline`, 
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: `${__dirname}/src/images`,
      },
    },
    'gatsby-plugin-sharp',
    {
      resolve: 'gatsby-transformer-remark',
        options: {
          plugins: [
            'gatsby-remark-relative-images',
            {
              resolve: 'gatsby-remark-images',
              options: {
                maxWidth: 750,
                linkImagesToOriginal: false
              }
            }
          ]
        }
      }
    
  ],
}

