/**
 * Every article on the site, across all three categories — Everyday Law,
 * Law Updates and Law Blogs. They share one shape and one set of components
 * in src/components/article/; `category` is what separates them.
 *
 * In production these would come from a CMS / API.
 */
import startupImg from '@/assets/ELassets/startup.jpg';
import ofwImg from '@/assets/ELassets/ofw.jpg';
import homeownerAssocImg from '@/assets/ELassets/homeowner assoc.jpg';
import eCommerceImg from '@/assets/ELassets/e commerce.jpg';
import useLaptopImg from '@/assets/ELassets/uselaptop.png';
import walletImg from '@/assets/ELassets/wallet.png';
import writingImg from '@/assets/ELassets/writing.png';
import figureImg from '@/assets/ELassets/figure.png';
import givedocuImg from '@/assets/ELassets/givedocu.png';

import scGavelImg from '@/assets/ELassets/sc_gavel.png';
import remoteWorkImg from '@/assets/ELassets/remote_work.png';
import annulmentConsultImg from '@/assets/ELassets/annulment_consult.png';
import paycheckSalaryImg from '@/assets/ELassets/paycheck_salary.png';
import familyLandImg from '@/assets/ELassets/family_land.png';

import attyAnthonyImg from '@/assets/ELassets/Atty Anthony.png';
import attyAntonetteImg from '@/assets/ELassets/Atty. Antonette.png';
import attySilversImg from '@/assets/ELassets/Atty. Silvers.png';

export const ARTICLE_CATEGORIES = {
  'everyday-law': 'Everyday Law',
  'law-updates': 'Law Updates',
  'law-blogs': 'Law Blogs'
};

