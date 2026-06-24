import { useEffect, useState } from "react";
import { Menu, X, Flame } from "lucide-react";
import { cn } from "@/lib/utils";

const links = [
  { label: "Home", href: "#home" },
  { label: "Menu", href: "#menu" },
  { label: "About", href: "#about" },
  { label: "Reservations", href: "#reservations" },
  { label: "Gallery", href: "#gallery" },
  { label: "Contact", href: "#contact" },
];

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-500",
        scrolled
          ? "bg-charcoal-deep/85 backdrop-blur-xl border-b border-border/60"
          : "bg-transparent"
      )}
    >
      <nav className="container flex h-20 items-center justify-between">
        <a href="#home" className="flex items-center gap-2.5 group">
          <Flame className="h-5 w-5 text-ember transition-transform group-hover:scale-110" strokeWidth={1.5} />
          <div className="leading-none">
            <div className="font-serif text-base tracking-[0.2em] text-foreground">NAUJIEJI RYTAI</div>
            <div className="text-[10px] tracking-[0.4em] text-gold mt-0.5">FUSION</div>
          </div>
        </a>

        <ul className="hidden lg:flex items-center gap-9">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="relative text-xs uppercase tracking-[0.2em] text-muted-foreground hover:text-foreground transition-colors after:absolute after:left-0 after:-bottom-1.5 after:h-px after:w-0 after:bg-ember after:transition-all hover:after:w-full"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="#reservations"
          className="hidden lg:inline-flex items-center justify-center px-5 py-2.5 text-xs uppercase tracking-[0.2em] border border-gold/40 text-gold hover:bg-gold hover:text-accent-foreground transition-all duration-300"
        >
          Reserve
        </a>

        <button
          aria-label="Toggle menu"
          className="lg:hidden text-foreground"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X /> : <Menu />}
        </button>
      </nav>

      {open && (
        <div className="lg:hidden bg-charcoal-deep/95 backdrop-blur-xl border-t border-border animate-fade-in">
          <ul className="container py-6 flex flex-col gap-5">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  onClick={() => setOpen(false)}
                  href={l.href}
                  className="block text-sm uppercase tracking-[0.2em] text-muted-foreground hover:text-ember"
                >
                  {l.label}
                </a>
              </li>
            ))}
            <a
              href="#reservations"
              onClick={() => setOpen(false)}
              className="mt-2 inline-flex w-fit items-center px-5 py-2.5 text-xs uppercase tracking-[0.2em] border border-gold/40 text-gold"
            >
              Reserve a Table
            </a>
          </ul>
        </div>
      )}
    </header>
  );
};
