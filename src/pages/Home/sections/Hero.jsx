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
          {/* Animated Hero Headline - Extended width for up to 2 long lines */}
          <h1
            className={cn(
              'font-display italic font-medium text-parchment tracking-tight transition-all duration-500 ease-in-out drop-shadow-md text-center w-full max-w-[1140px]',
              isModalActive
                ? 'text-lg sm:text-2xl lg:text-[30px] leading-tight mt-2 sm:mt-3'
                : 'text-3xl sm:text-5xl lg:text-[58px] xl:text-[64px] leading-[1.12]'
            )}
          >
            Legal services in the <br /> comfort of your home!
          </h1>

          {/* Subtitle Section - Unified container to enable smooth collapse transition */}
          <div
            className={cn(
              'transition-all duration-500 ease-in-out flex flex-col items-center w-full',
              isModalActive ? 'mt-1.5 sm:mt-2' : 'mt-5 sm:mt-7'
            )}
          >
            <div
              className={cn(
                'max-w-[660px] w-full text-center transition-all duration-500 ease-in-out',
                isModalActive
                  ? 'bg-transparent border-transparent px-4 py-0 shadow-none border-0'
                  : 'rounded-[24px] sm:rounded-[30px] bg-parchment/15 backdrop-blur-xl border border-white/30 px-6 py-5 sm:px-8 sm:py-6 shadow-lg hover:bg-parchment/20'
              )}
            >
              <p
                className={cn(
                  'font-sans transition-all duration-500 ease-in-out text-parchment/95 leading-relaxed mx-auto',
                  isModalActive
                    ? 'text-[11px] sm:text-xs font-normal max-w-[640px]'
                    : 'text-sm sm:text-base font-normal max-w-none'
                )}
              >
                Say goodbye to waiting rooms and surprise billable hours. Our secure platform
                gives you instant, flat-rate access to top-tier attorneys from anywhere in the
                world, on your schedule.
              </p>
            </div>
          </div>

          {/* CTA Button: Get Legal Help (Visible in default view, hidden when modal active) */}
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
              className="relative overflow-hidden h-14 sm:h-17 min-w-[280px] sm:min-w-[380px] px-14 sm:px-20 rounded-full bg-gradient-to-r from-[#CAD0B1] via-[#E2E4D4] to-[#F0F1E4] before:absolute before:inset-0 before:bg-gradient-to-r before:from-[#3D4223] before:via-[#2F331A] before:to-[#1C1F11] before:opacity-0 hover:before:opacity-100 before:transition-opacity before:duration-500 before:z-0 text-carbon-black hover:text-white font-sans font-bold text-lg sm:text-xl tracking-wide shadow-lg hover:shadow-xl hover:shadow-[#3d4223]/20 hover:scale-[1.05] active:scale-[0.98] transition-all duration-500 cursor-pointer border border-white/40 hover:border-white/10"
            >
              <span className="relative z-10">Get Legal Help</span>
            </button>
          </div>
        </div>
      </div>

      {/* Modal View Overlay Area (Login or Create Account) */}
      {isModalActive && (
        <div className="relative z-40 -mt-[260px] sm:-mt-[250px] lg:-mt-[270px] pb-10 w-full flex flex-col items-center justify-center px-4 scale-90 sm:scale-100 origin-top">
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
                usePortal={false}
                onClose={() => setActiveModal('none')}
                onOpenCreateAccount={() => setActiveModal('create-account')}
              />
            )}
            {activeModal === 'create-account' && (
              <CreateAccountModal
                isOpen={true}
                usePortal={false}
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
