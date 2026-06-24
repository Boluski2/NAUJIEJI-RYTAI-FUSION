import chef from "@/assets/chef.jpg";

export const About = () => {
  return (
    <section id="about" className="relative py-28 lg:py-36">
      <div className="container grid lg:grid-cols-2 gap-16 items-center">
        <div className="reveal relative">
          <div className="relative overflow-hidden">
            <img
              src={chef}
              alt="Head Chef Lukas Varnas at the wok station"
              loading="lazy"
              width={900}
              height={1100}
              className="w-full object-cover aspect-[4/5]"
            />
            <div className="absolute inset-0 ring-1 ring-inset ring-gold/20" />
          </div>
          <div className="absolute -bottom-6 -right-6 hidden md:block bg-flame text-primary-foreground p-5 max-w-[220px] shadow-ember">
            <div className="font-serif text-3xl leading-none">12+</div>
            <div className="mt-2 text-[10px] uppercase tracking-[0.25em]">Years of fusion craft</div>
          </div>
        </div>

        <div className="reveal">
          <div className="flex items-center gap-3 mb-5">
            <span className="h-px w-10 bg-gold" />
            <span className="text-[11px] uppercase tracking-[0.4em] text-gold">Our Story</span>
          </div>
          <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl leading-[1.05] text-foreground">
            Where the East <span className="italic text-flame-gradient">ignites</span> the European table.
          </h2>
          <p className="mt-6 text-muted-foreground leading-relaxed">
            Naujieji Rytai — "the new East" — was born from a simple obsession: the
            wild aroma of a flaming wok, served on porcelain worthy of a European
            grand maison. Every plate is a dialogue between two cultures, written in
            chili, charcoal, and gold.
          </p>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            Our open kitchen is theatre. Our pantry is a passport. Our table is yours.
          </p>

          <div className="ember-divider my-10" />

          <div>
            <div className="font-serif text-2xl text-foreground">Chef Lukas Varnas</div>
            <div className="mt-1 text-[11px] uppercase tracking-[0.3em] text-gold">Executive Chef · Founder</div>
            <p className="mt-4 text-sm text-muted-foreground italic leading-relaxed">
              "Fire is the oldest language in any kitchen. I want every guest to feel
              that conversation — bold, warm, and a little dangerous."
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
