import startupImg from '@/assets/ELassets/startup.jpg';
import ofwImg from '@/assets/ELassets/ofw.jpg';
import homeownerAssocImg from '@/assets/ELassets/homeowner assoc.jpg';
import eCommerceImg from '@/assets/ELassets/e commerce.jpg';
import useLaptopImg from '@/assets/ELassets/uselaptop.png';
import walletImg from '@/assets/ELassets/wallet.png';
import writingImg from '@/assets/ELassets/writing.png';
import figureImg from '@/assets/ELassets/figure.png';
import givedocuImg from '@/assets/ELassets/givedocu.png';

import attyAnthonyImg from '@/assets/ELassets/Atty Anthony.png';
import attyAntonetteImg from '@/assets/ELassets/Atty. Antonette.png';
import attySilversImg from '@/assets/ELassets/Atty. Silvers.png';

export const EVERYDAY_LAW_CATEGORIES = {
  'everyday-law': 'Everyday Law',
  'law-updates': 'Law Updates',
  'law-blogs': 'Law Blogs'
};

export const EVERYDAY_LAW_ARTICLES = [
  {
    slug: 'online-startup-msme-registration',
    category: 'everyday-law',
    title: 'Online Startup & MSME Registration',
    date: 'July 10, 2026',
    readTime: '0 min read',
    views: 67,
    author: { name: 'Atty. Silvers Rayleigh', role: 'Managing Partner', avatar: attySilversImg },
    image: startupImg,
    tags: ['Corporate', 'Platform', 'Local', 'Registration', 'MSME', 'Online', 'Startup'],
    excerpt: 'Registering a new tech startup or MSME in the Philippines no longer requires enduring endless lines, confusing government...',
    body: `Registering a new tech startup or MSME in the Philippines no longer requires enduring endless lines, confusing government bureaucracy, or unpredictable legal billing. Our e-lawyering platform digitizes the entire incorporation process from start to finish. We provide clear, step-by-step guidance on choosing the right corporate structure, securing your intellectual property, and drafting essential founder agreements — all managed securely through our transparent, cloud-based client portal without you ever needing to visit a traditional office.\n\nReady to launch your business with complete legal confidence? Book a virtual consultation today to get a fixed-rate quote and start your digital incorporation process.\n\nFor modern digital platforms and e-commerce businesses, complying with the Philippine Data Privacy Act is not just a legal requirement — it is a cornerstone of customer trust. We simplify this by offering online privacy assessments, automated privacy policy generation, and digital compliance mapping tailored specifically for tech-driven enterprises. Protect your business from regulatory fines and data breaches with our streamlined, tech-forward legal frameworks.\n\nBook a virtual consultation today to get a fixed-rate quote and start your digital incorporation process.`
  },
  {
    slug: 'manage-ofw-property-family-remotely',
    category: 'everyday-law',
    title: 'Manage OFW Property & Family Remotely',
    date: 'July 26, 2026',
    readTime: '0 min read',
    views: 82,
    author: { name: 'Atty. Silvers Rayleigh', role: 'Managing Partner', avatar: attySilversImg },
    image: ofwImg,
    tags: ['OFW', 'Family', 'Property', 'Remote'],
    excerpt: 'Being an OFW means sacrificing physical presence, but it should never mean losing control over your hard-earned assets or family matters...'
  },
  {
    slug: 'online-property-hoa-mediation',
    category: 'everyday-law',
    title: 'Online Property & HOA Mediation',
    date: 'July 31, 2026',
    readTime: '0 min read',
    views: 45,
    author: { name: 'Atty. Silvers Rayleigh', role: 'Managing Partner', avatar: attySilversImg },
    image: homeownerAssocImg,
    tags: ['Property', 'HOA', 'Mediation', 'Dispute'],
    excerpt: 'Property disputes and Homeowner\'s Association (HOA) conflicts can quickly escalate, draining your time, finances, and neighborhood...'
  },
  {
    slug: 'expanded-maternity-leave-now-in-effect',
    category: 'law-updates',
    title: 'Expanded maternity leave now in effect',
    date: 'July 31, 2026',
    readTime: '0 min read',
    views: 120,
    author: { name: 'Atty. Antonette Sy', role: 'Senior Partner', avatar: attyAntonetteImg },
    image: useLaptopImg,
    tags: ['Human Rights', 'Women\'s Rights', 'Maternity', 'Childbirth & Family', 'Paid Leave'],
    excerpt: 'Covered employees are entitled to additional paid leave starting this month. Who qualifies, and what employers must do...',
    body: `A new law takes effect this August that expands paid maternity leave for covered employees. If you are an expecting employee — or an employer — here is what changes, and what you need to do.\n\nUnder the new rules, qualified female workers are entitled to an extended period of paid leave for every instance of childbirth, regardless of the manner of delivery. The benefit applies across the private sector, the public sector, and, for the first time, to certain workers in the informal economy who meet the contribution requirements.\n\nFor employees, the practical effect is straightforward: more protected time, without loss of pay, around the birth of a child. To claim it, you will need to notify your employer and your contribution agency within the periods the law specifies. Missing those windows can delay or reduce the benefit, so the paperwork matters.\n\nFor employers, the obligations are new and enforceable. Covered establishments must update their leave policies, adjust payroll accordingly, and ensure HR is applying the extended entitlement correctly from the effective date forward. Non-compliance carries penalties.\n\nThis summary is general. Whether — and how — the law applies to your specific situation depends on your employment status and your contribution record.`
  },
  {
    slug: 'supreme-court-clarifies-rules-about-checks',
    category: 'law-updates',
    title: 'Supreme Court clarifies rules about checks',
    date: 'July 31, 2026',
    readTime: '0 min read',
    views: 94,
    author: { name: 'Atty. Anthony E. Lopez', role: 'Associate Lawyer', avatar: attyAnthonyImg },
    image: figureImg,
    tags: ['Supreme Court', 'Finance', 'Checks', 'Debt'],
    excerpt: 'The Court reaffirmed that unpaid debt alone is not a crime. What the ruling changes for creditors and debtors...'
  },
  {
    slug: 'new-rules-on-flexible-and-remote-work-setups',
    category: 'law-updates',
    title: 'New rules on flexible and remote work setups',
    date: 'July 31, 2026',
    readTime: '0 min read',
    views: 110,
    author: { name: 'Atty. Antonette Sy', role: 'Senior Partner', avatar: attyAntonetteImg },
    image: givedocuImg,
    tags: ['Remote Work', 'Labor Law', 'Employers', 'Employees'],
    excerpt: 'Employers must now put work-from-home terms in writing. A summary of the requirements and the compliance deadline.'
  },
  {
    slug: 'what-ten-years-of-annulment-cases-taught-me',
    category: 'law-blogs',
    title: 'What ten years of annulment cases taught me',
    date: 'July 31, 2026',
    readTime: '0 min read',
    views: 215,
    author: { name: 'Atty. Silvers Rayleigh', role: 'Managing Partner', avatar: attySilversImg },
    image: givedocuImg,
    tags: ['Divorce', 'My Experience', 'Family Practice', 'Family Law', 'Marriage', 'Wife', 'Husband'],
    excerpt: 'Annulment in the Philippines is slow, costly, and misunderstood. Here\'s what I wish every client knew before they started...',
    body: `In ten years of family practice, I've watched the same misunderstanding walk through my door again and again: the belief that annulment is quick, or cheap, or a formality. It is none of these. But it is also not the impossible ordeal people fear. The truth sits somewhere in between, and knowing where saves my clients months of anxiety.\n\nAnnulment in the Philippines is not divorce. The distinction matters more than most people realize. A divorce ends a valid marriage; an annulment declares that, in the eyes of the law, a valid marriage never existed. That difference shapes everything that follows — the grounds you must prove, the evidence you must gather, and the questions the court will ask.\n\nThe most common ground I handle is psychological incapacity, and it is the most misunderstood. It does not mean your spouse was difficult, or that the marriage failed. It means that, at the time of the marriage, one party was genuinely incapable of meeting its essential obligations. Proving that requires more than testimony about a bad relationship. It requires patience.\n\nIf you take one thing from this: speak to a lawyer before you decide anything, and before you spend anything. The path is clearer than the rumors suggest — but only if you start with accurate expectations.`
  },
  {
    slug: 'can-your-employer-really-withhold-your-final-pay',
    category: 'law-blogs',
    title: 'Can your employer really withhold your final pay?',
    date: 'July 31, 2026',
    readTime: '0 min read',
    views: 180,
    author: { name: 'Atty. Anthony E. Lopez', role: 'Associate Lawyer', avatar: attyAnthonyImg },
    image: walletImg,
    tags: ['Labor Law', 'Employment', 'Salary', 'Rights'],
    excerpt: 'Separation doesn\'t mean forfeiture. A short guide to what you\'re owed...'
  },
  {
    slug: 'buying-land-from-the-family-get-it-in-writing',
    category: 'law-blogs',
    title: 'Buying land from the family? Get it in writing',
    date: 'July 31, 2026',
    readTime: '0 min read',
    views: 89,
    author: { name: 'Atty. Antonette Sy', role: 'Senior Partner', avatar: attyAntonetteImg },
    image: writingImg,
    tags: ['Real Estate', 'Family Law', 'Property', 'Contracts'],
    excerpt: 'Informal property transfers between relatives cause some of the ugliest disputes we see...'
  },
  {
    slug: 'e-commerce-data-protection',
    category: 'law-blogs',
    title: 'E-Commerce Data Protection',
    date: 'August 1, 2026',
    readTime: '0 min read',
    views: 312,
    author: { name: 'Atty. Anthony E. Lopez', role: 'Associate Lawyer', avatar: attyAnthonyImg },
    image: eCommerceImg,
    tags: ['E-Commerce', 'Data Privacy', 'Business', 'Tech'],
    excerpt: 'Data is the lifeblood of any modern digital business, but mishandling it can lead to devastating regulatory fines and a complete loss of customer trust. For tech startups, SaaS platforms, and e-commerce ventures, complying with the Philippine Data Privacy Act (DPA) is absolutely non-negotiable...'
  }
];