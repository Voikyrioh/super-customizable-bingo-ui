# Chat — src/ui/components/Chat/Chat.vue

Composant messagerie. Affiche l'historique des messages, champ de saisie, envoi au clic/Enter.

## Props

Aucune (état interne mockée).

## Events

Aucun.

## Slots

Aucun.

## État interne

- `messages` ref `ChatMessage[]` — historique (mockée avec messages de test).
- `messageInput` ref `HTMLInputElement` — champ de texte.

## Dépendances

- Icône : `SendIcon.vue`.
- Types : `src/ui/components/Chat/types.ts`.

## Exemple d'usage

```vue
<Chat />
```

## Quand NE PAS l'utiliser

- Pour un chat temps réel avec WebSocket : créer un composable dédié pour la connexion.
- Pour archivage persistent : ajouter une API backend.
