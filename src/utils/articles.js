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

// Unified high-quality lawyer profiles matching lawyers.ts
import attyAnnaImg from '@/assets/LawyersProfile/Atty. Anna Photo.png';
import attyAnthonyImg from '@/assets/LawyersProfile/Atty. Anthony Photo.png';
import attyAntonetteImg from '@/assets/LawyersProfile/Atty. Antonette Photo.png';
import attyEdwardImg from '@/assets/LawyersProfile/Atty. Edward Photo.png';
import attyJosephImg from '@/assets/LawyersProfile/Atty. Joseph Photo.png';
import attyJeanImg from '@/assets/LawyersProfile/Atty. Jean Photo.png';
import attySilversImg from '@/assets/LawyersProfile/Atty. Silvers Photo.png';
import attyKalixImg from '@/assets/LawyersProfile/Atty. Kalix Photo.png';

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
    author: { name: 'Atty. Anna C Bermudez', role: 'Managing Partner', avatar: attyAnnaImg },
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
    author: { name: 'Atty. Jean Dela Cruz', role: 'Partner', avatar: attyJeanImg },
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
    author: { name: 'Atty. Jean Dela Cruz', role: 'Partner', avatar: attyJeanImg },
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
    author: { name: 'Atty. Kalix Jace Martinez', role: 'Senior Partner', avatar: attyKalixImg },
    image: eCommerceImg,
    tags: ['E-Commerce', 'Data Privacy', 'Business', 'Tech'],
    excerpt: 'Data is the lifeblood of any modern digital business, but mishandling it can lead to devastating regulatory fines and a complete loss of customer trust. For tech startups, SaaS platforms, and e-commerce ventures, complying with the Philippine Data Privacy Act (DPA) is absolutely non-negotiable...',
    body: `Data is the lifeblood of any modern digital business, but mishandling customer personal information can lead to devastating regulatory fines and a complete loss of consumer trust. For tech startups, SaaS platforms, and e-commerce ventures in the Philippines, complying with Republic Act No. 10173 (the Data Privacy Act of 2012) is mandatory.\n\nE-commerce platforms collect extensive Personal Identifiable Information (PII) and Sensitive Personal Information (SPI) — including buyer names, contact details, delivery addresses, payment transactions, and browsing behaviors. Under the Data Privacy Act, businesses must adhere to the core principles of Transparency, Legitimate Purpose, and Proportionality.\n\nKey compliance requirements for digital merchants include implementing a clear, accessible Privacy Policy, securing explicit user consent for marketing and analytics, designating a Data Protection Officer (DPO), and establishing organizational and physical security measures against data breaches.\n\nNon-compliance or unauthorized processing of sensitive information carries criminal penalties and administrative fines from the National Privacy Commission (NPC). Consult digital law specialists to audit your online store and secure your compliance mapping.`
  },

  // Everyday Law Placeholders
  {
    slug: 'lgu-permit-compliance-ph',
    category: 'everyday-law',
    title: 'LGU Business Permits & Licensing Guidelines',
    date: 'August 5, 2026',
    readTime: '4 min read',
    views: 12,
    author: { name: 'Atty. Edward Nowgate', role: 'Managing Partner', avatar: attyEdwardImg },
    image: startupImg,
    tags: ['Corporate', 'Startup', 'MSME'],
    excerpt: 'Part two of our comprehensive guide to online incorporation. We walk through registering with local authorities, tax bodies...',
    body: `Once your articles of incorporation are approved by the Securities and Exchange Commission (SEC) through their online portal, your business journey is only halfway complete. Many founders make the critical mistake of operating immediately after getting their SEC certificate, unaware that local government clearances are mandatory requirements.\n\nFirst, you must secure a Barangay Clearance in the specific barangay where your office or business address is located. This is followed by registering with your Local Government Unit (LGU) to secure a Mayor's Permit or Business Permit. Modern municipalities are transitioning to Electronic Business One-Stop Shops (eBOSS) to allow online filing of LGU clearances.\n\nSecond, you must register with the Bureau of Internal Revenue (BIR) to secure your Certificate of Registration (Form 2303). This certificate details your tax liabilities, filing frequencies, and allows you to print official receipts. Operating without LGU permits or a BIR registration carries steep penalties, closures, and potential criminal liabilities.\n\nConsult our digital incorporation attorneys to automate your local government filings and secure your corporate compliance package entirely online.`
  },
  {
    slug: 'spa-consularization-apostille-process',
    category: 'everyday-law',
    title: 'Consularizing SPAs and Document Authentication',
    date: 'August 10, 2026',
    readTime: '4 min read',
    views: 29,
    author: { name: 'Atty. Joseph Lim', role: 'Associate Lawyer', avatar: attyJosephImg },
    image: ofwImg,
    tags: ['OFW', 'Property', 'Remote'],
    excerpt: 'Detailed instructions on consularizing SPAs and validating documents for remote real estate sales...',
    body: `For Overseas Filipino Workers (OFWs), selling real estate or managing assets in the Philippines requires executing a Special Power of Attorney (SPA). However, an SPA signed abroad is not immediately recognized by Philippine courts, banks, or Registry of Deeds without undergoing legal authentication.\n\nTo consularize an SPA, you must book an appointment with the Philippine Embassy or Consulate General in the country where you work. You must sign the SPA in the presence of a consular officer, who will witness your signature and attach a seal. Alternatively, if your host country is a member of the Apostille Convention, you can have the document notarized locally and authenticated by the host country's foreign affairs office.\n\nOnce consularized or Apostilled, the SPA becomes legally binding in the Philippines. Your designated attorney-in-fact can now represent you in selling, leasing, or transferring land titles. This ensures that you can manage property transactions safely and prevent fraudulent actions by unscrupulous representatives.\n\nBefore drafting an SPA, consult with our remote legal counsel to define the exact scope of authority given to your attorney-in-fact.`
  },
  {
    slug: 'dhsud-compromise-agreement-rules',
    category: 'everyday-law',
    title: 'Formalizing Housing Dispute Compromise Agreements',
    date: 'August 12, 2026',
    readTime: '3 min read',
    views: 18,
    author: { name: 'Atty. Kalix Jace Martinez', role: 'Senior Partner', avatar: attyKalixImg },
    image: homeownerAssocImg,
    tags: ['Property', 'HOA', 'Mediation'],
    excerpt: 'How subdivisions and condominium corporations can formalize compromise agreements online...',
    body: `When property disputes occur in subdivisions or condominium developments, prolonged litigation is rarely the best answer. Under the Department of Human Settlements and Urban Development (DHSUD) guidelines, Homeowners Associations (HOAs) are strongly encouraged to settle disputes through administrative conciliation and mediation.\n\nDigital mediation allows conflicting parties—such as homeowners, HOA boards, or building developers—to participate in formal hearings online. Through our secure legal platform, parties can upload evidence, voice concerns in a neutral virtual room, and draft compromise agreements guided by certified mediators.\n\nWhen a Compromise Agreement is signed digitally, it is submitted to DHSUD for official approval. Once approved, the agreement has the force and effect of a court judgment. If either party violates the terms, the other party can immediately petition DHSUD for a writ of execution to enforce compliance.\n\nResolve neighborhood conflicts quickly and preserve community harmony by scheduling an online property mediation session today.`
  },
  {
    slug: 'bmbe-tax-incentives-registration',
    category: 'everyday-law',
    title: 'Barangay Micro Business Enterprises Tax Exemptions',
    date: 'August 15, 2026',
    readTime: '5 min read',
    views: 31,
    author: { name: 'Atty. Anthony E. Lopez', role: 'Associate Lawyer', avatar: attyAnthonyImg },
    image: startupImg,
    tags: ['Corporate', 'Startup', 'MSME'],
    excerpt: 'Understanding tax incentives under the Barangay Micro Business Enterprises (BMBE) Act and how to apply online...',
    body: `To support local entrepreneurship, the Philippine government enacted Republic Act No. 9178, also known as the Barangay Micro Business Enterprises (BMBE) Act of 2002. This law offers significant financial and tax incentives to micro-businesses with total assets not exceeding Three Million Pesos (₱3,000,000).\n\nThe most attractive benefit of BMBE registration is the complete exemption from income tax arising from the operations of the enterprise. Additionally, BMBEs are exempt from the coverage of the Minimum Wage Law, allowing micro-entrepreneurs to negotiate wages with employees based on mutual agreement.\n\nTo claim these benefits, entrepreneurs must apply for a BMBE Certificate of Authority through the Department of Trade and Industry (DTI) portal. After securing the certificate, the business must register with the BIR to formalize the income tax exemption. Our digital legal service helps founders compile financial disclosures and secure BMBE certification seamlessly online.\n\nUnlock tax savings and scale your micro-enterprise by initiating your BMBE compliance assessment on our platform today.`
  },
  {
    slug: 'preventing-inheritance-estate-disputes',
    category: 'everyday-law',
    title: 'Establishing Living Trusts to Prevent Estate Disputes',
    date: 'August 20, 2026',
    readTime: '4 min read',
    views: 42,
    author: { name: 'Atty. Antonette Sy', role: 'Senior Partner', avatar: attyAntonetteImg },
    image: ofwImg,
    tags: ['OFW', 'Property', 'Remote'],
    excerpt: 'Tips on preventing family-related inheritance disputes and establishing living trusts from abroad...',
    body: `One of the most sensitive issues for Overseas Filipino Workers (OFWs) is planning the transfer of their wealth to the next generation. Without a clear estate plan, properties bought with hard-earned remittances frequently become the subject of bitter family disputes after the owner passes away.\n\nTo prevent inheritance conflicts, OFWs can explore establishing a Living Trust or executing a Last Will and Testament. A Living Trust allows you to transfer legal ownership of your real estate and bank accounts to a trustee, who manages the assets for the benefit of your designated heirs. Because a trust is active during your lifetime, it avoids the expensive and lengthy court probate process.\n\nIf you choose to write a Will, it must comply with the strict formalities of Philippine succession law. A holographic will must be entirely written, dated, and signed by the testator's own hand. An attested will requires notarization and three credible witnesses. Both setups can be initiated and reviewed through virtual consultations with our estate planning lawyers.\n\nProtect your legacy and secure your family's future by setting up an estate planning session from your host country.`
  },
  {
    slug: 'subdivision-easement-access-rights',
    category: 'everyday-law',
    title: 'Navigating Subdivision Easement & Access Road Rights',
    date: 'August 22, 2026',
    readTime: '3 min read',
    views: 22,
    author: { name: 'Atty. Silvers Rayleigh', role: 'Managing Partner', avatar: attySilversImg },
    image: homeownerAssocImg,
    tags: ['Property', 'HOA', 'Mediation'],
    excerpt: 'Case studies of successfully resolved subdivision road and zoning disputes through digital mediation...',
    body: `Subdivision road networks, common areas, and zoning restrictions are frequent sources of legal friction. In many residential developments, disputes arise when developers delay transferring road titles to the LGU or HOA, or when property owners violate subdivision height restrictions and setback rules.\n\nOur platform recently mediated a dispute where a developer blocked a subdivision road, citing unpaid maintenance costs. The homeowners, organized through their HOA board, initiated online mediation through our platform. In less than two weeks, both parties joined a secure video conference facilitated by our property law mediator.\n\nBy reviewing land titles and zoning regulations digitally, the parties reached a compromise: the developer granted permanent right-of-way easement in exchange for a structured road maintenance fee collected by the HOA. This case study demonstrates that digital mediation is faster, cheaper, and more effective than taking disputes to court.\n\nIf your HOA is facing structural or road access challenges, request a digital property mediation review to find a quick resolution.`
  },

  // Law Updates Placeholders
  {
    slug: 'sss-reimbursement-employers-maternity',
    category: 'law-updates',
    title: 'SSS Maternity Reimbursement Timeline for Employers',
    date: 'August 6, 2026',
    readTime: '4 min read',
    views: 55,
    author: { name: 'Atty. Anna C Bermudez', role: 'Managing Partner', avatar: attyAnnaImg },
    image: useLaptopImg,
    tags: ['Maternity', 'Paid Leave', 'Labor Law'],
    excerpt: 'Analyzing SSS reimbursement timelines and procedures for private sector employers...',
    body: `Under Republic Act No. 11210 (the 105-Day Expanded Maternity Leave Law), private sector employers are required to advance the full maternity benefit to their pregnant employees within thirty (30) days from the filing of the maternity leave application.\n\nEmployers often express concern regarding the process of SSS reimbursement. Once the employer pays the maternity benefit in full, they can apply for 100% reimbursement from the Social Security System (SSS). This is done online through the SSS Employer Portal (My.SSS), provided that the employer has submitted the maternity notification prior to the delivery.\n\nTo ensure a smooth reimbursement process, HR managers must compile the employee's proof of delivery (birth certificate or operating room record) and SSS contributions. Delays in notifying the SSS or discrepancies in payroll records can lead to rejection of reimbursement claims, forcing the employer to bear the financial cost of the maternity benefit.\n\nOur labor law compliance team provides online payroll audits and HR guidelines to help companies file SSS maternity leave claims efficiently and avoid regulatory penalties.`
  },
  {
    slug: 'bp22-defenses-notice-of-dishonor',
    category: 'law-updates',
    title: 'BP 22 Defenses: Proving Written Notice of Dishonor',
    date: 'August 11, 2026',
    readTime: '4 min read',
    views: 73,
    author: { name: 'Atty. Edward Nowgate', role: 'Managing Partner', avatar: attyEdwardImg },
    image: scGavelImg,
    tags: ['Supreme Court', 'Finance', 'Checks'],
    excerpt: 'Defenses against BP 22 cases: What constitutes valid notice of dishonor in light of recent decisions...',
    body: `Batas Pambansa Blg. 22 (the Bouncing Checks Law) imposes strict criminal liability on individuals who issue checks that are later dishonored due to insufficient funds. However, the Supreme Court has consistently ruled that a procedural mistake by the creditor can lead to the acquittal of the accused.\n\nA key element for a successful BP 22 conviction is proving that the issuer had knowledge of the insufficiency of funds at the time of the check's presentment. Under the law, this knowledge is established if the issuer fails to pay the check amount within five (5) banking days after receiving a written Notice of Dishonor.\n\nRecent jurisprudence clarifies that the Notice of Dishonor must be sent in writing and actually received by the drawer. Verbal notifications, text messages, or notices received by a household member without proof of authorization are insufficient. If the prosecution fails to prove receipt of the written notice, the criminal case will fail.\n\nConsult with our litigation attorneys to review your debt collection letters and ensure your notices comply with current Supreme Court standards.`
  },
  {
    slug: 'dole-telecommuting-contract-guidelines',
    category: 'law-updates',
    title: 'Drafting DOLE-Compliant Telecommuting Contracts',
    date: 'August 14, 2026',
    readTime: '4 min read',
    views: 64,
    author: { name: 'Atty. Kalix Jace Martinez', role: 'Senior Partner', avatar: attyKalixImg },
    image: remoteWorkImg,
    tags: ['Remote Work', 'Labor Law', 'Compliance'],
    excerpt: 'Drafting data security and equipment liability clauses for hybrid employees...',
    body: `Operating a remote or hybrid workforce introduces new legal risks for companies, particularly regarding data privacy and equipment maintenance. Under the Telecommuting Act, employers must outline exact responsibilities in written policies to protect intellectual property.\n\nWhen drafting a remote work agreement, companies should include clear Data Security clauses. Employees must be required to use secure Virtual Private Networks (VPNs), maintain strict password hygiene, and handle personal customer data in accordance with the Data Privacy Act. The policy should specify that company laptops are for work use only and prohibit household members from accessing them.\n\nFurthermore, the contract must define equipment liability. It should detail who pays for internet bills, electricity allowances, and laptop repairs. If equipment is damaged due to gross negligence, the employer may legally deduct repair costs from the employee's salary, provided this was agreed upon in writing.\n\nOur corporate attorneys offer online contract drafting and HR compliance audits to help you secure your remote operations.`
  },
  {
    slug: 'voluntary-member-sss-maternity-claims',
    category: 'law-updates',
    title: 'SSS Maternity Claims for Self-Employed & Freelancers',
    date: 'August 18, 2026',
    readTime: '5 min read',
    views: 92,
    author: { name: 'Atty. Joseph Lim', role: 'Associate Lawyer', avatar: attyJosephImg },
    image: useLaptopImg,
    tags: ['Maternity', 'Paid Leave', 'Labor Law'],
    excerpt: 'Special rules for sole proprietors, freelancers, and voluntary contributors...',
    body: `While the 105-Day Expanded Maternity Leave Law is well-known for regular corporate employees, its application to freelancers, sole proprietors, and self-employed women is often misunderstood. The SSS explicitly guarantees that all female voluntary contributors are entitled to maternity benefits.\n\nTo qualify for the SSS maternity benefit, a self-employed or voluntary member must have paid at least three (3) monthly contributions within the twelve-month period immediately preceding the semester of childbirth. The member must submit their Maternity Notification online through their personal My.SSS portal as soon as they become pregnant.\n\nUnlike corporate employees who receive a salary differential, voluntary members receive their benefit directly from the SSS based on their average daily salary credit. This financial support is crucial for female freelancers and solo business owners who need to take time off work for recovery and childcare.\n\nVerify your SSS contribution records and start your voluntary maternity claim by scheduling an online consultation with our labor law specialists.`
  },
  {
    slug: 'written-notices-dishonor-procedural-rules',
    category: 'law-updates',
    title: 'Notice of Dishonor Delivery: Procedural Prerequisites',
    date: 'August 21, 2026',
    readTime: '4 min read',
    views: 81,
    author: { name: 'Atty. Anthony E. Lopez', role: 'Associate Lawyer', avatar: attyAnthonyImg },
    image: scGavelImg,
    tags: ['Supreme Court', 'Finance', 'Checks'],
    excerpt: 'Best practices for writing demand letters to establish prima facie evidence of knowledge of insufficiency of funds...',
    body: `In debt collection disputes involving bouncing checks, the demand letter is the single most critical document. Under Batas Pambansa Blg. 22, the demand letter serves as the formal Notice of Dishonor that starts the 5-day grace period for the debtor to pay or make arrangements.\n\nTo establish prima facie evidence of knowledge of insufficiency of funds, the demand letter must state: (a) that the check was presented and subsequently dishonored by the bank, (b) the exact reason for the dishonor, and (c) a clear demand for payment of the check amount within five (5) banking days from receipt of the letter.\n\nCrucially, the sender must secure undeniable proof of service. If sent via registered mail, the post office registry receipt and the return card signed by the recipient must be preserved. If delivered by personal service, the recipient's signature and the date of receipt must be clearly written on the duplicate copy. Text messages or emails do not meet this legal standard.\n\nOur legal team assists creditors in drafting, serving, and documenting legally compliant demand letters to build strong court cases.`
  },
  {
    slug: 'hybrid-work-allowance-tax-implications',
    category: 'law-updates',
    title: 'Tax Implications of Remote Work Allowances',
    date: 'August 25, 2026',
    readTime: '4 min read',
    views: 104,
    author: { name: 'Atty. Antonette Sy', role: 'Senior Partner', avatar: attyAntonetteImg },
    image: remoteWorkImg,
    tags: ['Remote Work', 'Labor Law', 'Compliance'],
    excerpt: 'A comparison of remote work tax structures and employee allowances under current bureau rules...',
    body: `As remote work setups become permanent fixtures in the Philippine business landscape, companies must evaluate the tax implications of remote work allowances. The Bureau of Internal Revenue (BIR) has specific guidelines on which employee benefits are taxable versus tax-exempt.\n\nGenerally, regular allowances provided to employees for home internet, electricity, and mobile phone usage are considered part of taxable compensation income. However, if these allowances are structured as direct business expenses—where the employee submits receipts under the company's name for reimbursement—they may be classified as non-taxable business expenses.\n\nAdditionally, companies can leverage "de minimis" benefits, which are facilities or privileges of relatively small value offered by employers to promote health and goodwill. These benefits are completely exempt from income tax and withholding tax up to statutory limits. Properly structuring these remote allowances saves taxes for both the company and the employee.\n\nBook a corporate tax assessment with our business lawyers to optimize your hybrid employee benefit structures.`
  },

  // Law Blogs Placeholders
  {
    slug: 'psychological-evaluation-annulment-cases',
    category: 'law-blogs',
    title: 'Psychological Evaluations under Article 36 Family Code',
    date: 'August 4, 2026',
    readTime: '5 min read',
    views: 153,
    author: { name: 'Atty. Anna C Bermudez', role: 'Managing Partner', avatar: attyAnnaImg },
    image: annulmentConsultImg,
    tags: ['Annulment', 'Family Practice', 'Marriage'],
    excerpt: 'The critical role of psychological evaluations and how psychiatrists testify in family court...',
    body: `In the Philippines, psychological incapacity (Article 36 of the Family Code) is the most frequently cited ground for declaring a marriage null and void. However, proving psychological incapacity is a highly rigorous process that requires expert medical guidance.\n\nContrary to popular belief, psychological incapacity does not refer to regular marital arguments or incompatibility. It is defined as a serious psychological illness that prevents a spouse from understanding and performing the essential obligations of marriage (such as mutual love, trust, fidelity, and support). To establish this, a clinical psychologist or psychiatrist must conduct psychological evaluations of the petitioner and, if possible, the respondent.\n\nThe expert psychologist will conduct clinical interviews, administer psychological tests, and compile collateral history from family members. They will then testify in family court, explaining the root cause, gravity, and incurability of the incapacity. The Supreme Court's recent ruling in Tan-Andal v. Andal has eased the requirement by stating that psychological incapacity does not need to be a clinical personality disorder, but must be proven as a durable psychological condition.\n\nIf you are considering filing for annulment, schedule a preliminary consultation to review your marital history with our family lawyers.`
  },
  {
    slug: 'constructive-dismissal-clearance-delays',
    category: 'law-blogs',
    title: 'Constructive Dismissal vs. Legitimate Clearance Holds',
    date: 'August 9, 2026',
    readTime: '3 min read',
    views: 122,
    author: { name: 'Atty. Edward Nowgate', role: 'Managing Partner', avatar: attyEdwardImg },
    image: paycheckSalaryImg,
    tags: ['Labor Law', 'Employment', 'Rights'],
    excerpt: 'Understanding constructive dismissal claims and when delay in clearances constitutes illegal withholding...',
    body: `While employers have a management prerogative to establish a clearance process before releasing an employee's final pay, this clearance process must not be used as an abusive tool to delay or deny statutory benefits. Unreasonable delays can lead to legal claims of constructive dismissal.\n\nConstructive dismissal occurs when an employer creates an unbearable, hostile, or discriminatory work environment that leaves the employee with no choice but to resign. If an employer deliberately blocks an employee's clearance, refuses to sign clearance forms without valid justification, or delays final pay beyond the 30-day statutory limit, it can be argued that the employer is acting in bad faith.\n\nUnder labor regulations, the burden of proof is on the employer to show that any deduction or delay in final pay is based on a valid debt or unreturned property. Employers cannot withhold pay for arbitrary reasons, such as simple personal conflicts or pending investigations without formal disciplinary charges.\n\nIf you believe your clearance is being withheld unfairly, schedule a legal consultation to evaluate your administrative options and protect your rights.`
  },
  {
    slug: 'family-coownership-partition-agreements',
    category: 'law-blogs',
    title: 'Partition Agreements for Co-owned Ancestral Land',
    date: 'August 13, 2026',
    readTime: '4 min read',
    views: 99,
    author: { name: 'Atty. Jean Dela Cruz', role: 'Partner', avatar: attyJeanImg },
    image: familyLandImg,
    tags: ['Real Estate', 'Family Law', 'Property'],
    excerpt: 'How to handle co-ownership issues, heir disputes, and partition agreements before transfer of titles...',
    body: `Intra-family property sales often involve inherited land that is co-owned by multiple siblings or relatives. This co-ownership structure adds significant legal complexity, as a single heir cannot sell a specific portion of the property without the consent of all co-owners.\n\nUnder the Civil Code, before co-owned inherited property can be sold to a single family member or a third party, the heirs must execute an Extrajudicial Settlement of Estate with Sale or a formal Partition Agreement. This agreement details the exact division of the property, identifies each heir's share, and confirms their consent to the transaction.\n\nIf one sibling sells the land without notifying the other co-owners, the sale is not fully void, but it only transfers the seller's undivided abstract share. The buyer cannot claim physical ownership of a specific corner of the land. This leads to complex court litigations to settle the property boundaries and partition.\n\nTo ensure a clean transfer of title, consult with our property attorneys to draft formal partition deeds and settlement agreements.`
  },
  {
    slug: 'npc-data-sharing-processing-agreements',
    category: 'law-blogs',
    title: 'NPC Regulations: Data Sharing vs. Processing Agreements',
    date: 'August 19, 2026',
    readTime: '5 min read',
    views: 145,
    author: { name: 'Atty. Joseph Lim', role: 'Associate Lawyer', avatar: attyJosephImg },
    image: eCommerceImg,
    tags: ['E-Commerce', 'Data Privacy', 'Business'],
    excerpt: 'Key differences between data processing agreements (DPA) and data sharing agreements under NPC rules...',
    body: `For e-commerce operators, sharing customer information with third-party logistics, payment gateways, and cloud service providers is a daily operational necessity. However, under the Data Privacy Act (DPA), businesses must formalize these transfers through specific legal agreements.\n\nThe National Privacy Commission (NPC) distinguishes between two types of transfers: Data Processing Agreements (DPA) and Data Sharing Agreements. A Data Processing Agreement is used when you outsource the processing of data to a service provider (a Data Processor) who acts strictly under your instructions. The Processor does not own the data and cannot use it for their own purposes.\n\nConversely, a Data Sharing Agreement is executed when you transfer data to another independent entity (a Data Controller) who will use the data for their own legitimate purposes. Both agreements must specify strict security measures, breach notification protocols, and data disposal guidelines to prevent leaks.\n\nOur data privacy legal consultants help tech startups audit their vendor contracts and draft legally compliant data protection agreements.`
  },
  {
    slug: 'asset-custody-provisional-orders-annulment',
    category: 'law-blogs',
    title: 'Property Separation & Custody During Annulment Trials',
    date: 'August 24, 2026',
    readTime: '5 min read',
    views: 198,
    author: { name: 'Atty. Silvers Rayleigh', role: 'Managing Partner', avatar: attySilversImg },
    image: annulmentConsultImg,
    tags: ['Annulment', 'Family Practice', 'Marriage'],
    excerpt: 'Asset distribution and custody guidelines during the pendency of a declaration of nullity case...',
    body: `When filing for a declaration of absolute nullity of marriage, one of the most critical concerns is how the family's assets, bank accounts, and child custody will be managed while the court case is pending.\n\nUnder the Family Code, during the pendency of the annulment case, the court will issue provisional orders regarding support, custody of minor children, and visitation rights. Generally, children under seven years of age will remain under the custody of the mother, unless the court finds compelling reasons to rule otherwise. The father is legally required to provide financial support based on his capacity and the child's needs.\n\nRegarding assets, if the marriage is declared void due to psychological incapacity, the property regime is governed by co-ownership rules (Article 147 or 148 of the Family Code), rather than the Absolute Community of Property. Assets acquired during the cohabitation are presumed to be co-owned in equal shares, provided both parties contributed money, property, or industry.\n\nOur family lawyers provide comprehensive guidance on securing support pendente lite and protecting your financial interests during annulment proceedings.`
  }
];