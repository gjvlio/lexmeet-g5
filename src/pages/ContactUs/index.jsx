import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import GlassCard from "@/components/ui/GlassCard";
import ContactDetails from "./components/ContactDetails";
import ContactForm from "./components/ContactForm";
/**
 * Contact Us page — office details beside a message form on one glass panel.
 * Header/Footer come from Layout, so this renders content only.
 */
export default function ContactUs() {
  return (
    <section className="bg-services-fade py-6 lg:py-8">
      {/* Narrower than the usual 1440 shell — stretched to full width the
          form inputs end up ~400px wide for a first name, and the two
          columns drift far apart. */}
      <div className="mx-auto max-w-[1120px] px-4 sm:px-6 lg:px-8">
        {/* Negative top margin kept from #29 — closes the last of the gap
            under the header without cutting the section's own padding. */}
        <GlassCard className="-mt-2 grid items-center gap-8 p-6 md:p-8 lg:-mt-4 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.1fr)] lg:gap-12">
          <ContactDetails />
          <ContactForm />
        </GlassCard>
      </div>
    </section>
  );
}
