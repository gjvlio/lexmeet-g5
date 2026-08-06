import { useId, useState } from "react";
import Button from "@/components/ui/Button";
import { cn } from "@/utils/cn";

const EMPTY = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  subject: "",
  message: "",
};

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function validate(values) {
  const errors = {};
  if (!values.firstName.trim()) errors.firstName = "First name is required";
  if (!values.lastName.trim()) errors.lastName = "Last name is required";
  if (!values.email.trim()) errors.email = "Email is required";
  else if (!EMAIL_PATTERN.test(values.email.trim()))
    errors.email = "Enter a valid email address";
  if (!values.phone.trim()) errors.phone = "Phone number is required";
  if (!values.subject.trim()) errors.subject = "Subject is required";
  if (!values.message.trim()) errors.message = "Message is required";
  return errors;
}

const FIELD_BASE =
  "w-full rounded-2xl border bg-white/70 px-4 font-sans text-sm text-carbon-black placeholder:text-palm-leaf focus:outline-none focus-visible:ring-2 focus-visible:ring-olive-leaf/60";

/** Right column of the Contact Us page. Front-end only — no request is sent. */
export default function ContactForm() {
  const formId = useId();
  const [values, setValues] = useState(EMPTY);
  const [errors, setErrors] = useState({});
  const [isSent, setIsSent] = useState(false);

  const fieldId = (name) => `${formId}-${name}`;
  const errorId = (name) => `${formId}-${name}-error`;

  const handleChange = (name) => (event) => {
    setValues((prev) => ({ ...prev, [name]: event.target.value }));
    // Clear the error as soon as the user starts correcting the field.
    setErrors((prev) => (prev[name] ? { ...prev, [name]: undefined } : prev));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const found = validate(values);
    setErrors(found);
    if (Object.keys(found).length > 0) {
      const firstInvalid = Object.keys(found)[0];
      document.getElementById(fieldId(firstInvalid))?.focus();
      return;
    }
    // POST request logic can be added later
    setIsSent(true);
  };

  const handleReset = () => {
    setValues(EMPTY);
    setErrors({});
    setIsSent(false);
  };

  if (isSent) {
    return (
      <div
        role="status"
        className="flex h-full flex-col items-center justify-center rounded-3xl border border-white/70 bg-white/50 p-10 text-center"
      >
        <span className="inline-flex h-14 w-14 items-center justify-center rounded-full bg-olive-leaf text-parchment">
          <svg viewBox="0 0 24 24" fill="none" className="h-7 w-7" aria-hidden={true}>
            <path
              d="m5 12.5 4.5 4.5L19 7.5"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </span>
        <h2 className="mt-5 font-display text-2xl font-bold text-carbon-black">
          Message sent
        </h2>
        <p className="mt-2 max-w-sm font-sans text-sm leading-relaxed text-dark-khaki">
          Thanks for reaching out, {values.firstName.trim()}. We’ll get back to you at{" "}
          {values.email.trim()} shortly.
        </p>
        <Button type="button" variant="glass" onClick={handleReset} className="mt-7">
          Send another message
        </Button>
      </div>
    );
  }

  return (
    <form noValidate onSubmit={handleSubmit} className="flex flex-col gap-3">
      <div className="grid gap-3 sm:grid-cols-2">
        <Field
          label="First name"
          name="firstName"
          placeholder="First Name"
          value={values.firstName}
          error={errors.firstName}
          onChange={handleChange("firstName")}
          fieldId={fieldId}
          errorId={errorId}
        />
        <Field
          label="Last name"
          name="lastName"
          placeholder="Last Name"
          value={values.lastName}
          error={errors.lastName}
          onChange={handleChange("lastName")}
          fieldId={fieldId}
          errorId={errorId}
        />
      </div>

      <Field
        label="Email"
        name="email"
        type="email"
        placeholder="Email"
        value={values.email}
        error={errors.email}
        onChange={handleChange("email")}
        fieldId={fieldId}
        errorId={errorId}
      />

      <Field
        label="Phone number"
        name="phone"
        type="tel"
        placeholder="Phone Number"
        value={values.phone}
        error={errors.phone}
        onChange={handleChange("phone")}
        fieldId={fieldId}
        errorId={errorId}
      />

      <Field
        label="Subject"
        name="subject"
        placeholder="Subject"
        value={values.subject}
        error={errors.subject}
        onChange={handleChange("subject")}
        fieldId={fieldId}
        errorId={errorId}
      />

      <div>
        <label htmlFor={fieldId("message")} className="sr-only">
          Message
        </label>
        <textarea
          id={fieldId("message")}
          name="message"
          rows={4}
          placeholder="How can we help?"
          value={values.message}
          onChange={handleChange("message")}
          aria-invalid={Boolean(errors.message)}
          aria-describedby={errors.message ? errorId("message") : undefined}
          className={cn(
            FIELD_BASE,
            "resize-y py-3",
            errors.message ? "border-red-500/70" : "border-sage-mist/70"
          )}
        />
        {errors.message && (
          <p id={errorId("message")} role="alert" className="mt-1 font-sans text-xs text-red-700">
            {errors.message}
          </p>
        )}
      </div>

      <div className="flex justify-center">
        <Button type="submit">Submit Message</Button>
      </div>
    </form>
  );
}

function Field({
  label,
  name,
  type = "text",
  placeholder,
  value,
  error,
  onChange,
  fieldId,
  errorId,
}) {
  return (
    <div>
      {/* Label carried by the placeholder to save a line per field. Kept in
          the DOM for screen readers, since a placeholder alone is not a
          label and vanishes as soon as the field has content. */}
      <label htmlFor={fieldId(name)} className="sr-only">
        {label}
      </label>
      <input
        id={fieldId(name)}
        name={name}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        aria-invalid={Boolean(error)}
        aria-describedby={error ? errorId(name) : undefined}
        className={cn(
          FIELD_BASE,
          "h-11",
          error ? "border-red-500/70" : "border-sage-mist/70"
        )}
      />
      {error && (
        <p id={errorId(name)} role="alert" className="mt-1 font-sans text-xs text-red-700">
          {error}
        </p>
      )}
    </div>
  );
}
