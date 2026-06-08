// components/BrowseAllDemos.tsx
// Full demos gallery, mirrored 1:1 from demos.gogols.ai. Full-width horizontal
// panels with a 140px avatar (image for digital twins, emoji for business
// gogols). Each demo is a static page under /public/<slug>/ that embeds the
// Ethora chat widget, so links use plain <a> (full navigation), not the router.

type Demo = {
  slug: string;
  title: string;
  description: string;
  cta: string;
  image?: string;
  emoji?: string;
  comingSoon?: boolean;
};

const digitalTwins: Demo[] = [
  {
    slug: "freud",
    title: "Sigmund Freud",
    image: "/avatars/freud-gogol.png",
    description:
      "AI agent demo based on Sigmund Freud's complete works collection. This digital twin allows you to explore the extensive writings and works of the father of psychoanalysis through an AI-powered conversational interface.",
    cta: "View Freud Demo",
  },
  {
    slug: "gandhi",
    title: "Mahatma Gandhi",
    image: "/avatars/gandhi-gogol.png",
    description:
      "AI agent demo based on Mahatma Gandhi's complete works collection. This digital twin provides access to the comprehensive writings and teachings of the great leader through an AI-powered knowledge base.",
    cta: "View Gandhi Demo",
  },
  {
    slug: "twin-zelensky",
    title: "Twin Zelensky",
    image: "/avatars/zelensky-gogol.png",
    description:
      "AI agent demo based on Zelensky speeches dataset. This digital twin demonstrates how to build a conversational interface for exploring speech content with AI-powered search and retrieval capabilities.",
    cta: "View Twin Zelensky Demo",
  },
];

const businessGogols: Demo[] = [
  {
    slug: "leadership-ignition",
    title: "Leadership Ignition",
    emoji: "💼",
    description:
      "AI agent demo based on Leadership Ignition's materials. This business gogol showcases leadership development session outlines and materials, allowing you to explore different session formats from half-day to 1.5-day intensive programs.",
    cta: "View Leadership Ignition",
  },
  {
    slug: "shirley-parsons",
    title: "Shirley Parsons",
    emoji: "🏢",
    description:
      "AI agent demo based on Shirley Parsons case study. This business gogol demonstrates a knowledge base for a global HSEQ, Sustainability & ESG consulting firm, showcasing expertise in Health & Safety, Quality, Sustainability and Business Improvement.",
    cta: "View Shirley Parsons",
  },
  {
    slug: "turner-townsend",
    title: "Turner & Townsend",
    emoji: "🏗️",
    description:
      "AI agent demo based on Turner & Townsend case study. This business gogol showcases a professional services company knowledge base with expertise in cost management, project management, and program management across real estate, infrastructure, and natural resources sectors.",
    cta: "View Turner & Townsend",
  },
  {
    slug: "pasha-life",
    title: "PASHA Life",
    emoji: "🛡️",
    description:
      "AI agent demo based on PASHA Life case study. This business gogol demonstrates an insurance company knowledge base providing information about comprehensive insurance products and services.",
    cta: "View PASHA Life",
  },
  {
    slug: "preshent",
    title: "Preshent",
    emoji: "🌱",
    description:
      "AI agent demo based on Preshent case study. This business gogol showcases a knowledge base for an intelligent, compliance-driven OS for a sustainable ecosystem, covering AI, blockchain, and digital assets across energy, agriculture, finance, health, and government services.",
    cta: "Coming soon",
    comingSoon: true,
  },
];

function SectionTitle({ first, accent }: { first: string; accent: string }) {
  return (
    <h3 className="border-b border-border pb-3 text-2xl md:text-3xl font-semibold">
      {first} <span className="text-gogol-cyan">{accent}</span>
    </h3>
  );
}

function DemoPanel({ demo }: { demo: Demo }) {
  return (
    <div className="group flex flex-col gap-6 rounded-xl border border-border bg-gogol-surface/40 p-6 backdrop-blur-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-gogol-cyan/40 hover:shadow-gogol-neon-cyan sm:flex-row sm:items-stretch">
      {/* Avatar */}
      <div className="flex h-40 w-full shrink-0 items-center justify-center overflow-hidden rounded-xl border border-border bg-white/5 sm:h-auto sm:min-h-[140px] sm:w-[140px]">
        {demo.image ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={demo.image}
            alt={demo.title}
            className="h-full w-full object-cover"
          />
        ) : (
          <span className="text-6xl" aria-hidden>
            {demo.emoji}
          </span>
        )}
      </div>

      {/* Content */}
      <div className="flex flex-col">
        {demo.comingSoon ? (
          <span className="text-xl font-semibold">{demo.title}</span>
        ) : (
          <a
            href={`/${demo.slug}/`}
            className="text-xl font-semibold transition-colors hover:text-gogol-cyan"
          >
            {demo.title}
          </a>
        )}
        <p className="mt-2 max-w-3xl text-muted-foreground">{demo.description}</p>
        <div className="mt-5">
          {demo.comingSoon ? (
            <span className="inline-flex h-10 cursor-default items-center justify-center rounded-lg border border-border px-5 text-sm font-medium text-muted-foreground">
              Coming soon
            </span>
          ) : (
            <a
              href={`/${demo.slug}/`}
              className="inline-flex h-10 items-center justify-center rounded-lg bg-gogol-cyan px-5 text-sm font-semibold text-gogol-bg transition-all hover:bg-gogol-accent hover:shadow-gogol-neon-cyan"
            >
              {demo.cta}
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

export function BrowseAllDemos() {
  return (
    <section id="demos" className="px-6 py-16 md:py-24 border-t border-border">
      <div className="mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-semibold">Browse all demos</h2>
        <p className="mt-3 max-w-3xl text-muted-foreground">
          Discover gogols demos divided by sections. Each project showcases
          different aspects of knowledge-based AI, be it digital twins, business
          applications or games and imaginary worlds.
        </p>

        {/* Digital Twins */}
        <div className="mt-14">
          <SectionTitle first="Digital" accent="Twins" />
          <div className="mt-6 space-y-5">
            {digitalTwins.map((d) => (
              <DemoPanel key={d.slug} demo={d} />
            ))}
          </div>
        </div>

        {/* Business Gogols */}
        <div className="mt-16">
          <SectionTitle first="Business" accent="Gogols" />
          <div className="mt-6 space-y-5">
            {businessGogols.map((d) => (
              <DemoPanel key={d.slug} demo={d} />
            ))}
          </div>
        </div>

        {/* Game Theory */}
        <div className="mt-16">
          <SectionTitle first="Game" accent="Theory" />
          <div className="mt-6 rounded-xl border border-dashed border-border bg-gogol-surface/20 py-12 text-center text-muted-foreground">
            <p>Coming soon...</p>
          </div>
        </div>
      </div>
    </section>
  );
}
