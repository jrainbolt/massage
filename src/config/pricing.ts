export const pricing = {
  eyebrow: 'SESSION OPTIONS',
  title: ['Time set aside', 'just for you.'],
  description: 'All sessions include a brief consultation and time to settle in. No add-ons, no surprise fees—just considered care.',
  helpTitle: 'Not sure what to choose?',
  helpCta: 'Let’s figure it out together.',
  popularLabel: 'MOST POPULAR',
  reserveCta: 'Reserve',
  durationUnit: 'MIN',
  sessions: [
    { minutes: 60, price: '$110', name: 'A focused reset', description: 'Ideal for one or two areas of concern.' },
    { minutes: 90, price: '$155', name: 'Room to go deeper', description: 'Our most popular session for full-body care.', featured: true },
    { minutes: 120, price: '$205', name: 'The complete restore', description: 'Spacious, unhurried, and deeply restorative.' },
  ],
} as const
