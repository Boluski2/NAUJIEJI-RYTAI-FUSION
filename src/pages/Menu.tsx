import { useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, Flame } from "lucide-react";
import { useReveal } from "@/hooks/useReveal";
import logo from "@/assets/menu/logo.jpeg.asset.json";
import m1 from "@/assets/menu/menu-1.png.asset.json";
import m2 from "@/assets/menu/menu-2.png.asset.json";
import m3 from "@/assets/menu/menu-3.jpeg.asset.json";
import m4 from "@/assets/menu/menu-4.png.asset.json";
import m5 from "@/assets/menu/menu-5.png.asset.json";
import m6 from "@/assets/menu/menu-6.png.asset.json";

const boards = [
  { src: m1.url, title: "Dienos pietūs · Selection I" },
  { src: m2.url, title: "Dienos pietūs · Selection II" },
  { src: m3.url, title: "Dienos pietūs · Selection III" },
  { src: m4.url, title: "Dienos pietūs · Selection IV" },
  { src: m5.url, title: "Dienos pietūs · Selection V" },
  { src: m6.url, title: "Dienos pietūs · Selection VI" },
];

const Menu = () => {
  useReveal();

  useEffect(() => {
    document.title = "Full Menu · Naujieji Rytai Fusion";
    const setMeta = (name: string, content: string) => {
      let el = document.querySelector(`meta[name="${name}"]`);
      if (!el) {
        el = document.createElement("meta");
        el.setAttribute("name", name);
        document.head.appendChild(el);
      }
      el.setAttribute("content", content);
    };
    setMeta(
      "description",
      "Explore the full Naujieji Rytai Fusion menu — African–Lithuanian suya, burger, grill & lounge. Daily lunch selections and signature fusion dishes."
    );
  }, []);

  return (
    <main className="relative min-h-screen bg-background text-foreground overflow-x-hidden">
      {/* Header */}
      <header className="relative border-b border-border/60 bg-charcoal-deep">
        <div className="absolute inset-0 bg-radial-ember opacity-40 pointer-events-none" />
        <div className="container relative py-10 flex items-center justify-between">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-muted-foreground hover:text-gold transition-colors"
          >
            <ArrowLeft className="h-4 w-4" /> Back
          </Link>
          <Link to="/" className="flex items-center gap-2.5">
            <Flame className="h-5 w-5 text-ember" strokeWidth={1.5} />
            <div className="leading-none">
              <div className="font-serif text-base tracking-[0.2em]">NAUJIEJI RYTAI</div>
              <div className="text-[10px] tracking-[0.4em] text-gold mt-0.5">FUSION</div>
            </div>
          </Link>
          <a
            href="/#reservations"
            className="hidden sm:inline-flex items-center px-5 py-2.5 text-xs uppercase tracking-[0.2em] border border-gold/40 text-gold hover:bg-gold hover:text-accent-foreground transition-all"
          >
            Reserve
          </a>
        </div>
      </header>

      {/* Hero with logo */}
      <section className="relative py-20 lg:py-28 bg-charcoal-deep">
        <div className="absolute inset-0 noise-overlay opacity-40 pointer-events-none" />
        <div className="container relative text-center max-w-3xl mx-auto reveal">
          <span className="text-[11px] uppercase tracking-[0.4em] text-gold">The Menu</span>
          <div className="mt-8 flex justify-center">
            <div className="relative">
              <div className="absolute inset-0 bg-radial-ember blur-2xl scale-125" />
              <img
                src={logo.url}
                alt="Naujieji Rytai Fusion — Wok, Suya, Burger, Grill & Lounge"
                className="relative w-64 sm:w-80 h-auto rounded-sm shadow-ember"
              />
            </div>
          </div>
          <h1 className="mt-10 font-serif text-4xl sm:text-5xl lg:text-6xl">
            Suya · Burger <span className="italic text-flame-gradient">Grill & Lounge</span>
          </h1>
          <p className="mt-6 text-muted-foreground leading-relaxed">
            A living menu of daily lunch specials and signature African–Lithuanian
            fusion plates — charcoal grill, slow stews, and bold spice. Prices in euro,
            served fresh daily.
          </p>
          <div className="ember-divider mt-10 max-w-xs mx-auto" />
        </div>
      </section>

      {/* Menu boards */}
      <section className="relative py-20 lg:py-28">
        <div className="container">
          <div className="grid gap-10 md:gap-14 md:grid-cols-2">
            {boards.map((b, i) => (
              <figure
                key={i}
                className="reveal group relative overflow-hidden border border-border/60 bg-card shadow-card"
              >
                <div className="overflow-hidden">
                  <img
                    src={b.src}
                    alt={b.title}
                    loading="lazy"
                    className="w-full h-auto transition-transform duration-[1200ms] ease-out group-hover:scale-[1.03]"
                  />
                </div>
                <figcaption className="flex items-center justify-between gap-4 px-5 py-4 border-t border-border/60 bg-charcoal-deep/60">
                  <span className="font-serif text-lg text-foreground">{b.title}</span>
                  <span className="text-[10px] uppercase tracking-[0.3em] text-gold">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-20 bg-charcoal-deep border-t border-border/60">
        <div className="container text-center reveal">
          <h2 className="font-serif text-3xl sm:text-4xl">
            Ready to <span className="italic text-flame-gradient">taste</span> the fire?
          </h2>
          <p className="mt-4 text-muted-foreground">Reserve your table — seats fill fast on weekends.</p>
          <a
            href="/#reservations"
            className="mt-8 inline-flex items-center px-8 py-3.5 text-xs uppercase tracking-[0.25em] bg-flame text-primary-foreground shadow-ember hover:shadow-glow transition-all"
          >
            Reserve a Table
          </a>
        </div>
      </section>
    </main>
  );
};

export default Menu;
