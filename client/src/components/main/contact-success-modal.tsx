import { useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import confetti from "canvas-confetti";
import { HugeiconsIcon } from "@hugeicons/react";
import {
  Cancel01Icon,
  CheckmarkCircle02Icon,
} from "@hugeicons/core-free-icons";

type ContactSuccessModalProps = {
  isOpen: boolean;
  onClose: () => void;
};

function fireConfetti() {
  const defaults = {
    spread: 68,
    ticks: 120,
    gravity: 0.9,
    decay: 0.92,
    startVelocity: 32,
    colors: ["#F2EDE8", "#c4b8a0", "#39d353", "#3aa0ff", "#f43f8c", "#a3e635"],
  };

  confetti({
    ...defaults,
    particleCount: 70,
    origin: { x: 0.2, y: 0.7 },
  });
  confetti({
    ...defaults,
    particleCount: 70,
    origin: { x: 0.8, y: 0.7 },
  });
  confetti({
    ...defaults,
    particleCount: 50,
    spread: 100,
    origin: { x: 0.5, y: 0.55 },
  });
}

export default function ContactSuccessModal({
  isOpen,
  onClose,
}: ContactSuccessModalProps) {
  useEffect(() => {
    if (!isOpen) return;

    document.body.style.overflow = "hidden";
    const timer = window.setTimeout(() => fireConfetti(), 180);

    return () => {
      document.body.style.overflow = "auto";
      window.clearTimeout(timer);
    };
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            onClick={onClose}
            aria-hidden
          />

          <motion.div
            role="dialog"
            aria-modal="true"
            aria-labelledby="contact-success-title"
            initial={{ opacity: 0, y: 28, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 16, scale: 0.98 }}
            transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
            className="relative z-10 w-full max-w-md rounded-xl border border-line bg-background p-6 shadow-2xl sm:p-8"
          >
            <button
              type="button"
              onClick={onClose}
              aria-label="Close"
              className="absolute top-4 right-4 flex size-9 items-center justify-center rounded-full border border-line text-muted transition-colors hover:border-main hover:text-main"
            >
              <HugeiconsIcon
                icon={Cancel01Icon}
                size={18}
                color="currentColor"
              />
            </button>

            <div className="flex flex-col items-center text-center">
              <span className="mb-4 flex size-14 items-center justify-center rounded-full bg-emerald-500/15 text-emerald-500">
                <HugeiconsIcon
                  icon={CheckmarkCircle02Icon}
                  size={32}
                  color="currentColor"
                  strokeWidth={1.5}
                />
              </span>

              <h2
                id="contact-success-title"
                className="font-brico text-2xl font-medium tracking-tight text-main"
              >
                Message sent.
              </h2>
              <p className="mt-3 max-w-sm text-sm leading-relaxed text-muted">
                Thanks for reaching out. I&apos;ve received your message and
                will get back to you within one business day.
              </p>

              <button
                type="button"
                onClick={onClose}
                className="btn mt-7 h-11 w-full border border-main bg-main text-sm font-semibold text-background transition-opacity hover:opacity-90"
              >
                Close
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
