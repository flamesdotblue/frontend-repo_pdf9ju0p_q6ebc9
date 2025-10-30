export default function Header() {
  return (
    <header className="relative mx-auto max-w-3xl py-14 text-center">
      <div className="pointer-events-none absolute inset-0 -z-0 [mask-image:radial-gradient(40%_40%_at_50%_10%,#000_10%,transparent_70%)]">
        <div className="absolute left-1/2 top-0 h-56 w-[40rem] -translate-x-1/2 rounded-full bg-gradient-to-r from-blue-500/20 via-cyan-400/20 to-indigo-500/20 blur-3xl" />
      </div>

      <h1 className="text-3xl font-bold tracking-tight text-slate-900 md:text-4xl dark:text-white">
        Elegant Download Modal
      </h1>
      <p className="mx-auto mt-3 max-w-xl text-base leading-relaxed text-slate-600 dark:text-slate-300">
        A clean, modern modal with an iconic animation to prompt users to download.
      </p>
    </header>
  );
}
