import { useState } from "react";

const menuData = {
  Wok: [
    ["Sichuan Wok Beef", "Tenderloin, scallion, dried chili.", "€26"],
    ["Mapo Aubergine", "Silken tofu, fermented bean, sansho.", "€18"],
    ["Drunken Noodles", "Wide rice noodle, basil, bird's eye.", "€19"],
    ["Volcano Ramen", "Pork belly, chili oil, soft egg.", "€19"],
  ],
  Grill: [
    ["Wagyu Miso Skewers", "Charcoal-glazed wagyu, sesame crumb.", "€34"],
    ["Hoisin Duck Breast", "Pink-roasted, pomegranate.", "€32"],
    ["Korean BBQ Short Rib", "48h marinated, gochujang glaze.", "€29"],
    ["Yakitori Selection", "Five skewers from the binchotan.", "€22"],
  ],
  "Signature Fusion": [
    ["Black Cod Saikyo", "72h miso marinated, torched.", "€38"],
    ["Chili Tiger Prawns", "Sichuan glaze, citrus oil.", "€28"],
    ["Sesame Tuna Tataki", "Bluefin, ponzu pearls.", "€29"],
    ["Chef's Tasting Wok", "Five-course tasting. Daily.", "€68"],
  ],
  Drinks: [
    ["Yuzu Negroni", "Campari, gin, yuzu bitters.", "€14"],
    ["Smoke & Plum", "Mezcal, umeshu, charred citrus.", "€15"],
    ["Sake Flight", "Three premium pours.", "€18"],
    ["Reserve Riesling", "Glass — Mosel, Germany.", "€12"],
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

        <div className="reveal max-w-3xl mx-auto">
          <ul className="divide-y divide-border/60">
            {menuData[active].map(([name, desc, price]) => (
              <li key={name} className="flex items-baseline gap-6 py-6 group">
                <div className="flex-1">
                  <div className="flex items-baseline gap-3">
                    <h3 className="font-serif text-xl text-foreground group-hover:text-gold transition-colors">
                      {name}
                    </h3>
                    <span className="flex-1 border-b border-dashed border-border/60 mb-1.5" />
                    <span className="font-serif text-lg text-gold">{price}</span>
                  </div>
                  <p className="mt-1.5 text-sm text-muted-foreground">{desc}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};
