import { Fragment } from "react";
import { AnimatePresence, motion } from "framer-motion";
import IconicAnimation from "./IconicAnimation";
import { X } from "lucide-react";

export default function Modal({ open, onClose, onConfirm }) {
  return (
    <AnimatePresence>
      {open && (
        <Fragment>
          {/* Backdrop */}
          <motion.div
            className="fixed inset-0 z-40 bg-slate-900/60 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          />

          {/* Modal */}
          <motion.div
            className="fixed inset-0 z-50 grid place-items-center p-4"
            initial={{ opacity: 0, scale: 0.96, y: 8 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.98, y: 8 }}
            transition={{ type: "spring", stiffness: 260, damping: 20 }}
            aria-modal
            role="dialog"
          >
            <div className="relative w-full max-w-md overflow-hidden rounded-2xl border border-white/10 bg-white/90 p-6 shadow-2xl backdrop-blur md:p-8 dark:bg-slate-900/90">
              <button
                onClick={onClose}
                className="absolute right-3.5 top-3.5 inline-flex h-9 w-9 items-center justify-center rounded-full bg-white/60 text-slate-700 shadow ring-1 ring-slate-900/10 transition hover:scale-105 hover:bg-white/90 active:scale-95 dark:bg-slate-800/60 dark:text-slate-200 dark:ring-white/10"
                aria-label="Close"
              >
                <X className="h-5 w-5" />
              </button>

              <div className="flex flex-col items-center gap-5 text-center">
                <IconicAnimation />

                <div className="space-y-2">
                  <h2 className="text-xl font-semibold tracking-tight text-slate-900 dark:text-white">
                    Ready to download?
                  </h2>
                  <p className="text-sm leading-relaxed text-slate-600 dark:text-slate-300">
                    Your file is packaged and good to go. Click the button below to start the download.
                  </p>
                </div>

                <div className="mt-2 flex w-full flex-col gap-3 sm:flex-row">
                  <button
                    onClick={onConfirm}
                    className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-blue-600/20 transition hover:shadow-blue-600/30 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500 dark:focus-visible:ring-offset-slate-900"
                  >
                    Download
                  </button>
                  <button
                    onClick={onClose}
                    className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-white/70 px-5 py-3 text-sm font-medium text-slate-700 ring-1 ring-slate-900/10 transition hover:bg-white/90 dark:bg-slate-800/70 dark:text-slate-200 dark:ring-white/10"
                  >
                    Not now
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        </Fragment>
      )}
    </AnimatePresence>
  );
}
