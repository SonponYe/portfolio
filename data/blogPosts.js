export const blogPosts = [
  {
    slug: 'midnight-debug-confessions',
    title: 'Midnight Debug Confessions',
    publishedOn: '2026-03-07',
    mood: 'Chaotic good',
    tags: ['dev-log', 'late-night', 'experiments'],
    excerpt:
      'A tiny bug became a 3-hour adventure and somehow taught me new frontend animation tricks.',
    body: [
      'Tonight started with one button not reacting on mobile and ended with me rewriting half a section animation. Worth it.',
      'The weird part: removing one innocent looking shadow class made the whole interaction feel faster. CSS is magic and mild betrayal at the same time.',
      'Takeaway: if it feels laggy, simplify visual layers before touching logic.'
    ]
  },
  {
    slug: 'ideas-i-should-not-have-at-2am',
    title: 'Ideas I Should Not Have At 2AM',
    publishedOn: '2026-03-06',
    mood: 'Questionable genius',
    tags: ['brainstorm', 'product', 'wild-ideas'],
    excerpt:
      'What if a portfolio had hidden easter eggs that changed based on what time someone visited?',
    body: [
      'I wrote down ten odd feature ideas and honestly, four are actually buildable.',
      'One favorite: a project card that reveals "behind the scenes" voice notes from the build process.',
      'Another: a random mode that shows one weird prototype every time the page loads.'
    ]
  },
  {
    slug: 'client-call-lore',
    title: 'Client Call Lore (No Names, Just Drama)',
    publishedOn: '2026-03-05',
    mood: 'Respectfully unhinged',
    tags: ['freelance', 'storytime', 'lessons'],
    excerpt:
      'Real stories, no name drops. Just the kind of moments every builder eventually collects.',
    body: [
      'A client once asked for a homepage "that feels like a spaceship, but calm." We found a way.',
      'Another wanted everything above the fold including a full FAQ. We negotiated peace and whitespace.',
      'Lesson: translating vibes into specific design decisions is half the job.'
    ]
  }
]

export const totalBlogPosts = blogPosts.length