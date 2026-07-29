/**
 * Static page content extracted from the Figma design.
 * In production these would come from a CMS / API; kept here so the
 * Home page renders identically to the hi-fi mockup out of the box.
 */

export const NAV_ITEMS = [
  { label: 'Home', href: '/' },
  { label: 'Lawyers Profile', href: '/lawyer-profile' },
  { label: 'Law Practice', href: '/law-practice' },
  { label: 'Law Office', href: '/law-office' },
  { label: 'Everyday Law', href: '/everyday-law' },
  { label: 'Our Services', href: '/our-services' },
  { label: 'Contact Us', href: '/contact-us' },
];

export type Service = {
  key: string;
  title: string;
  body: string;
};

export const SERVICES: Service[] = [
  {
    key: 'assist',
    title: 'ASSIST',
    body: 'Get on-demand assistance and clear answers for your everyday legal questions without the hassle of traditional appointments.',
  },
  {
    key: 'docs',
    title: 'DOCS',
    body: 'Automate and secure your essential business agreements with our intelligent, cloud-based document platform.',
  },
  {
    key: 'consult',
    title: 'CONSULT',
    body: 'Schedule and attend private, encrypted video consultations with specialized lawyers from anywhere in the world.',
  },
  {
    key: 'works',
    title: 'WORKS',
    body: 'Engage our legal experts for comprehensive, project-based matters backed by transparent, fixed-fee pricing.',
  },
];

export type Practice = {
  title: string;
  body: string;
};

export const PRACTICE_AREAS: Practice[] = [
  {
    title: 'FAMILY LAW',
    body: 'Navigate sensitive domestic matters with complete privacy and remote convenience. Our platform securely handles virtual consultations and documentation for marriage, support, and property relations, especially ideal for Overseas Filipino Workers (OFWs).',
  },
  {
    title: 'CIVIL LAW',
    body: "Resolve property disputes, debt claims, and complex contractual issues through our streamlined digital dispute resolution channels. We provide fast, actionable legal strategies to protect the assets of startups, Homeowner's Associations, and foreign investors.",
  },
  {
    title: 'CRIMINAL LAW',
    body: 'Access immediate, highly confidential legal counsel when facing serious accusations or when you need to file a formal complaint. Our secure e-lawyering platform connects you with experienced defense attorneys for urgent virtual consultations and strategic case planning.',
  },
  {
    title: 'LABOR LAW',
    body: 'Ensure your business remains fully compliant or proactively defend your rights as an employee with our expert online counsel. We simplify complex employment contracts, workplace dispute resolution, and regulatory compliance for modern MSMEs and global workers.',
  },
];

export const LAW_UPDATES: string[] = [
  'New Guidelines on Digital OSCA IDs and E-Commerce Discount Compliance',
  'Data Privacy Act Checklist: What Tech Startups & MSMEs Need to Know This Year',
  'E-Signature Validity for OFWs: Securing Real Estate and Contracts from Abroad',
];

export const EVERYDAY_LAW =
  "Navigating the legalities of daily life is now as easy as checking your email. We've transformed traditional, slow legal hurdles into streamlined digital experiences. From document reviews and basic dispute resolution to securing your business agreements, we handle the legal heavy lifting entirely online. Reclaim your time and avoid the waiting rooms. Get clear, fixed-rate legal support designed for the modern Filipino, right from the comfort of your home or office.";

export const HERO = {
  eyebrow: 'E-LAWYERING FOR THE PHILIPPINES',
  headline: 'Reachable.',
  body: 'Say goodbye to waiting rooms and surprise billable hours. Our secure platform gives you instant, flat-rate access to top-tier attorneys from anywhere in the world, on your schedule.',
  cta: 'Get started online',
};

export const CONTACT = {
  address: [
    'Unit 608, 6th floor',
    'AIC Burgundy Empire Tower',
    'ADB Avenue Corner, Garnet Road',
    'Ortigas Center, Pasig City',
  ],
  tel: '(02) 8451-1594',
  cel: '(+63) 999-999-9999',
  viber: '(+63) 999-999-9999',
  email: 'contact@rizallawoffice.com',
  fax: '63203817',
  quote: 'Justice you can actually reach',
};

export const WEBSITE_AGREEMENTS: { label: string; href: string }[] = [
  { label: 'Terms of Use', href: '#' },
  { label: 'Privacy Policy', href: '#' },
  { label: 'Informed Consent for Services Performed', href: '#' },
  { label: 'Disclaimer', href: '#' },
  { label: 'Child Safety Standards Policy', href: '#' },
  { label: 'Subscription Agreement', href: '#' },
];
