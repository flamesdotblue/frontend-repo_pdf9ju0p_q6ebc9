import { Download } from "lucide-react";

export default function DownloadTrigger({ onClick }) {
  return (
    <button
      onClick={onClick}
      className="group inline-flex items-center gap-2 rounded-2xl border border-white/10 bg-white/70 px-5 py-3 text-slate-800 shadow-md backdrop-blur transition hover:-translate-y-0.5 hover:bg-white/90 hover:shadow-lg dark:bg-slate-900/70 dark:text-white"
    >
      <span className="relative flex h-6 w-6 items-center justify-center">
        <span className="absolute inset-0 rounded-full bg-blue-500/20 blur group-hover:bg-blue-500/30" />
        <Download className="relative z-10 h-5 w-5 text-blue-600" />
      </span>
      <span className="font-semibold">Open Download Modal</span>
    </button>
  );
}
