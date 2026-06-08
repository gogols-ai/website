// app/page.tsx
import { ExperienceGogolverse } from "@/components/ExperienceGogolverse";
import { BrowseAllDemos } from "@/components/BrowseAllDemos";

export default function Home() {
  return (
    <main className="min-h-screen bg-gogol-bg text-foreground">

      {/* HERO */}
      <section className="relative overflow-hidden bg-gogol-bg text-foreground">
        {/* Pixel-style stars */}
        <div className="absolute inset-0 pointer-events-none z-0" style={{ height: '50%' }}>
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="pixel-star absolute"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 7}s`,
              }}
            />
          ))}
        </div>

        {/* Corner ornaments */}
        <img
          src="/corner-top-right.png"
          alt=""
          className="pointer-events-none absolute top-0 right-0 hidden sm:block w-[130px] md:w-[180px] opacity-50 mix-blend-screen z-0 select-none"
        />
        <img
          src="/corner-bottom-left.png"
          alt=""
          className="pointer-events-none absolute bottom-0 left-0 hidden sm:block w-[130px] md:w-[180px] opacity-50 mix-blend-screen z-0 select-none"
        />

        {/* Background effects */}
        <div className="pointer-events-none absolute inset-0 bg-gogol-grid opacity-15" />
        <div className="pointer-events-none absolute inset-0 bg-gogol-radial" />
        <div className="pointer-events-none absolute inset-0 bg-gogol-radial-purple" />

        {/* Hero content */}
        <div className="relative z-10 max-w-5xl mx-auto px-6 py-28 md:py-32 text-center">
          <div className="mb-5 text-sm tracking-widest uppercase text-muted-foreground">Gogols.ai</div>
          <h1 className="text-4xl md:text-6xl font-semibold leading-tight">
            Meet the <span className="text-gogol-cyan">gogols</span>.
          </h1>
          <p className="mt-5 text-muted-foreground md:text-lg">
            Digital souls, with purpose and agency.
          </p>
        </div>
      </section>

      {/* EXPERIENCE */}
      <ExperienceGogolverse />

      {/* BROWSE ALL DEMOS */}
      <BrowseAllDemos />

    </main>
  );
}
