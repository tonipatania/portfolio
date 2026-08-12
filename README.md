# Portfolio

Portfolio da sviluppatore software costruito con Next.js (App Router), TypeScript, Tailwind CSS e next-intl (italiano/inglese).

## Stack

- [Next.js 16](https://nextjs.org/) — App Router, TypeScript
- [Tailwind CSS 4](https://tailwindcss.com/)
- [next-intl](https://next-intl.dev/) — routing localizzato `/it/...` e `/en/...`
- [next-themes](https://github.com/pacocoursey/next-themes) — dark mode con toggle

## Requisiti

- Node.js 20+
- npm

## Setup locale

```bash
npm install
cp .env.example .env.local
```

Compila `.env.local` con i tuoi valori (vedi sotto). Poi avvia il dev server:

```bash
npm run dev
```

Il sito è disponibile su `http://localhost:3000` (redirect automatico a `/it`).

## Variabili d'ambiente

| Variabile | Obbligatoria | Descrizione |
| --- | --- | --- |
| `NEXT_PUBLIC_SITE_URL` | Consigliata | URL pubblico del sito, usato per `metadataBase`, Open Graph e `sitemap.xml`/`robots.txt`. Senza questa variabile viene usato `http://localhost:3000` come fallback. |
| `NEXT_PUBLIC_FORM_ENDPOINT` | Sì (per il form contatti) | Endpoint del servizio esterno che riceve le submission del form contatti (es. [Formspree](https://formspree.io/) o [Web3Forms](https://web3forms.com/)). Senza questa variabile il form mostra un errore all'invio. |

Vedi [.env.example](.env.example) per il formato completo.

## Contenuti da personalizzare prima del deploy

Questo scaffold contiene contenuti placeholder chiaramente marcati, da sostituire con i tuoi dati reali:

- **Progetti**: [src/content/projects.ts](src/content/projects.ts) — sostituisci titolo, problema risolto, scelte tecniche, stack, link demo/GitHub e screenshot (`coverImage`) per ciascuno dei 4-6 progetti.
- **Stack tecnico**: [src/content/stack.ts](src/content/stack.ts) — allinea alle tue competenze reali.
- **Testi UI e homepage**: [messages/it.json](messages/it.json) e [messages/en.json](messages/en.json) — namespace `metadata`, `home`, `about`. Se modifichi l'italiano, aggiorna anche l'inglese mantenendo la stessa struttura di chiavi.
- **CV**: sostituisci i file placeholder in `public/cv/cv-it.pdf` e `public/cv/cv-en.pdf` con i tuoi CV reali.
- **Email di contatto**: `CONTACT_EMAIL` in [src/app/[locale]/contact/page.tsx](<src/app/[locale]/contact/page.tsx>).
- **Immagini progetti**: aggiungi gli screenshot reali in `public/images/projects/` e aggiorna `coverImage` in `projects.ts`.

## Deploy su Vercel

1. Pusha il repository su GitHub/GitLab/Bitbucket.
2. Importa il progetto su [vercel.com/new](https://vercel.com/new) — Vercel rileva automaticamente Next.js, nessuna configurazione di build necessaria.
3. In **Project Settings → Environment Variables**, aggiungi le variabili elencate sopra (`NEXT_PUBLIC_SITE_URL` con il dominio definitivo, `NEXT_PUBLIC_FORM_ENDPOINT` con il tuo endpoint Formspree/Web3Forms).
4. Fai il deploy.

Prima del deploy, verifica in locale che tutto passi:

```bash
npm run lint
npx tsc --noEmit
npm run build
```

Dopo il deploy, testa manualmente `/it` e `/en` sull'URL di produzione e verifica che il redirect dalla root funzioni.

## Struttura del progetto

```
src/
├── app/[locale]/       # pagine (home, about, projects, projects/[slug], contact)
├── components/         # componenti riusabili
├── content/            # dati progetti e stack tecnico
├── i18n/                # config next-intl (routing, navigation, request)
├── lib/seo.ts           # helper per alternates/hreflang
├── types/               # tipi condivisi
└── proxy.ts              # gestisce redirect e prefisso lingua (rinominato da
                           # middleware.ts in Next.js 16, stessa funzione)
messages/
├── it.json              # stringhe UI in italiano (lingua di default)
└── en.json              # stringhe UI in inglese
```
