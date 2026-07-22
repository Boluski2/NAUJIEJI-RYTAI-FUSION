import { Flame, Instagram, Facebook, Twitter } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

export const Footer = () => {
  const [email, setEmail] = useState("");

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    toast.success("Welcome to the table", { description: "Check your inbox to confirm." });
    setEmail("");
  };

  return (
    <footer className="relative bg-charcoal-deep border-t border-border pt-20 pb-10">
      <div className="container">
        <div className="grid md:grid-cols-4 gap-12 mb-14">
          <div className="md:col-span-2">
            <a href="#home" className="flex items-center gap-2.5 mb-5">
              <Flame className="h-5 w-5 text-ember" strokeWidth={1.5} />
              <div>
                <div className="font-serif tracking-[0.2em] text-foreground">NAUJIEJI RYTAI</div>
                <div className="text-[10px] tracking-[0.4em] text-gold mt-0.5">FUSION</div>
              </div>
            </a>
            <p className="text-sm text-muted-foreground max-w-sm leading-relaxed">
              Suya, grill and spice — a premium African–Lithuanian fusion experience in the heart of Vilnius.
            </p>
            <form onSubmit={submit} className="mt-6 flex max-w-sm">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your email"
                aria-label="Email for newsletter"
                className="flex-1 bg-background border border-border px-4 py-3 text-sm focus:outline-none focus:border-ember"
              />
              <button className="bg-flame text-primary-foreground px-5 text-[10px] uppercase tracking-[0.25em] hover:shadow-glow transition-shadow">
                Subscribe
              </button>
            </form>
            <p className="mt-2 text-[10px] text-muted-foreground">
              GDPR-compliant. Unsubscribe anytime.
            </p>
          </div>

          <div>
            <div className="text-[10px] uppercase tracking-[0.3em] text-gold mb-4">Explore</div>
            <ul className="space-y-2.5 text-sm text-muted-foreground">
              {["Menu", "About", "Reservations", "Gallery", "Contact"].map((l) => (
                <li key={l}>
                  <a href={`#${l.toLowerCase()}`} className="hover:text-foreground transition-colors">{l}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <div className="text-[10px] uppercase tracking-[0.3em] text-gold mb-4">Follow</div>
            <div className="flex gap-3 mb-6">
              {[Instagram, Facebook, Twitter].map((Icon, i) => (
                <a key={i} href="#" aria-label="Social" className="flex h-9 w-9 items-center justify-center border border-border text-muted-foreground hover:border-ember hover:text-ember transition">
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
            <ul className="space-y-2.5 text-sm text-muted-foreground">
              <li><a href="#" className="hover:text-foreground transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">Terms</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">Cookie Settings</a></li>
            </ul>
          </div>
        </div>

        <div className="ember-divider mb-6" />
        <div className="flex flex-col sm:flex-row justify-between items-center gap-3 text-[11px] text-muted-foreground">
          <p>© {new Date().getFullYear()} Naujieji Rytai Fusion. All rights reserved.</p>
          <p>Crafted with fire in Vilnius.</p>
        </div>
      </div>
    </footer>
  );
};
