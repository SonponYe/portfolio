export const projectGroups = [
  {
    name: 'AI Products',
    summary: 'AI-driven assistants and automation tools.',
    projects: [
      {
        title: 'Levi - AI-Powered Restaurant Assistant',
        desc: 'AI assistant to streamline restaurant operations: reminders, purchase logs, and analytics. Integrated ElevenLabs for human-like voice interactions.',
        tech: ['LLM APIs', 'ElevenLabs', 'React', 'Supabase'],
        icon: '/icons/ai.svg',
        details: {
          whatItIs:
            'Levi is a voice-enabled operations copilot for restaurants that helps owners and staff track daily work without managing spreadsheets manually.',
          highlights: [
            'Voice-first interactions using ElevenLabs to make updates quick during busy shifts.',
            'Centralized reminders and purchase logs so teams can avoid missed restocks.',
            'Operational snapshots for owners to review trends and recurring cost issues.'
          ],
          value:
            'Reduced admin friction and made decision-making faster by capturing operations data in one place.'
        }
      },
      {
        title: 'Aya - AI Powered Store',
        desc: 'AI system assisting sellers with customer interactions and order facilitation.',
        tech: ['LLM APIs', 'React'],
        icon: '/icons/ai.svg',
        details: {
          whatItIs:
            'Aya is an AI store assistant that supports sellers with customer communication and helps guide buyers from inquiry to order.',
          highlights: [
            'Built my Merrylow, inspired by Mackey Kumi Jr.',
            'Generates quick, context-aware replies for common customer questions.',
            'Supports smoother order flow by reducing back-and-forth between buyer and seller.',
            'Built for small businesses that need support but cannot run full support teams.'
          ],
          value:
            'Improved response speed and consistency, which can increase customer trust and conversion.'
        }
      }
    ]
  },
  {
    name: 'Apps & Systems',
    summary: 'Mobile-first apps and operational systems.',
    projects: [
      {
        title: 'UG Navigate - Unfinished',
        desc: 'Campus shortest path finder using graph algorithms to compute optimal routes across campus.',
        tech: ['Algorithms', 'React Native'],
        icon: '/icons/mobile.svg',
        details: {
          whatItIs:
            'UG Navigate is a mobile navigation app that helps students and visitors find the fastest routes between campus locations.',
          highlights: [
            'Applies graph-based shortest-path logic to map efficient routes.',
            'Mobile-focused interface designed for quick usage while walking.',
            'Can be extended with accessibility-aware and time-based routing.'
          ],
          value:
            'Makes campus movement easier and reduces confusion for new students and guests.'
        }
      },
      {
        title: 'Restaurant Management System - (Micjean Royal Restaurant App)',
        desc: 'Full-stack solution built with React Native and Supabase featuring modern UI and automated reporting.',
        tech: ['React Native', 'Supabase'],
        icon: '/icons/web.svg',
        details: {
          whatItIs:
            'A full-stack restaurant operations platform for managing records, reporting, and day-to-day workflows.',
          highlights: [
            'Built by Team 5ive9ine',
            'Cross-platform React Native frontend for on-the-go management.',
            'Supabase backend for data storage, auth, and streamlined integrations.',
            'Automated reporting to reduce manual end-of-day and periodic summaries.'
          ],
          value:
            'Improved operational visibility and cut time spent on repetitive reporting tasks.'
        }
      }
    ]
  },
  {
    name: 'Web & Client Work',
    summary: 'Business websites and production-ready client delivery.',
    projects: [
      {
        title: 'Sniris Website',
        desc: 'Company website for a London-based building and construction business.',
        link: 'https://www.sniris.com/',
        tech: ['Web Development', 'Business Website'],
        icon: '/icons/web.svg',
        details: {
          whatItIs:
            'Marketing and information website for a construction company focused on clear service communication and credibility.',
          highlights: [
            'Professional service pages that communicate offerings clearly.',
            'Simple client journey from discovery to contact.',
            'Production-ready deployment for real business usage.'
          ],
          value:
            'Strengthened digital presence and helped present services with a polished, trustworthy brand image.'
        }
      },
      {
        title: 'Capital Business Group',
        desc: 'Website for a London-based auto mechanic firm.',
        link: 'https://capital-business-group.vercel.app/',
        tech: ['Web Development', 'Automotive'],
        icon: '/icons/web.svg',
        details: {
          whatItIs:
            'A business website tailored for an automotive services company to present offerings and capture new customer inquiries.',
          highlights: [
            'Service-focused content structure for faster user understanding.',
            'Clear contact pathways to encourage inquiry submissions.',
            'Optimized for practical use on both desktop and mobile.'
          ],
          value:
            'Enabled the client to communicate services online more effectively and improve lead capture opportunities.'
        }
      },
      {
        title: 'Quick Caterers',
        desc: 'Website for a London-based catering company.',
        link: 'https://benedictaentsie54.wixsite.com/quick-caterers',
        tech: ['Web Development', 'Catering', 'Wix'],
        icon: '/icons/web.svg',
        details: {
          whatItIs:
            'A web presence for a catering brand to showcase offerings, packages, and booking channels.',
          highlights: [
            'Showcases catering services in a simple, accessible format.',
            'Supports social proof and event-readiness messaging.',
            'Structured to encourage direct booking and inquiries.'
          ],
          value:
            'Helped the business present itself professionally online and improve discoverability for potential clients.'
        }
      }
    ]
  },
  {
    name: 'Design',
    summary: 'UI and product design explorations.',
    projects: [
      {
        title: 'Figma Design - Restaurant App',
        desc: 'High-fidelity UI design created in Figma showcasing modern, user-centred screens.',
        link: 'https://www.figma.com/design/MHyWNFmcRCuaquKlXWJH1O/Untitled',
        tech: ['Figma', 'UI/UX'],
        icon: '/icons/figma.svg',
        details: {
          whatItIs:
            'A high-fidelity design exploration for a restaurant app focused on modern visuals and intuitive ordering flow.',
          highlights: [
            'Clean visual hierarchy and modern component styling.',
            'Designed core screens around user-centered navigation patterns.',
            'Acts as a reusable blueprint for future product builds.',
            'inspired to start UI/UX designing my Mackey Kumi and its been beautiful since'
          ],
          value:
            'Created a clear product direction before development and accelerated handoff readiness.'
        }
      },
      {
        title: 'MindMesh Prototype',
        desc: 'All-in-one student learning web app design by Preworks, combining AI chatbots, quiz generation, flashcards, and analytics.',
        link: 'https://www.figma.com/design/NNIBfNyQbEuJL2J12PVZxa/mindmesh-prototype-MVp?node-id=0-1&p=f',
        tech: ['Figma', 'UI/UX', 'EdTech'],
        icon: '/icons/figma.svg',
        details: {
          whatItIs:
            'MindMesh is an all-in-one student learning web app being developed by Preworks to centralize AI-assisted study tools in a single platform.',
          highlights: [
            'Includes chatbot support for student learning and quick academic guidance.',
            'Generates AI-powered quizzes from student learning materials.',
            'Creates flashcards from uploaded student content for revision.',
            'Provides analytics to help students track learning progress and outcomes.',
            'Planned addition: lecturer-uploaded papers, articles, and research content.'
          ],
          value:
            'Brings study, revision, and progress tracking into one focused learning experience for students.'
        }
      }
    ]
  }

  
]

export const totalProjects = projectGroups.reduce(
  (count, group) => count + group.projects.length,
  0
)
