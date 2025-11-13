// app/page.tsx
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <main className="min-h-screen bg-gogol-bg text-foreground">

      <div className="relative overflow-hidden bg-gogol-bg text-foreground">
        {/* Corner ornament */}
        <img
          src="/corner-top-right.png"
          className="pointer-events-none absolute top-0 right-0 w-[380px] md:w-[500px] opacity-90 select-none"
          alt=""
        />

      {/* HERO */}
      <section className="relative px-6 py-28 md:py-36 overflow-hidden">
        {/* Background effects */}
        <div className="pointer-events-none absolute inset-0 bg-gogol-grid opacity-15" />
        <div className="pointer-events-none absolute inset-0 bg-gogol-radial" />
        <div className="pointer-events-none absolute inset-0 bg-gogol-radial-purple" />
        <div className="max-w-5xl mx-auto text-center relative">
          <div className="mb-5 text-sm tracking-widest uppercase text-muted-foreground">Gogols.ai</div>
          <h1 className="text-4xl md:text-6xl font-semibold leading-tight">
            Meet your <span className="text-gogol-cyan">Gogol</span>.
          </h1>
          <p className="mt-5 text-muted-foreground md:text-lg">
            Specialized AI agents — digital souls that learn your world and act on your behalf.
          </p>
          <div className="mt-8 flex items-center justify-center gap-3">
            <Button className="h-11 px-6 text-base">Train a Gogol</Button>
            <Button variant="outline" className="h-11 px-6 text-base">
              Watch demo
            </Button>
          </div>
        </div>
      </section>

      {/* TRAIN */}
      <section id="train" className="px-6 py-16 md:py-24 border-t border-border">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-semibold">Train a Gogol in minutes</h2>
            <p className="mt-3 text-muted-foreground">
              Connect your site or upload docs. Our engine ingests your knowledge and forms an interactive AI soul — your Gogol.
              Embed it as a chat widget, API, or autonomous agent.
            </p>
            <ul className="mt-6 space-y-2 text-muted-foreground">
              <li>1️⃣ Ingest → 2️⃣ Train → 3️⃣ Deploy</li>
              <li>Widget, API, or room-bot via Ethora</li>
              <li>Private by default; shareable with "selective reveal"</li>
            </ul>
            <div className="mt-6">
              <Button className="h-11 px-6">Launch the Trainer</Button>
            </div>
          </div>
          <div className="rounded-2xl border border-border p-6 bg-gogol-surface/40">
            <div className="h-56 rounded-lg border border-border bg-[linear-gradient(120deg,_rgba(168,85,247,0.12),_rgba(6,182,212,0.12))] flex items-center justify-center">
              <span className="text-muted-foreground">[ Demo video placeholder ]</span>
            </div>
          </div>
        </div>
      </section>

      {/* EXPERIENCE */}
      <section id="experience" className="px-6 py-16 md:py-24 border-t border-border">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-semibold">Experience the Gogolverse</h2>
          <p className="mt-3 text-muted-foreground">Chat with digital twins, try business gogols, or play the Dilemma game.</p>
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {["Freud Gogol","Business Gogol","Dilemma Gogol"].map((t) => (
              <div key={t} className="rounded-xl border border-border p-5 bg-gogol-surface/40">
                <div className="h-36 rounded-md border border-border mb-4 bg-card/60"/>
                <div className="font-medium">{t}</div>
                <p className="text-sm text-muted-foreground mt-1">Open a chat demo in a modal.</p>
                <div className="mt-4">
                  <Button variant="outline" className="w-full">Try demo</Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="px-6 py-16 md:py-24 border-t border-border">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-semibold">Human + AI consultancy</h2>
          <p className="mt-3 text-muted-foreground">
            Our engineers and gogols co-design intelligent workflows, RAG assistants, and digital twins for your org.
          </p>
          <div className="mt-6">
            <Button className="h-11 px-6">Book a call</Button>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 py-20 border-t border-border">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-2xl md:text-3xl font-semibold">Don't just use AI. Create a soul.</h3>
          <div className="mt-6 flex justify-center">
            <Button className="h-11 px-6">Train your Gogol</Button>
          </div>
        </div>
      </section>

      </div>

    </main>
  );
}