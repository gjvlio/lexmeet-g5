import { CONTACT } from '@/utils/content';
import ScalesIcon from '@/components/ui/ScalesIcon';

const SOCIALS = ['f', 'ig', 'in', 'yt', 'x'];

/** Dark gradient footer with watermark, columns, and glass social chips. */
export default function Footer() {
  return (
    <footer id="contact" className="relative overflow-hidden bg-footer-fade text-cream">
      {/* watermark */}
      <span
        aria-hidden
        className="pointer-events-none absolute inset-x-0 bottom-2 text-center font-display text-[118px] font-extrabold uppercase tracking-wide text-cream/[0.07]"
      >
        Rizal Law Office
      </span>

      <div className="relative mx-auto grid max-w-[1440px] grid-cols-1 gap-10 px-16 pb-20 pt-14 md:grid-cols-3">
        <div>
          <h3 className="font-display text-3xl font-bold text-cream">VISIT US</h3>
          <address className="mt-4 space-y-1 font-sans text-sm not-italic text-mist">
            {CONTACT.address.map((line) => (
              <div key={line}>{line}</div>
            ))}
          </address>
        </div>

        <div>
          <h3 className="font-display text-3xl font-bold text-cream">CONTACT US</h3>
          <p className="mt-4 space-y-1 font-sans text-sm text-mist">
            <span className="block">
              <span className="font-bold text-cream">Tel. No:</span> {CONTACT.tel}
            </span>
            <span className="block">
              <span className="font-bold text-cream">Email:</span> {CONTACT.email}
            </span>
          </p>
        </div>

        <div>
          <h3 className="font-display text-3xl font-bold text-cream">FOLLOW US</h3>
          <div className="mt-4 flex gap-3">
            {SOCIALS.map((s) => (
              <a
                key={s}
                href="#"
                aria-label={s}
                className="grid h-10 w-10 place-items-center rounded-full border border-white/35 bg-white/[0.14] text-sm text-cream backdrop-blur transition-colors hover:bg-white/25"
              >
                {s}
              </a>
            ))}
          </div>
          <p className="mt-5 font-sans text-[18px] italic text-mist/90">
            &ldquo; {CONTACT.quote} &rdquo;
          </p>
        </div>
      </div>

      <div className="relative mx-auto max-w-[1200px] border-t border-sage/35 py-5">
        <div className="flex items-center justify-center gap-2 font-sans text-xs text-sage">
          <ScalesIcon className="h-4 w-4 text-sage" />
          Powered by LexMeet &nbsp;•&nbsp; All Rights Reserved, 2022.
        </div>
      </div>
    </footer>
  );
}
