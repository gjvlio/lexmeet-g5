import { CONTACT } from "@/utils/content";
import FooterLogo from "@/components/ui/FooterLogo";

/** Circular olive badge holding one of the contact icons. */
function IconBadge({ children }) {
  return (
    <span className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-olive-leaf text-parchment shadow-pill">
      {children}
    </span>
  );
}

function PinIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="h-4 w-4" aria-hidden="true">
      <g stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 21s7-5.6 7-11a7 7 0 1 0-14 0c0 5.4 7 11 7 11Z" />
        <circle cx="12" cy="10" r="2.5" />
      </g>
    </svg>
  );
}

function PhoneIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="h-4 w-4" aria-hidden="true">
      <path
        d="M6.5 3.5h3l1.5 4-2 1.5a12 12 0 0 0 6 6l1.5-2 4 1.5v3a1.5 1.5 0 0 1-1.6 1.5C11.6 19.9 4.1 12.4 3.5 5.1A1.5 1.5 0 0 1 5 3.5h1.5Z"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function MailIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="h-4 w-4" aria-hidden="true">
      <g stroke="currentColor" strokeWidth="1.7" strokeLinejoin="round">
        <rect x="3" y="5.5" width="18" height="13" rx="2.5" />
        <path d="m3.8 7 8.2 6 8.2-6" strokeLinecap="round" />
      </g>
    </svg>
  );
}

/** Left column of the Contact Us page — office details pulled from content.ts. */
export default function ContactDetails() {
  return (
    <div>
      {/* Full-width flex so the whole lockup centres in the column, not just
          the mark over the wordmark. */}
      <div className="flex flex-col items-center text-center text-dark-khaki">
        <FooterLogo className="h-9 w-[49px]" />
        <p className="mt-2 whitespace-nowrap font-display text-[22px] font-medium tracking-[0.1em]">
          RIZAL LAW OFFICE
        </p>
      </div>

      <h1 className="mt-4 font-display text-2xl font-bold text-carbon-black lg:text-[28px]">
        Contact Us
      </h1>
      <p className="mt-2.5 font-sans text-[14px] leading-relaxed text-dark-khaki">
        We’d love to hear from you! Whether you have a question, need a quote, or want to learn more about our services, feel free to get in touch. Send us a message using the form or contact us through our phone number or email.
      </p>

      <dl className="mt-5 space-y-4">
        <div className="flex gap-4">
          <IconBadge>
            <PinIcon />
          </IconBadge>
          <div>
            <dt className="font-sans text-xs font-bold tracking-[0.14em] text-carbon-black">
              ADDRESS
            </dt>
            <dd className="mt-1 font-sans text-sm leading-relaxed text-dark-khaki">
              {CONTACT.address.map((line) => (
                <span key={line} className="block">
                  {line}
                </span>
              ))}
            </dd>
          </div>
        </div>

        <div className="flex gap-4">
          <IconBadge>
            <PhoneIcon />
          </IconBadge>
          <div>
            <dt className="font-sans text-xs font-bold tracking-[0.14em] text-carbon-black">
              CONTACT NUMBER
            </dt>
            <dd className="mt-1 font-sans text-sm text-dark-khaki">
              <a href={`tel:${CONTACT.tel.replace(/[^\d+]/g, "")}`} className="hover:underline">
                {CONTACT.tel}
              </a>
            </dd>
          </div>
        </div>

        <div className="flex gap-4">
          <IconBadge>
            <MailIcon />
          </IconBadge>
          <div>
            <dt className="font-sans text-xs font-bold tracking-[0.14em] text-carbon-black">
              EMAIL
            </dt>
            <dd className="mt-1 font-sans text-sm text-dark-khaki">
              <a href={`mailto:${CONTACT.email}`} className="hover:underline">
                {CONTACT.email}
              </a>
            </dd>
          </div>
        </div>
      </dl>
    </div>
  );
}
