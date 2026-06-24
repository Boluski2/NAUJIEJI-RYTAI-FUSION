import { MapPin, Phone, Mail, Clock } from "lucide-react";

export const Contact = () => {
  return (
    <section id="contact" className="relative py-28 lg:py-36 bg-charcoal-deep">
      <div className="container grid lg:grid-cols-2 gap-12 items-stretch">
        <div className="reveal">
          <span className="text-[11px] uppercase tracking-[0.4em] text-gold">Visit Us</span>
          <h2 className="mt-4 font-serif text-4xl sm:text-5xl lg:text-6xl text-foreground leading-[1.05]">
            Find the <span className="italic text-flame-gradient">fire</span>.
          </h2>

          <div className="mt-10 space-y-6">
            <Item icon={<MapPin />} title="Address">
              Vilniaus g. 24<br />01402 Vilnius, Lithuania
            </Item>
            <Item icon={<Phone />} title="Reservations">
              <a href="tel:+37052100100" className="hover:text-gold transition-colors">+370 5 210 0100</a>
            </Item>
            <Item icon={<Mail />} title="Email">
              <a href="mailto:hello@naujiejirytai.lt" className="hover:text-gold transition-colors">hello@naujiejirytai.lt</a>
            </Item>
            <Item icon={<Clock />} title="Opening Hours">
              Tue–Sat · 17:00 – 23:00<br />
              Sun · 12:00 – 22:00<br />
              Mon · Closed
            </Item>
          </div>
        </div>

        <div className="reveal relative min-h-[420px] overflow-hidden border border-border">
          <iframe
            title="NAUJIEJI RYTAI FUSION location"
            src="https://www.google.com/maps?q=Vilnius%20Old%20Town&output=embed"
            className="absolute inset-0 h-full w-full grayscale contrast-110 brightness-75"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
          <div className="absolute inset-0 ring-1 ring-inset ring-gold/20 pointer-events-none" />
        </div>
      </div>
    </section>
  );
};

const Item = ({ icon, title, children }: { icon: React.ReactNode; title: string; children: React.ReactNode }) => (
  <div className="flex gap-4">
    <div className="mt-0.5 flex h-10 w-10 items-center justify-center border border-gold/40 text-gold">
      <span className="[&>svg]:h-4 [&>svg]:w-4">{icon}</span>
    </div>
    <div>
      <div className="text-[10px] uppercase tracking-[0.3em] text-gold mb-1">{title}</div>
      <div className="text-foreground/90 leading-relaxed">{children}</div>
    </div>
  </div>
);
