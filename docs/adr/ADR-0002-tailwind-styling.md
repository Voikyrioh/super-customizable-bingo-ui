---
id: ADR-0002
titre: Tailwind CSS pour le styling
type: librairie
statut: acceptée
date: 2026-09-14
portee: repo
remplace: —
liens: []
---

# ADR-0002 — Tailwind CSS pour le styling

## Contexte

Besoin d'un système de styling performant, maintenable, et sans dépendances CSS supplémentaires lourd.

## Décision

Adopter Tailwind CSS v4 pour tous les styles (via classes utilitaires).

## Comment l'appliquer

1. Utiliser les classes Tailwind dans les templates : `class="w-full h-3/4 flex border-solid"`.
2. Éviter les `<style>` scoped sauf pour des animations complexes.
3. Customisation via `tailwind.config.js` si besoin de tokens custom.

## Quand NE PAS l'appliquer

- Pour des animations complexes (keyframes) : utiliser `<style scoped>`.
- Pour des styles globaux : ajouter dans `tailwind.css`.

## Alternatives rejetées

- CSS-in-JS (Emotion, styled-components) : overhead runtime.
- Utility-last frameworks (BEM, SMACSS) : plus verbeux.

## Conséquences

- Dépendance `tailwindcss@^4.1.11`.
- Plugin Vite `@tailwindcss/vite@^4.1.11`.
- Fichier config : `tailwind.config.js`.

## Références

- https://tailwindcss.com/
- Version : ^4.1.11
