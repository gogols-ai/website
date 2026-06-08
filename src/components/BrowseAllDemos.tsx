// components/BrowseAllDemos.tsx
// Full demos gallery, mirrored from demos.gogols.ai. Each demo is a static
// page under /public/<slug>/ that embeds the Ethora chat widget, so links use
// plain <a> (full navigation) rather than the Next router.

type Demo = {
  slug: string;
  title: string;
  icon: string;
  description: string;
  cta: string;
};

const digitalTwins: Demo[] = [
  {
    slug: "freud",
    title: "Sigmund Freud",
    icon: "🧠",
    description:
      "AI agent demo based on Sigmund Freud's complete works collection. Explore the extensive writings of the father of psychoanalysis through an AI-powered conversational interface.",
    cta: "View Freud Demo",
  },
  {
    slug: "gandhi",
    title: "Mahatma Gandhi",
    icon: "🕊️",
    description:
      "AI agent demo based on Mahatma Gandhi's complete works collection. Access the comprehensive writings and teachings of the great leader through an AI-powered knowledge base.",
    cta: "View Gandhi Demo",
  },
  {
    slug: "twin-zelensky",
    title: "Twin Zelensky",
    icon: "🎙️",
    description:
      "AI agent demo based on the Zelensky speeches dataset. A conversational interface for exploring speech content with AI-powered search and retrieval.",
    cta: "View Twin Zelensky Demo",
  },
];

const businessGogols: Demo[] = [
  {
    slug: "leadership-ignition",
    title: "Leadership Ignition",
    icon: "💼",
    description:
      "AI agent demo based on Leadership Ignition's materials. Explore leadership development session outlines and formats, from half-day to 1.5-day intensive programs.",
    cta: "View Leadership Ignition",
  },
  {
    slug: "shirley-parsons",
    title: "Shirley Parsons",
    icon: "🏢",
    description:
      "AI agent demo based on the Shirley Parsons case study. A knowledge base for a global HSEQ, Sustainability & ESG consulting firm, spanning Health & Safety, Quality, Sustainability and Business Improvement.",
    cta: "View Shirley Parsons",
  },
  {
    slug: "turner-townsend",
    title: "Turner & Townsend",
    icon: "🏗️",
    description:
      "AI agent demo based on the Turner & Townsend case study. A professional services knowledge base covering cost, project and program management across real estate, infrastructure, and natural resources.",
    cta: "View Turner & Townsend",
  },
  {
    slug: "pasha-life",
    title: "PASHA Life",
    icon: "🛡️",
    description:
      "AI agent demo based on the PASHA Life case study. An insurance knowledge base providing information about comprehensive insurance products and services.",
    cta: "View PASHA Life",
  },
];

function DemoCard({ demo }: { demo: Demo }) {
  return (
    <div className="flex flex-col justify-between rounded-2xl border border-border bg-gogol-surface/60 p-6 shadow-gogol-soft transition hover:border-gogol-cyan/50">
      <div>
        <div className="mb-3 text-2xl">{demo.icon}</div>
        <h3 className="text-lg font-semibold">{demo.title}</h3>
        <p className="mt-2 text-sm text-muted-foreground">{demo.description}</p>
      </div>
      <div className="mt-5">
        <a
          href={`/${demo.slug}/`}
          className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-5 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
        >
          {demo.cta}
        </a>
      </div>
    </div>
  );
}

export function BrowseAllDemos() {
  return (
    <section id="demos" className="px-6 py-16 md:py-24 border-t border-border">
      <div className="mx-auto max-w-6xl">
        <h2 className="text-3xl md:text-4xl font-semibold">Browse all demos</h2>
        <p className="mt-3 max-w-3xl text-muted-foreground">
          Discover gogols demos divided by sections. Each project showcases a
          different aspect of knowledge-based AI, from digital twins to business
          applications.
        </p>

        <div className="mt-12">
          <h3 className="text-sm uppercase tracking-[0.2em] text-gogol-cyan">
            Digital Twins
          </h3>
          <div className="mt-5 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {digitalTwins.map((d) => (
              <DemoCard key={d.slug} demo={d} />
            ))}
          </div>
        </div>

        <div className="mt-14">
          <h3 className="text-sm uppercase tracking-[0.2em] text-gogol-cyan">
            Business Gogols
          </h3>
          <div className="mt-5 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {businessGogols.map((d) => (
              <DemoCard key={d.slug} demo={d} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
