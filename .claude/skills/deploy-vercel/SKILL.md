---
name: deploy-vercel
description: Usa questa skill prima di ogni deploy su Vercel o quando l'utente chiede di preparare/pubblicare il sito. Copre checklist pre-deploy, variabili d'ambiente e verifica build.
---

# Checklist pre-deploy (Vercel)

## Prima di ogni deploy

1. **Build locale pulita**: esegui `npm run build` e verifica che non ci siano errori o warning critici prima di suggerire il push.
2. **Lint e type-check**: `npm run lint` e `tsc --noEmit` devono passare senza errori.
3. **Variabili d'ambiente**: verifica che tutte le variabili usate nel codice (`process.env.*`) siano documentate nel `.env.example` e configurate su Vercel (Project Settings → Environment Variables). Non committare mai `.env.local` o valori reali.
4. **Immagini**: verifica che le immagini usino `next/image` con dimensioni corrette, non file enormi non ottimizzati.
5. **Link rotti**: controlla che i link a demo live e repository GitHub nei progetti puntino a URL reali e raggiungibili.

## SEO e metadata

- `robots.txt` e `sitemap.xml` presenti (Next.js li genera automaticamente se configurati in `app/sitemap.ts` e `app/robots.ts`).
- Open Graph image presente per la condivisione social (almeno una immagine generica per il sito).
- Ogni pagina ha `title` e `description` univoci.

## Performance

- Verifica dimensione del bundle con `npm run build` (Next.js mostra le dimensioni per route): segnala route anomale sopra i 200kb di JS.
- Font caricati con `next/font`, non da CDN esterni non necessari.

## Dominio custom (se presente)

- DNS configurato correttamente su Vercel (record A/CNAME).
- Certificato SSL attivo (automatico su Vercel, ma verificare che non sia in stato "pending" da troppo tempo).

## Dopo il deploy

- Testa manualmente `/it` e `/en` sull'URL di produzione, non solo in locale.
- Verifica che il redirect dalla root (`/`) funzioni verso la lingua di default.
- Controlla la Lighthouse score (Performance, Accessibility, SEO) tramite Chrome DevTools o `vercel.com` insights, e segnala eventuali punteggi sotto 90.
