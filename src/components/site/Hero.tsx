import heroImg from "@/assets/hero-wok.jpg";
import { ArrowRight } from "lucide-react";

export const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src={heroImg}
          alt="Sizzling wok with vibrant flames at NAUJIEJI RYTAI FUSION"
          width={1920}
          height={1280}
          className="h-full w-full object-cover animate-slow-zoom"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-charcoal-deep via-charcoal-deep/70 to-charcoal-deep/30" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent" />
        {/* Ember glow */}
        <div className="absolute -bottom-32 right-[-10%] h-[600px] w-[600px] rounded-full bg-ember/30 blur-[120px] animate-ember-pulse" />
      </div>

      <div className="container relative z-10 pt-28">
        <div className="max-w-3xl">
          <div className="flex items-center gap-3 mb-8 animate-fade-in">
            <span className="h-px w-10 bg-gold" />
            <span className="text-[11px] uppercase tracking-[0.4em] text-gold">Fusion · Wok · Grill</span>
          </div>

          <h1
            className="font-serif text-5xl sm:text-6xl lg:text-8xl leading-[0.95] text-foreground animate-fade-in"
            style={{ animationDelay: "0.1s" }}
          >
            Wok <span className="text-flame-gradient italic">·</span> Grill
            <br />
            <span className="text-flame-gradient italic">Spice</span> Experience
          </h1>

          <p
            className="mt-8 max-w-xl text-base sm:text-lg text-muted-foreground leading-relaxed animate-fade-in"
            style={{ animationDelay: "0.25s" }}
          >
            A premium European fusion table where Asian fire meets refined plating.
            Hand-tossed woks, charcoal-grilled cuts, and signatures kissed by chili and gold.
          </p>

          <div
            className="mt-10 flex flex-wrap gap-4 animate-fade-in"
            style={{ animationDelay: "0.4s" }}
          >
            <a
              href="#reservations"
              className="group inline-flex items-center gap-3 bg-flame px-8 py-4 text-sm uppercase tracking-[0.25em] text-primary-foreground shadow-ember hover:shadow-glow transition-all duration-500 hover:-translate-y-0.5"
            >
              Reserve a Table
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href="#menu"
              className="inline-flex items-center gap-3 border border-foreground/30 px-8 py-4 text-sm uppercase tracking-[0.25em] text-foreground hover:border-gold hover:text-gold transition-all duration-300"
            >
              View Menu
            </a>
          </div>

          <div
            className="mt-16 grid grid-cols-3 max-w-md gap-6 animate-fade-in"
            style={{ animationDelay: "0.55s" }}
          >
            {[
              ["12+", "Years"],
              ["48", "Signature dishes"],
              ["★★★★★", "Guest rated"],
            ].map(([k, v]) => (
              <div key={v as string}>
                <div className="font-serif text-2xl text-gold">{k}</div>
                <div className="text-[10px] uppercase tracking-[0.25em] text-muted-foreground mt-1">{v}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll cue */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 hidden md:flex flex-col items-center gap-2">
        <span className="text-[10px] uppercase tracking-[0.4em] text-muted-foreground">Scroll</span>
        <span className="h-10 w-px bg-gradient-to-b from-gold to-transparent" />
      </div>
    </section>
  );
};
