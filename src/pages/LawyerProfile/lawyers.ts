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
  // Page 1
  { name: 'Atty. Anna C Bermudez',    position: 'Managing Partner', photo: anna,      online: true,  available: true,  rating: 5.0 },
  { name: 'Atty. Anthony E. Lopez',   position: 'Associate Lawyer', photo: anthony,   online: false, available: false, rating: 5.0 },
  { name: 'Atty. Antonette Sy',       position: 'Senior Partner',   photo: antonette, online: true,  available: true,  rating: 5.0 },
  { name: 'Atty. Edward Nowgate',     position: 'Managing Partner', photo: edward,    online: true,  available: true,  rating: 5.0 },
  { name: 'Atty. Joseph Lim',         position: 'Associate Lawyer', photo: joseph,    online: false, available: false, rating: 4.8 },
  { name: 'Atty. Jean Dela Cruz',     position: 'Partner',          photo: jean,      online: true,  available: true,  rating: 4.9 },
  { name: 'Atty. Silvers Rayleigh',   position: 'Managing Partner', photo: silvers,   online: true,  available: true,  rating: 5.0 },
  { name: 'Atty. Kalix Jace Martinez', position: 'Senior Partner',  photo: kalix,     online: true,  available: true,  rating: 4.7 },

  // Page 2
  { name: 'Atty. Sarah Jenkins',      position: 'Associate Lawyer', photo: anna,      online: true,  available: false, rating: 4.6 },
  { name: 'Atty. Marcus Aurelius',    position: 'Senior Partner',   photo: anthony,   online: false, available: true,  rating: 4.9 },
  { name: 'Atty. Katherine Pierce',   position: 'Partner',          photo: antonette, online: true,  available: true,  rating: 4.5 },
  { name: 'Atty. Bruce Wayne',        position: 'Managing Partner', photo: edward,    online: false, available: false, rating: 5.0 },
  { name: 'Atty. Clark Kent',         position: 'Associate Lawyer', photo: joseph,    online: true,  available: true,  rating: 4.8 },
  { name: 'Atty. Diana Prince',       position: 'Partner',          photo: jean,      online: true,  available: true,  rating: 5.0 },
  { name: 'Atty. Harvey Dent',        position: 'Senior Partner',   photo: silvers,   online: false, available: false, rating: 4.2 },
  { name: 'Atty. Barry Allen',        position: 'Associate Lawyer', photo: kalix,     online: true,  available: true,  rating: 4.7 },

  // Page 3
  { name: 'Atty. Hal Jordan',         position: 'Partner',          photo: anthony,   online: true,  available: true,  rating: 4.8 },
  { name: 'Atty. Arthur Curry',       position: 'Managing Partner', photo: edward,    online: false, available: true,  rating: 4.6 },
  { name: 'Atty. Victor Stone',       position: 'Associate Lawyer', photo: joseph,    online: true,  available: false, rating: 4.5 },
  { name: 'Atty. Peter Parker',       position: 'Associate Lawyer', photo: kalix,     online: true,  available: true,  rating: 4.9 },
  { name: 'Atty. Tony Stark',         position: 'Managing Partner', photo: silvers,   online: false, available: false, rating: 5.0 },
  { name: 'Atty. Natasha Romanoff',   position: 'Senior Partner',   photo: antonette, online: true,  available: true,  rating: 4.9 },
  { name: 'Atty. Steve Rogers',       position: 'Senior Partner',   photo: jean,      online: true,  available: true,  rating: 5.0 },
  { name: 'Atty. Wanda Maximoff',     position: 'Associate Lawyer', photo: anna,      online: true,  available: false, rating: 4.7 },
];

/** The three views of the same roster; the tab picks the third column. */
export const TABS = [
  { label: 'List of Lawyers',    column: 'Action' },
  { label: 'Ratings & Feedback', column: 'Ratings' },
  { label: "Lawyer's Schedule",  column: 'Availability' },
] as const;

export const TOTAL_LAWYERS = 24;
export const PAGE_COUNT = 3;
