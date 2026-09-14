---
id: ADR-0001
titre: Vue 3 comme framework frontend
type: librairie
statut: acceptée
date: 2026-09-14
portee: repo
remplace: —
liens: []
---

# ADR-0001 — Vue 3 comme framework frontend

## Contexte

Application web interactive de bingo. Vue 3 offre une excellente DX, réactivité native, et composants .vue faciles à maintenir.

## Décision

Adopter Vue 3 comme framework de présentation principal pour toutes les vues.

## Comment l'appliquer

- Composants en `.vue` avec `<script setup>` (syntaxe moderne).
- État réactif via `ref()` / `reactive()`.
- Événements via `defineEmits()`.
- Props typées via `defineProps<T>()` (TypeScript).

## Quand NE PAS l'appliquer

- Pour de la logique métier pure : utiliser des `.ts` modules composables.

## Alternatives rejetées

- React : écosystème fragmente, setup plus lourd.
- Svelte : communauté plus petite.

## Conséquences

- Dépendance `vue@^3.5.18` en package.json.
- Plugin Vite `@vitejs/plugin-vue`.

## Références

- https://vuejs.org/
- Version : ^3.5.18
