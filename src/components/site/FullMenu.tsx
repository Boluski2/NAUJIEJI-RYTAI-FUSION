import { useState } from "react";
import boso from "@/assets/items/boso-burgeris.png";
import sweetChili from "@/assets/items/sweet-chili-mesainis.png";
import elote from "@/assets/items/elote-vistienos-mesainis.png";
import klas from "@/assets/items/klasikinis-mesainis.png";
import cezario from "@/assets/items/cezario-salotos.png";
import krev from "@/assets/items/kreveciu-salotos.png";
import bbq from "@/assets/items/bbq-sparneliai.png";
import tajin from "@/assets/items/tajin-sparneliai.png";
import loaded from "@/assets/items/loaded-bulvytes.png";
import fusionElote from "@/assets/items/fusion-elote.png";
import virtinukai from "@/assets/items/jautienos-virtinukai.png";
import kukuruzu from "@/assets/items/kukuruzu-desrainiai.png";
import desrainiukai from "@/assets/items/desrainiukai.png";

type Item = { name: string; desc?: string; price: string; img?: string };

const menuData: Record<string, Item[]> = {
  "Mėsainiai": [
    { name: "Boso Burgeris", desc: "Signature house burger — brioche bun, prime beef, house sauce.", price: "€12.90", img: boso },
    { name: "Elote Traškios Vištienos Mėsainis", desc: "Crispy chicken, elote street-corn glaze.", price: "€10.90", img: elote },
    { name: "Trąškus Sweet Chili Vištienos Mėsainis", desc: "Crispy chicken, sweet chili glaze.", price: "€9.90", img: sweetChili },
    { name: "Klasikinis Mėsainis su Šonine", desc: "Classic beef burger with crispy bacon.", price: "€8.90", img: klas },
  ],
  "Salotos": [
    { name: "Cezario Salotos su Kepta Vištiena", desc: "Caesar salad with grilled chicken.", price: "€10.90", img: cezario },
    { name: "Azijietiškos Krevečių Salotos", desc: "Asian-style prawn salad, citrus-chili dressing.", price: "€11.90", img: krev },
    { name: "Coleslaw Salotos", desc: "House coleslaw.", price: "€2.50" },
  ],
  "Sparneliai & Užkandžiai": [
    { name: "Lipnūs BBQ Sparneliai (5 vnt)", desc: "Sticky BBQ chicken wings.", price: "€9.90", img: bbq },
    { name: "Trąškūs Vištienos Sparneliai su Tajin (5 vnt)", desc: "Crispy wings, Tajin spice.", price: "€8.90", img: tajin },
    { name: "Loaded Bulvytės su Jautiena", desc: "Loaded fries, beef, cheese.", price: "€9.90", img: loaded },
    { name: "Fusion Elote", desc: "Grilled street corn, cotija, chili-lime.", price: "€5.90", img: fusionElote },
    { name: "Jautienos Virtinukai", desc: "Beef dumplings.", price: "€8.00", img: virtinukai },
    { name: "Čeburekai (3 vnt)", desc: "Fried stuffed pastries.", price: "€7.30" },
    { name: "Fusion Krevetės (8 vnt)", desc: "Signature fusion prawns.", price: "€11.00" },
    { name: "Kepta Duona", desc: "Fried garlic rye bread.", price: "€5.50" },
    { name: "Kepta Duona su Sūrio Padažu", desc: "Fried bread with cheese dip.", price: "€6.50" },
    { name: "Žemės Riešutai", desc: "Roasted peanuts.", price: "€5.50" },
  ],
  "Priedai": [
    { name: "Fri Bulvytės", desc: "Classic fries.", price: "€4.00" },
    { name: "Fri Bulvytės su Tajin", desc: "Fries with Tajin spice.", price: "€4.50" },
    { name: "Fri Bulvytės su Sūriu", desc: "Cheesy fries.", price: "€5.50" },
  ],
  "Vaikams": [
    { name: "Linksmieji Kukurūzų Dešrainiai", desc: "Corn-batter mini hot dogs.", price: "€6.90", img: kukuruzu },
    { name: "Linksmieji Dešrainiukai", desc: "Kids' hot dogs.", price: "€6.50", img: desrainiukai },
    { name: "Mažylio Vištienos Mėsainis su Bulvytėm", desc: "Kids' chicken burger with fries.", price: "€8.50" },
    { name: "Mažylio Trąškios Vištienos Juostelės (3 vnt) su Bulvytėmis", desc: "Chicken strips with fries.", price: "€6.99" },
    { name: "Mažylio Sūrainis su Bulvytėmis", desc: "Kids' cheeseburger with fries.", price: "€8.50" },
  ],
};

type Cat = keyof typeof menuData;

export const FullMenu = () => {
  const cats = Object.keys(menuData) as Cat[];
  const [active, setActive] = useState<Cat>(cats[0]);

  return (
    <section id="full-menu" className="relative py-28 lg:py-36 bg-charcoal-deep">
      <div className="absolute inset-0 noise-overlay opacity-40 pointer-events-none" />
      <div className="container relative">
        <div className="reveal text-center max-w-2xl mx-auto mb-14">
          <span className="text-[11px] uppercase tracking-[0.4em] text-gold">À la carte</span>
          <h2 className="mt-4 font-serif text-4xl sm:text-5xl lg:text-6xl text-foreground">
            The Full <span className="italic text-flame-gradient">Menu</span>
          </h2>
        </div>

        <div className="reveal flex flex-wrap justify-center gap-2 mb-12">
          {cats.map((c) => (
            <button
              key={c}
              onClick={() => setActive(c)}
              className={`px-5 py-2.5 text-[11px] uppercase tracking-[0.25em] border transition-all duration-300 ${
                active === c
                  ? "border-ember bg-ember/10 text-ember"
                  : "border-border text-muted-foreground hover:border-gold/50 hover:text-gold"
              }`}
            >
              {c}
            </button>
          ))}
        </div>

        <div className="reveal max-w-4xl mx-auto">
          <ul className="divide-y divide-border/60">
            {menuData[active].map((item) => (
              <li key={item.name} className="flex items-center gap-5 sm:gap-8 py-6 group">
                {item.img ? (
                  <div className="relative shrink-0 w-20 h-20 sm:w-28 sm:h-28 overflow-hidden border border-border/60">
                    <img
                      src={item.img}
                      alt={item.name}
                      loading="lazy"
                      width={224}
                      height={224}
                      className="w-full h-full object-cover transition-transform duration-[900ms] ease-out group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-charcoal-deep/60 to-transparent pointer-events-none" />
                  </div>
                ) : (
                  <div className="shrink-0 w-20 h-20 sm:w-28 sm:h-28 border border-border/60 bg-charcoal-deep/60 flex items-center justify-center">
                    <span className="font-serif text-2xl text-gold/60">✦</span>
                  </div>
                )}
                <div className="flex-1 min-w-0">
                  <div className="flex items-baseline gap-3">
                    <h3 className="font-serif text-lg sm:text-xl text-foreground group-hover:text-gold transition-colors truncate">
                      {item.name}
                    </h3>
                    <span className="flex-1 border-b border-dashed border-border/60 mb-1.5" />
                    <span className="font-serif text-lg text-gold">{item.price}</span>
                  </div>
                  {item.desc && <p className="mt-1.5 text-sm text-muted-foreground">{item.desc}</p>}
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};