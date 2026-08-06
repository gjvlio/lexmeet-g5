import { useState, useEffect } from "react";
import logoSvg from "@/assets/header/header-logo.svg";
import { getDynamicAssetUrls, preloadAllAssets } from "@/utils/preloadAssets.js";

export default function LoadingScreen({ onComplete }) {
  const [progress, setProgress] = useState(0);
  const [showLogo, setShowLogo] = useState(false);
  const [showFirmName, setShowFirmName] = useState(false);
  const [showLoader, setShowLoader] = useState(false);
  const [isAssetsLoaded, setIsAssetsLoaded] = useState(false);
  const [isExiting, setIsExiting] = useState(false);
  const [isFinished, setIsFinished] = useState(false);

  const [minAnimFinished, setMinAnimFinished] = useState(false);

  // Staggered entrance animation sequence — guaranteed timing so nothing is skipped
  useEffect(() => {
    const t1 = setTimeout(() => setShowLogo(true), 150);
    const t2 = setTimeout(() => setShowFirmName(true), 550);
    const t3 = setTimeout(() => setShowLoader(true), 950);
    const t4 = setTimeout(() => setMinAnimFinished(true), 2100);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
      clearTimeout(t4);
    };
  }, []);

  // Preload all graphical assets dynamically into browser cache
  useEffect(() => {
    let isCancelled = false;
    const urls = getDynamicAssetUrls();

    preloadAllAssets(urls, (pct) => {
      if (!isCancelled) {
        setProgress(pct);
      }
    }).then(() => {
      if (!isCancelled) {
        setIsAssetsLoaded(true);
      }
    });

    return () => {
      isCancelled = true;
    };
  }, []);


  // Trigger circular exit animation ONLY after assets are loaded AND full animation sequence finishes
  useEffect(() => {
    if (isAssetsLoaded && minAnimFinished) {
      const exitTimer = setTimeout(() => {
        setIsExiting(true);
      }, 500);

      return () => clearTimeout(exitTimer);
    }
  }, [isAssetsLoaded, minAnimFinished]);

  // Handle unmounting after circular exit transition completes
  useEffect(() => {
    if (isExiting) {
      const unmountTimer = setTimeout(() => {
        setIsFinished(true);
        if (onComplete) onComplete();
      }, 750); // Matches .animate-circular-exit duration

      return () => clearTimeout(unmountTimer);
    }
  }, [isExiting, onComplete]);


  if (isFinished) return null;

  return (
    <div
      className={`fixed inset-0 z-[99999] pointer-events-none select-none transition-opacity duration-800 ease-in-out ${
        isExiting ? "opacity-0" : "opacity-100"
      }`}
      style={{ backgroundColor: "#545A2F" }}
      aria-label="Loading Website"
    >
      {/* 
        Container for Logo & Title Morph Transition into Header:
        - Mobile/Tablet (< xl): Morph transitions logo + text side-by-side into top header row
        - Desktop (>= xl): Morph transitions logo + text vertically stacked into top header position
      */}
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        
        {/* Brand Group (Logo + Law Firm Name) */}
        <div
          className={`flex transition-all duration-800 cubic-bezier(0.16, 1, 0.3, 1) ${
            isExiting
              ? "xl:flex-col flex-row items-center gap-2 sm:gap-3 -translate-y-[calc(50vh-28px)] xl:-translate-y-[calc(50vh-50px)] scale-90 xl:scale-100 opacity-90"
              : "flex-col items-center gap-0 translate-y-0 scale-100 opacity-100"
          }`}
        >
          {/* 1. Logo Animation (Move Up Entrance & Morph to Header) */}
          <div
            className={`transition-all duration-700 ease-out ${
              showLogo
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
          >
            <img
              src={logoSvg}
              alt="Rizal Law Office Logo"
              className={`w-auto transition-all duration-800 brightness-0 invert-[0.95] drop-shadow-md ${
                isExiting
                  ? "h-6 sm:h-7 xl:h-7 mb-0"
                  : "h-8 sm:h-10 mb-3"
              }`}
            />
          </div>

          {/* 2. Law Firm Name (Exact font styling matching Header: font-medium tracking-[0.1em], unbolded) */}
          <div
            className={`transition-all duration-700 ease-out delay-100 ${
              showFirmName
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
          >
            <h1
              className={`font-display font-medium tracking-[0.1em] text-[#F0F1E4] uppercase transition-all duration-800 ${
                isExiting
                  ? "text-base sm:text-lg xl:text-[26px] mt-0 text-carbon-black/90"
                  : "text-[22px] sm:text-[26px] mt-0"
              }`}
            >
              RIZAL LAW OFFICE
            </h1>
          </div>
        </div>

        {/* 3. Horizontal Dots Loading Animation */}
        <div
          className={`mt-8 flex items-center justify-center gap-2.5 transition-all duration-400 ${
            showLoader && !isExiting ? "opacity-100 scale-100" : "opacity-0 scale-90"
          }`}
        >
          <div 
            className="w-2.5 h-2.5 rounded-full bg-[#F0F1E4] animate-bounce shadow-sm" 
            style={{ animationDelay: "0ms", animationDuration: "1s" }} 
          />
          <div 
            className="w-2.5 h-2.5 rounded-full bg-[#F0F1E4] animate-bounce shadow-sm" 
            style={{ animationDelay: "180ms", animationDuration: "1s" }} 
          />
          <div 
            className="w-2.5 h-2.5 rounded-full bg-[#F0F1E4] animate-bounce shadow-sm" 
            style={{ animationDelay: "360ms", animationDuration: "1s" }} 
          />
        </div>

      </div>
    </div>
  );
}



