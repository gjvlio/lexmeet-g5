import anna from '@/assets/LawyersProfile/Atty. Anna Photo.png';
import anthony from '@/assets/LawyersProfile/Atty. Anthony Photo.png';
import antonette from '@/assets/LawyersProfile/Atty. Antonette Photo.png';
import edward from '@/assets/LawyersProfile/Atty. Edward Photo.png';
import joseph from '@/assets/LawyersProfile/Atty. Joseph Photo.png';
import jean from '@/assets/LawyersProfile/Atty. Jean Photo.png';
import silvers from '@/assets/LawyersProfile/Atty. Silvers Photo.png';
import kalix from '@/assets/LawyersProfile/Atty. Kalix Photo.png';

export type Lawyer = {
  name: string;
  position: string;
  photo: string;
  /** Drives the dot on the avatar. */
  online: boolean;
  /** Drives the pill on the Lawyer's Schedule tab. */
  available: boolean;
  rating: number;
};

/** Page 1 of the roster — the design shows 8 of 67. */
export const LAWYERS: Lawyer[] = [
  { name: 'Atty. Anna C Bermudez',    position: 'Managing Partner', photo: anna,      online: true,  available: true,  rating: 5.0 },
  { name: 'Atty. Anthony E. Lopez',   position: 'Associate Lawyer', photo: anthony,   online: false, available: false, rating: 5.0 },
  { name: 'Atty. Antonette Sy',       position: 'Senior Partner',   photo: antonette, online: true,  available: true,  rating: 5.0 },
  { name: 'Atty. Edward Nowgate',     position: 'Managing Partner', photo: edward,    online: true,  available: true,  rating: 5.0 },
  { name: 'Atty. Joseph Lim',         position: 'Associate Lawyer', photo: joseph,    online: false, available: false, rating: 5.0 },
  { name: 'Atty. Jean Dela Cruz',     position: 'Partner',          photo: jean,      online: true,  available: true,  rating: 5.0 },
  { name: 'Atty. Silvers Rayleigh',   position: 'Managing Partner', photo: silvers,   online: true,  available: true,  rating: 5.0 },
  { name: 'Atty. Kalix Jace Martinez', position: 'Senior Partner',  photo: kalix,     online: true,  available: true,  rating: 5.0 },
];

/** The three views of the same roster; the tab picks the third column. */
export const TABS = [
  { label: 'List of Lawyers',    column: 'Action' },
  { label: 'Ratings & Feedback', column: 'Ratings' },
  { label: "Lawyer's Schedule",  column: 'Availability' },
] as const;

export const TOTAL_LAWYERS = 67;
export const PAGE_COUNT = 3;
