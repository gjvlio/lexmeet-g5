import { useState, useEffect, useRef } from 'react';
import { useOutletContext } from 'react-router-dom';
import heroBg from '@/assets/modals/hero/hero-bg.png';
import LoginModal from '@/components/modals/LoginModal';
import CreateAccountModal from '@/components/modals/CreateAccountModal';
import Orb from '@/components/ui/Orb';
import { cn } from '@/utils/cn';

export default function Hero() {
  const outletContext = useOutletContext();
  const [internalModal, setInternalModal] = useState('none');

  // Sync with outlet context if provided (from Layout/Header), or fallback to local state
  const activeModal = outletContext?.activeModal ?? internalModal;
  const setActiveModal = outletContext?.setActiveModal ?? setInternalModal;

  const isModalActive = activeModal !== 'none';
  const modalRef = useRef(null);

  // Close Login modal when clicking outside or pressing Escape (CreateAccountModal only closes via X button)
  useEffect(() => {
    function handleClickOutside(event) {
      if (activeModal === 'login' && modalRef.current && !modalRef.current.contains(event.target)) {
        const ctaBtn = document.getElementById('get-started-btn');
        if (ctaBtn && ctaBtn.contains(event.target)) return;
        setActiveModal('none');
      }
    }
    function handleKeyDown(event) {
      if (event.key === 'Escape' && activeModal === 'login') {
        setActiveModal('none');
      }
    }

    if (activeModal === 'login') {
      document.addEventListener('mousedown', handleClickOutside);
      document.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [activeModal, setActiveModal]);

  return (
    <section className="relative w-full bg-parchment">
      {/* Background Hero Banner Container - Animates height & crops photo when any modal is active */}
      <div
        className={cn(
          'relative w-full overflow-hidden transition-all duration-500 ease-in-out flex flex-col justify-start items-center',
          isModalActive
            ? 'h-[340px] sm:h-[400px] lg:h-[440px] pt-4 sm:pt-6'
            : 'h-[560px] sm:h-[620px] lg:h-[680px] justify-center'
        )}
      >
        {/* Background Photo */}
        <img
          src={heroBg}
          alt="Law office library"
          className="absolute inset-0 h-full w-full object-cover object-center"
        />

        {/* Radial Vignette Overlay */}
        <div
          className="pointer-events-none absolute inset-0 z-10"
          style={{
            background:
              'radial-gradient(circle at center, rgba(61,66,35,0) 0%, rgba(61,66,35,0.18) 65%, rgba(28,31,17,0.35) 100%)',
          }}
        />

        {/* Smooth Bottom Edge Fade into Parchment - Seamless blend */}
        <div
          className={cn(
            'pointer-events-none absolute inset-x-0 bottom-0 z-15 transition-opacity duration-500',
            isModalActive
              ? 'h-32 bg-gradient-to-b from-transparent via-parchment/40 to-parchment opacity-100'
              : 'h-16 bg-gradient-to-b from-transparent to-carbon-black/25 opacity-50'
          )}
        />

        {/* Content Wrapper */}
        <div className="relative z-20 mx-auto flex w-full max-w-[1050px] flex-col items-center justify-center px-4 text-center">
          {/* Animated Hero Headline - Perfectly Centered Stacked Lines */}
          <h1
            className={cn(
              'font-display italic font-medium text-parchment tracking-tight transition-all duration-500 ease-in-out drop-shadow-md text-center',
              isModalActive
                ? 'text-lg sm:text-2xl lg:text-[30px] leading-tight mt-2 sm:mt-3'
                : 'text-4xl sm:text-6xl lg:text-[68px] leading-tight'
            )}
          >
            <div className="whitespace-nowrap">Skip the traffic.</div>
            <div className="whitespace-nowrap mt-0.5 sm:mt-1">Skip the billable hours.</div>
          </h1>

          {/* Subtitle Section */}
          <div className="mt-2.5 sm:mt-3.5 transition-all duration-500 ease-in-out flex flex-col items-center">
            {isModalActive ? (
              /* Condensed subtitle vertically centered under headline inside cropped photo banner */
              <p className="max-w-[640px] font-sans text-xs sm:text-sm font-normal text-parchment/95 leading-relaxed px-4 animate-in fade-in duration-300">
                Say goodbye to waiting rooms and surprise billable hours. Our secure platform
                gives you instant, flat-rate access to top-tier attorneys from anywhere in the
                world, on your schedule.
              </p>
            ) : (
              /* Opaque Glass Subtitle Pill (100% identical to Photo 1 reference) */
              <div className="max-w-[660px] rounded-[24px] sm:rounded-[30px] bg-parchment/15 backdrop-blur-xl border border-white/30 px-6 py-5 sm:px-8 sm:py-6 text-center shadow-lg transition-all duration-500 hover:bg-parchment/20">
                <p className="font-sans text-sm sm:text-base font-normal text-parchment/95 leading-relaxed">
                  Say goodbye to waiting rooms and surprise billable hours. Our secure platform
                  gives you instant, flat-rate access to top-tier attorneys from anywhere in the
                  world, on your schedule.
                </p>
              </div>
            )}
          </div>

          {/* CTA Button: Get Started Online (Visible in default view, hidden when modal active) */}
          <div
            className={cn(
              'transition-all duration-300 ease-in-out mt-6 sm:mt-8',
              isModalActive ? 'opacity-0 scale-90 pointer-events-none h-0 my-0 overflow-hidden' : 'opacity-100 scale-100'
            )}
          >
            <button
              id="get-started-btn"
              type="button"
              onClick={() => setActiveModal('login')}
              className="h-12 sm:h-14 px-8 sm:px-12 rounded-full bg-gradient-to-r from-[#CAD0B1] via-[#E2E4D4] to-[#F0F1E4] text-carbon-black font-sans font-bold text-base sm:text-lg shadow-pill hover:opacity-95 active:scale-98 transition-all cursor-pointer"
            >
              Get Started Online
            </button>
          </div>
        </div>
      </div>

      {/* Modal View Overlay Area (Login or Create Account) */}
      {isModalActive && (
        <div className="relative z-40 -mt-[210px] sm:-mt-[250px] lg:-mt-[270px] pb-10 w-full flex flex-col items-center justify-center px-4">
          {/* Ambient Glowing Orb Component centered behind modal */}
          <Orb
            color="sage"
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[340px] w-[520px] rounded-full pointer-events-none z-10"
            opacity={0.5}
          />

          {/* Modal Container */}
          <div ref={modalRef} className="relative z-40 w-full flex justify-center animate-in fade-in zoom-in-95 duration-400">
            {activeModal === 'login' && (
              <LoginModal
                isOpen={true}
                onClose={() => setActiveModal('none')}
                onOpenCreateAccount={() => setActiveModal('create-account')}
              />
            )}
            {activeModal === 'create-account' && (
              <CreateAccountModal
                isOpen={true}
                onClose={() => setActiveModal('none')}
                onOpenLogin={() => setActiveModal('login')}
              />
            )}
          </div>
        </div>
      )}
    </section>
  );
}
