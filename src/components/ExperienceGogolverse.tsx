"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";

const peopleGogols = [
  {
    id: "freud",
    title: "Freud Gogol",
    subtitle: "Psychoanalytic twin",
    description: "Explore dreams, symbols, and subconscious motives.",
    image: "/avatars/freud-gogol.png",
  },
  {
    id: "gandhi",
    title: "Gandhi Gogol",
    subtitle: "Ethics & non-violence",
    description: "Debate moral dilemmas and peaceful strategies.",
    image: "/avatars/gandhi-gogol.png",
  },
  {
    id: "zelensky",
    title: "Zelensky Gogol",
    subtitle: "Leadership in crisis",
    description: "Discuss communication, courage, and wartime decisions.",
    image: "/avatars/zelensky-gogol.png",
  },
];

const businessGogols = [
  {
    id: "saas",
    title: "SaaS Support Gogol",
    subtitle: "24/7 customer assistant",
    description: "Trained on your docs, changelogs, and tickets.",
  },
  {
    id: "agency",
    title: "Agency Gogol",
    subtitle: "Proposal & brief helper",
    description: "Drafts proposals, briefs, and client emails on command.",
  },
  {
    id: "internal",
    title: "Internal Wiki Gogol",
    subtitle: "Knowledge guardian",
    description: "Answers team questions from your internal wiki.",
  },
];

const funGogols = [
  {
    id: "dilemma",
    title: "Dilemma Gogol",
    subtitle: "Prisoner's Dilemma host",
    description: "Join a room and play repeated Dilemma with other gogols.",
  },
  {
    id: "storyteller",
    title: "Storyteller Gogol",
    subtitle: "Folk horror tales",
    description: "Spins eerie, Gogol-inspired stories in group chats.",
  },
  {
    id: "quiz",
    title: "Quizmaster Gogol",
    subtitle: "Game night host",
    description: "Runs trivia, hidden roles, and experimental games.",
  },
];

export function ExperienceGogolverse() {
  const [personIdx, setPersonIdx] = useState(0);
  const [businessIdx, setBusinessIdx] = useState(0);
  const [funIdx, setFunIdx] = useState(0);

  // Auto-rotate every 6 seconds with slight stagger
  useEffect(() => {
    const interval1 = setInterval(() => {
      setPersonIdx((i) => (i + 1) % peopleGogols.length);
    }, 6000);
    
    const interval2 = setInterval(() => {
      setBusinessIdx((i) => (i + 1) % businessGogols.length);
    }, 7000);
    
    const interval3 = setInterval(() => {
      setFunIdx((i) => (i + 1) % funGogols.length);
    }, 8000);

    return () => {
      clearInterval(interval1);
      clearInterval(interval2);
      clearInterval(interval3);
    };
  }, []);

  const person = peopleGogols[personIdx];
  const business = businessGogols[businessIdx];
  const fun = funGogols[funIdx];

  return (
    <section id="experience" className="px-6 py-16 md:py-24 border-t border-border">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-semibold">
          Experience the Gogolverse
        </h2>
        <p className="mt-3 text-muted-foreground">
          Chat with digital twins, try business gogols, or play the Dilemma game.
        </p>

        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {/* Famous minds tile */}
          <Tile
            label="Digital Twins"
            item={person}
            onNext={() =>
              setPersonIdx((i) => (i + 1) % peopleGogols.length)
            }
            onPrev={() =>
              setPersonIdx(
                (i) => (i - 1 + peopleGogols.length) % peopleGogols.length
              )
            }
          />

          {/* Business gogols tile */}
          <Tile
            label="Business Gogols"
            item={business}
            onNext={() =>
              setBusinessIdx((i) => (i + 1) % businessGogols.length)
            }
            onPrev={() =>
              setBusinessIdx(
                (i) => (i - 1 + businessGogols.length) % businessGogols.length
              )
            }
          />

          {/* Fun / games tile */}
          <Tile
            label="Games & Rooms"
            item={fun}
            onNext={() => setFunIdx((i) => (i + 1) % funGogols.length)}
            onPrev={() =>
              setFunIdx(
                (i) => (i - 1 + funGogols.length) % funGogols.length
              )
            }
          />
        </div>
      </div>
    </section>
  );
}

type TileItem = {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  image?: string;
};

function Tile({
  label,
  item,
  onNext,
  onPrev,
}: {
  label: string;
  item: TileItem;
  onNext: () => void;
  onPrev: () => void;
}) {
  return (
    <div className="rounded-2xl border border-border bg-gogol-surface/60 p-5 shadow-gogol-soft flex flex-col justify-between">
      <div>
        <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-2">
          {label}
        </div>

        {/* key=item.id forces re-mount → animation triggers */}
        <div key={item.id} className="cyber-swap">
          <div className="h-32 mb-4 rounded-xl border border-border bg-card/60 flex items-center justify-center text-sm text-muted-foreground relative overflow-hidden">
            <div className="absolute inset-0 bg-gogol-grid opacity-15 pointer-events-none" />
            {item.image ? (
              <img
                src={item.image}
                alt={item.title}
                className="relative z-10 w-full h-full object-cover rounded-xl"
              />
            ) : (
              <span className="relative z-10">{item.title}</span>
            )}
          </div>
          <div className="font-medium">{item.subtitle}</div>
          <p className="text-sm text-muted-foreground mt-1">{item.description}</p>
        </div>
      </div>

      <div className="mt-4 flex items-center justify-between gap-2">
        <div className="flex items-center gap-1 text-xs text-muted-foreground">
          <button
            onClick={onPrev}
            className="px-2 py-1 border border-border rounded-md hover:bg-gogol-surface/60 transition"
          >
            ◀
          </button>
          <button
            onClick={onNext}
            className="px-2 py-1 border border-border rounded-md hover:bg-gogol-surface/60 transition"
          >
            ▶
          </button>
          <span className="ml-1 text-[0.7rem] uppercase tracking-[0.18em]">
            Cycle gogols
          </span>
        </div>

        <Button variant="outline" size="sm" className="border-border">
          Open demo
        </Button>
      </div>
    </div>
  );
}

