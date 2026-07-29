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
 * Mobile-first: the columns stack, then go 2-up at `sm`, then take the
 * comp's uneven 4-column split at `lg`.
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
    <div className="mx-auto max-w-[1440px] px-4 pt-8 sm:px-6 desktop:px-[72px] desktop:pt-9">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
        <div className="flex items-center gap-3 text-parchment opacity-20">
          <FooterLogo className="h-[34px] w-[46px] shrink-0 lg:h-[62px] lg:w-[84px]" />
          <span className="font-display text-[38px] font-bold leading-none tracking-[-0.1em] sm:text-[52px] lg:text-[76px]">
            Rizal Law Office
          </span>
        </div>
        <p className="font-display text-base italic text-parchment sm:mb-2 lg:text-[19px]">
          &ldquo;{CONTACT.quote}&rdquo;
        </p>
      </div>
      <img src={divider} alt="" className="mt-3 h-[6px] w-full" />
    </div>
  );
}

/**
 * Stacked on a phone, 2-up from `sm`. At `lg` the comp's uneven split takes
 * over — the address and contact blocks are wider than the social and
 * agreement blocks, so this is a template rather than four equal columns.
 */
function InfoColumns() {
  return (
    <div className="mx-auto grid max-w-[1440px] grid-cols-1 gap-8 px-4 pb-10 pt-8 sm:grid-cols-2 sm:px-6 desktop:gap-0 desktop:px-[128px] desktop:[grid-template-columns:328px_360px_240px_1fr]">
      <VisitUsColumn />
      <ContactUsColumn />
      <FollowUsColumn />
      <WebsiteAgreementsColumn />
    </div>
  );
}

function ColumnHeading({ children }: { children: React.ReactNode }) {
  return (
    <h3 className="font-display text-2xl font-bold leading-none text-parchment lg:text-[28px]">
      {children}
    </h3>
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

/**
 * Separated from the social column by a hairline rule in the comp. The rule
 * only reads as a separator once the columns sit side by side, so it waits
 * for `desktop` rather than hanging off a stacked block on a phone.
 */
function WebsiteAgreementsColumn() {
  return (
    <div className="desktop:border-l desktop:border-parchment/25 desktop:pl-8">
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
    <div className="bg-charcoal-brown px-4 py-[15px]">
      {/* Width-driven, not height-driven, so the artwork keeps its aspect ratio
          when it has to shrink on a narrow screen. */}
      <img
        src={credits}
        alt="Powered by LexMeet — All Rights Reserved, 2026"
        className="mx-auto h-auto w-[240px] sm:w-[266px]"
      />
    </div>
  );
}
