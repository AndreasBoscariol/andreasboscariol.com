module.exports = {
  siteMetadata: {
    title: `Andreas Boscariol`,
    siteUrl: `https://www.andreasboscariol.com`,
    description: `portfolio`,

  },
  plugins: [
    {
      resolve: 'gatsby-plugin-robots-txt',
      options: {
        host: 'https://www.example.com',
        sitemap: 'https://www.example.com/sitemap.xml',
        policy: [{userAgent: '*', allow: '/'}]
      }
    }
  ]
}