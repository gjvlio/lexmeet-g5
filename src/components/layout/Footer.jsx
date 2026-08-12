import { useState } from "react";
import { Link } from "react-router-dom";
import { CONTACT, WEBSITE_AGREEMENTS } from "@/utils/content.js";
import fb from "@/assets/footer/footer-fb-icon.png";
import twitter from "@/assets/footer/footer-twitter-icon.png";
import linkedin from "@/assets/footer/footer-linkedin-icon.png";
import ig from "@/assets/footer/footer-ig-icon.png";
import yt from "@/assets/footer/footer-yt-icon.png";
import FooterLogo from "@/components/ui/FooterLogo";
import divider from "@/assets/footer/footer-divider.svg";
import credits from "@/assets/footer/footer-powered-by-lexmeet.svg";

/**
 * TikTok badge. Drawn rather than imported — there is no exported asset for
 * it, and an SVG matches the others' cream-circle-with-knockout-glyph
 * treatment while staying sharp at any size.
 */
function TikTokIcon({ className }) {
  return (
    <svg viewBox="0 0 32 32" className={className} aria-hidden="true">
      <circle cx="16" cy="16" r="16" className="fill-parchment" />
      <path
        className="fill-charcoal-brown"
        d="M19.4 8c.28 1.5 1.13 2.72 2.6 3.28.5.2 1.02.3 1.55.32v2.6a6.6 6.6 0 0 1-3.9-1.25v5.35a5.15 5.15 0 1 1-4.44-5.1v2.7a2.5 2.5 0 1 0 1.83 2.4V8h2.36Z"
      />
    </svg>
  );
}

const SOCIALS = [
  { icon: fb, label: "Facebook" },
  { icon: twitter, label: "Twitter" },
  { icon: linkedin, label: "LinkedIn" },
  { icon: ig, label: "Instagram" },
  { icon: yt, label: "YouTube" },
  { Icon: TikTokIcon, label: "TikTok" },
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
      <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
        <Link to="/" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="flex items-center gap-2.5 sm:gap-3.5 text-parchment opacity-20 hover:opacity-50 transition-opacity max-w-full min-w-0 cursor-pointer" aria-label="Home">
          <FooterLogo className="h-8 w-11 sm:h-10 sm:w-14 md:h-11 md:w-15 xl:h-[46px] xl:w-[62px] shrink-0" />
          <span className="font-display text-[18px] sm:text-[24px] md:text-[28px] lg:text-[34px] xl:text-[38px] font-bold leading-tight tracking-tight break-words min-w-0">
            Rizal Law Office
          </span>
        </Link>
        <p className="font-display text-xs sm:text-sm italic text-parchment lg:text-base xl:text-[17px] opacity-75 lg:max-w-[45%] lg:text-right">
          &ldquo;{CONTACT.quote}&rdquo;
        </p>
      </div>
      <img src={divider} alt="" className="mt-3.5 h-[6px] w-full object-cover" />
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
      <dt className="text-parchment shrink-0">{label}:</dt>
      <dd className="break-all sm:break-normal">{value}</dd>
    </div>
  );
}

function FollowUsColumn() {
  return (
    <div>
      <ColumnHeading>FOLLOW US</ColumnHeading>
      <div className="mt-3 sm:mt-4 flex flex-wrap gap-1.5 md:gap-1.5 lg:gap-2">
        {SOCIALS.map((s) => {
          const sizing = "h-7 w-7 md:h-7 md:w-7 lg:h-8 lg:w-8 xl:h-[34px] xl:w-[34px]";
          return (
            <a
              key={s.label}
              href="#"
              aria-label={s.label}
              className="transition-opacity hover:opacity-80"
            >
              {s.Icon ? (
                <s.Icon className={sizing} />
              ) : (
                <img src={s.icon} alt="" className={`${sizing} object-contain`} />
              )}
            </a>
          );
        })}
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
