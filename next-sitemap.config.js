let policy = {
  userAgent: '*',
};

module.exports = {
  siteUrl: process.env.SITE_URL,
  generateRobotsTxt: true,
  robotsTxtOptions: {
    policies: [
      policy,
      {
        userAgent: '*',
        allow: '/',
      },
      {
        userAgent: '*',
        disallow: '/slice-simulator',
      },
    ],
    additionalSitemaps: [`${process.env.SITE_URL}/server-sitemap.xml`],
  },
  exclude: ['/slice-simulator'],
};
