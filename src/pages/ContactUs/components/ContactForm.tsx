import { useId, useState } from 'react';
import Button from '@/components/ui/Button';
import { cn } from '@/utils/cn';

type Fields = {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
};

type Errors = Partial<Record<keyof Fields, string>>;

const EMPTY: Fields = {
  firstName: '',
  lastName: '',
  email: '',
  phone: '',
  subject: '',
  message: '',
};

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function validate(values: Fields): Errors {
  const errors: Errors = {};
  if (!values.firstName.trim()) errors.firstName = 'First name is required';
  if (!values.lastName.trim()) errors.lastName = 'Last name is required';
  if (!values.email.trim()) errors.email = 'Email is required';
  else if (!EMAIL_PATTERN.test(values.email.trim())) errors.email = 'Enter a valid email address';
  if (!values.phone.trim()) errors.phone = 'Phone number is required';
  if (!values.subject.trim()) errors.subject = 'Subject is required';
  if (!values.message.trim()) errors.message = 'Message is required';
  return errors;
}

const FIELD_BASE =
  'w-full rounded-2xl border bg-white/70 px-4 font-sans text-sm text-carbon-black placeholder:text-palm-leaf focus:outline-none focus-visible:ring-2 focus-visible:ring-olive-leaf/60';

/** Right column of the Contact Us page. Front-end only — no request is sent. */
export default function ContactForm() {
  const formId = useId();
  const [values, setValues] = useState<Fields>(EMPTY);
  const [errors, setErrors] = useState<Errors>({});
  const [isSent, setIsSent] = useState(false);

  const fieldId = (name: keyof Fields) => `${formId}-${name}`;
  const errorId = (name: keyof Fields) => `${formId}-${name}-error`;

  const handleChange = (name: keyof Fields) => (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setValues((prev) => ({ ...prev, [name]: event.target.value }));
    // Clear the error as soon as the user starts correcting the field.
    setErrors((prev) => (prev[name] ? { ...prev, [name]: undefined } : prev));
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const found = validate(values);
    setErrors(found);
    if (Object.keys(found).length > 0) {
      const firstInvalid = Object.keys(found)[0] as keyof Fields;
      document.getElementById(fieldId(firstInvalid))?.focus();
      return;
    }
    // TODO: POST to the contact endpoint once the backend exists.
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
          <svg viewBox="0 0 24 24" fill="none" className="h-7 w-7" aria-hidden>
            <path
              d="m5 12.5 4.5 4.5L19 7.5"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </span>
        <h2 className="mt-5 font-display text-2xl font-bold text-carbon-black">Message sent</h2>
        <p className="mt-2 max-w-sm font-sans text-sm leading-relaxed text-dark-khaki">
          Thanks for reaching out, {values.firstName.trim()}. We&rsquo;ll get back to you at{' '}
          {values.email.trim()} shortly.
        </p>
        <Button type="button" variant="glass" onClick={handleReset} className="mt-7">
          Send another message
        </Button>
      </div>
    );
  }

  return (
    <form noValidate onSubmit={handleSubmit} className="flex flex-col gap-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <Field
          label="First name"
          name="firstName"
          placeholder="Juan"
          value={values.firstName}
          error={errors.firstName}
          onChange={handleChange('firstName')}
          fieldId={fieldId}
          errorId={errorId}
        />
        <Field
          label="Last name"
          name="lastName"
          placeholder="Dela Cruz"
          value={values.lastName}
          error={errors.lastName}
          onChange={handleChange('lastName')}
          fieldId={fieldId}
          errorId={errorId}
        />
      </div>

      <Field
        label="Email"
        name="email"
        type="email"
        placeholder="example@email.com"
        value={values.email}
        error={errors.email}
        onChange={handleChange('email')}
        fieldId={fieldId}
        errorId={errorId}
      />

      <Field
        label="Phone number"
        name="phone"
        type="tel"
        placeholder="+63 912 345 6789"
        value={values.phone}
        error={errors.phone}
        onChange={handleChange('phone')}
        fieldId={fieldId}
        errorId={errorId}
      />

      <Field
        label="Subject"
        name="subject"
        placeholder="How can we help?"
        value={values.subject}
        error={errors.subject}
        onChange={handleChange('subject')}
        fieldId={fieldId}
        errorId={errorId}
      />

      <div>
        <label
          htmlFor={fieldId('message')}
          className="font-sans text-sm font-medium text-carbon-black"
        >
          Message
        </label>
        <textarea
          id={fieldId('message')}
          name="message"
          rows={6}
          placeholder="Tell us how we can help"
          value={values.message}
          onChange={handleChange('message')}
          aria-invalid={Boolean(errors.message)}
          aria-describedby={errors.message ? errorId('message') : undefined}
          className={cn(
            FIELD_BASE,
            'mt-2 resize-y py-3',
            errors.message ? 'border-red-500/70' : 'border-sage-mist/70',
          )}
        />
        {errors.message && (
          <p id={errorId('message')} role="alert" className="mt-1.5 font-sans text-xs text-red-700">
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

type FieldProps = {
  label: string;
  name: keyof Fields;
  type?: string;
  placeholder: string;
  value: string;
  error?: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  fieldId: (name: keyof Fields) => string;
  errorId: (name: keyof Fields) => string;
};

function Field({
  label,
  name,
  type = 'text',
  placeholder,
  value,
  error,
  onChange,
  fieldId,
  errorId,
}: FieldProps) {
  return (
    <div>
      <label htmlFor={fieldId(name)} className="font-sans text-sm font-medium text-carbon-black">
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
          'mt-2 h-12',
          error ? 'border-red-500/70' : 'border-sage-mist/70',
        )}
      />
      {error && (
        <p id={errorId(name)} role="alert" className="mt-1.5 font-sans text-xs text-red-700">
          {error}
        </p>
      )}
    </div>
  );
}
