export const SITE = {
  name: 'Ted Thomas',
  title: 'Ted Thomas Magic Map™ | Research Tool + Live Training',
  description: 'Simplify your tax deed and tax lien research. Get nationwide property data from trusted research partner Tax Sale Resources paired with live weekly classes from Ted Thomas.',
  lang: 'en',
  url:
    (typeof process !== 'undefined' && process.env.SITE_URL) ||
    'https://www.taxsaleresources.com',
  twitterHandle: '@taxsaleresources',
  socials: {
    twitter: 'https://twitter.com/taxsaleresources',
    linkedin: 'https://www.linkedin.com/company/tax-sale-resources',
  },
} as const;

export type SiteConfig = typeof SITE;
