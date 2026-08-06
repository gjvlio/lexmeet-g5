/**
 * Consolidated static page & services content module.
 * Single source of truth for navigation, hero, services, values, and contact data.
 */

export const NAV_ITEMS = [
  { label: 'Home', href: '/' },
  { label: 'Lawyers Profile', href: '/lawyer-profile' },
  { label: 'Law Practice', href: '/law-practice' },
  { label: 'Law Office', href: '/law-office' },
  { label: 'Our Services', href: '/#services' },
  { label: 'Everyday Law', href: '/everyday-law' },
  { label: 'Contact Us', href: '/contact-us' },
];

export const SERVICES_LIST = [
  {
    id: 'assist',
    key: 'assist',
    title: 'ASSIST',
    subtitle: 'FREE Online Legal Assessment',
    body: 'FREE Online Legal Assessment',
    buttonLabel: 'Ask Lawyers',
    path: '/#services'
  },
  {
    id: 'docs',
    key: 'docs',
    title: 'DOCS',
    subtitle: 'Create Own Documents With Lawyer Review',
    body: 'Create Own Documents With Lawyer Review',
    buttonLabel: 'Create Legal Document',
    path: '/#services'
  },
  {
    id: 'consult',
    key: 'consult',
    title: 'CONSULT',
    subtitle: 'Paid Online Legal Consultation',
    body: 'Paid Online Legal Consultation',
    buttonLabel: 'Talk to Lawyer',
    path: '/#services'
  },
  {
    id: 'works',
    key: 'works',
    title: 'WORKS',
    subtitle: 'FREE Legal Fee Proposals and Paid Legal Works Delivery',
    body: 'FREE Legal Fee Proposals and Paid Legal Works Delivery',
    buttonLabel: 'Request Proposal',
    path: '/#services'
  }
];

export const SERVICES = SERVICES_LIST;

export const PRACTICE_AREAS_LIST = [
  {
    title: 'FAMILY LAW',
    subtitle: 'Domestic & OFW Relations',
    body: 'Navigate sensitive domestic matters with complete privacy and remote convenience. Our platform securely handles virtual consultations and documentation for marriage, support, and property relations, especially ideal for Overseas Filipino Workers (OFWs).'
  },
  {
    title: 'CIVIL LAW',
    subtitle: 'Property & Contract Disputes',
    body: "Resolve property disputes, debt claims, and complex contractual issues through our streamlined digital dispute resolution channels. We provide fast, actionable legal strategies to protect the assets of startups, Homeowner's Associations, and foreign investors."
  },
  {
    title: 'CRIMINAL LAW',
    subtitle: 'Defense & Case Filings',
    body: 'Access immediate, highly confidential legal counsel when facing serious accusations or when you need to file a formal complaint. Our secure e-lawyering platform connects you with experienced defense attorneys for urgent virtual consultations and strategic case planning.'
  },
  {
    title: 'LABOR LAW',
    subtitle: 'Employment & Compliance',
    body: 'Ensure your business remains fully compliant or proactively defend your rights as an employee with our expert online counsel. We simplify complex employment contracts, workplace dispute resolution, and regulatory compliance for modern MSMEs and global workers.'
  }
];

export const PRACTICE_AREAS = PRACTICE_AREAS_LIST;

export const CORE_VALUES_DATA = [
  {
    title: 'Accessibility',
    description: 'Breaking physical barriers by providing top-tier legal services online 24/7 across Luzon, Visayas, Mindanao, and abroad.'
  },
  {
    title: 'Transparency',
    description: 'Upfront, fixed-fee pricing with zero surprise billable hours or hidden costs.'
  },
  {
    title: 'Confidentiality',
    description: 'Bank-grade encryption protecting all virtual consultations, documents, and client communications.'
  },
  {
    title: 'Excellence',
    description: 'Rigorous legal review standards by experienced Philippine-licensed attorneys.'
  }
];

export const MISSION_VISION_DATA = {
  mission: 'To democratize access to justice for every Filipino worldwide by harnessing technology to make legal assistance convenient, transparent, and reachable.',
  vision: 'To build the leading, trusted digital legal ecosystem in the Philippines, empowering citizens and businesses to navigate law with confidence.'
};

export const LAW_UPDATES = [
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
  fax: '63203817',
  viber: '(+63) 999-999-9999',
  email: 'contact@rizallawoffice.com',
  quote: 'Justice you can actually reach',
};

export const WEBSITE_AGREEMENTS = [
  { label: 'Terms of Use', href: '#' },
  { label: 'Privacy Policy', href: '#' },
  { label: 'Informed Consent for Services Performed', href: '#' },
  { label: 'Disclaimer', href: '#' },
  { label: 'Child Safety Standards Policy', href: '#' },
  { label: 'Subscription Agreement', href: '#' },
];

export const OFFICE_LOCATIONS = [
  {
    region: 'Luzon Main Office',
    address: 'Unit 608, 6th floor, AIC Burgundy Empire Tower, ADB Ave Cor. Garnet Rd, Ortigas Center, Pasig City',
    phone: '(02) 8451-1594',
    email: 'pasig@rizallawoffice.com',
  },
  {
    region: 'Visayas Regional Hub',
    address: '8th Floor, Cebu Tower Center, Cardinal Rosales Avenue, Cebu Business Park, Cebu City',
    phone: '(032) 234-8900',
    email: 'cebu@rizallawoffice.com',
  },
  {
    region: 'Mindanao Regional Hub',
    address: '12th Floor, Davao Finance Tower, J.P. Laurel Avenue, Bajada, Davao City',
    phone: '(082) 298-4455',
    email: 'davao@rizallawoffice.com',
  },
];
