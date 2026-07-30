import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useCallback, useEffect, useId, useRef } from "react";
import { createPortal } from "react-dom";
import GlassCard from "@/components/ui/GlassCard";
import { cn } from "@/utils/cn";
const SIZES = {
  sm: "max-w-md",
  md: "max-w-lg",
  lg: "max-w-3xl",
  xl: "max-w-5xl",
};
const FOCUSABLE =
  'a[href], button:not([disabled]), textarea:not([disabled]), input:not([disabled]), select:not([disabled]), [tabindex]:not([tabindex="-1"])';
/**
 * Base modal for every LexMeet dialog (sign-in, register, share this page).
 * Handles the backdrop, Esc, focus trap, scroll lock, and focus restore —
 * feature modals compose this and supply only their own body content.
 */
export default function Modal({
  isOpen,
  onClose,
  title,
  size = "md",
  closeOnBackdropClick = true,
  showCloseButton = true,
  className,
  children,
}) {
  const panelRef = useRef(null);
  const triggerRef = useRef(null);
  const titleId = useId();
  // Keep the latest onClose without re-binding the key listener every render.
  const onCloseRef = useRef(onClose);
  useEffect(() => {
    onCloseRef.current = onClose;
  }, [onClose]);
  // Remember what opened the modal so focus can return there on close.
  useEffect(() => {
    if (!isOpen) return;
    triggerRef.current = document.activeElement;
    return () => triggerRef.current?.focus?.();
  }, [isOpen]);
  // Lock background scroll, compensating for the scrollbar so the page
  // behind doesn't shift sideways as it disappears.
  useEffect(() => {
    if (!isOpen) return;
    const { body, documentElement } = document;
    const gutter = window.innerWidth - documentElement.clientWidth;
    const prevOverflow = body.style.overflow;
    const prevPadding = body.style.paddingRight;
    body.style.overflow = "hidden";
    if (gutter > 0) body.style.paddingRight = `${gutter}px`;
    return () => {
      body.style.overflow = prevOverflow;
      body.style.paddingRight = prevPadding;
    };
  }, [isOpen]);
  // Move focus into the panel once it's mounted.
  useEffect(() => {
    if (!isOpen) return;
    const panel = panelRef.current;
    if (!panel) return;
    const first = panel.querySelector(FOCUSABLE);
    (first ?? panel).focus();
  }, [isOpen]);
  const handleKeyDown = useCallback((event) => {
    if (event.key === "Escape") {
      event.stopPropagation();
      onCloseRef.current();
      return;
    }
    if (event.key !== "Tab") return;
    const panel = panelRef.current;
    if (!panel) return;
    const items = Array.from(panel.querySelectorAll(FOCUSABLE)).filter(
      (el) => el.offsetParent !== null || el === document.activeElement,
    );
    if (items.length === 0) {
      event.preventDefault();
      panel.focus();
      return;
    }
    const first = items[0];
    const last = items[items.length - 1];
    // Wrap at both ends so Tab can never reach the page behind the modal.
    if (event.shiftKey && document.activeElement === first) {
      event.preventDefault();
      last.focus();
    } else if (!event.shiftKey && document.activeElement === last) {
      event.preventDefault();
      first.focus();
    }
  }, []);
  useEffect(() => {
    if (!isOpen) return;
    document.addEventListener("keydown", handleKeyDown, true);
    return () => document.removeEventListener("keydown", handleKeyDown, true);
  }, [isOpen, handleKeyDown]);
  if (!isOpen) return null;
  const handleBackdropMouseDown = (event) => {
    // mousedown, not click, and only when the press started on the backdrop —
    // otherwise a text selection dragged out of the panel would close it.
    if (closeOnBackdropClick && event.target === event.currentTarget) onClose();
  };
  return createPortal(
    _jsx("div", {
      className:
        "fixed inset-0 z-50 overflow-y-auto bg-ink/60 backdrop-blur-sm",
      children: _jsx("div", {
        className: "flex min-h-full items-center justify-center p-4 sm:p-6",
        onMouseDown: handleBackdropMouseDown,
        children: _jsxs(GlassCard, {
          ref: panelRef,
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": title ? titleId : undefined,
          tabIndex: -1,
          className: cn(
            "relative w-full p-8 focus:outline-none sm:p-10",
            SIZES[size],
            className,
          ),
          children: [
            showCloseButton &&
              _jsx("button", {
                type: "button",
                onClick: onClose,
                "aria-label": "Close dialog",
                className:
                  "absolute right-5 top-5 inline-flex h-9 w-9 items-center justify-center rounded-full text-forest transition-colors hover:bg-white/70 focus:outline-none focus-visible:ring-2 focus-visible:ring-olive/60",
                children: _jsx("svg", {
                  viewBox: "0 0 24 24",
                  fill: "none",
                  className: "h-5 w-5",
                  "aria-hidden": true,
                  children: _jsx("path", {
                    d: "M6 6l12 12M18 6L6 18",
                    stroke: "currentColor",
                    strokeWidth: "1.8",
                    strokeLinecap: "round",
                  }),
                }),
              }),
            title &&
              _jsx("h2", {
                id: titleId,
                className: "mb-6 pr-10 font-display text-3xl text-ink",
                children: title,
              }),
            children,
          ],
        }),
      }),
    }),
    document.body,
  );
}
