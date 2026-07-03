export const business = {
  name: 'Stillwater Bodywork',
  category: 'Therapeutic Massage',
  locationShort: 'Foster City, California',
  location: 'Bay Area, California',
  address: '1234 SE Hawthorne Blvd, Foster City, CA',
  phone: '(503) 555-0148',
  phoneHref: '+15035550148',
  email: 'hello@stillwaterbodywork.com',
  bookingUrl: 'https://example.com/book',
  hours: ['Mon–Thu  9am–7pm', 'Friday  9am–3pm', 'Sat–Sun  Closed'],
  appointmentNote: 'By appointment only',
  tagline: 'Thoughtful bodywork for a more comfortable, connected life.',
  footerNote: 'Made with care in Foster City, California.',
} as const

export const navigation = [
  { label: 'Services', href: '#services' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'About', href: '#about' },
  { label: 'FAQ', href: '#faq' },
  { label: 'Contact', href: '#contact' },
] as const

export const hero = {
  eyebrow: 'THERAPEUTIC MASSAGE · FOSTER CITY, CALIFORNIA',
  title: ['Come back to', 'your body.'],
  description: 'Thoughtful, personalized bodywork for relief, recovery, and a little more ease in your day.',
  primaryCta: 'Book appointment',
  secondaryCta: 'Explore services',
  trustItems: ['Licensed massage therapist', 'Personalized care', 'Online booking'],
  artworkLabel: 'A calm, sunlit massage studio',
  quote: ['“Your body is always speaking.', 'Let’s take time to listen.”'],
} as const

export const sectionContent = {
  services: {
    eyebrow: 'HOW I CAN HELP',
    title: ['Care that meets you', 'where you are.'],
    intro: "Every session is shaped around what your body needs that day—whether that's focused relief, deep rest, or support for the way you move.",
    bestForLabel: 'BEST FOR',
    cta: 'Book this session',
  },
  booking: {
    eyebrow: 'READY WHEN YOU ARE',
    title: ['Your body deserves', 'your attention.'],
    description: 'Choose a time that works for you. Online booking is simple, secure, and available anytime.',
    questionText: 'Questions first?',
  },
  faq: { eyebrow: 'GOOD TO KNOW', title: ['Questions,', 'answered.'], prompt: 'Still wondering about something?', cta: 'Send me a note' },
  contact: { eyebrow: 'COME AS YOU ARE', title: ['Find your way', 'to stillness.'], locationLabel: 'LOCATION', contactLabel: 'GET IN TOUCH', hoursLabel: 'HOURS' },
} as const

export const footerContent = {
  groups: {
    explore: { label: 'EXPLORE', links: [{ label: 'Services', href: '#services' }, { label: 'Pricing', href: '#pricing' }, { label: 'About Maya', href: '#about' }, { label: 'FAQ', href: '#faq' }] },
    legal: { label: 'LEGAL', links: [{ label: 'Privacy policy', href: '#privacy' }, { label: 'Accessibility', href: '#accessibility' }] },
  },
  connectLabel: 'CONNECT',
  emailLabel: 'Email',
  phoneLabel: 'Call',
  copyrightSuffix: 'All rights reserved.',
} as const
