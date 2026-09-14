# Menu — src/ui/infrastructure/Menu.vue

Barre latérale. Bouton fixe pour toggle le chat (CloseIcon/ChatIcon), drawer avec Chat component.

## Props

Aucune.

## Events

Aucun.

## Slots

Aucun.

## État interne

- `open` ref `'chat' | null` — menu en cours d'ouverture.
- `opened` ref `'chat' | null` — menu ouvert (décalé du state ouverture pour transition).

## Dépendances

- Enfant : `Chat.vue`, `CloseIcon.vue`, `ChatIcon.vue`.

## Exemple d'usage

```vue
<Menu />
```

## Quand NE PAS l'utiliser

- Pour navigation multi-section : utiliser un composant navmenu dédié.
