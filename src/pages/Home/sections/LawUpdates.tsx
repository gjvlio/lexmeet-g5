import { LAW_UPDATES } from '@/utils/content';
import { PHOTOS } from '@/utils/images';

/** LAW UPDATES band — glass search pill, featured image, glass news rows. */
export default function LawUpdates() {
  const featured = PHOTOS['updates-featured'];
  return (
    <section id="updates" className="relative bg-cream py-14 lg:py-20">
      <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-16">
        <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h2 className="font-display text-3xl font-bold text-ink lg:text-4xl">LAW UPDATES</h2>
            <span className="mt-3 block h-[3px] w-16 bg-sage" />
          </div>

          {/* glass search */}
          <div className="glass flex h-[54px] w-full items-center gap-3 rounded-full !bg-white/60 px-3 ring-1 ring-sage/90 sm:w-[340px] lg:w-[520px]">
            <span className="grid h-[30px] w-[30px] place-items-center rounded-full bg-olive text-cream">
              <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="11" cy="11" r="7" />
                <path d="m20 20-3-3" />
              </svg>
            </span>
            <span className="font-sans text-sm text-ink/70">Search something...</span>
          </div>
        </div>

        <div className="mt-8 flex flex-col gap-6 lg:flex-row lg:gap-8">
          <div className="h-[220px] w-full shrink-0 overflow-hidden rounded-tl-[56px] rounded-br-[56px] rounded-tr-2xl rounded-bl-2xl ring-1 ring-sage/90 lg:h-[280px] lg:w-[360px] lg:rounded-tl-[80px] lg:rounded-br-[80px]">
            {featured ? (
              <img src={featured} alt="Featured update" className="h-full w-full object-cover" />
            ) : (
              <div className="h-full w-full bg-gradient-to-br from-forest to-ink" />
            )}
          </div>

          <ul className="flex flex-1 flex-col gap-4">
            {LAW_UPDATES.map((item) => (
              <li
                key={item}
                className="glass flex items-center gap-4 rounded-2xl !bg-white/65 px-4 py-4 ring-1 ring-white/90 lg:px-5 lg:py-5"
              >
                <span className="h-[50px] w-1.5 shrink-0 rounded bg-olive" />
                <p className="font-sans text-base leading-snug text-ink lg:text-[19px]">{item}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
