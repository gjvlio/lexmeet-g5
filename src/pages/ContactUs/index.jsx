import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import GlassCard from "@/components/ui/GlassCard";
import ContactDetails from "./components/ContactDetails";
import ContactForm from "./components/ContactForm";
/**
 * Contact Us page — office details beside a message form on one glass panel.
 * Header/Footer come from Layout, so this renders content only.
 */
export default function ContactUs() {
  return _jsx("section", {
    className: "bg-services-fade py-20",
    children: _jsx("div", {
      className: "mx-auto max-w-[1440px] px-6 md:px-16",
      children: _jsxs(GlassCard, {
        className:
          "grid gap-12 p-8 md:p-12 lg:grid-cols-[minmax(0,400px)_minmax(0,1fr)] lg:gap-16",
        children: [_jsx(ContactDetails, {}), _jsx(ContactForm, {})],
      }),
    }),
  });
}
