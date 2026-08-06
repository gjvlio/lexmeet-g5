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
      className={`fixed inset-0 z-[99999] flex flex-col items-center justify-center bg-[#545A2F] text-[#F0F1E4] select-none ${
        isExiting ? "animate-circular-exit" : ""
      }`}
      aria-label="Loading Website"
    >
      {/* Foreground Container */}
      <div className="flex flex-col items-center justify-center max-w-md px-6 text-center">

        {/* 1. Logo Animation (Move Up) */}
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
            className="w-16 h-16 sm:w-20 sm:h-20 mb-5 brightness-0 invert-[0.95] drop-shadow-md"
          />
        </div>

        {/* 2. Law Firm Name Animation (Move Up) */}
        <div
          className={`transition-all duration-700 ease-out delay-100 ${
            showFirmName
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-8"
          }`}
        >
          <h1 className="font-display text-2xl sm:text-3xl font-semibold tracking-[0.18em] text-[#F0F1E4] uppercase drop-shadow-sm">
            RIZAL LAW OFFICE
          </h1>
        </div>

        {/* 3. Horizontal Dots Loading Animation */}
        <div
          className={`mt-8 flex items-center justify-center gap-2.5 transition-all duration-600 ${
            showLoader ? "opacity-100 scale-100" : "opacity-0 scale-95"
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

