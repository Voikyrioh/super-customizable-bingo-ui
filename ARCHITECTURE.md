# Architecture — super-customizable-bingo-ui

Stack : Vue 3, Vite, TypeScript, Tailwind CSS · Style : atomic design · Entrée : `src/main.ts`  
Maj : 2026-09-14

## Vue d'ensemble

Interface de jeu bingo interactive. Vue 3 avec Tailwind CSS. Composants structurés en atomes/molécules/organismes. État mutable via `ref`, événements custom. Prêt pour intégration API (actuellement données mockées).

## Carte

```
src/
├── ui/
│   ├── components/        → logique métier (Bingo, Chat)                 [ARCHITECTURE.md]
│   ├── infrastructure/    → layout (Head, Main, Menu)
│   └── icons/             → SVG icons (SendIcon, CloseIcon, ChatIcon)
├── App.vue                → composant racine
├── main.ts                → point d'entrée Vue
└── vite-env.d.ts          → types Vite

docs/                       → INDEX.md (adr, business-rules, components, bugs)
