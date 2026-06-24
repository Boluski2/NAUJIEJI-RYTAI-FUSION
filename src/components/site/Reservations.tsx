import { useState } from "react";
import { Calendar, Clock, Users } from "lucide-react";
import { toast } from "sonner";

export const Reservations = () => {
  const [submitting, setSubmitting] = useState(false);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      toast.success("Reservation request received", {
        description: "We'll confirm your table within an hour.",
      });
      (e.target as HTMLFormElement).reset();
    }, 600);
  };

  return (
    <section id="reservations" className="relative py-28 lg:py-36 bg-charcoal-deep">
      <div className="container grid lg:grid-cols-5 gap-12 items-center">
        <div className="reveal lg:col-span-2">
          <span className="text-[11px] uppercase tracking-[0.4em] text-gold">Reservations</span>
          <h2 className="mt-4 font-serif text-4xl sm:text-5xl lg:text-6xl text-foreground leading-[1.05]">
            A table by <span className="italic text-flame-gradient">the fire</span>.
          </h2>
          <p className="mt-5 text-muted-foreground leading-relaxed">
            Booking takes under thirty seconds. We confirm by email within the hour.
            For parties over six, please call us directly.
          </p>
          <div className="ember-divider my-8" />
          <div className="space-y-2 text-sm text-muted-foreground">
            <p><span className="text-gold">Tue–Sat</span>  ·  17:00 – 23:00</p>
            <p><span className="text-gold">Sunday</span>  ·  12:00 – 22:00</p>
            <p><span className="text-gold">Monday</span>  ·  Closed</p>
          </div>
        </div>

        <form
          onSubmit={onSubmit}
          className="reveal lg:col-span-3 bg-card border border-border p-8 sm:p-10"
        >
          <div className="grid sm:grid-cols-2 gap-5">
            <Field label="Name">
              <input required type="text" name="name" placeholder="Your full name" className={inputCls} />
            </Field>
            <Field label="Email">
              <input required type="email" name="email" placeholder="you@example.com" className={inputCls} />
            </Field>
            <Field label="Date" icon={<Calendar className="h-3.5 w-3.5" />}>
              <input required type="date" name="date" className={inputCls} />
            </Field>
            <Field label="Time" icon={<Clock className="h-3.5 w-3.5" />}>
              <input required type="time" name="time" defaultValue="19:30" className={inputCls} />
            </Field>
            <Field label="Guests" icon={<Users className="h-3.5 w-3.5" />}>
              <select required name="guests" defaultValue="2" className={inputCls}>
                {[1,2,3,4,5,6].map((n) => <option key={n} value={n}>{n} {n===1?"guest":"guests"}</option>)}
              </select>
            </Field>
            <Field label="Phone">
              <input type="tel" name="phone" placeholder="+370 …" className={inputCls} />
            </Field>
          </div>
          <Field label="Special requests" className="mt-5">
            <textarea name="notes" rows={3} placeholder="Allergies, occasion, seating preference…" className={`${inputCls} resize-none`} />
          </Field>
          <button
            type="submit"
            disabled={submitting}
            className="mt-7 w-full bg-flame text-primary-foreground px-7 py-4 text-xs uppercase tracking-[0.3em] shadow-ember hover:shadow-glow transition-all disabled:opacity-60"
          >
            {submitting ? "Sending…" : "Confirm Reservation"}
          </button>
          <p className="mt-4 text-[11px] text-muted-foreground text-center">
            By submitting you agree to our reservation policy. We respect your privacy (GDPR).
          </p>
        </form>
      </div>
    </section>
  );
};

const inputCls =
  "w-full bg-background border border-border px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:border-ember transition-colors";

const Field = ({
  label, icon, children, className = "",
}: { label: string; icon?: React.ReactNode; children: React.ReactNode; className?: string }) => (
  <label className={`block ${className}`}>
    <span className="flex items-center gap-2 text-[10px] uppercase tracking-[0.3em] text-gold mb-2">
      {icon} {label}
    </span>
    {children}
  </label>
);
