# src/ui/components/ — Logique métier et composants complexes

Maj : 2026-09-14

## Contenu

- `Bingo/` — grille de bingo interactive                                  [ARCHITECTURE.md]
- `Chat/` — système de messagerie en temps réel

## Règles du dossier

- Chaque sous-dossier = domaine (Bingo, Chat).
- Composants complexes > 200 lignes : diviser en composants enfants.
- Pas de dépendances API directes (passer par des props).

## Points d'entrée

- `Bingo/Bingo-Table.vue` — racine grille
- `Chat/Chat.vue` — racine chat
