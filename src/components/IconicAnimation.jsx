import { motion } from "framer-motion";
import { Download } from "lucide-react";

export default function IconicAnimation() {
  return (
    <div className="relative mx-auto h-20 w-20">
      {/* Outer glow ring */}
      <motion.span
        className="absolute inset-0 rounded-full bg-gradient-to-tr from-blue-500/20 via-cyan-400/20 to-indigo-500/20 blur-xl"
        initial={{ opacity: 0.4, scale: 0.9 }}
        animate={{ opacity: [0.4, 0.9, 0.4], scale: [0.95, 1.05, 0.95] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Orbiting dots */}
      {[0, 1, 2].map((i) => (
        <motion.span
          // eslint-disable-next-line react/no-array-index-key
          key={i}
          className="absolute left-1/2 top-1/2 h-2 w-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-400 shadow-[0_0_10px_rgba(34,211,238,0.7)]"
          style={{ transformOrigin: "0 36px" }}
          animate={{ rotate: 360 }}
          transition={{ duration: 3 + i, repeat: Infinity, ease: "linear" }}
        />
      ))}

      {/* Main icon */}
      <motion.div
        className="relative z-10 flex h-20 w-20 items-center justify-center rounded-2xl bg-white/90 shadow-xl ring-1 ring-black/5 dark:bg-slate-900/90"
        initial={{ y: -4, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
      >
        <motion.div
          className="flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-blue-500 to-indigo-600 text-white"
          animate={{ scale: [1, 1.08, 1] }}
          transition={{ repeat: Infinity, duration: 1.6, ease: "easeInOut" }}
        >
          <Download className="h-7 w-7" />
        </motion.div>
      </motion.div>
    </div>
  );
}
