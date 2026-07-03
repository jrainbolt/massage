export const seo = {
  title: 'Stillwater Bodywork | Therapeutic Massage',
  description: 'Personalized therapeutic massage and restorative bodywork in Portland, Oregon.',
  siteUrl: 'https://yourdomain.com',
  openGraph: {
    title: 'Stillwater Bodywork | Therapeutic Massage',
    description: 'Thoughtful bodywork for relief, recovery, and a little more ease in your day.',
    type: 'website',
    image: '/og-image.jpg',
  },
  schema: {
    '@context': 'https://schema.org',
    '@type': 'MassageTherapist',
    name: 'Stillwater Bodywork',
    description: 'Personalized therapeutic massage and restorative bodywork.',
    telephone: '+1-503-555-0148',
    email: 'hello@stillwaterbodywork.com',
    address: { '@type': 'PostalAddress', streetAddress: '1234 SE Hawthorne Blvd', addressLocality: 'Portland', addressRegion: 'OR', addressCountry: 'US' },
    url: 'https://yourdomain.com',
  },
} as const
