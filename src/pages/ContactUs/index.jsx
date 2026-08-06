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
    <section className="bg-services-fade py-8 lg:py-10">
      <div className="mx-auto max-w-[1440px] px-4 sm:px-6 md:px-16">
        <GlassCard className="-mt-2 lg:-mt-4 grid gap-8 p-6 md:gap-10 md:p-10 lg:grid-cols-[minmax(0,400px)_minmax(0,1fr)] lg:gap-14">
          <ContactDetails />
          <ContactForm />
        </GlassCard>
      </div>
    </section>
  );
}