export const ARTICLES = [
  {
    slug: 'online-startup-msme-registration',
    category: 'everyday-law',
    title: 'Online Startup & MSME Registration',
    date: 'July 10, 2026',
    readTime: '4 min read',
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
    readTime: '4 min read',
    views: 82,
    author: { name: 'Atty. Silvers Rayleigh', role: 'Managing Partner', avatar: attySilversImg },
    image: ofwImg,
    tags: ['OFW', 'Family', 'Property', 'Remote'],
    excerpt: 'Being an OFW means sacrificing physical presence, but it should never mean losing control over your hard-earned assets or family matters...',
    body: `Being an Overseas Filipino Worker (OFW) requires immense sacrifice, spending years abroad to provide for loved ones back home. However, physical distance should never prevent you from safeguarding your hard-earned real estate, investments, and family legal affairs in the Philippines.\n\nOne of the most essential tools for OFWs is a properly executed Special Power of Attorney (SPA). Whether you are purchasing land, managing rental properties, or authorizing a trusted relative to transact with government agencies on your behalf, an SPA provides legal authority to your designated attorney-in-fact. When executed abroad, SPAs must undergo authentication or Apostille through the Philippine Embassy or Consulate in your host country to be legally binding in the Philippines.\n\nBeyond property management, OFWs frequently face challenges regarding estate settlement, bank transactions, and family law matters. Utilizing digital legal consultation platforms allows overseas Filipinos to review contracts, consult with Philippine-licensed attorneys, and execute legal documents remotely without taking expensive emergency flights home.\n\nBefore executing any SPA or real estate transaction from abroad, ensure you consult with a qualified legal professional to specify exact limitations of authority and protect your assets from potential misuse.`
  },
  {
    slug: 'online-property-hoa-mediation',
    category: 'everyday-law',
    title: 'Online Property & HOA Mediation',
    date: 'July 31, 2026',
    readTime: '3 min read',
    views: 45,
    author: { name: 'Atty. Silvers Rayleigh', role: 'Managing Partner', avatar: attySilversImg },
    image: homeownerAssocImg,
    tags: ['Property', 'HOA', 'Mediation', 'Dispute'],
    excerpt: 'Property disputes and Homeowner\'s Association (HOA) conflicts can quickly escalate, draining your time, finances, and neighborhood...',
    body: `Disputes within Homeowner Associations (HOAs) and residential subdivisions are among the most common legal headaches for property owners in the Philippines. From unapproved structural renovations and boundary encroachments to unpaid association dues and noise complaints, unaddressed conflicts can quickly escalate into costly court battles.\n\nUnder Republic Act No. 9904 (the Magna Carta for Homeowners and Homeowners Associations), HOA boards are required to establish internal dispute resolution mechanisms before taking matters to court or the Department of Human Settlements and Urban Development (DHSUD). Modern online mediation tools now enable homeowners and HOA boards to participate in formal conciliation hearings remotely.\n\nVirtual mediation provides a neutral, structured environment facilitated by legal professionals. It saves time, reduces hostility, and produces legally enforceable Compromise Agreements without the expense of prolonged litigation.\n\nIf you are experiencing an ongoing neighborhood or HOA dispute, explore digital mediation services to reach a fair settlement while preserving community relationships.`
  },
  {
    slug: 'expanded-maternity-leave-now-in-effect',
    category: 'law-updates',
    title: 'Expanded maternity leave now in effect',
    date: 'July 31, 2026',
    readTime: '5 min read',
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
    readTime: '4 min read',
    views: 94,
    author: { name: 'Atty. Anthony E. Lopez', role: 'Associate Lawyer', avatar: attyAnthonyImg },
    image: scGavelImg,
    tags: ['Supreme Court', 'Finance', 'Checks', 'Debt'],
    excerpt: 'The Court reaffirmed that unpaid debt alone is not a crime. What the ruling changes for creditors and debtors...',
    body: `In a significant legal decision, the Supreme Court of the Philippines clarified the standards for prosecuting violations under Batas Pambansa Blg. 22 (the Bouncing Checks Law) versus Estafa under Article 315 of the Revised Penal Code.\n\nThe High Court reiterated that the mere issuance of a check that is subsequently dishonored does not automatically constitute Estafa. For an accused to be held criminally liable for Estafa, the prosecution must prove beyond reasonable doubt that deceit and false pretenses were employed at the exact time the check was issued to induce the payee to part with money or property.\n\nConversely, BP 22 is a malum prohibitum crime where deceit is not an element. The law punishes the act of making and issuing a check knowing at the time of issue that there are insufficient funds. However, strict adherence to procedural requirements — such as serving a written Notice of Dishonor upon the drawer — remains mandatory for a successful BP 22 conviction.\n\nBoth creditors and business owners issuing post-dated checks should consult legal counsel to understand their rights, procedural defenses, and proper debt recovery strategies under current jurisprudence.`
  },
  {
    slug: 'new-rules-on-flexible-and-remote-work-setups',
    category: 'law-updates',
    title: 'New rules on flexible and remote work setups',
    date: 'July 31, 2026',
    readTime: '4 min read',
    views: 110,
    author: { name: 'Atty. Antonette Sy', role: 'Senior Partner', avatar: attyAntonetteImg },
    image: remoteWorkImg,
    tags: ['Remote Work', 'Labor Law', 'Employers', 'Employees'],
    excerpt: 'Employers must now put work-from-home terms in writing. A summary of the requirements and the compliance deadline.',
    body: `Following the widespread adoption of telecommuting and hybrid work models, the Department of Labor and Employment (DOLE) released updated guidelines under Republic Act No. 11165 (the Telecommuting Act) outlining mandatory employer obligations for flexible work arrangements.\n\nEmployers operating remote or hybrid arrangements are now required to formalize telecommuting agreements in written contracts or company policies. These agreements must guarantee equal treatment between remote and on-site workers regarding base compensation, rest periods, performance evaluation, and promotion opportunities.\n\nKey mandatory provisions include clear policies on digital connectivity hours, data protection compliance, health and safety guidelines for home workstations, and equipment allowances or reimbursements for work-related expenses.\n\nHR departments and business management should review their existing work-from-home guidelines to ensure compliance with DOLE standards and avoid labor grievances.`
  },
  {
    slug: 'what-ten-years-of-annulment-cases-taught-me',
    category: 'law-blogs',
    title: 'What ten years of annulment cases taught me',
    date: 'July 31, 2026',
    readTime: '5 min read',
    views: 215,
    author: { name: 'Atty. Silvers Rayleigh', role: 'Managing Partner', avatar: attySilversImg },
    image: annulmentConsultImg,
    tags: ['Divorce', 'My Experience', 'Family Practice', 'Family Law', 'Marriage', 'Wife', 'Husband'],
    excerpt: 'Annulment in the Philippines is slow, costly, and misunderstood. Here\'s what I wish every client knew before they started...',
    body: `In ten years of family practice, I've watched the same misunderstanding walk through my door again and again: the belief that annulment is quick, or cheap, or a formality. It is none of these. But it is also not the impossible ordeal people fear. The truth sits somewhere in between, and knowing where saves my clients months of anxiety.\n\nAnnulment in the Philippines is not divorce. The distinction matters more than most people realize. A divorce ends a valid marriage; an annulment declares that, in the eyes of the law, a valid marriage never existed. That difference shapes everything that follows — the grounds you must prove, the evidence you must gather, and the questions the court will ask.\n\nThe most common ground I handle is psychological incapacity, and it is the most misunderstood. It does not mean your spouse was difficult, or that the marriage failed. It means that, at the time of the marriage, one party was genuinely incapable of meeting its essential obligations. Proving that requires more than testimony about a bad relationship. It requires patience.\n\nIf you take one thing from this: speak to a lawyer before you decide anything, and before you spend anything. The path is clearer than the rumors suggest — but only if you start with accurate expectations.`
  },
  {
    slug: 'can-your-employer-really-withhold-your-final-pay',
    category: 'law-blogs',
    title: 'Can your employer really withhold your final pay?',
    date: 'July 31, 2026',
    readTime: '3 min read',
    views: 180,
    author: { name: 'Atty. Anthony E. Lopez', role: 'Associate Lawyer', avatar: attyAnthonyImg },
    image: paycheckSalaryImg,
    tags: ['Labor Law', 'Employment', 'Salary', 'Rights'],
    excerpt: 'Separation doesn\'t mean forfeiture. A short guide to what you\'re owed...',
    body: `When an employee resigns or is separated from service, one of the most common friction points is the clearance process and the release of final pay (commonly called 'backpay'). Employees often ask: Can an employer legally hold back final pay due to pending clearances or alleged company accountabilities?\n\nUnder Labor Advisory No. 06, Series of 2020 issued by the Department of Labor and Employment (DOLE), final pay must be released to the employee within thirty (30) calendar days from the date of separation or termination of employment, unless a more favorable company policy or collective bargaining agreement applies.\n\nWhile employers may deduct valid legal debts (such as unreturned company assets or salary advances) from final pay, complete forfeiture or unreasonable withholding beyond the 30-day period violates labor standards. Withholding pay as a penalty or leverage without due process exposes employers to monetary claims, interest, and legal sanctions.\n\nIf your final pay has been withheld past the 30-day statutory period, consult a labor attorney to issue a formal demand letter or file an administrative claim with the DOLE Single-Entry Approach (SEnA).`
  },
  {
    slug: 'buying-land-from-the-family-get-it-in-writing',
    category: 'law-blogs',
    title: 'Buying land from the family? Get it in writing',
    date: 'July 31, 2026',
    readTime: '4 min read',
    views: 89,
    author: { name: 'Atty. Antonette Sy', role: 'Senior Partner', avatar: attyAntonetteImg },
    image: familyLandImg,
    tags: ['Real Estate', 'Family Law', 'Property', 'Contracts'],
    excerpt: 'Informal property transfers between relatives cause some of the ugliest disputes we see...',
    body: `Intra-family real estate purchases in the Philippines are notoriously prone to disputes. Often driven by mutual trust, family members agree to buy or sell inherited land, ancestral property, or residential lots verbally — relying on handshakes, informal receipts, or partial cash downpayments.\n\nUnder Article 1403 of the Civil Code of the Philippines (the Statute of Frauds), contracts for the sale of real property are unenforceable by court action unless they are evidenced by some note or memorandum signed by the party charged. A verbal agreement to buy land from a relative cannot be enforced in court if a family feud erupts later.\n\nFurthermore, to transfer the Transfer Certificate of Title (TCT) or Condominium Certificate of Title (CCT) at the Registry of Deeds, a formal Deed of Absolute Sale must be executed, notarized, and submitted alongside BIR Tax Clearance (eCAR), Transfer Tax payments, and updated Tax Declarations.\n\nProtect your family relationships and financial investment by ensuring every real estate transaction — even among siblings or parents — is documented by a licensed real property lawyer.`
  },
  {
    slug: 'e-commerce-data-protection',
    category: 'law-blogs',
    title: 'E-Commerce Data Protection',
    date: 'August 1, 2026',
    readTime: '5 min read',
    views: 312,
    author: { name: 'Atty. Anthony E. Lopez', role: 'Associate Lawyer', avatar: attyAnthonyImg },
    image: eCommerceImg,
    tags: ['E-Commerce', 'Data Privacy', 'Business', 'Tech'],
    excerpt: 'Data is the lifeblood of any modern digital business, but mishandling it can lead to devastating regulatory fines and a complete loss of customer trust. For tech startups, SaaS platforms, and e-commerce ventures, complying with the Philippine Data Privacy Act (DPA) is absolutely non-negotiable...',
    body: `Data is the lifeblood of any modern digital business, but mishandling customer personal information can lead to devastating regulatory fines and a complete loss of consumer trust. For tech startups, SaaS platforms, and e-commerce ventures in the Philippines, complying with Republic Act No. 10173 (the Data Privacy Act of 2012) is mandatory.\n\nE-commerce platforms collect extensive Personal Identifiable Information (PII) and Sensitive Personal Information (SPI) — including buyer names, contact details, delivery addresses, payment transactions, and browsing behaviors. Under the Data Privacy Act, businesses must adhere to the core principles of Transparency, Legitimate Purpose, and Proportionality.\n\nKey compliance requirements for digital merchants include implementing a clear, accessible Privacy Policy, securing explicit user consent for marketing and analytics, designating a Data Protection Officer (DPO), and establishing organizational and physical security measures against data breaches.\n\nNon-compliance or unauthorized processing of sensitive information carries criminal penalties and administrative fines from the National Privacy Commission (NPC). Consult digital law specialists to audit your online store and secure your compliance mapping.`
  }
];