import { Project, Experience, SkillCategory, Testimonial } from './types';

export const HERO_DATA = {
  name: 'Kawser Ahmed Roni',
  role: 'Senior Full-Stack Developer / Architect',
  experienceYears: 8,
  projectsCount: 90,
  currentCompany: 'MediaSoft (Dhaka)',
  tagline: 'Building enterprise-grade digital systems with high-concurrency architectures, microservices, and pixel-perfect interactive frontends.',
  ctaResume: '#resume',
  ctaContact: '#contact'
};

export const PROJECTS_DATA: Project[] = [
  {
    id: 'apex-ecommerce',
    title: 'ApexScale Enterprise E-commerce',
    description: 'A highly scalable, multi-tenant B2B/B2C marketplace engineered to sustain high volumes of concurrent traffic with real-time inventory adjustments.',
    category: 'E-commerce',
    techStack: ['Next.js', 'Node.js', 'PostgreSQL', 'Redis', 'Ant Design', 'Tailwind CSS', 'Docker'],
    metrics: [
      { label: 'Platform Uptime', value: '99.99%', description: 'Redundant microservices cluster' },
      { label: 'Page Load Speed', value: '0.4s', description: 'Server-side rendering & Redis edge caching' },
      { label: 'Annual GMV', value: '$15M+', description: 'Processed across 200+ partner stores' }
    ],
    details: [
      'Engineered an event-driven catalog indexing architecture that reduces database stress during peak sales traffic.',
      'Developed custom admin dashboards with Ant Design, managing thousands of products, discounts, and real-time order states.',
      'Implemented Redis cluster caching layer that dropped average server response times from 350ms to 45ms.'
    ],
    liveUrl: '#apex-ecommerce-case',
    systemFlow: ['User adds product', 'Next.js proxies to Node.js API', 'Redis checks inventory lock', 'PostgreSQL commits transaction', 'WebSockets broadcast to POS terminals']
  },
  {
    id: 'logisync-wms',
    title: 'LogiSync Warehouse Management System',
    description: 'An automated inventory and logistics solution supporting high-speed FIFO/LIFO tracking, barcode scanning, and optimized route generation for warehouse staff.',
    category: 'WMS',
    techStack: ['React', 'Node.js', 'Knex.js', 'PostgreSQL', 'React Native', 'Socket.io', 'PM2'],
    metrics: [
      { label: 'Picking Performance', value: '+35%', description: 'Optimized item routing heuristics' },
      { label: 'Inventory Accuracy', value: '99.8%', description: 'Eliminated double-booking sync issues' },
      { label: 'Deployments', value: '12', description: 'Active enterprise warehouses in Dhaka' }
    ],
    details: [
      'Designed a multi-threaded reconciliation queue preventing race conditions during simultaneous stock allocations.',
      'Built a low-latency React Native companion app for wireless barcode scanners, enabling sub-10ms data transmission over local Wi-Fi.',
      'Created interactive visual floor maps utilizing canvas renderers to map optimal shelf-picking sequences dynamically.'
    ],
    liveUrl: '#logisync-wms-case',
    systemFlow: ['Scanner read event', 'React Native sends WebSocket packet', 'Node.js triggers allocation logic', 'DB transaction updates row', 'Dashboard redraws floor status']
  },
  {
    id: 'omnipos-retail',
    title: 'OmniPOS Real-Time Point of Sale',
    description: 'An offline-resilient, multi-terminal retail point of sale system offering ultra-fast checkout billing with peripheral hardware integration.',
    category: 'POS',
    techStack: ['React', 'Electron', 'SQLite', 'MongoDB', 'Node.js', 'Tailwind CSS', 'WebUSB API'],
    metrics: [
      { label: 'Checkout Latency', value: '<80ms', description: 'Instant item lookup and invoice generation' },
      { label: 'Offline Resilience', value: '100%', description: 'Continues printing receipts without internet' },
      { label: 'Terminals Managed', value: '500+', description: 'Active retail client workstations' }
    ],
    details: [
      'Engineered a background delta-sync protocol using SQLite locally and MongoDB in the cloud, resolving audit collisions automatically.',
      'Integrated physical receipt printers, barcode readers, and weight scales using the WebUSB API and custom Node.js serial bindings in Electron.',
      'Optimized the cash register interface for touchscreen operators, implementing intensive keystroke hotkeys reducing checkout loops by 4 steps.'
    ],
    liveUrl: '#omnipos-case',
    systemFlow: ['Barcode keyboard trigger', 'Electron scans local SQLite db', 'UI updates invoice state', 'Hardware print signal via USB', 'Background delta-sync queues cloud update']
  }
];

