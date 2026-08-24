"use client";

import { FormEvent, useState } from "react";
import { ArrowRight, Check } from "lucide-react";
import { cn } from "@/lib/utils";

const initialState = {
  nimi: "",
  yritys: "",
  sahkoposti: "",
  puhelin: "",
  tarve: "",
  budjetti: "",
  aikataulu: "",
  viesti: "",
};

type FormState = typeof initialState;
type Status = "idle" | "sending" | "sent" | "error";

const fieldClass =
  "mt-2 w-full border border-input bg-card px-4 py-3 text-sm text-foreground outline-none transition-colors duration-200 placeholder:text-muted-foreground/70 focus:border-accent-brand";
const labelClass =
  "block text-xs font-semibold tracking-[0.14em] uppercase text-muted-foreground";

async function submitLead(data: FormState) {
  console.info("Tarjouspyyntö", data);
  await new Promise((resolve) => setTimeout(resolve, 600));
}

export function ContactForm() {
  const [form, setForm] = useState<FormState>(initialState);
  const [status, setStatus] = useState<Status>("idle");

  const setField =
    (key: keyof FormState) =>
    (value: string) =>
      setForm((prev) => ({ ...prev, [key]: value }));

  if (status === "sent") {
    return (
      <div className="border border-border bg-card p-10">
        <span className="inline-flex h-10 w-10 items-center justify-center bg-accent-brand text-accent-brand-foreground">
          <Check className="h-5 w-5" />
        </span>
        <h3 className="mt-6 font-display text-xl text-foreground">
          Kiitos yhteydenotosta.
        </h3>
        <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
          Tarjouspyyntösi on vastaanotettu. Palaamme asiaan sähköpostitse
          mahdollisimman pian.
        </p>
        <button
          type="button"
          onClick={() => setStatus("idle")}
          className="mt-8 border border-foreground/15 px-5 py-3 text-sm font-medium text-foreground transition-colors duration-200 hover:bg-secondary"
        >
          Lähetä uusi pyyntö
        </button>
      </div>
    );
  }

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("sending");
    try {
      await submitLead(form);
      setStatus("sent");
      setForm(initialState);
    } catch {
      setStatus("error");
    }
  }

  return (
    <form
      onSubmit={onSubmit}
      className="border border-border bg-card p-7 sm:p-10"
    >
      <div className="grid gap-6 sm:grid-cols-2">
        <div>
          <label className={labelClass} htmlFor="nimi">
            Nimi
          </label>
          <input
            id="nimi"
            required
            autoComplete="name"
            value={form.nimi}
            onChange={(e) => setField("nimi")(e.target.value)}
            className={fieldClass}
            placeholder="Etunimi Sukunimi"
          />
        </div>
        <div>
          <label className={labelClass} htmlFor="yritys">
            Yritys
          </label>
          <input
            id="yritys"
            autoComplete="organization"
            value={form.yritys}
            onChange={(e) => setField("yritys")(e.target.value)}
            className={fieldClass}
            placeholder="Yrityksesi nimi"
          />
        </div>
        <div>
          <label className={labelClass} htmlFor="sahkoposti">
            Sähköposti
          </label>
          <input
            id="sahkoposti"
            type="email"
            required
            autoComplete="email"
            value={form.sahkoposti}
            onChange={(e) => setField("sahkoposti")(e.target.value)}
            className={fieldClass}
            placeholder="nimi@yritys.fi"
          />
        </div>
        <div>
          <label className={labelClass} htmlFor="puhelin">
            Puhelinnumero
          </label>
          <input
            id="puhelin"
            type="tel"
            autoComplete="tel"
            value={form.puhelin}
            onChange={(e) => setField("puhelin")(e.target.value)}
            className={fieldClass}
            placeholder="+358 40 123 4567"
          />
        </div>
        <div>
          <label className={labelClass} htmlFor="tarve">
            Millaisen verkkosivun tarvitset?
          </label>
          <select
            id="tarve"
            value={form.tarve}
            onChange={(e) => setField("tarve")(e.target.value)}
            className={fieldClass}
          >
            <option value="">Valitse vaihtoehto</option>
            <option value="uusi">Uusi verkkosivu</option>
            <option value="uudistus">Nykyisen sivuston uudistus</option>
            <option value="laajennus">Laajennus tai lisäsivut</option>
            <option value="muu">Muu tarve</option>
          </select>
        </div>
        <div>
          <label className={labelClass} htmlFor="budjetti">
            Budjetti
          </label>
          <select
            id="budjetti"
            value={form.budjetti}
            onChange={(e) => setField("budjetti")(e.target.value)}
            className={fieldClass}
          >
            <option value="">Valitse vaihtoehto</option>
            <option value="alle-300">Alle 300 €</option>
            <option value="300-500">300–500 €</option>
            <option value="500-800">500–800 €</option>
            <option value="yli-800">Yli 800 €</option>
            <option value="en-tieda">En vielä tiedä</option>
          </select>
        </div>
        <div className="sm:col-span-2">
          <label className={labelClass} htmlFor="aikataulu">
            Milloin haluaisit verkkosivun?
          </label>
          <select
            id="aikataulu"
            value={form.aikataulu}
            onChange={(e) => setField("aikataulu")(e.target.value)}
            className={fieldClass}
          >
            <option value="">Valitse vaihtoehto</option>
            <option value="asap">Mahdollisimman pian</option>
            <option value="1-2-viikkoa">1–2 viikon sisällä</option>
            <option value="taman-kuun">Tämän kuukauden aikana</option>
            <option value="en-varma">En ole vielä varma</option>
          </select>
        </div>
      </div>
      <div className="mt-6">
        <label className={labelClass} htmlFor="viesti">
          Viesti
        </label>
        <textarea
          id="viesti"
          rows={5}
          value={form.viesti}
          onChange={(e) => setField("viesti")(e.target.value)}
          className={cn(fieldClass, "resize-y")}
          placeholder="Kerro lyhyesti yrityksestäsi, nykyisestä verkkosivustasi ja siitä mitä haluaisit parantaa."
        />
      </div>
      {status === "error" ? (
        <p className="mt-5 text-sm text-destructive">
          Lähetys ei onnistunut. Yritä hetken kuluttua uudelleen.
        </p>
      ) : null}
      <button
        type="submit"
        disabled={status === "sending"}
        className="btn-base btn-solid mt-8 w-full disabled:opacity-60 sm:w-auto"
      >
        {status === "sending" ? "Lähetetään" : "Lähetä tarjouspyyntö"}
        <ArrowRight className="h-4 w-4" />
      </button>
      <p className="mt-4 text-xs leading-relaxed text-muted-foreground">
        Lähettämällä lomakkeen hyväksyt, että käsittelemme tietojasi tarjouksen
        laatimiseksi.
      </p>
    </form>
  );
}
