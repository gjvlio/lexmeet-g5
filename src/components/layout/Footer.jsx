import { CONTACT, WEBSITE_AGREEMENTS } from "@/utils/content";
import fb from "@/assets/footer/footer-fb-icon.png";
import twitter from "@/assets/footer/footer-twitter-icon.png";
import linkedin from "@/assets/footer/footer-linkedin-icon.png";
import ig from "@/assets/footer/footer-ig-icon.png";
import yt from "@/assets/footer/footer-yt-icon.png";
import FooterLogo from "@/components/ui/FooterLogo";
import divider from "@/assets/footer/footer-divider.svg";
import credits from "@/assets/footer/footer-powered-by-lexmeet.svg";

const SOCIALS = [
  { icon: fb, label: "Facebook" },
  { icon: twitter, label: "Twitter" },
  { icon: linkedin, label: "LinkedIn" },
  { icon: ig, label: "Instagram" },
  { icon: yt, label: "YouTube" },
];

/**
 * Site footer — watermark brand row, four info columns, credits bar.
 * Mobile (grid-cols-1) -> iPad & Desktop (md:grid-cols-4) with scalable typography and icons.
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
    <div className="mx-auto max-w-[1440px] px-4 pt-8 sm:px-6 md:px-8 xl:px-[72px] xl:pt-9">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
        <div className="flex items-center gap-2.5 sm:gap-3 text-parchment opacity-20">
          <FooterLogo className="h-[34px] w-[46px] shrink-0 md:h-[48px] md:w-[64px] xl:h-[62px] xl:w-[84px]" />
          <span className="font-display text-[32px] font-bold leading-none tracking-[-0.08em] sm:text-[46px] md:text-[56px] xl:text-[76px]">
            Rizal Law Office
          </span>
        </div>
        <p className="font-display text-sm italic text-parchment sm:mb-2 md:text-base xl:text-[19px]">
          &ldquo;{CONTACT.quote}&rdquo;
        </p>
      </div>
      <img src={divider} alt="" className="mt-3 h-[6px] w-full object-cover" />
    </div>
  );
}

/**
 * Info columns: 1 column on phone, 4 side-by-side scalable columns on iPad and Desktop.
 */
function InfoColumns() {
  return (
    <div className="mx-auto max-w-[1440px] px-4 pb-10 pt-8 sm:px-6 md:px-8 xl:px-[128px]">
      <div className="grid grid-cols-1 gap-8 md:grid-cols-4 md:gap-4 lg:gap-6 xl:gap-8">
        <VisitUsColumn />
        <ContactUsColumn />
        <FollowUsColumn />
        <WebsiteAgreementsColumn />
      </div>
    </div>
  );
}

function ColumnHeading({ children }) {
  return (
    <h3 className="font-display text-xl font-bold leading-none text-parchment md:text-[18px] lg:text-[22px] xl:text-[28px]">
      {children}
    </h3>
  );
}

function VisitUsColumn() {
  return (
    <div>
      <ColumnHeading>VISIT US</ColumnHeading>
      <address className="mt-3 sm:mt-4 font-sans text-xs md:text-[11px] lg:text-[12.5px] xl:text-[13px] not-italic leading-[1.5] text-linen-olive">
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
      <dl className="mt-3 sm:mt-4 font-sans text-xs md:text-[11px] lg:text-[12.5px] xl:text-[13px] leading-[1.5] text-linen-olive">
        <ContactLine label="Tel. No" value={CONTACT.tel} />
        <ContactLine label="Cel. No" value={CONTACT.cel} />
        <ContactLine label="Fax" value={CONTACT.fax} />
        <ContactLine label="Viber" value={CONTACT.viber} />
        <ContactLine label="Email" value={CONTACT.email} />
      </dl>
    </div>
  );
}

function ContactLine({ label, value }) {
  return (
    <div className="flex gap-1">
      <dt className="font-bold text-parchment shrink-0">{label}:</dt>
      <dd className="break-all sm:break-normal">{value}</dd>
    </div>
  );
}

function FollowUsColumn() {
  return (
    <div>
      <ColumnHeading>FOLLOW US</ColumnHeading>
      <div className="mt-3 sm:mt-4 flex flex-wrap gap-1.5 md:gap-1.5 lg:gap-2">
        {SOCIALS.map((s) => (
          <a
            key={s.label}
            href="#"
            aria-label={s.label}
            className="transition-opacity hover:opacity-80"
          >
            <img
              src={s.icon}
              alt=""
              className="h-7 w-7 md:h-7 md:w-7 lg:h-8 lg:w-8 xl:h-[34px] xl:w-[34px] object-contain"
            />
          </a>
        ))}
      </div>
    </div>
  );
}

function WebsiteAgreementsColumn() {
  return (
    <div className="md:border-l md:border-parchment/25 md:pl-4 lg:pl-6 xl:pl-8">
      <h3 className="font-display text-xs md:text-[12px] lg:text-[13px] xl:text-[14px] font-medium uppercase tracking-[0.03em] text-parchment">
        WEBSITE AGREEMENTS
      </h3>
      <ul className="mt-3 font-sans text-xs md:text-[11px] lg:text-[12px] leading-[1.45] text-linen-olive">
        {WEBSITE_AGREEMENTS.map((item) => (
          <li key={item.label}>
            <a href={item.href} className="hover:text-parchment transition-colors">
              {item.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

function CreditsBar() {
  return (
    <div className="bg-charcoal-brown px-4 py-[15px]">
      <img
        src={credits}
        alt="Powered by LexMeet — All Rights Reserved, 2026"
        className="mx-auto h-auto w-[240px] sm:w-[266px]"
      />
    </div>
  );
}