export const EXPERIENCE_DATA: Experience[] = [
  {
    id: 'mediasoft',
    role: 'Senior Full-Stack Developer & Technical Lead',
    company: 'MediaSoft Ltd.',
    location: 'Dhaka, Bangladesh',
    duration: '2021 - Present (5 Years)',
    isMediaSoft: true,
    highlights: [
      'Oversee the core engineering and system scaling of Enterprise E-commerce, Warehouse Management (WMS), and POS suites.',
      'Lead a development team of 8 engineers, instilling modern development cycles, strict static typing guidelines, and automated pull request integrations.',
      'Successfully redesigned legacy database queries and schemas, improving general dashboard report generation times by over 200%.',
      'Designed POS data synchronization networks that process over 100,000 invoices daily with robust offline recovery modes.'
    ],
    coreFocus: 'Enterprise Product Scaling, Offline Sync Systems, & Full-Stack Node/React Architecture'
  },
  {
    id: 'technova',
    role: 'Senior Software Engineer',
    company: 'TechNova Solutions',
    location: 'Dhaka, Bangladesh',
    duration: '2019 - 2021 (2 Years)',
    highlights: [
      'Pioneered Vue.js and Ant Design inside custom SaaS projects to replace aging templates, resulting in a 40% speedup in developer feature delivery.',
      'Architected high-throughput REST and GraphQL APIs handling complex dynamic business intelligence metrics and Excel/PDF data pipelines.',
      'Integrated several national and global payment infrastructures including bKash, SSLCommerz, and Stripe, handling payments secure from fraud.'
    ],
    coreFocus: 'SaaS Dashboard Engineering, Interactive Business Intelligence, & Payment Architectures'
  },
  {
    id: 'appdev',
    role: 'Full-Stack Software Engineer',
    company: 'AppDev Studio',
    location: 'Dhaka, Bangladesh',
    duration: '2018 - 2019 (1 Year)',
    highlights: [
      'Crafted mobile-responsive web applications for regional clients using React, Express, and Knex.js queries.',
      'Developed responsive cross-platform mobile apps using React Native, uploading to both App Store and Play Store.',
      'Secured backend endpoints, configured SSL certifications on Nginx, and managed server environments running under PM2.'
    ],
    coreFocus: 'Cross-platform Mobile Apps, SQL Database Design, & Server Provisioning'
  }
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    category: 'Frontend & UI Frameworks',
    description: 'Expertise in building high-performance SPAs and server-rendered dashboards with modern UI kit libraries.',
    skills: [
      { name: 'JavaScript / TypeScript', level: 98, years: 8 },
      { name: 'React / Next.js', level: 96, years: 6 },
      { name: 'Ant Design (Antd)', level: 95, years: 5 },
      { name: 'Tailwind CSS', level: 95, years: 6 },
      { name: 'Vue / Nuxt', level: 85, years: 3 },
      { name: 'Angular', level: 78, years: 2 }
    ]
  },
  {
    category: 'Backend & Databases',
    description: 'Constructing robust API endpoints, secure auth systems, transactional ledgers, and fast caching.',
    skills: [
      { name: 'Node.js / Express', level: 95, years: 7 },
      { name: 'PostgreSQL / SQL', level: 92, years: 7 },
      { name: 'Redis Caching', level: 88, years: 5 },
      { name: 'Knex.js / Drizzle ORM', level: 90, years: 5 },
      { name: 'MongoDB', level: 85, years: 5 },
      { name: 'REST / GraphQL', level: 94, years: 6 }
    ]
  },
  {
    category: 'Systems, Mobile & Desktop',
    description: 'Developing outside standard web browsers — desktop shells, hardware bindings, and mobile platforms.',
    skills: [
      { name: 'React Native', level: 86, years: 4 },
      { name: 'Electron', level: 88, years: 3 },
      { name: 'SQLite (Local-first)', level: 90, years: 4 },
      { name: 'Microservices Architectures', level: 85, years: 4 },
      { name: 'Docker Containers', level: 82, years: 3 },
      { name: 'WebSockets (Socket.io)', level: 92, years: 5 }
    ]
  }
];

export const TESTIMONIALS_DATA: Testimonial[] = [
  {
    id: 'test-1',
    name: 'M. S. Rahman',
    role: 'Chief Technology Officer (CTO)',
    company: 'MediaSoft Ltd.',
    text: 'Kawser is an exceptional full-stack developer who transformed our core product architectures. His design of our offline POS synchronization protocol was a masterclass in resilient system engineering. He leads team cycles with professional composure and writes pristine code.'
  },
  {
    id: 'test-2',
    name: 'Anika Tabassum',
    role: 'VP of Product Operations',
    company: 'ApexScale Distribution',
    text: 'Deploying our WMS platform across 12 warehouses in Dhaka was a daunting logistics hurdle. Kawser engineered a canvas-based layout tool and synchronized barcode flow that immediately boosted our picking speed by 35%. His technical insight is matched only by his delivery speed.'
  },
  {
    id: 'test-3',
    name: 'David Jenkins',
    role: 'Founding Engineer',
    company: 'NovaCore SaaS Group',
    text: 'We hired Kawser to build a complex financial billing panel with Next.js and Ant Design. The solution was delivered days ahead of schedule, completely typed in TypeScript, and thoroughly optimized. Over 90 successful projects under his belt is a stat you can immediately feel in his craftsmanship.'
  }
];
