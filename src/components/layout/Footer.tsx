import { CONTACT, WEBSITE_AGREEMENTS } from '@/utils/content';
import fb from '@/assets/footer/footer-fb-icon.png';
import twitter from '@/assets/footer/footer-twitter-icon.png';
import linkedin from '@/assets/footer/footer-linkedin-icon.png';
import ig from '@/assets/footer/footer-ig-icon.png';
import yt from '@/assets/footer/footer-yt-icon.png';
import FooterLogo from '@/components/ui/FooterLogo';
import divider from '@/assets/footer/footer-divider.svg';
import credits from '@/assets/footer/footer-powered-by-lexmeet.svg';

const SOCIALS = [
  { icon: fb, label: 'Facebook' },
  { icon: twitter, label: 'Twitter' },
  { icon: linkedin, label: 'LinkedIn' },
  { icon: ig, label: 'Instagram' },
  { icon: yt, label: 'YouTube' },
];

/**
 * Site footer — watermark brand row, four info columns, credits bar.
 * Sized against the 1440px Figma frame; a responsive pass is tracked
 * separately in docs/PROGRESS.md.
 */
export default function Footer() {
  return (
    <footer id="contact" className="relative overflow-hidden bg-dark-khaki text-parchment">
      <BrandRow />
      <InfoColumns />
      <CreditsBar />
    </footer>
  );
}

/** Faint brand lockup left, italic tagline right, brush-stroke rule beneath. */
function BrandRow() {
  return (
    <div className="mx-auto max-w-[1440px] px-[72px] pt-9">
      <div className="flex items-end justify-between">
        <div className="flex items-center gap-3 text-parchment opacity-20">
          <FooterLogo />
          <span className="font-display text-[76px] font-bold leading-none tracking-[-0.1em]">
            Rizal Law Office
          </span>
        </div>
        <p className="mb-2 font-display text-[19px] italic text-parchment">
          &ldquo;{CONTACT.quote}&rdquo;
        </p>
      </div>
      <img src={divider} alt="" className="mt-3 h-[6px] w-full" />
    </div>
  );
}

/**
 * Column widths come from the Figma frame rather than an even split — the
 * address and contact blocks are wider than the social/agreement blocks.
 */
function InfoColumns() {
  return (
    <div
      className="mx-auto grid max-w-[1440px] gap-0 px-[128px] pb-10 pt-8"
      style={{ gridTemplateColumns: '328px 360px 240px 1fr' }}
    >
      <VisitUsColumn />
      <ContactUsColumn />
      <FollowUsColumn />
      <WebsiteAgreementsColumn />
    </div>
  );
}

function ColumnHeading({ children }: { children: React.ReactNode }) {
  return (
    <h3 className="font-display text-[28px] font-bold leading-none text-parchment">{children}</h3>
  );
}

function VisitUsColumn() {
  return (
    <div>
      <ColumnHeading>VISIT US</ColumnHeading>
      <address className="mt-4 font-sans text-[13px] not-italic leading-[1.55] text-linen-olive">
        {CONTACT.address.map((line) => (
          <div key={line}>{line}</div>
        ))}
      </address>
    </div>
  );
}

function ContactUsColumn() {
  return (
    <div>
      <ColumnHeading>CONTACT US</ColumnHeading>
      <dl className="mt-4 font-sans text-[13px] leading-[1.55] text-linen-olive">
        <ContactLine label="Tel. No" value={CONTACT.tel} />
        <ContactLine label="Cel. No" value={CONTACT.cel} />
        <ContactLine label="Viber" value={CONTACT.viber} />
        <ContactLine label="Email" value={CONTACT.email} />
        <ContactLine label="Fax" value={CONTACT.fax} />
      </dl>
    </div>
  );
}

function ContactLine({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex gap-1">
      <dt className="font-bold text-parchment">{label}:</dt>
      <dd>{value}</dd>
    </div>
  );
}

function FollowUsColumn() {
  return (
    <div>
      <ColumnHeading>FOLLOW US</ColumnHeading>
      <div className="mt-4 flex gap-[7px]">
        {SOCIALS.map((s) => (
          <a
            key={s.label}
            href="#"
            aria-label={s.label}
            className="transition-opacity hover:opacity-80"
          >
            <img src={s.icon} alt="" className="h-[33.98px] w-[33.98px]" />
          </a>
        ))}
      </div>
    </div>
  );
}

/** Separated from the social column by a hairline rule, as in the design. */
function WebsiteAgreementsColumn() {
  return (
    <div className="border-l border-parchment/25 pl-8">
      <h3 className="font-display text-[14px] font-medium uppercase tracking-[0.03em] text-parchment">
        Website Agreements
      </h3>
      <ul className="mt-3 font-sans text-[12px] leading-[1.45] text-linen-olive">
        {WEBSITE_AGREEMENTS.map((item) => (
          <li key={item.label}>
            <a href={item.href} className="hover:text-parchment">
              {item.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

/** The credits artwork already contains the full "Powered by … " line. */
function CreditsBar() {
  return (
    <div className="bg-charcoal-brown py-[15px]">
      <img src={credits} alt="Powered by LexMeet — All Rights Reserved, 2026" className="mx-auto h-[13px] w-auto" />
    </div>
  );
}
