import { useCallback, useState } from "react";
import Header from "./components/Header";
import DownloadTrigger from "./components/DownloadTrigger";
import Modal from "./components/Modal";

function App() {
  const [open, setOpen] = useState(false);

  const startDownload = useCallback(() => {
    // Create a simple text file to download
    const content = [
      "Thanks for trying the Elegant Download Modal!",
      "This is a sample file generated just for you.",
      "\n— Flames.Blue"
    ].join("\n");

    const blob = new Blob([content], { type: "text/plain;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "sample.txt";
    document.body.appendChild(a);
    a.click();
    a.remove();
    URL.revokeObjectURL(url);

    setOpen(false);
  }, []);

  return (
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-br from-slate-50 via-white to-blue-50 text-slate-900 dark:from-slate-900 dark:via-slate-950 dark:to-slate-900 dark:text-white">
      {/* Soft background accents */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-24 -top-24 h-72 w-72 rounded-full bg-blue-500/10 blur-3xl" />
        <div className="absolute -bottom-24 -right-24 h-72 w-72 rounded-full bg-indigo-500/10 blur-3xl" />
      </div>

      <main className="relative z-10 mx-auto flex max-w-5xl flex-col items-center px-6 py-16">
        <Header />

        <div className="mt-2">
          <DownloadTrigger onClick={() => setOpen(true)} />
        </div>
      </main>

      <Modal open={open} onClose={() => setOpen(false)} onConfirm={startDownload} />
    </div>
  );
}

export default App;
