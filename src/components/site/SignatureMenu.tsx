import { ArrowRight, Flame } from "lucide-react";
import boso from "@/assets/items/boso-burgeris.png";
import elote from "@/assets/items/elote-vistienos-mesainis.png";
import klas from "@/assets/items/klasikinis-mesainis.png";
import cezario from "@/assets/items/cezario-salotos.png";
import krev from "@/assets/items/kreveciu-salotos.png";
import bbq from "@/assets/items/bbq-sparneliai.png";
import loaded from "@/assets/items/loaded-bulvytes.png";
import fusionElote from "@/assets/items/fusion-elote.png";

type Dish = { name: string; desc: string; price: string; img: string; special?: boolean };

const dishes: Dish[] = [
  { name: "Boso Burgeris", desc: "Signature house burger — brioche bun, prime beef, house sauce.", price: "€12.90", img: boso, special: true },
  { name: "Elote Traškios Vištienos Mėsainis", desc: "Crispy chicken, elote street-corn glaze, brioche bun.", price: "€10.90", img: elote, special: true },
  { name: "Klasikinis Mėsainis su Šonine", desc: "Classic beef burger with crispy bacon.", price: "€8.90", img: klas },
  { name: "Cezario Salotos su Kepta Vištiena", desc: "Caesar salad with grilled chicken, parmesan, croutons.", price: "€10.90", img: cezario },
  { name: "Azijietiškos Krevečių Salotos", desc: "Asian-style prawn salad, citrus-chili dressing.", price: "€11.90", img: krev },
  { name: "Lipnūs BBQ Sparneliai", desc: "Sticky BBQ chicken wings (5 pcs).", price: "€9.90", img: bbq },
  { name: "Loaded Bulvytės su Jautiena", desc: "Loaded fries topped with beef, cheese and sauces.", price: "€9.90", img: loaded },
  { name: "Fusion Elote", desc: "Grilled street corn, cotija, chili-lime crema.", price: "€5.90", img: fusionElote },
];

export const SignatureMenu = () => {
  return (
    <section id="menu" className="relative py-28 lg:py-36">
      <div className="container">
        <div className="reveal max-w-2xl mb-16">
          <div className="flex items-center gap-3 mb-5">
            <span className="h-px w-10 bg-gold" />
            <span className="text-[11px] uppercase tracking-[0.4em] text-gold">Signature Plates</span>
          </div>
          <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-foreground leading-[1.05]">
            Eight dishes. <span className="italic text-flame-gradient">One fire.</span>
          </h2>
          <p className="mt-5 text-muted-foreground max-w-lg">
            A tightly curated menu — every plate grilled over open flame or simmered
            low and slow, where West African spice meets Baltic soul.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {dishes.map((d, i) => (
            <article
              key={d.name}
              className="reveal group relative bg-card border border-border overflow-hidden transition-all duration-500 hover:border-ember/60 hover:-translate-y-1 hover:shadow-ember"
              style={{ transitionDelay: `${i * 40}ms` }}
            >
              <div className="relative aspect-[4/5] overflow-hidden">
                <img
                  src={d.img}
                  alt={d.name}
                  loading="lazy"
                  width={800}
                  height={800}
                  className="h-full w-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card via-card/30 to-transparent opacity-90 group-hover:opacity-70 transition-opacity" />
                {d.special && (
                  <span className="absolute top-3 left-3 inline-flex items-center gap-1.5 px-2.5 py-1 bg-flame text-primary-foreground text-[10px] uppercase tracking-[0.2em] shadow-glow">
                    <Flame className="h-3 w-3" /> Chef's Special
                  </span>
                )}
                <span className="absolute top-3 right-3 font-serif text-lg text-gold drop-shadow-[0_2px_8px_rgba(0,0,0,0.7)]">
                  {d.price}
                </span>
              </div>
              <div className="p-5">
                <h3 className="font-serif text-xl text-foreground group-hover:text-gold transition-colors">
                  {d.name}
                </h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{d.desc}</p>
              </div>
            </article>
          ))}
        </div>

        <div className="reveal mt-14 flex justify-center">
          <a
            href="#full-menu"
            className="group inline-flex items-center gap-3 border border-gold/50 text-gold px-8 py-4 text-xs uppercase tracking-[0.3em] hover:bg-gold hover:text-accent-foreground transition-all duration-500"
          >
            Explore Full Menu
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </a>
        </div>
      </div>
    </section>
  );
};
