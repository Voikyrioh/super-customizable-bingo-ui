# BingoCase — src/ui/components/Bingo/Bingo-Case.vue

Case unique d'une grille de bingo. Affiche un nombre, se marque au clic avec un tampon aléatoire.

## Props

| Nom | Type | Requis | Défaut | Description |
|---|---|---|---|---|
| `pos` | `BingoPosition` | oui | — | Position {row, col} dans la grille |
| `data` | `BingoCase` | oui | — | Données {value, checked} |

## Events

| Nom | Payload | Description |
|---|---|---|
| `change` | `BingoPosition` | Émis au clic sur la case |

## Slots

Aucun.

## État interne

- `stampSize` (CSS var `--stamp-x`, `--stamp-y`) — offset aléatoire du tampon lors du marquage.

## Dépendances

Aucune (composant pur).

## Exemple d'usage

```vue
<BingoCase :pos="{row: 0, col: 0}" :data="{value: 42, checked: false}" @change="handleStamp" />
```

## Quand NE PAS l'utiliser

- Pour afficher une liste statique de nombres : utiliser une table HTML simple.
- Pour des animations complexes : utiliser une lib d'animation dédiée.
