import interior from "@/assets/gallery-interior.jpg";
import grill from "@/assets/gallery-grill.jpg";
import cocktail from "@/assets/gallery-cocktail.jpg";
import dessert from "@/assets/gallery-dessert.jpg";
import duck from "@/assets/dish-duck.jpg";
import tuna from "@/assets/dish-tuna.jpg";

const items = [
  { src: interior, alt: "Restaurant interior", span: "lg:col-span-2 lg:row-span-2" },
  { src: grill, alt: "Charcoal grill flames" },
  { src: dessert, alt: "Gold leaf dessert" },
  { src: cocktail, alt: "Bartender crafting cocktail", span: "lg:col-span-2" },
  { src: duck, alt: "Hoisin duck breast" },
  { src: tuna, alt: "Sesame tuna tataki" },
];

export const Gallery = () => {
  return (
    <section id="gallery" className="relative py-28 lg:py-36">
      <div className="container">
        <div className="reveal max-w-2xl mb-14">
          <span className="text-[11px] uppercase tracking-[0.4em] text-gold">Gallery</span>
          <h2 className="mt-4 font-serif text-4xl sm:text-5xl lg:text-6xl text-foreground leading-[1.05]">
            A glimpse of the <span className="italic text-flame-gradient">flame</span>.
          </h2>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 auto-rows-[180px] lg:auto-rows-[220px] gap-3">
          {items.map((it, i) => (
            <div
              key={i}
              className={`reveal group relative overflow-hidden ${it.span ?? ""}`}
              style={{ transitionDelay: `${i * 60}ms` }}
            >
              <img
                src={it.src}
                alt={it.alt}
                loading="lazy"
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-1500 ease-out group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-charcoal-deep/30 group-hover:bg-charcoal-deep/10 transition-colors" />
              <div className="absolute inset-0 ring-1 ring-inset ring-gold/0 group-hover:ring-gold/40 transition" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
