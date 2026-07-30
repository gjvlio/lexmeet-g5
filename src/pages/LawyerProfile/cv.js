/**
 * Curriculum Vitae content for the "See more" modal.
 *
 * Kept out of lawyers.ts (El's roster file) so the two don't collide. The
 * Figma only details Atty. Anna C Bermudez, so hers is transcribed and the
 * rest of the roster falls back to it via getCv() until real copy lands.
 */

const ANNA_CV = {
  location: 'Pasay City',
  caseCount: 12,
  credentials: {
    rollNumber: '476544D',
    dateAdmitted: 'JUNE 26, 2001',
    ibp: ['Aklan', '11111', 'June 26, 2020'],
    mcle: ['I HAVE MCLE COMPLIANCE', '324233451970', 'MAY 5, 2021 - JULY 7, 2021'],
    // The comp lists five; the rest sit behind the sidebar's See More.
    languages: ['ILOCANO', 'CEBUANO', 'CHAVACANO', 'CHINESE', 'ENGLISH', 'KOREAN'],
  },
  workExperience: [
    {
      firm: 'Valderama Law Office',
      role: 'Associate Lawyer',
      detail:
        'Valderama Law Office, Unit G 15th floor, Valderama Condominium, Ortigas Center, Pasig City · Tel no: 4561534 Pasig City',
    },
  ],
  education: [
    { school: 'University of Sto. Tomas Manila', detail: 'July 3, 1991 · AB Philosophy' },
    { school: 'University of Sto. Tomas Manila', detail: 'March 15, 2001 · Doctor of Jurisprudence' },
  ],
  locationsOfPractice: ['Nationwide', 'Luzon Wide', 'Visayas Wide', 'Mindanao Wide'],
  concentration: [
    'Administrative Law',
    'Alternative Dispute Resolution',
    'Appeals / Appellate Litigation',
    'Banking Law',
    'Bankruptcy',
    "Children's / Juvenile Justice",
    'Civil Rights / Civil Liberties',
    'Civil Law',
  ],
  casesHandled: [
    'Abatement of Nuisance',
    'Assumption of Loan',
    'Actions for Specific Performance',
    'Annulment of Marriage / Declaration of Nullity of Marriage',
    'Estate Settlement and Partition',
    'Unlawful Detainer and Ejectment',
    'Collection of Sum of Money',
    'Contract Drafting and other commercial documents',
    // Beyond the eight in the comp — revealed by the See More below the list.
    'Foreclosure of Mortgage',
    'Legal Separation',
    'Petition for Adoption',
    'Quieting of Title',
  ],
};

/**
 * Client feedback shown on the Ratings & Feedback tab. Reviewer avatars are
 * not exported from Figma yet, so the cards fall back to initials.
 */
const ANNA_FEEDBACK = [
  {
    name: 'Mr. Yuso',
    rating: 5.0,
    date: '10/22/2022, 2:48 PM',
    body: 'The video consultation was scheduled within two days of my initial inquiry. Atty. Bermudez explained the process clearly and answered every question I had about the required documents.',
  },
  {
    name: 'Ms. Yusa',
    rating: 5.0,
    date: '10/22/2022, 2:48 PM',
    body: 'Consultation took place over video call as scheduled. Follow up questions by email were answered within a day, and the document review was completed within the quoted timeframe.',
  },
  {
    name: 'Mrs. Slippy',
    rating: 5.0,
    date: '10/22/2022, 2:48 PM',
    body: 'I appreciated being able to attend the consultation from home while working abroad. Atty. Bermudez confirmed pricing before the session started, which matched what was listed on the platform.',
  },
  {
    name: 'Mr. Yus',
    rating: 5.0,
    date: '10/22/2022, 2:48 PM',
    body: 'Rescheduling was handled quickly once I reached out about a calendar conflict. The consultation itself covered everything I needed to move forward with my documents.',
  },
];

const CVS = {
  'Atty. Anna C Bermudez': ANNA_CV,
};

/** CV for a lawyer, falling back to the one fully specified in the comp. */
export function getCv(lawyer) {
  return CVS[lawyer.name] ?? ANNA_CV;
}

/** Client feedback for a lawyer — same placeholder set until real copy lands. */
export function getFeedback() {
  return ANNA_FEEDBACK;
}
