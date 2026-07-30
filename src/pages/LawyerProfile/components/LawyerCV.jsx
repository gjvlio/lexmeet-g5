import { useState } from 'react';
import { getCv } from '../cv';

/** How many entries show before the matching See More is used. */
const LANGUAGE_PREVIEW = 5;
const CASES_PREVIEW = 8;

/** Dark pill that labels each block on the right-hand column. */
function BlockLabel({ children }) {
  return (
    <span className="inline-flex items-center rounded-full bg-dark-khaki px-5 py-2 font-sans text-[13px] font-semibold text-parchment shadow-pill">
      {children}
    </span>
  );
}

/** Light panel the block contents sit on. */
function Panel({ children }) {
  return (
    <div className="mt-3 rounded-2xl border border-white/80 bg-white/55 p-4 sm:p-5">{children}</div>
  );
}

/**
 * Two-column bullet list. CSS columns fill top-to-bottom before wrapping,
 * which is how the comp orders these — a grid would read across instead.
 */
function BulletColumns({ items }) {
  return (
    <ul className="columns-1 gap-8 sm:columns-2">
      {items.map((item) => (
        <li
          key={item}
          className="mb-1.5 break-inside-avoid hyphens-auto pl-4 font-sans text-[13px] leading-relaxed text-dark-khaki before:mr-2 before:content-['•']"
        >
          {item}
        </li>
      ))}
    </ul>
  );
}

function SidebarLabel({ children }) {
  return (
    <h3 className="font-sans text-[11px] font-bold tracking-[0.08em] text-carbon-black">
      {children}
    </h3>
  );
}

function SidebarList({ items }) {
  return (
    <ul className="mt-1.5">
      {items.map((item) => (
        <li
          key={item}
          className="pl-4 font-sans text-[12px] leading-relaxed text-dark-khaki before:mr-2 before:content-['•']"
        >
          {item}
        </li>
      ))}
    </ul>
  );
}

/** Small sage pill that expands or collapses a truncated list. */
function SeeMorePill({ isExpanded, onClick, controls }) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-expanded={isExpanded}
      aria-controls={controls}
      className="rounded-full bg-palm-leaf px-6 py-1.5 font-sans text-[12px] font-semibold text-parchment transition-colors hover:bg-dusty-olive focus:outline-none focus-visible:ring-2 focus-visible:ring-olive-leaf/60"
    >
      {isExpanded ? 'See Less' : 'See More'}
    </button>
  );
}

/** Curriculum Vitae tab of the lawyer modal. */
export default function LawyerCV({ lawyer }) {
  const cv = getCv(lawyer);
  const { credentials } = cv;

  const [showAllLanguages, setShowAllLanguages] = useState(false);
  const [showAllCases, setShowAllCases] = useState(false);

  const languages = showAllLanguages
    ? credentials.languages
    : credentials.languages.slice(0, LANGUAGE_PREVIEW);
  const cases = showAllCases ? cv.casesHandled : cv.casesHandled.slice(0, CASES_PREVIEW);

  const hasMoreLanguages = credentials.languages.length > LANGUAGE_PREVIEW;
  const hasMoreCases = cv.casesHandled.length > CASES_PREVIEW;

  return (
    <div className="grid gap-8 lg:grid-cols-[minmax(0,200px)_minmax(0,1fr)] lg:gap-10">
      <aside>
        <p className="font-sans text-[11px] font-semibold tracking-[0.08em] text-dusty-olive">
          CREDENTIALS
        </p>

        <div className="mt-3">
          <SidebarLabel>ROLL OF ATTORNEY&rsquo;S NUMBER</SidebarLabel>
          <p className="font-sans text-[12px] text-dark-khaki">{credentials.rollNumber}</p>
        </div>

        <div className="mt-3">
          <SidebarLabel>DATE ADMITTED</SidebarLabel>
          <p className="font-sans text-[12px] text-dark-khaki">{credentials.dateAdmitted}</p>
        </div>

        <hr className="my-4 border-sage-mist/70" />

        <div>
          <SidebarLabel>IBP</SidebarLabel>
          <SidebarList items={credentials.ibp} />
        </div>

        <div className="mt-4">
          <SidebarLabel>MCLE</SidebarLabel>
          <SidebarList items={credentials.mcle} />
        </div>

        <div className="mt-4">
          <SidebarLabel>LANGUAGE AND DIALECT</SidebarLabel>
          <div id="cv-languages">
            <SidebarList items={languages} />
          </div>
        </div>

        {hasMoreLanguages && (
          <div className="mt-5 flex justify-center">
            <SeeMorePill
              isExpanded={showAllLanguages}
              onClick={() => setShowAllLanguages((prev) => !prev)}
              controls="cv-languages"
            />
          </div>
        )}
      </aside>

      <div>
        <section>
          <BlockLabel>Work Experience</BlockLabel>
          <Panel>
            {cv.workExperience.map((job) => (
              <div key={job.firm}>
                <p className="font-display text-[17px] font-bold text-carbon-black">{job.firm}</p>
                <p className="font-sans text-[13px] italic text-dusty-olive">{job.role}</p>
                <p className="mt-2 break-words font-sans text-[13px] leading-relaxed text-dark-khaki">
                  {job.detail}
                </p>
              </div>
            ))}
          </Panel>
        </section>

        <section className="mt-6">
          <BlockLabel>Education</BlockLabel>
          <Panel>
            {cv.education.map((entry) => (
              <div key={`${entry.school}-${entry.detail}`} className="mb-3 last:mb-0">
                <p className="font-display text-[17px] font-bold text-carbon-black">
                  {entry.school}
                </p>
                <p className="font-sans text-[13px] text-dark-khaki">{entry.detail}</p>
              </div>
            ))}
          </Panel>
        </section>

        <section className="mt-6">
          <BlockLabel>Location of Practice</BlockLabel>
          <Panel>
            <BulletColumns items={cv.locationsOfPractice} />
          </Panel>
        </section>

        <section className="mt-6">
          <BlockLabel>Concentration of Law Practice</BlockLabel>
          <Panel>
            <BulletColumns items={cv.concentration} />
          </Panel>
        </section>

        <section className="mt-6">
          <BlockLabel>Cases Handled</BlockLabel>
          <Panel>
            <div id="cv-cases">
              <BulletColumns items={cases} />
            </div>
            {hasMoreCases && (
              <div className="mt-4 flex justify-center">
                <SeeMorePill
                  isExpanded={showAllCases}
                  onClick={() => setShowAllCases((prev) => !prev)}
                  controls="cv-cases"
                />
              </div>
            )}
          </Panel>
        </section>
      </div>
    </div>
  );
}
