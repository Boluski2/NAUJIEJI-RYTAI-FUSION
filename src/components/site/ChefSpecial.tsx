import cod from "@/assets/dish-black-cod.jpg";
import { Flame } from "lucide-react";

export const ChefSpecial = () => {
  return (
    <section className="relative py-28 lg:py-36 overflow-hidden">
      <div className="absolute inset-0 bg-radial-ember opacity-60 pointer-events-none" />
      <div className="container relative grid lg:grid-cols-2 gap-14 items-center">
        <div className="reveal order-2 lg:order-1">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-ember/15 border border-ember/40 text-ember text-[10px] uppercase tracking-[0.3em] mb-6">
            <Flame className="h-3 w-3" /> Tonight's Special
          </div>
          <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-foreground leading-[1.05]">
            Black Cod <span className="italic text-gold-gradient">Saikyo</span>
          </h2>
          <p className="mt-6 text-muted-foreground leading-relaxed max-w-lg">
            Marinated for 72 hours in a custom blend of three white misos, torched
            tableside, finished with edible blossoms from our rooftop garden.
            Limited to twelve plates per evening.
          </p>
          <div className="mt-8 flex items-center gap-6">
            <span className="font-serif text-4xl text-flame-gradient">€38</span>
            <a
              href="#reservations"
              className="inline-flex items-center bg-flame text-primary-foreground px-7 py-3.5 text-xs uppercase tracking-[0.25em] shadow-ember hover:shadow-glow transition-all hover:-translate-y-0.5"
            >
              Reserve to taste
            </a>
          </div>
        </div>

        <div className="reveal order-1 lg:order-2 relative">
          <div className="absolute -inset-8 bg-flame opacity-20 blur-3xl rounded-full" />
          <div className="relative overflow-hidden">
            <img
              src={cod}
              alt="Black Cod Saikyo signature dish"
              loading="lazy"
              width={800}
              height={800}
              className="w-full aspect-square object-cover"
            />
            <div className="absolute inset-0 ring-1 ring-inset ring-gold/30" />
          </div>
        </div>
      </div>
    </section>
  );
};
