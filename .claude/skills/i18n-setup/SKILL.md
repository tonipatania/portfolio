---
name: i18n-setup
description: Usa questa skill ogni volta che aggiungi testo visibile, nuove pagine, nuovi componenti, o modifichi il routing del portfolio. Copre setup e convenzioni per il multilingua italiano/inglese con next-intl.
---

# Multilingua con next-intl

## Struttura del progetto
```
/messages
  it.json
  en.json
/i18n
  routing.ts       # definisce le lingue supportate e il default
  request.ts       # config per next-intl
/middleware.ts      # gestisce redirect e prefisso lingua
/app/[locale]/...   # tutte le pagine vivono sotto [locale]
```

Lingue supportate: `it` (default), `en`.
Routing sempre con prefisso esplicito: `/it/...`, `/en/...`. Non usare il rilevamento automatico della lingua del browser come unico meccanismo: deve essere prevedibile e indicizzabile da Google.

## Regole per le chiavi di traduzione

- Namespace per sezione, non per pagina intera: `home.hero.title`, `projects.card.viewDemo`, `contact.form.submit`.
- Le chiavi in `it.json` e `en.json` devono avere **la stessa struttura e lo stesso ordine**. Se aggiungi una chiave in uno dei due file, aggiungila subito anche nell'altro.
- Mai testo hardcoded nei componenti. Usa sempre `useTranslations()` (client) o `getTranslations()` (server).
- Per testi lunghi (bio, descrizioni progetto) valuta se metterli in `messages/*.json` o in file di contenuto separati per lingua (es. `content/projects/nome-progetto.it.mdx`), se diventano troppo lunghi per un JSON.

## Workflow quando aggiungi contenuto nuovo

1. Scrivi il contenuto in italiano.
2. Aggiungi la chiave sia in `it.json` sia in `en.json` nello stesso commit (anche se la versione inglese è provvisoria/da rivedere).
3. Se la traduzione inglese non è stata fornita dall'utente, delega la traduzione al subagent `i18n-translator` invece di tradurre tu stesso nel contesto principale.
4. Dopo aver integrato la traduzione, verifica che non siano rimaste stringhe hardcoded nel componente (cerca testo in chiaro con grep prima di considerare il task concluso).

## SEO multilingua

- Ogni pagina deve avere `title` e `description` localizzati (usa `generateMetadata` per pagina).
- Aggiungi tag `hreflang` / `alternates.languages` in `generateMetadata` per collegare le versioni it/en della stessa pagina.
- Il `lang` dell'HTML deve corrispondere al locale attivo.

## Checklist prima di considerare una feature "fatta"

- [ ] `/it/...` e `/en/...` restituiscono contenuto diverso e corretto
- [ ] Nessuna stringa hardcoded rimasta nei componenti toccati
- [ ] Meta title/description localizzati presenti
- [ ] Lo switch lingua nell'header porta alla stessa pagina nell'altra lingua (non alla home)
