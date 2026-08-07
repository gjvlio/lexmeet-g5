import { createPortal } from 'react-dom';
import logo from '@/assets/header/header-logo.svg';
import googleIcon from '@/assets/modals/login/google-icon.png';
import fbIcon from '@/assets/modals/login/fb-icon.png';
import appleIcon from '@/assets/modals/login/apple-icon.png';
import poweredByLexMeet from '@/assets/modals/login/powered-by-lexmeet-green-icon.png';
import { cn } from '@/utils/cn.js';


export default function LoginModal({ isOpen, onClose, onOpenCreateAccount, className, usePortal = true }) {
  if (!isOpen) return null;

  const content = (
    <div
      className={cn(
        'relative z-20 w-full max-w-[440px] sm:max-w-[480px] max-h-[100dvh] sm:max-h-[95dvh] rounded-[28px] sm:rounded-[34px] overflow-y-auto overflow-x-hidden scrollbar-hide',
        'bg-white/65 backdrop-blur-2xl border border-white/80 shadow-2xl',
        'px-5 py-4 sm:px-8 sm:py-5 text-carbon-black transition-all duration-300 animate-in fade-in zoom-in-95',
        className
      )}
      role="dialog"
      aria-modal="true"
      aria-labelledby="login-modal-title"
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
        id="login-modal-title"
        className="font-display font-bold text-[25px] sm:text-[29px] tracking-normal text-carbon-black text-center mt-0 mb-1"
      >
        Sign In
      </h2>

      {/* Wider Divider Line Beneath Title */}
      <div className="h-px w-48 sm:w-64 bg-carbon-black/20 mx-auto mb-2 sm:mb-3" />

      <form onSubmit={(e) => e.preventDefault()} className="flex flex-col w-full">
        {/* Email Input */}
        <label className="font-sans text-[10px] sm:text-[11px] font-medium text-carbon-black/80 mb-0.5 text-left w-full pl-1">
          E-mail
        </label>
        <input
          type="email"
          placeholder="example@gmail.com"
          className="w-full rounded-xl bg-white/80 border border-white/90 px-3.5 py-1.5 sm:py-2 text-left text-xs sm:text-sm text-carbon-black placeholder-carbon-black/40 focus:bg-white focus:outline-none focus:ring-2 focus:ring-olive-leaf/40 transition-all mb-2 sm:mb-2.5"
        />

        {/* Password Input */}
        <label className="font-sans text-[10px] sm:text-[11px] font-medium text-carbon-black/80 mb-0.5 text-left w-full pl-1">
          Password
        </label>
        <input
          type="password"
          placeholder="••••••••••"
          className="w-full rounded-xl bg-white/80 border border-white/90 px-3.5 py-1.5 sm:py-2 text-left text-xs sm:text-sm text-carbon-black placeholder-carbon-black/40 focus:bg-white focus:outline-none focus:ring-2 focus:ring-olive-leaf/40 transition-all mb-2 sm:mb-2.5"
        />

        {/* Checkbox and Forgot Password Row */}
        <div className="flex items-center justify-between w-full px-1 mt-0 mb-2 text-[10px] sm:text-[11px] font-medium text-carbon-black/80">
          <label className="flex items-center gap-1.5 cursor-pointer select-none">
            <input
              type="checkbox"
              className="rounded border-carbon-black/30 text-olive-leaf focus:ring-olive-leaf h-3.5 w-3.5"
            />
            <span>Remember Me</span>
          </label>
          <button
            type="button"
            className="text-[10px] sm:text-[11px] font-medium text-carbon-black/70 hover:text-carbon-black transition-colors cursor-pointer"
          >
            Forgot Password
          </button>
        </div>

        {/* Sign In Button */}
        <button
          type="submit"
          className="w-full rounded-full bg-[#3D4223] py-2 sm:py-2.5 text-center font-sans text-xs sm:text-sm font-bold text-parchment shadow-pill hover:bg-[#2B2D19] active:scale-[0.99] transition-all cursor-pointer flex items-center justify-center"
        >
          Sign In
        </button>
      </form>

      {/* Or Divider */}
      <div className="my-2 sm:my-3 flex items-center gap-3 w-full">
        <div className="h-px flex-1 bg-carbon-black/20" />
        <span className="font-sans text-[10px] sm:text-[11px] font-medium text-carbon-black/60">or</span>
        <div className="h-px flex-1 bg-carbon-black/20" />
      </div>

      {/* Social Logins - Slightly lessened py-2 sm:py-2.5 height */}
      <div className="flex flex-col items-center gap-2 w-full">
        <div className="flex flex-col sm:flex-row w-full gap-2 justify-center">
          <button
            type="button"
            className="flex sm:flex-1 w-full items-center justify-center gap-2.5 rounded-full bg-[#2B2D19] py-1.5 sm:py-2 px-4 text-xs font-medium font-sans text-white hover:bg-black transition-colors whitespace-nowrap cursor-pointer"
          >
            <img src={googleIcon} alt="" className="h-4.5 w-4.5 shrink-0 object-contain" />
            <span>Log in with Google</span>
          </button>
          <button
            type="button"
            className="flex sm:flex-1 w-full items-center justify-center gap-2.5 rounded-full bg-[#2B2D19] py-1.5 sm:py-2 px-4 text-xs font-medium font-sans text-white hover:bg-black transition-colors whitespace-nowrap cursor-pointer"
          >
            <img src={fbIcon} alt="" className="h-4.5 w-4.5 shrink-0 object-contain" />
            <span>Log in with Facebook</span>
          </button>
        </div>

        <button
          type="button"
          className="flex w-full sm:w-[240px] items-center justify-center gap-2.5 rounded-full bg-[#2B2D19] py-1.5 sm:py-2 px-6 text-xs font-medium font-sans text-white hover:bg-black transition-colors whitespace-nowrap cursor-pointer"
        >
          <img src={appleIcon} alt="" className="h-4.5 w-4.5 shrink-0 object-contain" />
          <span>Log in with Apple</span>
        </button>
      </div>

      {/* Create Account Link */}
      <p className="mt-2.5 sm:mt-3 text-center font-sans text-[11px] sm:text-xs text-carbon-black/90">
        Don&apos;t have an Account?{' '}
        <button
          type="button"
          onClick={() => {
            if (onOpenCreateAccount) onOpenCreateAccount();
          }}
          className="font-bold text-carbon-black underline hover:text-olive-leaf transition-colors cursor-pointer"
        >
          Create an Account
        </button>
      </p>

      {/* Powered by LexMeet Footer Logo */}
      <div className="mt-2 flex justify-center">
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
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 overflow-y-auto">
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
