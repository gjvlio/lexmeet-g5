import { createPortal } from 'react-dom';
import logo from '@/assets/header/header-logo.svg';
import googleIcon from '@/assets/modals/login/google-icon.png';
import fbIcon from '@/assets/modals/login/fb-icon.png';
import appleIcon from '@/assets/modals/login/apple-icon.png';
import poweredByLexMeet from '@/assets/modals/login/powered-by-lexmeet-green-icon.png';
import { cn } from '@/utils/cn';

export default function CreateAccountModal({ isOpen, onClose, onOpenLogin, className, usePortal = true }) {
  if (!isOpen) return null;

  const content = (
    <div
      className={cn(
        'relative z-20 w-full max-w-[480px] sm:max-w-[540px] rounded-[28px] sm:rounded-[34px] overflow-hidden',
        'bg-white/65 backdrop-blur-2xl border border-white/80 shadow-2xl',
        'px-5 py-5 sm:px-8 sm:py-6 text-carbon-black transition-all duration-300 animate-in fade-in zoom-in-95 max-h-[calc(100vh-30px)] overflow-y-auto scrollbar-none',
        className
      )}
      role="dialog"
      aria-modal="true"
      aria-labelledby="create-account-modal-title"
    >
      {/* Exit Button X */}
      <button
        type="button"
        onClick={onClose}
        aria-label="Close modal"
        className="absolute right-5 top-5 sm:right-6 sm:top-6 text-carbon-black/60 hover:text-carbon-black font-semibold text-base sm:text-lg transition-colors cursor-pointer z-10"
      >
        ✕
      </button>

      {/* Header Logo + Brand Name */}
      <div className="flex items-center justify-center gap-1.5 pt-0.5 sm:pt-1 mb-1">
        <img src={logo} alt="" className="h-3.5 sm:h-4 w-auto opacity-80" />
        <span className="font-display text-[10px] sm:text-[11px] font-medium tracking-[0.12em] text-carbon-black/65 uppercase">
          RIZAL LAW OFFICE
        </span>
      </div>

      {/* Header Title - Spectral Bold 29px */}
      <h2
        id="create-account-modal-title"
        className="font-display font-bold text-[25px] sm:text-[29px] tracking-normal text-carbon-black text-center mt-1 mb-2"
      >
        Create an Account
      </h2>

      {/* Wider Divider Line Beneath Title */}
      <div className="h-px w-48 sm:w-64 bg-carbon-black/20 mx-auto mb-3.5 sm:mb-4" />

      {/* Form Fields - 2-Column Grid Layout for Names & Passwords to Economize Vertical Height */}
      <form onSubmit={(e) => e.preventDefault()} className="flex flex-col w-full">
        {/* Row 1: First Name & Last Name Grid */}
        <div className="grid grid-cols-2 gap-2.5 sm:gap-3 w-full">
          <div>
            <label className="font-sans text-[10px] sm:text-[11px] font-medium text-carbon-black/80 mb-0.5 text-left block pl-1">
              First Name
            </label>
            <input
              type="text"
              placeholder="e.g. Juan"
              className="w-full rounded-xl bg-white/80 border border-white/90 px-3.5 py-2 sm:py-2.5 text-left text-xs sm:text-sm text-carbon-black placeholder-carbon-black/40 focus:bg-white focus:outline-none focus:ring-2 focus:ring-olive-leaf/40 transition-all"
            />
          </div>
          <div>
            <label className="font-sans text-[10px] sm:text-[11px] font-medium text-carbon-black/80 mb-0.5 text-left block pl-1">
              Last Name
            </label>
            <input
              type="text"
              placeholder="e.g. Dela Cruz"
              className="w-full rounded-xl bg-white/80 border border-white/90 px-3.5 py-2 sm:py-2.5 text-left text-xs sm:text-sm text-carbon-black placeholder-carbon-black/40 focus:bg-white focus:outline-none focus:ring-2 focus:ring-olive-leaf/40 transition-all"
            />
          </div>
        </div>

        {/* Row 2: Full Width Email */}
        <div className="w-full mt-1.5 sm:mt-2">
          <label className="font-sans text-[10px] sm:text-[11px] font-medium text-carbon-black/80 mb-0.5 text-left block pl-1">
            E-mail
          </label>
          <input
            type="email"
            placeholder="example@gmail.com"
            className="w-full rounded-xl bg-white/80 border border-white/90 px-3.5 py-2 sm:py-2.5 text-left text-xs sm:text-sm text-carbon-black placeholder-carbon-black/40 focus:bg-white focus:outline-none focus:ring-2 focus:ring-olive-leaf/40 transition-all"
          />
        </div>

        {/* Row 3: Password & Confirm Password Grid */}
        <div className="grid grid-cols-2 gap-2.5 sm:gap-3 w-full mt-1.5 sm:mt-2">
          <div>
            <label className="font-sans text-[10px] sm:text-[11px] font-medium text-carbon-black/80 mb-0.5 text-left block pl-1">
              Password
            </label>
            <input
              type="password"
              placeholder="••••••••••"
              className="w-full rounded-xl bg-white/80 border border-white/90 px-3.5 py-2 sm:py-2.5 text-left text-xs sm:text-sm text-carbon-black placeholder-carbon-black/40 focus:bg-white focus:outline-none focus:ring-2 focus:ring-olive-leaf/40 transition-all"
            />
          </div>
          <div>
            <label className="font-sans text-[10px] sm:text-[11px] font-medium text-carbon-black/80 mb-0.5 text-left block pl-1">
              Confirm Password
            </label>
            <input
              type="password"
              placeholder="••••••••••"
              className="w-full rounded-xl bg-white/80 border border-white/90 px-3.5 py-2 sm:py-2.5 text-left text-xs sm:text-sm text-carbon-black placeholder-carbon-black/40 focus:bg-white focus:outline-none focus:ring-2 focus:ring-olive-leaf/40 transition-all"
            />
          </div>
        </div>

        {/* Terms and Conditions Checkbox */}
        <div className="flex items-center gap-2 my-2.5 sm:my-3 w-full pl-1">
          <input
            type="checkbox"
            className="rounded border-carbon-black/30 text-olive-leaf focus:ring-olive-leaf h-3.5 w-3.5 cursor-pointer shrink-0"
          />
          <span className="font-sans text-[10px] sm:text-[11px] font-medium text-carbon-black/80 leading-tight">
            I agree to the{' '}
            <a
              href="#"
              onClick={(e) => e.preventDefault()}
              className="font-bold text-olive-leaf underline hover:text-carbon-black transition-colors"
            >
              Terms and Conditions
            </a>{' '}
            by LexMeet
          </span>
        </div>

        {/* Create Account Button */}
        <button
          type="submit"
          className="w-full rounded-full bg-[#3D4223] h-11 sm:h-12 text-center font-sans text-sm sm:text-base font-bold text-parchment shadow-pill hover:bg-[#2B2D19] active:scale-[0.99] transition-all cursor-pointer flex items-center justify-center mt-0.5"
        >
          Create Account
        </button>
      </form>

      {/* Or Divider */}
      <div className="my-3 sm:my-3.5 flex items-center gap-3 w-full">
        <div className="h-px flex-1 bg-carbon-black/20" />
        <span className="font-sans text-[10px] sm:text-[11px] font-medium text-carbon-black/60">or</span>
        <div className="h-px flex-1 bg-carbon-black/20" />
      </div>

      {/* Social Sign-up Buttons - Stacked on Mobile, Original 2-row layout on iPad/Desktop */}
      <div className="flex flex-col items-center gap-2.5 sm:gap-3 w-full">
        <div className="flex flex-col sm:flex-row w-full gap-2.5 sm:gap-3 justify-center">
          <button
            type="button"
            className="flex flex-1 items-center justify-center gap-2 sm:gap-2.5 rounded-full bg-[#2B2D19] h-10.5 sm:h-11 px-4 text-xs sm:text-sm font-medium font-sans text-white hover:bg-black transition-colors whitespace-nowrap cursor-pointer"
          >
            <img src={googleIcon} alt="" className="h-4.5 w-4.5 sm:h-5 sm:w-5 object-contain" />
            <span>Sign-up with Google</span>
          </button>
          <button
            type="button"
            className="flex flex-1 items-center justify-center gap-2 sm:gap-2.5 rounded-full bg-[#2B2D19] h-10.5 sm:h-11 px-4 text-xs sm:text-sm font-medium font-sans text-white hover:bg-black transition-colors whitespace-nowrap cursor-pointer"
          >
            <img src={fbIcon} alt="" className="h-4.5 w-4.5 sm:h-5 sm:w-5 object-contain" />
            <span>Sign-up with Facebook</span>
          </button>
        </div>

        <button
          type="button"
          className="flex items-center justify-center gap-2 sm:gap-2.5 rounded-full bg-[#2B2D19] h-10.5 sm:h-11 px-6 sm:px-8 text-xs sm:text-sm font-medium font-sans text-white hover:bg-black transition-colors whitespace-nowrap cursor-pointer w-full sm:w-auto"
        >
          <img src={appleIcon} alt="" className="h-4.5 w-4.5 sm:h-5 sm:w-5 object-contain" />
          <span>Sign-up with Apple</span>
        </button>
      </div>

      {/* Already Registered / Log-in here Link */}
      <p className="mt-3.5 sm:mt-4 text-center font-sans text-[11px] sm:text-xs text-carbon-black/90">
        Already registered?{' '}
        <button
          type="button"
          onClick={() => {
            if (onOpenLogin) onOpenLogin();
          }}
          className="font-bold text-carbon-black underline hover:text-olive-leaf transition-colors cursor-pointer"
        >
          Log-in here
        </button>
      </p>

      {/* Powered by LexMeet Footer Logo */}
      <div className="mt-2.5 sm:mt-3 flex justify-center">
        <img
          src={poweredByLexMeet}
          alt="Powered by LexMeet"
          className="h-3.5 sm:h-4 w-auto object-contain opacity-90"
        />
      </div>
    </div>
  );

  if (!usePortal) {
    return content;
  }

  return createPortal(
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4">
      {/* Dark Backdrop Blur Overlay BEHIND the modal */}
      <div
        aria-hidden={true}
        onClick={onClose}
        className="absolute inset-0 bg-carbon-black/60 backdrop-blur-md animate-in fade-in duration-300 cursor-pointer"
      />
      {content}
    </div>,
    document.body
  );
}
