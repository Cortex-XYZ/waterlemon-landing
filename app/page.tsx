export default function Home() {
  return (
    <main className="relative flex h-full items-center justify-center overflow-hidden">
      <div aria-hidden className="absolute inset-0">
        <div className="blob blob-rind" />
        <div className="blob blob-flesh" />
        <div className="blob blob-lemon" />
      </div>

      <div className="relative flex flex-col items-center gap-5 px-6 text-center">
        <h1 className="fade-in text-5xl font-semibold tracking-tight sm:text-7xl">
          waterle<span className="text-[#ff4d6d]">M</span>on
        </h1>
        <p className="fade-in fade-in-delay text-xs font-medium uppercase tracking-[0.4em] text-white/50">
          Coming soon
        </p>
      </div>
    </main>
  );
}
