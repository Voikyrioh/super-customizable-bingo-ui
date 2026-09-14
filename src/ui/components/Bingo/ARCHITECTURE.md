# src/ui/components/Bingo/ — Grille de bingo

Maj : 2026-09-14

## Contenu

- `Bingo-Table.vue` — grille 5x5 ; gère l'état global (cases cochées), calcule taille des tampons.
- `Bingo-Case.vue` — une case de bingo ; émet événement `change` au clic.
- `types.ts` — types `BingoTable`, `BingoCase`, `BingoPosition`.

## Règles du dossier

- `BingoTable` = conteneur (ref state, watchers CSS).
- `BingoCase` = présentation (click handler, styles tampon random).
- Pas d'API directe : données mockées en props.

## Points d'entrée

- `Bingo-Table::import` — export racine pour utilisation dans Main.vue
