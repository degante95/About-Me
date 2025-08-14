import React, { useEffect, useRef } from "react";

/**
 * Modal base for resume component to use
 */

interface ModalProps {
  open: boolean;
  onClose: () => void;
  children: React.ReactNode;
  ariaLabel?: string;
}

export const Modal: React.FC<ModalProps> = ({
  open,
  onClose,
  children,
  ariaLabel,
}) => {
  //refs for overlay and dialog
  const overlayRef = useRef<HTMLDivElement>(null);
  const dialogRef = useRef<HTMLDivElement>(null);

  // Close on ESC key down event
  useEffect(() => {
    if (!open) return;
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") onClose();
    }
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open, onClose]);

  // Trap keyboard focus within modal when open so users can't tab to elements outside (improves accessibility)
  // Trap focus within the modal
  useEffect(() => {
    if (!open || !dialogRef.current) return;
    const focusable = dialogRef.current.querySelectorAll<HTMLElement>(
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])',
    );
    if (focusable.length) focusable[0].focus();

    function trapFocus(e: KeyboardEvent) {
      if (e.key !== "Tab") return;
      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    }
    dialogRef.current.addEventListener("keydown", trapFocus);
    return () => dialogRef.current?.removeEventListener("keydown", trapFocus);
  }, [open]);

  if (!open) return null; // Won't render anything if closed

  return (
    <div
      ref={overlayRef}
      className="modal-overlay"
      tabIndex={-1}
      onClick={onClose}
      aria-modal="true"
      role="dialog"
      aria-label={ariaLabel}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        background: "rgba(0,0,0,0.5)",
        zIndex: 1000,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        ref={dialogRef}
        className="modal-content"
        onClick={(e) => e.stopPropagation()} // prevent click inside from closing
        style={{
          background: "white",
          borderRadius: "10px",
          maxWidth: 600,
          width: "90%",
          boxShadow: "0 4px 24px rgba(0,0,0,0.2)",
          padding: "2rem",
          position: "relative",
        }}
        tabIndex={0}
      >
        <button
          onClick={onClose}
          aria-label="Close"
          style={{
            position: "absolute",
            right: 16,
            top: 16,
            background: "none",
            border: "none",
            fontSize: "1.5rem",
            cursor: "pointer",
          }}
        >
          ×
        </button>
        {children}
      </div>
    </div>
  );
};
