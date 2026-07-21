import { LAW_UPDATES } from '@/utils/content';
import { PHOTOS } from '@/utils/images';

/** LAW UPDATES band — glass search pill, featured image, glass news rows. */
export default function LawUpdates() {
  const featured = PHOTOS['updates-featured'];
  return (
    <section id="updates" className="relative bg-cream py-20">
      <div className="mx-auto max-w-[1440px] px-16">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="font-display text-4xl font-bold text-ink">LAW UPDATES</h2>
            <span className="mt-3 block h-[3px] w-16 bg-sage" />
          </div>

          {/* glass search */}
          <div className="glass flex h-[54px] w-[520px] items-center gap-3 rounded-full !bg-white/60 px-3 ring-1 ring-sage/90">
            <span className="grid h-[30px] w-[30px] place-items-center rounded-full bg-olive text-cream">
              <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="11" cy="11" r="7" />
                <path d="m20 20-3-3" />
              </svg>
            </span>
            <span className="font-sans text-sm text-ink/70">Search something...</span>
          </div>
        </div>

        <div className="mt-8 flex gap-8">
          <div className="h-[280px] w-[360px] shrink-0 overflow-hidden rounded-tl-[80px] rounded-br-[80px] rounded-tr-2xl rounded-bl-2xl ring-1 ring-sage/90">
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
                className="glass flex items-center gap-4 rounded-2xl !bg-white/65 px-5 py-5 ring-1 ring-white/90"
              >
                <span className="h-[50px] w-1.5 shrink-0 rounded bg-olive" />
                <p className="font-sans text-[19px] leading-snug text-ink">{item}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
