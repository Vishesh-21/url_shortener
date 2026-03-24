// components/home/hero-section.tsx

export const HeroSection = () => {
  return (
    <header className="space-y-4">
      <span className="bg-white/20 text-xs font-semibold px-3 py-1 rounded-full uppercase tracking-wider">
        Shorten URLs
      </span>
      <h1 className="text-5xl md:text-7xl font-bold mt-4 tracking-tight">
        Make links
        <br />
        manageable
      </h1>
      <p className="text-blue-100 text-lg opacity-90">
        Paste your long URL below to create a clean, shareable link.
      </p>
    </header>
  );
};