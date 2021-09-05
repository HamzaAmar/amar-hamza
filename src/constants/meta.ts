/* eslint-disable line-comment-position */
const meta = {
  siteTitle: 'HMA', // Navigation and Site Title
  siteTitleAlt: 'portfolio and blog Hamza Miloud Amar', // Alternative Site title for SEO
  siteTitleShort: 'hma', // short_name for manifest
  siteUrl:
    process.env.ROOT_URL ||
    'https://laughing-lichterman-b8386d.netlify.app', // Domain of your site. No trailing slash!
  lang: 'en', // Language Tag on <html> element
  pathPrefix: '/',
  siteLogo: 'images/logo.png', // Used for SEO and manifest, path to your image you placed in the 'static' folder
  siteDescription: `Hi am Hamza Miloud Amar this is my portfolio and blog that   describe myself 
                    and can help you find same useful articles and show you how to create some
                    projects from scratch about web development`,
  minibio: `
      <strong>Hi am Hamza Miloud Amar</strong> am JavaScript  and web developer 
      i like to work with javascript and css `,
  author: 'Hamza Miloud Amar', // Author for schemaORGJSONLD

  // siteFBAppID: '123456789', // Facebook App ID - Optional
  userTwitter: '@kentcdodds', // Twitter Username
  ogSiteName: 'Kent C. Dodds', // Facebook Site Name
  ogLanguage: 'en_US',

  // Manifest and Progress color
  themeColor: '#4147DC',
  backgroundColor: '#231C42',

  // Social component
  twitter: 'https://twitter.com/kentcdodds/',
  twitterHandle: '@kentcdodds',
  github: 'https://github.com/kentcdodds/',
  linkedin: 'https://www.linkedin.com/in/kentcdodds/',
  rss: 'https://kentcdodds.com/blog/rss.xml',
  tags: [
    'React',
    'Next',
    'Gatsby',
    'CSS',
    'HTML',
    'Performance',
    'Accessibility',
    'Javascript',
  ],
};

export default meta;
